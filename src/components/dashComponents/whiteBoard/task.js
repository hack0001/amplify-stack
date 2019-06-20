import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { taskStylesSubs } from "./styles/taskStyles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TaskList from "./taskList";
import CreateTask from "./createTask";
import { TabContainer } from "../../tabs/tabContainer";
import AuthContext from "../../../context/authContext";

class WhiteBoard extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  static contextType = AuthContext;

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Task" />
            <Tab label="Create" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TaskList context={this.context} />
          <CreateTask push={this.props.history.push} context={this.context} />
        </SwipeableViews>
      </div>
    );
  }
}

WhiteBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

export default withStyles(taskStylesSubs, { withTheme: true })(WhiteBoard);
