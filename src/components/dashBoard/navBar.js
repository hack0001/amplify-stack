import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "../../styles/Dashboard";
import AuthContext from "../../context/authContext";
import NetworkStatus from "../dashComponents/networkStatus/networkStatus";
const Navbar = ({ open, classes, handleDrawer }) => {
  return (
    <AuthContext.Consumer>
      {({ currentTabName }) => (
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawer}
              className={classNames(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {currentTabName}
            </Typography>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <NetworkStatus />
          </Toolbar>
        </AppBar>
      )}
    </AuthContext.Consumer>
  );
};
export default withStyles(styles)(Navbar);
