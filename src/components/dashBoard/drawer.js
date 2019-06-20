import React from "react";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import { sideMenu, sideMenuAdmin, subMenu, subMenuAdmin } from "./menuList";
import MenuItems from "./menuItems";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/Dashboard";
import AuthContext from "../../context/authContext";

const SideMenu = ({ open, classes, handleDrawer, location, history }) => {
  return (
    <AuthContext.Consumer>
      {({ admin }) => (
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !open && classes.drawerPaperClose
            )
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <MenuItems data={admin ? sideMenuAdmin : sideMenu} />
          </List>
          <Divider />
          <List>
            <ListSubheader inset>User Settings</ListSubheader>
            <MenuItems data={admin ? subMenuAdmin : subMenu} />
          </List>
        </Drawer>
      )}
    </AuthContext.Consumer>
  );
};
export default withStyles(styles)(SideMenu);
