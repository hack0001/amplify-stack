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

const INITIAL_STATE = {
  id: "",
  articles: [],
  slideShows: [],
  userId: "",
  ideas: [],
  quiz: [],
  username: "",
  phone: "",
  name: "",
  lastLogged: "",
  facebookLink: "",
  twitterLink: "",
  instagramLink: "",
  imageLink: "",
  numberPosts: "",
  website: "",
  createdAt: "",
  updatedAt: "",
  type: "",
  description: ""
};

const textFieldTypes = [
  {
    label: "Name",
    type: "name"
  },
  {
    label: "Username",
    type: "username"
  },
  {
    label: "Phone Number",
    type: "phone"
  },
  {
    label: "Last Logged In",
    type: "lastLogged"
  },
  {
    label: "Facebook Profile Link",
    type: "facebookLink"
  },
  {
    label: "Twitter Profile Link",
    type: "twitterLink"
  },
  {
    label: "Instagram Profile Link",
    type: "instagramLink"
  },
  {
    label: "Image Link",
    type: "imageLink"
  },
  {
    label: "Number of Posts",
    type: "numberPosts"
  },
  {
    label: "Website",
    type: "website"
  }
];

const UserSettings = props => {
  const { classes, theme } = props;

  const {
    handleSubmit,
    handleChange,
    userValues,
    setUserValues,
    snackBar,
    setSnackBar
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
        updatedAt: indivUser.updatedAt
      });
    } catch (err) {
      console.log("Error occurred,", err);
    }
  };

  const textFields = ({ label, type }, index) => {
    return (
      <TextField
        key={index}
        label={`${label}`}
        className={classes.textField}
        value={userValues[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  return (
    <div className={classes.root}>
      <TabContainer dir={theme.direction}>
        <form onSubmit={handleSubmit}>
          {textFieldTypes.map((field, index) => {
            return textFields(field, index);
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
