import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Collapse from "@material-ui/core/Collapse";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/Dashboard";
import AuthContext from "../../context/authContext";

class MenuItems extends Component {
  state = { create: false };

  handleClick = label => {
    this.setState({
      [label]: !this.state[label]
    });
  };

  getListItems = (data, context) => {
    const { classes } = this.props;

    return data.map(({ label, Icon, subComponents }) => {
      if (subComponents) {
        const newLabel = label.toLowerCase();
        return (
          <Fragment key={label}>
            <ListItem
              button
              onClick={this.handleClick.bind(this, `${newLabel}`)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={`${label}`} />
            </ListItem>
            {subComponents.map(({ subLabel, SubIcon }) => {
              return (
                <Link
                  className={classes.link}
                  to={`/${newLabel}/${subLabel.toLowerCase()}`}
                  key={subLabel}
                  onClick={context.handleCurrentTab.bind(this, subLabel)}
                >
                  <Collapse
                    in={this.state[newLabel]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <SubIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={subLabel} />
                      </ListItem>
                    </List>
                  </Collapse>
                </Link>
              );
            })}
          </Fragment>
        );
      } else if (label === "SignOut") {
        return (
          <Fragment key={label}>
            <AuthContext.Consumer>
              {({ logout }) => {
                return (
                  <ListItem
                    button
                    onClick={() => {
                      context.logout();
                    }}
                  >
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={`${label}`} />
                  </ListItem>
                );
              }}
            </AuthContext.Consumer>
          </Fragment>
        );
      } else {
        return (
          <Fragment key={label}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/${label.toLowerCase()}`}
              key={label}
              onClick={context.handleCurrentTab.bind(this, label)}
            >
              <ListItem button key={label}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={`${label}`} />
              </ListItem>
            </Link>
          </Fragment>
        );
      }
    });
  };

  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <AuthContext.Consumer>
          {context => {
            return <Fragment>{this.getListItems(data, context)}</Fragment>;
          }}
        </AuthContext.Consumer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MenuItems);
