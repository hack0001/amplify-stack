import React, { useEffect } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { TabContainer } from "../../tabs/tabContainer";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import SnackBar from "../../snackBar/snackBar";
import { styles } from "./styles/useStyles";
import { textFieldTypes, INITIAL_STATE } from "./initialState";
import ProfilePic from "../../profilePic/profilePic";

const UserSettings = props => {
  const { classes, theme } = props;

  const {
    handleSubmit,
    handleChange,
    userValues,
    setUserValues,
    snackBar,
    setSnackBar,
    handleImageChange
  } = useFormValidation(INITIAL_STATE, validateAuth);

  useEffect(() => {
    handleUser();
  }, []);

  const clean = values => {
    Object.keys(values).forEach(key => {
      if (values[key] === null || values[key] === undefined) {
        values[key] = "";
      }
    });
  };
  const handleUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    try {
      const { data } = await API.graphql(
        graphqlOperation(`query listUser{
		listUsers(filter: {
			username:{eq:"${authUser.username}"}
			}) {
				items{
					id
					userId
					alias
					username
					phoneNumber
					lastLoggedIn
					facebookProfile
					twitterProfile
					instagramProfile
					imageLink
					numberPosts
					siteName
					createdAt
					updatedAt	
					profilePic	
					chatUser{
						id
					}
				}
			}	
		}`)
      );
      const indivUser = data.listUsers.items[0];
      clean(indivUser);
      setUserValues({
        ...userValues,
        id: indivUser.id,
        userId: indivUser.userId,
        name: indivUser.alias,
        username: indivUser.username,
        phone: indivUser.phoneNumber,
        lastLogged: indivUser.lastLoggedIn,
        facebookLink: indivUser.facebookProfile,
        twitterLink: indivUser.twitterProfile,
        instagramLink: indivUser.instagramProfile,
        imageLink: indivUser.imageLink,
        numberPosts: indivUser.numberPosts,
        website: indivUser.siteName,
        createdAt: indivUser.createdAt,
        updatedAt: indivUser.updatedAt,
        profilePic: indivUser.profilePic,
        chatUser: indivUser.chatUser.id
      });
    } catch (err) {
      console.log("Error occurred,", err);
    }
  };

  const textFields = ({ label, name }, index) => {
    return (
      <TextField
        key={index}
        autoComplete="off"
        label={`${label}`}
        className={classes.textField}
        value={userValues[name]}
        onChange={handleChange}
        margin="normal"
        name={`${name}`}
      />
    );
  };

  const image = ({ label, name }, index) => {
    return (
      <ProfilePic
        s3Directory={"profileImages"}
        userId={userValues.id}
        handleChange={handleImageChange}
        itemName={name}
        imageUrl={userValues[name]}
      />
    );
  };

  return (
    <div className={classes.root}>
      <TabContainer dir={theme.direction}>
        <form onSubmit={handleSubmit}>
          {textFieldTypes.map((field, index) => {
            switch (field.type) {
              case "text":
                return textFields(field, index);
              case "image":
                return image(field, index);
              default:
                return <div />;
            }
          })}
          <div style={{ padding: 8 * 3, margin: "10px 1px 5px 1px" }}>
            <Button
              variant="contained"
              color="primary"
              align="right"
              className={classes.button}
              type="submit"
            >
              <SaveIcon className={classes.rightIcon} />
              Save
            </Button>
          </div>
        </form>
      </TabContainer>
      <SnackBar open={snackBar} closeFunc={setSnackBar} classes={classes} />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(UserSettings);
