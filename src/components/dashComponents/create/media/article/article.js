import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import { Content, Overview } from "./index";
import { articleStyles } from "./styles/articleStyles";
import { initialValue, updateValue, TabContainer } from "./editorSettings";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import SimpleStorage, { clearStorage } from "react-simple-storage";
import ClearDialog from "../dialog/clearValues";
import Delete from "@material-ui/icons/Delete";
import { INITIAL_ARTICLE_OVERVIEW } from "./overview/layout/initialState";

class Article extends Component {
  state = {
    tab: 1,
    age: 0,
    categories: ["Overview", "Article"],
    overview: [INITIAL_ARTICLE_OVERVIEW],
    value: initialValue
  };

  // http://carsandyachts.com/trending/51-celebrities-their-phenomenal-weight-loss-transformation-tb/
  // ?utm_source=taboola&utm_medium=dailymail-uk&utm_campaign=2517695&utm_term=Anne+Hegerty+
  // is+So+Skinny+Now+and+Looks+Gorgeous%21+%28Photos%29&utm_content=http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Febc8d06177e8eadd089a4fc732ed79fd.jpg

  clearArticleValues = () => {
    this.setState({
      ...this.state,
      overview: [INITIAL_ARTICLE_OVERVIEW],
      value: updateValue,
      clearDialog: false
    });
  };

  cleanup = name => {
    return name
      .trim()
      .replace(/\s/g, "_")
      .toLowerCase();
  };

  handleSend = values => {
    this.setState(values);
  };

  handleChange = ({ value }) => {
    // console.log("EDITOR CHANGE", JSON.stringify(value.toJSON()));
    // localStorage.setItem('content', content)
    this.setState({ value });
  };

  handleTab = (event, value) => {
    this.setState({ tab: value });
  };

  handleClose = event => {
    this.setState({ reduceDialog: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("SUBMIT");
  };

  render() {
    console.log("handleValues", this.state);
    const { classes, theme } = this.props;
    const { tab } = this.state;
    const header = this.state.overview[0].articleHeadline
      ? this.state.overview[0].articleHeadline
      : this.state.overview[0].headline;

    return (
      <div className={classes.root}>
        {/* <SimpleStorage parent={this} prefix={"ArticleParent"} /> */}
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <AppBar position="static" color="default">
            <Tabs
              value={tab}
              onChange={this.handleTab}
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="auto"
              variant="fullWidth"
              centered
            >
              {this.state.categories.map(category => {
                return <Tab label={category} key={category} />;
              })}
            </Tabs>
          </AppBar>
          <Paper className={classes.articleWrap}>
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
                  clearStorage("ArticleParent");
                }}
              >
                <Delete className={classes.rightIcon} />
                Clear Values
              </Button>
            </div>
          </Paper>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.tab}
            onChangeIndex={this.handleChangeIndex}
          >
            <Paper className={classes.articleWrap}>
              <Overview
                overview={this.state.overview}
                handleSend={this.handleSend}
              />
            </Paper>
            <Paper className={classes.articleWrap}>
              <Content
                value={this.state.value}
                handleChange={this.handleChange}
                headline={header}
				bulletHeaders={this.state.overview[0].bulletHeadlinesDetails}
				bulletHeadlines={this.state.overview[0].bulletHeadlines}
              />

              {this.state.clearDialog && (
                <ClearDialog
                  open={this.state.clearDialog}
                  onClose={e => this.setState({ clearDialog: false })}
                  accept={this.clearArticleValues}
                />
              )}
            </Paper>
          </SwipeableViews>
        </form>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(articleStyles, { withTheme: true })(Article);
