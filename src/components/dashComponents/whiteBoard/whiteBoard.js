import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { listProjects } from "../../../graphql/queries";
import { subscribeToAll } from "../../../graphql/subscriptions";
import { createIdea, updateIdea, deleteIdea } from "../../../graphql/mutations";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import RenderList from "./ideaItems";

class WhiteBoard extends Component {
  onNewIdea = (prevData, newData) => {
    let updatedQuery = Object.assign({}, prevData);

    if (newData.onCreateIdea) {
      updatedQuery.listIdeas.items = prevData.listIdeas.items.concat(
        newData.onCreateIdea
      );
    } else if (newData.onUpdateIdea) {
      const updateIndex = prevData.listIdeas.items.findIndex(
        obj => obj.id === newData.onUpdateIdea.id
      );
      updatedQuery.listIdeas.items[updateIndex] = newData.onUpdateIdea;
    } else if (newData.onDeleteIdea) {
      const deleteIndex = prevData.listIdeas.items.findIndex(
        obj => obj.id === newData.onDeleteIdea.id
      );
      updatedQuery.listIdeas.items.splice(deleteIndex, 1);
    }
    return updatedQuery;
  };

  render() {
    // subscription={graphqlOperation(subscribeToAll)}
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography className={classes.title} variant="h4" component="h1">
          Ideas
        </Typography>
        <Connect
          query={graphqlOperation(listProjects)}
          onSubscriptionMsg={this.onNewIdea}
        >
          {({ data, loading, errors }) => {
            if (loading) return <LinearProgress />;
            if (!data.listIdeas) return <LinearProgress />;

            return <RenderList items={data.listIdeas.items} />;
          }}
        </Connect>
      </Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "15px"
  },
  title: {
    marginBottom: "20px"
  },
  linear: {
    flexGrow: 1
  }
});

WhiteBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WhiteBoard);
