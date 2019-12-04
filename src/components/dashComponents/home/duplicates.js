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
	listDuplicateArticles,
	listDuplicateSlideShows,
	listDuplicateQuizs,
} from "../../../graphql/queries";

class Duplicates extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: Number(localStorage.getItem("duplicatTabValue")) || 0,
		};
	}
	handleChange = (event, value) => {
		localStorage.setItem("duplicatTabValue", value);
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
						queryFetch={listDuplicateArticles}
						dataCategory={"listDuplicateArticles"}
						type={"article"}
						original={false}
					/>
					<HomeList
						queryFetch={listDuplicateQuizs}
						dataCategory={"listDuplicateQuizs"}
						type={"quiz"}
						original={false}
					/>
					<HomeList
						queryFetch={listDuplicateSlideShows}
						dataCategory={"listDuplicateSlideShows"}
						type={"slideshow"}
						original={false}
					/>
				</SwipeableViews>
			</div>
		);
	}
}

Duplicates.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Duplicates);
