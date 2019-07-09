import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Questions from "./questions/questions";
import QuizDetails from "./quizDetails/quizDetails";
import { quizStyles } from "./styles/quizStyles";
import SwipeableViews from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Delete from "@material-ui/icons/Delete";
import {
  INITIAL_QUIZ_DETAILS,
  INITIAL_QUESTIONS,
  INITIAL_QUESTIONS_STATE,
  OPENING_QUIZ_STATE,
  CLOSING_QUIZ_STATE
} from "./initialState/initialState";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import _ from "lodash";
import SimpleStorage, { clearStorage } from "react-simple-storage";
import ReduceDialog from "../dialog/reduceQuestions";
import ClearDialog from "../dialog/clearValues";

class Quiz extends Component {
  constructor(props) {
    super(props);

    const questionsState = _.range(5).map((val, index) => {
      return { ...INITIAL_QUESTIONS_STATE, questionPosition: index + 1 };
    });

    this.state = {
      value: 0,
      numQuizQuestions: 5,
      overviewValues: [INITIAL_QUIZ_DETAILS],
      quizQuestions: {
        opening: [OPENING_QUIZ_STATE],
        closing: [CLOSING_QUIZ_STATE],
        questions: questionsState
      },
      production: false,
      devId: "",
      productionId: "",
      inputQuizTag: "",
      targetValue: "",
      reduceDialog: false,
      clearDialog: false
    };
  }

  clearQuestionValues = () => {
    const questionsState = _.range(this.state.numQuizQuestions).map((val, index) => {
      return { ...INITIAL_QUESTIONS_STATE, questionPosition: index + 1 };
    });
    this.setState({
      ...this.state,
      overviewValues: [INITIAL_QUIZ_DETAILS],
      quizQuestions: {
        opening: [OPENING_QUIZ_STATE],
        closing: [CLOSING_QUIZ_STATE],
        questions: questionsState
      },
      clearDialog: false
    });
  };

  questionsHandler = e => {
    const newValue = e.target.value;
    let questionValues = this.state.quizQuestions.questions.slice();
    if (newValue > this.state.numQuizQuestions) {
      const addValue = newValue - this.state.numQuizQuestions;

      const newQuestionState = _.range(addValue).map((val, index) => {
        return {
          ...INITIAL_QUESTIONS_STATE,
          questionPosition: index + this.state.numQuizQuestions + 1
        };
      });
      questionValues = questionValues.concat(newQuestionState);

      this.setState({
        quizQuestions: {
          ...this.state.quizQuestions,
          questions: questionValues
        },
        numQuizQuestions: newValue
      });
    } else if (newValue < this.state.numQuizQuestions) {
      this.setState({ reduceDialog: true, targetValue: newValue });
    }
  };

  handleAccept = e => {
    const newValue = this.state.targetValue;
    let questionValues = this.state.quizQuestions.questions.slice();
    const subtractValue = newValue - this.state.numQuizQuestions;
    questionValues.splice(subtractValue);
    this.setState({
      quizQuestions: {
        ...this.state.quizQuestions,
        questions: questionValues
      },
      numQuizQuestions: newValue,
      targetValue: "",
      reduceDialog: false
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClose = event => {
    this.setState({ reduceDialog: false });
  };

  handleSend = values => {
    this.setState(values);
  };

  selectQuestions = values => {
    const { classes } = this.props;
    const name = "Number of Questions";
    return (
      <FormControl
        className={classes.formControl}
        style={{ marginLeft: 20, width: "15%" }}
      >
        <InputLabel htmlFor={`${name}-helper`}>{name}</InputLabel>
        <Select
          value={this.state.numQuizQuestions}
          onChange={this.questionsHandler}
          input={<Input name={name} id={`${name}-helper`} />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {INITIAL_QUESTIONS.map((val, index) => {
            return (
              <MenuItem value={val.value} key={index}>
                {val.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  };

  render() {
    console.log("handleValues,", this.state);
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <SimpleStorage parent={this} prefix={"QuizParent"} />
        <form className={classes.root} autoComplete="off">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Overview" />
              <Tab label="Questions" />
            </Tabs>
          </AppBar>
          <div style={{ marginTop: 20 }}>{this.selectQuestions()}</div>
          <div
            style={{
              padding: 8 * 3,
              margin: "10px 1px 5px 1px"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              align="right"
              className={classes.button}
              onClick={e => console.log("VALUES", this.state)}
            >
              <Send className={classes.rightIcon} />
              Create
            </Button>
            <Button
              variant="contained"
              color="secondary"
              align="right"
              style={{ float: "right" }}
              className={classes.button}
              onClick={e => {
                console.log("VALUES", this.state);
                this.setState({ clearDialog: true });
                clearStorage("QuizParent");
              }}
            >
              <Delete className={classes.rightIcon} />
              Clear Values
            </Button>
          </div>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <Paper className={classes.quizWrap}>
              <QuizDetails
                overview={this.state.overviewValues}
                handleSend={this.handleSend}
              />
            </Paper>
            <Paper className={classes.quizWrap}>
              <Questions
                numberQuestions={this.state.numQuizQuestions}
                questions={this.state.quizQuestions}
                handleSend={this.handleSend}
              />
              {this.state.reduceDialog && (
                <ReduceDialog
                  open={this.state.reduceDialog}
                  onClose={this.handleClose}
                  accept={this.handleAccept}
                />
              )}
              {this.state.clearDialog && (
                <ClearDialog
                  open={this.state.clearDialog}
                  onClose={e => this.setState({ clearDialog: false })}
                  accept={this.clearQuestionValues}
                />
              )}
            </Paper>
          </SwipeableViews>
        </form>
      </div>
    );
  }
}

Quiz.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(quizStyles, { withTheme: true })(Quiz);
