import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import RadioIcon from "@material-ui/icons/RadioButtonChecked";
import Delete from "@material-ui/icons/Delete";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles } from "@material-ui/core/styles";

const IdeaList = ({ items, classes }) => {
  return items.map((idea, number) => {
    const alertColor = idea.status === "APPROVED" ? "green" : "red";
    return (
      <Paper className={classes.root} elevation={1} key={number}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              {idea.name}
            </Typography>
          </Grid>
          <Grid item>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemIcon>
              <RadioIcon style={{ color: alertColor }} />
            </ListItemIcon>
          </Grid>
        </Grid>
        <Typography color="textSecondary">{idea.description}</Typography>
        <Divider variant="middle" />
      </Paper>
    );
  });
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "15px",
    width: "100%",
    maxWidth: "75%",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  title: {
    marginBottom: "20px"
  },
  linear: {
    flexGrow: 1
  },
  status: {
    color: "red"
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`
  }
});
export default withStyles(styles)(IdeaList);
