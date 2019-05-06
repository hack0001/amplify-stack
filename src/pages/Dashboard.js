import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/dashBoard/navBar";
import SideMenu from "../components/dashBoard/drawer";
import AuthContext from "../context/authContext";
import styles from "../styles/Dashboard";
import { Route } from "react-router-dom";
import { Home, WhiteBoard, User } from "../components/dashComponents";
import {
  Article,
  Quiz,
  SlideShow
} from "../components/dashComponents/create/media";

class Dashboard extends React.Component {
  state = {
    isLogin: true,
    open: false,
    currentComponent: null,
    currentTabName: "Dashboard"
  };

  static contextType = AuthContext;

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSignOut = () => {
    this.context.logout();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar
          {...this.state}
          handleDrawer={this.handleDrawer}
          classes={classes}
        />
        <Route
          render={({ location, history }) => (
            <SideMenu
              {...this.state}
              handleCurrentTab={this.handleCurrentTab}
              handleDrawer={this.handleDrawerClose}
              classes={classes}
              location={location}
              history={history}
            />
          )}
        />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {this.context.logOutError ? (
            <Typography
              component="h4"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {this.context.logOutError}
            </Typography>
          ) : (
            ""
          )}

          <Route path="/home" component={props => <Home />} />
          <Route path="/whiteboard" component={props => <WhiteBoard />} />
          <Route path="/create/article" component={props => <Article />} />
          <Route path="/create/quiz" component={props => <Quiz />} />
          <Route path="/create/slideshow" component={props => <SlideShow />} />
          <Route path="/user" component={props => <User />} />
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
