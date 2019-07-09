import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import PersonIcon from "@material-ui/icons/Person";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContainer } from "../../../tabs/tabContainer";
import { contentStyles } from "../styles/userStyles";
import Avatar from "@material-ui/core/Avatar";
import {
  userDetails,
  deleteUser,
  deleteChatUser,
  createChatUser,
  updateUser
} from "../graphql/userGraphql";
import useFormValidation from "../form/useFormValidation";
import validateAuth from "../form/validateForm";
import DialogComponent from "../../../dialog/deleteDialog";
import SnackBar from "../../../snackBar/snackBar";
import AuthContext from "../../../../context/authContext";
const heads = ["Site Details", "Articles", "Ideas", "Quiz", "SlideShows"];

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
  description: "",
  userChatUserId: ""
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

const UserContent = props => {
  const { classes, theme } = props;
  const [value, setValue] = useState(0);
  const [toDelete, setDelete] = useState(false);
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

  const cleanChatUser = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null ||
        values[key] === "" ||
        values[key] === undefined) &&
        delete values[key];
    });
  };

  const handleUser = async () => {
    try {
      const { data } = await API.graphql(
        graphqlOperation(userDetails, { id: props.match.params.id })
      );

      let indivUserValues = data.getUser;
      clean(indivUserValues);

      setUserValues({
        ...userValues,
        id: indivUserValues.id,
        userId: indivUserValues.userId,
        name: indivUserValues.alias,
        username: indivUserValues.username,
        phone: indivUserValues.phoneNumber,
        lastLogged: indivUserValues.lastLoggedIn,
        facebookLink: indivUserValues.facebookProfile,
        twitterLink: indivUserValues.twitterProfile,
        instagramLink: indivUserValues.instagramProfile,
        imageLink: indivUserValues.imageLink,
        numberPosts: indivUserValues.numberPosts,
        website: indivUserValues.siteName,
        createdAt: indivUserValues.createdAt,
        updatedAt: indivUserValues.updatedAt,
        chatUser: indivUserValues.chatUser
      });
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  const handleChangeTab = (event, value) => {
    setValue(value);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const addChatUser = async context => {
    try {
      let newChatUser = {
        alias: userValues.name,
        username: userValues.username,
        creator: context.username,
        chatUserUserId: userValues.id
      };

      cleanChatUser(newChatUser);

      if (userValues.id) {
        const chatUser = await API.graphql(
          graphqlOperation(createChatUser, { input: newChatUser })
        );

        let updateChatUser = {
          id: userValues.id,
          userChatUserId: chatUser.data.createChatUser.id
        };
        await API.graphql(
          graphqlOperation(updateUser, { input: updateChatUser })
        );
        props.history.push("/users");
      }
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  const removeChatUser = async () => {
    try {
      if (userValues.chatUser.id) {
        await API.graphql(
          graphqlOperation(deleteChatUser, {
            input: { id: userValues.chatUser.id }
          })
        );
        props.history.push("/users");
      }
    } catch (err) {
      console.log("Error occurred", err);
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
      <Link to={"/users"} style={{ textDecoration: "none", marginBottom: 20 }}>
        <Button variant="contained" color="primary" className={classes.button}>
          <ArrowBack className={classes.rightIcon} />
          Back To Users
        </Button>
      </Link>
      <AppBar style={{ marginTop: 25 }} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {heads.map(header => {
            return <Tab key={header} label={`${header}`} />;
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <Avatar
            className={classes.avatar}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          >
            <PersonIcon style={{ margin: 0, width: 80, height: 80 }} />
          </Avatar>
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
                <SaveIcon
                  className={classes.rightIcon}
                  style={{ marginRight: 7 }}
                />
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.delete}
                onClick={e => setDelete(true)}
              >
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </Button>
              {!userValues.chatUser && (
                <AuthContext.Consumer>
                  {context => {
                    return (
                      <Button
                        variant="contained"
                        color="secondary"
                        align="right"
                        className={classes.addChat}
                        onClick={e => addChatUser(context)}
                      >
                        <PersonIcon className={classes.rightIcon} />
                        Add to Chat
                      </Button>
                    );
                  }}
                </AuthContext.Consumer>
              )}
              {userValues.chatUser && (
                <Button
                  variant="contained"
                  color="secondary"
                  align="right"
                  className={classes.addChat}
                  onClick={e => removeChatUser()}
                >
                  <PersonIcon className={classes.rightIcon} />
                  Remove From Chat
                </Button>
              )}
            </div>
          </form>
        </TabContainer>
        <TabContainer dir={theme.direction}>Articles Here</TabContainer>
        <TabContainer dir={theme.direction}>Ideas Here</TabContainer>
        <TabContainer dir={theme.direction}>Quiz Here</TabContainer>
        <TabContainer dir={theme.direction}>SlideShow Here</TabContainer>
      </SwipeableViews>
      <SnackBar open={snackBar} closeFunc={setSnackBar} classes={classes} />
      <DialogComponent
        openDialog={toDelete}
        closeFunc={setDelete}
        values={userValues}
        type={"User"}
        deleteFunc={async e => {
          try {
            await API.graphql(
              graphqlOperation(deleteUser, {
                input: { id: userValues.id }
              })
            );
            if (userValues.chatUser.id) {
              await API.graphql(
                graphqlOperation(deleteChatUser, {
                  input: { id: userValues.chatUser.id }
                })
              );
            }
            setDelete(false);
            props.history.push("/users");
          } catch (err) {
            console.log("Error occurred", err);
          }
        }}
      />
    </div>
  );
};

export default withStyles(contentStyles, { withTheme: true })(UserContent);
