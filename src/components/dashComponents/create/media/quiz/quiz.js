import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import _ from "lodash";

function TabContainer(props) {
  return (
    <Paper style={{ marginTop: "25px" }}>
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    </Paper>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Quiz extends Component {
  state = {
    value: 0,
    quizQuestions: 10
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleQuestionsChange = event => {
    this.setState({ quizQuestions: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const questionsArray = _.range(this.state.quizQuestions);
    const questionsTitle = _.reduce(
      questionsArray,
      (running, value) => {
        const amendedValue = value + 1;
        running.push({
          title: `Question ${amendedValue}`
        });
        return running;
      },
      []
    );

    return (
      <div className={classes.root}>
        <form className={classes.root} autoComplete="off">
          <Paper>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-helper">Age</InputLabel>
              <Select
                value={this.state.quizQuestions}
                onChange={this.handleQuestionsChange}
                input={<Input name="age" id="age-helper" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Number of Questions</FormHelperText>
            </FormControl>
          </Paper>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {questionsTitle.map(tab => {
                return <Tab label={`${tab.title}`} />;
              })}
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
          {value === 5 && <TabContainer>Item Six</TabContainer>}
          {value === 6 && <TabContainer>Item Seven</TabContainer>}
        </form>
      </div>
    );
  }
}

Quiz.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Quiz);
