import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeList from "./homeList";
import { TabContainer } from "../../tabs/tabContainer";
import { styles } from "./styles/homeStyles";
import {
	listArticles,
	listSlideShows,
	listQuizs,
} from "../../../graphql/queries";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: Number(localStorage.getItem("homeTabValue")) || 0,
		};
	}
	handleChange = (event, value) => {
		localStorage.setItem("homeTabValue", value);
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes, theme } = this.props;
		return (
			<div className={classes.root}>
				<AppBar className={classes.appBar} position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
					>
						<Tab label="Articles" />
						<Tab label="Quizzes" />
						<Tab label="SlideShows" />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<HomeList
						queryFetch={listArticles}
						dataCategory={"listArticles"}
						type={"article"}
						original={true}
					/>
					<HomeList
						queryFetch={listQuizs}
						dataCategory={"listQuizs"}
						type={"quiz"}
						original={true}
					/>
					<HomeList
						queryFetch={listSlideShows}
						dataCategory={"listSlideShows"}
						type={"slideshow"}
						original={true}
					/>
				</SwipeableViews>
			</div>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
