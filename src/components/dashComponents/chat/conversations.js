import React, { Fragment, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { styles } from "./styles/chatStyles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ChatIcon from "@material-ui/icons/Chat";
import { API, graphqlOperation } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ClearIcon from "@material-ui/icons/Clear";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { getConvo, archiveConvo, updateConvo } from "./graphql/chatGraphql";
import Dialog from "../../dialog/deleteChatDialog";
import LeaveDialog from "../../dialog/leaveChatDialog";

const Conversations = props => {
  const {
    classes,
    chatUser,
    handleConvoId,
    handleConvoUserId,
    push,
    handleClearConvo
  } = props;
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [leaveDialogOpen, setLeaveDialogOpen] = useState(false);
  const [convoName, setConvoName] = useState("");
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    handleConversations();
  }, []);

  const handleConversations = async () => {
    setLoading(true);
    try {
      const { data } = await API.graphql(
        graphqlOperation(`query ListChatUserConversations{
		listChatUsers(filter: {
			id:{eq:"${chatUser.chatUserId}"}
			}) {
			items{
				id 
			username
			creator 
			alias
			conversations{
				items{
				id
				convoLinkUserId
				conversation{
					id
					subject
					name
					members
					conversationCreator
					}
					}
				}      
				}
			}
		}`)
      );
      setLoading(false);
      setConversations(data.listChatUsers.items[0].conversations.items);
    } catch (err) {
      console.log("Error Getting Conversations", err);
      setLoading(false);
    }
  };

  const leaveChat = async convoId => {
    setLeaveDialogOpen(false);
    try {
      const { data } = await API.graphql(
        graphqlOperation(getConvo, {
          input: convoId
        })
      );
      const updateMembers = data.getConversation.members.filter(
        account => account !== chatUser.userId
      );
      await API.graphql(
        graphqlOperation(updateConvo, {
          input: {
            id: currentId,
            members: updateMembers
          }
        })
      );
      handleClearConvo();
      push("/discussion");
    } catch (err) {
      console.log("Error Getting Conversations", err);
    }
  };

  const deleteConversation = async convoId => {
    setDialogOpen(false);
    try {
      const { data } = await API.graphql(
        graphqlOperation(getConvo, {
          input: convoId
        })
      );
      const convoLinkUpdate = data.getConversation.associated.items;
      await convoLinkUpdate.map(convoLink => {
        const archive = API.graphql(
          graphqlOperation(archiveConvo, {
            input: {
              id: convoLink.id,
              convoLinkUserId: "Loverman"
            }
          })
        );
        return archive;
      });
      handleClearConvo();
      push("/discussion");
    } catch (err) {
      console.log("Error Getting Conversations", err);
    }
  };

  if (loading || !conversations) return <LinearProgress />;
  return (
    <div className={classes.convoBlock}>
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Conversations
        </Typography>
        <List className={classes.list}>
          {conversations.map(convo => {
            if (convo.conversation.members.includes(chatUser.username)) {
              const indivConvo = convo.conversation;
              return (
                <Fragment key={convo.id}>
                  <ListItem
                    button
                    onClick={e => {
                      handleConvoId(convo.conversation.id);
                      handleConvoUserId(convo.convoLinkUserId);
                    }}
                    className={classes.listItem}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture">
                        <ChatIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={indivConvo.name}
                      secondary={indivConvo.subject}
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="Leave Chat" placement="top">
                        <IconButton
                          className={classes.button}
                          aria-label="Clear"
                          color="primary"
                          onClick={e => {
                            setConvoName(indivConvo.name);
                            setCurrentId(convo.conversation.id);
                            setLeaveDialogOpen(true);
                          }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </Tooltip>
                      {chatUser.admin && (
                        <Tooltip title="Delete Chat" placement="top">
                          <IconButton
                            className={classes.button}
                            aria-label="Delete"
                            color="secondary"
                            onClick={e => {
                              setConvoName(indivConvo.name);
                              setCurrentId(convo.conversation.id);
                              setDialogOpen(true);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Fragment>
              );
            } else {
              return <div key={convo.id} />;
            }
          })}
        </List>
      </Paper>
      <LeaveDialog
        openDialog={leaveDialogOpen}
        convoName={convoName}
        leaveFunc={e => leaveChat(currentId)}
        closeFunc={e => setLeaveDialogOpen(false)}
      />
      <Dialog
        openDialog={dialogOpen}
        convoName={convoName}
        deleteFunc={e => deleteConversation(currentId)}
        closeFunc={e => setDialogOpen(false)}
      />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Conversations);
