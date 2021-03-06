import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function TabContainer(props) {
  return (
    <Paper style={{ marginTop: "25px" }}>
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    </Paper>
  );
}

export default TabContainer;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
