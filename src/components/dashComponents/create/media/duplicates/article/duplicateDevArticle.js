import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import { Content, Overview } from "../../article/index";
import { articleStyles } from "../../article/styles/articleStyles";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import DeleteDialog from "../../dialog/deleteContent";
import ProductionDialog from "../../dialog/productionDialog/articleDialog/articleDialog";
import Delete from "@material-ui/icons/Delete";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { API, graphqlOperation } from "aws-amplify";
import AuthContext from "../../../../../../context/authContext";
import {
	deleteDuplicateArticle,
	updateDuplicateArticle,
} from "../../../../../../graphql/mutations";
import { getDuplicateArticle } from "../../../../../../graphql/queries";
import { createProductionArticle } from "../../../production/graphql/mutations";
import { requiredValues } from "../../article/overview/layout/initialState";
import axios from "axios";

class DuplicateDevArticle extends Component {
	constructor(props) {
		super(props);
		const id = props.match.params.id;
		this.state = {
			tab: 0,
			age: 0,
			categories: ["Overview", "Article"],
			overview: [],
			value: {},
			errors: {},
			overviewStorage: `duplicate-dev-overview-${id}`,
			contentStorage: `duplicate-dev-content-${id}`,
			id: id,
		};
	}

	componentDidMount = async () => {
		const { id, overviewStorage, contentStorage } = this.state;
		if (id) {
			const devContentStorage = localStorage.getItem(contentStorage)
				? JSON.parse(localStorage.getItem(contentStorage))
				: null;
			const devOverviewStorage = localStorage.getItem(overviewStorage)
				? JSON.parse(localStorage.getItem(overviewStorage))
				: null;

			try {
				const { data } = await API.graphql(
					graphqlOperation(getDuplicateArticle, { id }),
				);

				const overview = JSON.parse(data.getDuplicateArticle.overview[0]);
				const duplicateArticle = data.getDuplicateArticle;
				const finalOverview = [
					{
						...overview[0],
						production: duplicateArticle.production,
						development: duplicateArticle.development,
						original: duplicateArticle.original,
					},
				];
				this.setState({
					overview: devOverviewStorage ? devOverviewStorage : finalOverview,
					value: devContentStorage
						? devContentStorage
						: JSON.parse(duplicateArticle.content),
					articleUserId: duplicateArticle.userId
						? duplicateArticle.userId
						: null,
					original: duplicateArticle.original,
				});
			} catch (err) {
				console.log("Error Occurred", err);
			}
		}
	};

	static contextType = AuthContext;

	deleteArticleValues = async () => {
		const { id } = this.state;
		try {
			await API.graphql(
				graphqlOperation(deleteDuplicateArticle, { input: { id } }),
			);
			this.props.history.push("/duplicates");
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	cleanup = name => {
		return name
			.trim()
			.replace(/\s/g, "_")
			.toLowerCase();
	};

	handleErrors = error => {
		this.setState({ errors: error });
	};

	handleSend = values => {
		const { overviewStorage } = this.state;
		if (values.overview !== this.state.overview) {
			localStorage.setItem(overviewStorage, JSON.stringify(values.overview));
		}
		this.setState(values);
	};

	handleChange = ({ value }) => {
		const { contentStorage } = this.state;

		if (value.document !== this.state.value.document) {
			const content = JSON.stringify(value.toJSON());
			localStorage.setItem(contentStorage, content);
		}
		this.setState({ value });
	};

	handleTab = (event, value) => {
		this.setState({ tab: value });
	};

	handleClose = event => {
		this.setState({ reduceDialog: false });
	};

	validate = () => {
		let validateSubmit = {};
		Object.keys(this.state.overview[0]).map(key => {
			if (requiredValues.includes(key)) {
				if (this.state.overview[0][key] === "") {
					validateSubmit = { ...validateSubmit, [key]: true };
				}
			}
		});
		this.setState({
			errors: {
				...this.state.errors,
				...validateSubmit,
			},
		});
	};

	handleSubmit = async e => {
		const { id, overviewStorage, contentStorage } = this.state;

		e.preventDefault();
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const submitArticle = {
				id: id,
				overview: JSON.stringify(this.state.overview),
				content: JSON.stringify(this.state.value.toJSON()),
				development: true,
				production: false,
			};
			try {
				await API.graphql(
					graphqlOperation(updateDuplicateArticle, { input: submitArticle }),
				);
				localStorage.removeItem(contentStorage);
				localStorage.removeItem(overviewStorage);
				this.props.history.push("/duplicates");
			} catch (err) {
				console.log("Error occurred", err);
			}
		}
	};

	submitProduction = async e => {
		const { id, overviewStorage, contentStorage } = this.state;

		e.preventDefault();
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const { overview } = this.state;
			const prodArticle = {
				development: false,
				production: true,
				overview: JSON.stringify(overview),
				content: JSON.stringify(this.state.value.toJSON()),
				developmentId: id,
				original: this.state.original,
				productionArticleUserId: overview[0].productionArticleUserId,
				productionArticleSiteId: overview[0].productionArticleSiteId,
			};

			const devUpdate = {
				id: id,
				overview: JSON.stringify(this.state.overview),
				content: JSON.stringify(this.state.value.toJSON()),
				development: false,
				production: true,
			};

			const mutationData = {
				query: createProductionArticle,
				operationName: "CreateProductionArticle",
				variables: { input: prodArticle },
			};

			try {
				const { data } = await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(mutationData),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});

				const productionId = data.data.createProductionArticle.id;
				await API.graphql(
					graphqlOperation(updateDuplicateArticle, {
						input: { ...devUpdate, productionId },
					}),
				);
				localStorage.removeItem(contentStorage);
				localStorage.removeItem(overviewStorage);
				this.props.history.push("/duplicates");
			} catch (err) {
				console.error(`[ERROR] ${err} `);
				throw err;
			}
		}
	};

	render() {
		const { classes, theme } = this.props;
		const { overviewStorage, contentStorage } = this.state;

		const { tab } = this.state;
		if (!this.state.overview[0]) {
			return <div></div>;
		}
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
								Update
							</Button>
							<Button
								variant="contained"
								style={{
									marginLeft: 10,
								}}
								color="secondary"
								align="right"
								className={classes.button}
								onClick={e => this.setState({ productionDialog: true })}
							>
								<Send className={classes.rightIcon} />
								Production
							</Button>
							<Button
								variant="contained"
								color="secondary"
								align="right"
								style={{ float: "right" }}
								className={classes.button}
								onClick={e => {
									this.setState({ deleteDialog: true });
									localStorage.removeItem(contentStorage);
									localStorage.removeItem(overviewStorage);
								}}
							>
								<Delete className={classes.rightIcon} />
								Delete
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
								stage={"duplicateDevelopment"}
								errors={this.state.errors}
								setErrors={this.handleErrors}
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

							{this.state.deleteDialog && (
								<DeleteDialog
									open={this.state.deleteDialog}
									onClose={e => this.setState({ deleteDialog: false })}
									accept={this.deleteArticleValues}
									prodMarker={false}
								/>
							)}
							{this.state.productionDialog && (
								<ProductionDialog
									open={this.state.productionDialog}
									onClose={e => this.setState({ productionDialog: false })}
									accept={this.submitProduction}
									prodMarker={false}
									handleSend={this.handleSend}
									overview={this.state.overview}
									userId={this.state.overview[0].articleUserId}
									overviewMarker={"overview"}
								/>
							)}
						</Paper>
					</SwipeableViews>
				</form>
			</div>
		);
	}
}

DuplicateDevArticle.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(articleStyles, { withTheme: true })(
	DuplicateDevArticle,
);
