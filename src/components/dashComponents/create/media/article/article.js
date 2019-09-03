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
import { initialValue } from "./editorSettings";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import ClearDialog from "../dialog/clearValues";
import Delete from "@material-ui/icons/Delete";
import { INITIAL_ARTICLE_OVERVIEW } from "./overview/layout/initialState";
import { Value } from "slate";
import { API, graphqlOperation } from "aws-amplify";
import AuthContext from "../../../../../context/authContext";
<<<<<<< HEAD
import uuid from "uuid";
// import { createNewMessage, x/onCreateMessage } from "./graphql/chatGraphql";

class Article extends Component {
	constructor(props) {
		super(props);

		const contentStorage = localStorage.getItem("content")
			? JSON.parse(localStorage.getItem("content"))
			: null;
		const overviewStorage = localStorage.getItem("overview")
			? JSON.parse(localStorage.getItem("overview"))
			: null;

		this.state = {
			tab: 0,
			age: 0,
			categories: ["Overview", "Article"],
			overview: overviewStorage ? overviewStorage : [INITIAL_ARTICLE_OVERVIEW],
			value: contentStorage ? Value.fromJSON(contentStorage) : initialValue,
		};
	}
	static contextType = AuthContext;

	clearArticleValues = () => {
		this.setState({
			...this.state,
			overview: [INITIAL_ARTICLE_OVERVIEW],
			value: initialValue,
			clearDialog: false,
		});
	};

	cleanup = name => {
		return name
			.trim()
			.replace(/\s/g, "_")
			.toLowerCase();
	};

	handleSend = values => {
		if (values.overview !== this.state.overview) {
			localStorage.setItem("overview", JSON.stringify(values.overview));
		}
		this.setState(values);
	};

	handleChange = ({ value }) => {
		if (value.document !== this.state.value.document) {
			const content = JSON.stringify(value.toJSON());
			localStorage.setItem("content", content);
		}
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

		const submit = {
			id: uuid(),
			authorId: this.context.userId,
			authorName: this.context.userId,
			overview: this.state.overview,
			content: this.state.value,
			development: true,
			production: false,
			articleUserId: this.context.profileId,
		};
		console.log("THIS STATE", this);
		// const message = {
		//   messageConversationId: conversationId,
		//   content: textMsg,
		//   authorId: conversationUserId
		// };
		// await API.graphql(graphqlOperation(create, { input: message }));
		// setTextMsg("");
		console.log("SUBMIT");
	};

	render() {
		// console.log("handleValues", this.state);
		const { classes, theme } = this.props;
		const { tab } = this.state;
		const header = this.state.overview[0].articleHeadline
			? this.state.overview[0].articleHeadline
			: this.state.overview[0].headline;

		return (
			<div className={classes.root}>
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
								margin: "10px 1px 5px 1px",
							}}
						>
							<Button
								variant="contained"
								color="primary"
								align="right"
								className={classes.button}
								onClick={this.handleSubmit.bind(this)}
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
									localStorage.removeItem("content");
									localStorage.removeItem("overview");
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
=======

// import { createNewMessage, x/onCreateMessage } from "./graphql/chatGraphql";



class Article extends Component {
  constructor(props) {
    super(props);

    const contentStorage = localStorage.getItem("content")
      ? JSON.parse(localStorage.getItem("content"))
      : null;
    const overviewStorage = localStorage.getItem("overview")
      ? JSON.parse(localStorage.getItem("overview"))
      : null;

    this.state = {
      tab: 0,
      age: 0,
      categories: ["Overview", "Article"],
      overview: overviewStorage ? overviewStorage : [INITIAL_ARTICLE_OVERVIEW],
      value: contentStorage ? Value.fromJSON(contentStorage) : initialValue
    };
  }
  static contextType = AuthContext;

  clearArticleValues = () => {
    this.setState({
      ...this.state,
      overview: [INITIAL_ARTICLE_OVERVIEW],
      value: initialValue,
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
    if (values.overview !== this.state.overview) {
      localStorage.setItem("overview", JSON.stringify(values.overview));
    }
    this.setState(values);
  };

  handleChange = ({ value }) => {
    if (value.document !== this.state.value.document) {
      const content = JSON.stringify(value.toJSON());
      localStorage.setItem("content", content);
    }
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

    const submit = {
      id: uuid(),
      authorId: this.context.userId,
      authorName: this.context.userId,
      overview: this.state.overview,
      content: this.state.value,
      development: true,
      production: false,
      articleUserId: this.context.profileId,
    }
    console.log("THIS STATE", this);
    // const message = {
    //   messageConversationId: conversationId,
    //   content: textMsg,
    //   authorId: conversationUserId
    // };
    // await API.graphql(graphqlOperation(create, { input: message }));
    // setTextMsg("");
    console.log("SUBMIT");
  };

  render() {
    // console.log("handleValues", this.state);
    const { classes, theme } = this.props;
    const { tab } = this.state;
    const header = this.state.overview[0].articleHeadline
      ? this.state.overview[0].articleHeadline
      : this.state.overview[0].headline;

    return (
      <div className={classes.root}>
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
                onClick={this.handleSubmit.bind(this)}
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
                  localStorage.removeItem("content");
                  localStorage.removeItem("overview");
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
>>>>>>> 3ce1edeb56f5c5c279e9dea6fd88f7ac4528c404
}

Article.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(articleStyles, { withTheme: true })(Article);
