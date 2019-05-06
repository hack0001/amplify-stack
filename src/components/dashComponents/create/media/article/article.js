import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import styles from "./articleStyles";
import { Content, Meta, Preview, Headline } from "./";
import { initialValue, TabContainer } from "./editorSettings";

class Article extends Component {
  state = {
    value: 0,
    age: 0,
    editorValue: initialValue,
    categories: ["Content", "Headline", "Meta Data", "Preview"]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  editorChange = ({ value }) => {
    // console.log("EDITOR CHANGE", JSON.stringify(value.toJSON()));
    // localStorage.setItem('content', content)
    this.setState({ editorValue: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("SUBMIT");
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="auto"
              centered
            >
              {this.state.categories.map(category => {
                return <Tab label={category} key={category} />;
              })}
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Content
                value={this.state.editorValue}
                onChange={this.editorChange.bind(this)}
              />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <Headline />
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <Meta />
            </TabContainer>
          )}
          {value === 3 && (
            <TabContainer>
              <Preview />
            </TabContainer>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Submit
            <Send className={classes.rightIcon}>Send</Send>
          </Button>
        </form>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
