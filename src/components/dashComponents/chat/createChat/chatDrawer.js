import React, { Fragment, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AuthContext from "../../../../context/authContext";
import TextField from "@material-ui/core/TextField";
import { TabContainer } from "../../../tabs/tabContainer";
import { styles } from "../styles/chatStyles";
import UsersDialog from "../../../dialog/addUserChat";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import { createConversation, createConvoLink } from "../graphql/chatGraphql";
import { Route } from "react-router-dom";
const textFieldTypes = [
  {
    label: "Chat Group Name",
    type: "chatName"
  },
  {
    label: "Subject",
    type: "subject"
  }
];

const ChatDrawer = props => {
  const [userDialog, setUserDialog] = useState(false);
  const [chatDetails, setChatDetails] = useState({
    chatName: "",
    subject: "",
    users: []
  });

  const { classes, createChat, handleCloseChat, push } = props;
  const handleChange = e => {
    setChatDetails({
      ...chatDetails,
      [e.target.name]: e.target.value
    });
  };

  const createConvoUserLinks = async (convoUserId, convoConvoId) => {
    let memberConvoLink = {
      convoLinkUserId: convoUserId,
      convoLinkConversationId: convoConvoId
    };
    await API.graphql(
      graphqlOperation(createConvoLink, { input: memberConvoLink })
    );

    return;
  };

  const handleSubmit = async context => {
    if (chatDetails.users.length > 0) {
      let createNewChat = {
        name: chatDetails.chatName,
        subject: chatDetails.subject,
        members: chatDetails.users.map(user => user.username),
        conversationCreator: context.username
      };

      createNewChat.members.push(context.username);
      try {
        const newConversation = await API.graphql(
          graphqlOperation(createConversation, { input: createNewChat })
        );

        const newConvoLinkId = newConversation.data.createConversation.id;
        //map over users array and create a ConvoLink! for each one - need conversationId and UserId
        chatDetails.users.map(member => {
          return createConvoUserLinks(member.id, newConvoLinkId);
        });
        //Create a convoLink for the user making the chat room
        createConvoUserLinks(context.chatUserId, newConvoLinkId);

        push(`/discussion`);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const handleAddUsers = e => {
    setUserDialog(true);
  };

  const textFields = ({ label, type }, index) => {
    return (
      <TextField
        className={classes.textField}
        key={index}
        label={`${label}`}
        value={chatDetails[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <div>
            <Drawer
              anchor="right"
              open={createChat}
              onClose={e => handleCloseChat()}
            >
              <div className={classes.drawer}>
                <TabContainer dir={"left"}>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      handleSubmit(context);
                      handleCloseChat();
                    }}
                  >
                    {textFieldTypes.map((field, index) => {
                      return textFields(field, index);
                    })}
                    <div
                      style={{
                        padding: 8 * 3,
                        margin: "10px 1px 5px 1px"
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        align="right"
                        className={classes.button}
                        type="submit"
                        style={{ paddingLeft: 15, paddingRight: 10 }}
                      >
                        <SaveIcon className={classes.rightIcon} />
                        Create
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        align="right"
                        className={classes.userButton}
                        onClick={handleAddUsers}
                      >
                        <PersonIcon className={classes.rightIcon} />
                        Add Users
                      </Button>
                    </div>
                  </form>
                </TabContainer>
                <List className={classes.chatDrawer}>
                  {chatDetails.users.map(user => {
                    return (
                      <Fragment key={user.username}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt={`${user.username}`}>
                              <PersonIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${user.alias}`}
                            secondary={
                              <Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.chatInline}
                                  color="textPrimary"
                                >
                                  Email:{`${user.username}`}
                                </Typography>
                              </Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </Fragment>
                    );
                  })}
                </List>
              </div>
            </Drawer>
            <UsersDialog
              openDialog={userDialog}
              closeFunc={setUserDialog}
              chatDetails={chatDetails}
              setChatDetails={setChatDetails}
              chatCreator={context}
            />
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default withStyles(styles)(ChatDrawer);
