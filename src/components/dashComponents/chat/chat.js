import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { TabContainer } from "../../tabs/tabContainer";
import { styles } from "./styles/chatStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Conversations from "./conversations";
import Conversation from "./conversation";
import ChatDrawer from "./createChat/chatDrawer";
import AuthContext from "../../../context/authContext";

class Chat extends Component {
  state = {
    createChat: false,
    convoId: "",
    convoUserId: ""
  };

  handleCloseChat = e => {
    this.setState({ createChat: false });
  };


  static contextType = AuthContext;
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.chatOverview}>
          <Conversations
            chatUser={this.context}
			handleClearConvo={e => this.setState({ convoId: "", convoUserId: "" })}
            handleConvoId={value => this.setState({ convoId: value })}
            handleConvoUserId={value => this.setState({ convoUserId: value })}
            push={this.props.history.push}
          />

          <Conversation
            conversationId={this.state.convoId}
            conversationUserId={this.state.convoUserId}
            chatUser={this.context}
            {...this.props}
          />
        </div>
        <ChatDrawer
          push={this.props.history.push}
          createChat={this.state.createChat}
          handleCloseChat={this.handleCloseChat}
        />
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Tooltip title="New Chat" placement="top">
              <Fab
                color="secondary"
                aria-label="Add"
                className={classes.fabButton}
                onClick={e => {
                  this.setState({ createChat: true });
                }}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Chat);

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};
