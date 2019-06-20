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

const INITIAL_STATE = {
  name: "",
  username: "",
  phone: "",
  lastLogged: "",
  facebookLink: "",
  twitterLink: "",
  instagramLink: "",
  imageLink: "",
  numberPosts: "",
  website: "",
  createChatUser: false
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
  },
  {
    label: "Create Chat User",
    type: "createChatUser"
  }
];

const CreateUser = props => {
  const { classes, theme, push } = props;
  const [error, setError] = useState(false);
  const [addChatUser, setAddChatUser] = useState(false);
  const { handleChange, userValues } = useFormValidation(
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
      imageLink: userValues.imageLink
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
                  if (field.type === "createChatUser")
                    return checkBox(field, index);
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
