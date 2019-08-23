import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Slides from "./slides/slides";
import SlideDetails from "./slideDetails/slideDetails";
import { slideStyles } from "./styles/slideStyles";
import SwipeableViews from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Delete from "@material-ui/icons/Delete";
import {
  INITIAL_SLIDESHOW_DETAILS,
  INITIAL_SLIDES,
  INITIAL_SLIDES_STATE,
  OPENING_SLIDESHOW_STATE,
  CLOSING_SLIDESHOW_STATE
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
 
class SlideShow extends Component {
  constructor(props) {
    super(props);

    const slidesState = _.range(5).map((val, index) => {
      return { ...INITIAL_SLIDES_STATE, slidePosition: index + 1 };
    });

    this.state = {
      value: 0,
      numSlides: 5,
      overviewValues: [INITIAL_SLIDESHOW_DETAILS],
      mainSlides: {
        opening: [OPENING_SLIDESHOW_STATE],
        closing: [CLOSING_SLIDESHOW_STATE],
        slides: slidesState
      },
      production: false,
      devId: "",
      productionId: "",
      inputSlideTag: "",
      targetValue: "",
      reduceDialog: false,
      clearDialog: false
    };
  }

  clearSlideValues = () => {
    const slidesState = _.range(this.state.numSlides).map((val, index) => {
      return { ...INITIAL_SLIDES_STATE, slidePosition: index + 1 };
    });
    this.setState({
      ...this.state,
      overviewValues: [INITIAL_SLIDESHOW_DETAILS],
      mainSlides: {
        opening: [OPENING_SLIDESHOW_STATE],
        closing: [CLOSING_SLIDESHOW_STATE],
        slides: slidesState
      },
      clearDialog: false
    });
  };

  slidesHandler = e => {
    const newValue = e.target.value;
    let slideValues = this.state.mainSlides.slides.slice();
    if (newValue > this.state.numSlides) {
      const addValue = newValue - this.state.numSlides;

      const newSlideState = _.range(addValue).map((val, index) => {
        return {
          ...INITIAL_SLIDES_STATE,
          slidePosition: index + this.state.numSlides + 1
        };
      });
      slideValues = slideValues.concat(newSlideState);

      this.setState({
        mainSlides: {
          ...this.state.mainSlides,
          slides: slideValues
        },
        numSlides: newValue
      });
    } else if (newValue < this.state.numSlides) {
      this.setState({ reduceDialog: true, targetValue: newValue });
    }
  };

  handleAccept = e => {
    const newValue = this.state.targetValue;
    let slideValues = this.state.mainSlides.slides.slice();
    const subtractValue = newValue - this.state.numSlides;
    slideValues.splice(subtractValue);
    this.setState({
      mainSlides: {
        ...this.state.mainSlides,
        slides: slideValues
      },
      numSlides: newValue,
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
    const name = "Number of Slides";
    return (
      <FormControl
        className={classes.formControl}
        style={{ marginLeft: 20, width: "25%" }}
      >
        <InputLabel htmlFor={`${name}-helper`}>{name}</InputLabel>
        <Select
          value={this.state.numSlides}
          onChange={this.slidesHandler}
          input={<Input name={name} id={`${name}-helper`} />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {INITIAL_SLIDES.map((val, index) => {
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
              <Tab label="Slides" />
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
                this.setState({ clearDialog: true });
                clearStorage("SlideParent");
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
              <SlideDetails
                overview={this.state.overviewValues}
                handleSend={this.handleSend}
              />
            </Paper>
            <Paper className={classes.quizWrap}>
              <Slides
                numberSlides={this.state.numSlides}
                slides={this.state.mainSlides}
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
                  accept={this.clearSlideValues}
                />
              )}
            </Paper>
          </SwipeableViews>
        </form>
      </div>
    );
  }
}

SlideShow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(slideStyles, { withTheme: true })(SlideShow);
