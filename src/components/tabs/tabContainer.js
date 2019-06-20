import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const TabContainer = ({ children, dir }) => {
  return (
    <Paper
      component="div"
      dir={dir}
      style={{ padding: 8 * 3, margin: "10px 1px 5px 1px" }}
    >
      {children}
    </Paper>
  );
};

const TypoContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
};

export { TabContainer, TypoContainer };
