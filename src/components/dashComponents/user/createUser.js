import React, { Fragment, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createStyles } from "./styles/userStyles";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import { createUser, createChatUser, updateUser } from "./graphql/userGraphql";
import { TabContainer } from "../../tabs/tabContainer";
import Dialog from "../../dialog/usernameDialog";
import AuthContext from "../../../context/authContext";
import ProfilePic from "../../profilePic/profilePic";
import { INITIAL_STATE, textFieldTypes } from "./initialState/initialState";

const CreateUser = props => {
  const { classes, theme, push } = props;
  const [error, setError] = useState(false);
  const [addChatUser, setAddChatUser] = useState(false);
  const { handleChange, userValues, handleImageChange } = useFormValidation(
    INITIAL_STATE,
    validateAuth
  );

  const clean = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null || values[key] === "") && delete values[key];
    });
  };

  const cleanChatUser = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null ||
        values[key] === "" ||
        values[key] === undefined) &&
        delete values[key];
    });
  };

  const handleAddUser = async context => {
    let newUser = {
      id: userValues.id,
      twitterProfile: userValues.twitterLink,
      facebookProfile: userValues.facebookLink,
      instagramProfile: userValues.instagramLink,
      siteName: userValues.website,
      username: userValues.username,
      userId: userValues.username,
      alias: userValues.name,
      numberPosts: userValues.numberPosts ? userValues.numberPosts : 0,
      updatedAt: userValues.updatedAt,
      createdAt: userValues.createdAt,
      lastLoggedIn: userValues.lastLogged,
      phoneNumber: userValues.phone,
      imageLink: userValues.imageLink,
      profilePic: userValues.profilePic
    };
    clean(newUser);

    try {
      await Auth.signUp({
        username: newUser.username,
        password: "Password1@",
        attributes: {
          email: newUser.username
        }
      });

      const createdUser = await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );

      //If Chat User Box checked add Chat User too and then reupdate original User
      if (addChatUser) {
        let newChatUser = {
          alias: userValues.name,
          username: userValues.username,
          creator: context.username,
          profilePic: userValues.profilePic,
          chatUserUserId: createdUser.data.createUser.id
        };

        cleanChatUser(newChatUser);

        const chatUser = await API.graphql(
          graphqlOperation(createChatUser, { input: newChatUser })
        );

        let updateChatUser = {
          id: createdUser.data.createUser.id,
          userChatUserId: chatUser.data.createChatUser.id
        };

        await API.graphql(
          graphqlOperation(updateUser, { input: updateChatUser })
        );
      }

      push("/users");
    } catch (err) {
      console.log("Error", err);
      if (err.code === "UsernameExistsException") {
        setError(true);
      }
    }
  };

  const textFields = ({ label, name }, index) => {
    return (
      <TextField
        key={index}
        label={`${label}`}
        autoComplete="off"
        className={classes.textField}
        value={userValues[name]}
        onChange={handleChange}
        margin="normal"
        name={`${name}`}
      />
    );
  };

  const handleCheckChange = event => {
    setAddChatUser(!addChatUser);
  };

  const checkBox = ({ label, type }, index) => {
    return (
      <FormControlLabel
        key={index}
        name={`${type}`}
        label={`${label}`}
        onChange={handleCheckChange}
        className={classes.textField}
        control={<Checkbox color="primary" />}
        labelPlacement="end"
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
    <AuthContext.Consumer>
      {context => {
        return (
          <Fragment>
            <TabContainer dir={theme.direction}>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleAddUser(context);
                }}
              >
                {textFieldTypes.map((field, index) => {
                  switch (field.type) {
                    case "text":
                      return textFields(field, index);
                    case "image":
                      return image(field, index);
                    case "createChatUser":
                      return checkBox(field, index);
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
                    Create
                  </Button>
                </div>
              </form>
            </TabContainer>
            <Dialog openDialog={error} closeFunc={setError} />
          </Fragment>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default withStyles(createStyles, { withTheme: true })(CreateUser);
