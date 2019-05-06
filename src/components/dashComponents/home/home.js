import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import SimpleTable from "../simpleTable";
import classes from "../simpleTable";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h4" gutterBottom component="h2">
          Orders
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          Products
        </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
        </div>
      </Fragment>
    );
  }
}

export default Home;
