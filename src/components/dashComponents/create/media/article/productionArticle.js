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
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import DeleteDialog from "../dialog/deleteContent";
import Delete from "@material-ui/icons/Delete";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { API, graphqlOperation } from "aws-amplify";
import AuthContext from "../../../../../context/authContext";
import { updateArticle } from "../graphql/createGraphql";
import ProductionDialog from "../dialog/productionDialog/articleDialog/articleDialog";
import DuplicateDialog from "../dialog/duplicateDialog";
import { getProductionArticle } from "../../production/graphql/queries";
import {
	deleteProductionArticle,
	updateProductionArticle,
} from "../../production/graphql/mutations";
import { createDuplicateArticle } from "../../../../../graphql/mutations";
import { requiredValues } from "./overview/layout/initialState";
import axios from "axios";

class ProdArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 0,
			age: 0,
			categories: ["Overview", "Article"],
			overview: [],
			value: {},
			errors: {},
		};
	}

	componentDidMount = async () => {
		const { id } = this.props.match.params;
		const prodStorage = `prod-content-${id}`;
		const prodOverview = `prod-overview-${id}`;
		if (id) {
			const prodContentStorage = localStorage.getItem(prodStorage)
				? JSON.parse(localStorage.getItem(prodStorage))
				: null;
			const prodOverviewStorage = localStorage.getItem(prodOverview)
				? JSON.parse(localStorage.getItem(prodOverview))
				: null;

			const getProdArticleData = {
				query: getProductionArticle,
				operationName: "GetProductionArticle",
				variables: { id: id },
			};
			try {
				const { data } = await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(getProdArticleData),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});

				const overview = JSON.parse(data.data.getProductionArticle.overview[0]);
				const finalOverview = [
					{
						...overview[0],
						production: data.data.getProductionArticle.production,
						development: data.data.getProductionArticle.development,
						original: data.data.getProductionArticle.original,
					},
				];

				this.setState({
					overview: prodOverviewStorage ? prodOverviewStorage : finalOverview,
					developmentId: data.data.getProductionArticle.developmentId,
					value: prodContentStorage
						? prodContentStorage
						: JSON.parse(data.data.getProductionArticle.content),

					original: data.data.getProductionArticle.original,
				});
			} catch (err) {
				console.log("Error Occurred", err);
			}
		}
	};
	static contextType = AuthContext;

	deleteProductionArticle = async () => {
		const { id } = this.props.match.params;
		const deleteProdArticle = {
			query: deleteProductionArticle,
			operationName: "DeleteProductionArticle",
			variables: { input: { id: id } },
		};
		try {
			await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(deleteProdArticle),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});

			await API.graphql(
				graphqlOperation(updateArticle, {
					input: {
						id: this.state.developmentId,
						overview: JSON.stringify([
							{
								...this.state.overview[0],
								productionArticleUserId: "",
								productionArticleSiteId: "",
								category: "",
								articleSiteId: "",
								site: "",
								articleUserId: "",
							},
						]),
						production: false,
						development: true,
					},
				}),
			);

			this.props.history.push("/home");
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
		const { id } = this.props.match.params;
		const prodOverviewStorage = `prod-overview-${id}`;
		if (values.overview !== this.state.overview) {
			localStorage.setItem(
				prodOverviewStorage,
				JSON.stringify(values.overview),
			);
		}
		this.setState(values);
	};

	handleChange = ({ value }) => {
		const { id } = this.props.match.params;
		const prodContentStorage = `prod-content-${id}`;
		if (value.document !== this.state.value.document) {
			const content = JSON.stringify(value.toJSON());
			localStorage.setItem(prodContentStorage, content);
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
		const { id } = this.props.match.params;
		const prodStorage = `prod-content-${id}`;
		const prodOverview = `prod-overview-${id}`;

		e.preventDefault();
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const { overview } = this.state;
			const submitArticle = {
				id: id,
				overview: JSON.stringify(this.state.overview),
				content: JSON.stringify(this.state.value.toJSON()),
				productionArticleSiteId: overview[0].productionArticleSiteId,
				tags: overview[0].tags ? overview[0].tags : [" "],
				category: overview[0].category,
				mainHeadline: overview[0].mainHeadline,
				sideHeadline: overview[0].sideHeadline,
				bottomHeadline: overview[0].bottomHeadline
					? overview[0].bottomHeadline
					: false,
				shareCount: overview[0].shareCount ? overview[0].shareCount : 0,
			};
			const submitDevArticle = {
				id: this.state.developmentId,
				overview: JSON.stringify(this.state.overview),
				content: JSON.stringify(this.state.value.toJSON()),
			};

			const updateProdArticle = {
				query: updateProductionArticle,
				operationName: "UpdateProductionArticle",
				variables: { input: submitArticle },
			};
			try {
				await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(updateProdArticle),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});
				await API.graphql(
					graphqlOperation(updateArticle, {
						input: submitDevArticle,
					}),
				);
				localStorage.removeItem(prodStorage);
				localStorage.removeItem(prodOverview);
				this.props.history.push("/home");
			} catch (err) {
				console.log("Error occurred", err);
			}
		}
	};

	handleDuplicate = async e => {
		e.preventDefault();
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const duplicateArticle = {
				overview: JSON.stringify(this.state.overview),
				content: JSON.stringify(this.state.value.toJSON()),
				development: true,
				production: false,
				original: false,
				duplicateArticleUserId: this.state.overview[0].articleUserId
					? this.state.overview[0].articleUserId
					: "",
				duplicateArticleOriginalArticleId: this.state.developmentId,
			};

			try {
				await API.graphql(
					graphqlOperation(createDuplicateArticle, {
						input: duplicateArticle,
					}),
				);

				this.props.history.push("/duplicates");
			} catch (err) {
				console.log("Error occurred", err);
			}
		}
	};

	render() {
		const { classes, theme } = this.props;
		const { tab } = this.state;
		const { id } = this.props.match.params;
		const prodStorage = `prod-content-${id}`;
		const prodOverview = `prod-overview-${id}`;
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
								onClick={e => this.setState({ updateDialog: true })}
							>
								<Send className={classes.rightIcon} />
								Update
							</Button>
							<Button
								style={{ marginLeft: 5 }}
								variant="contained"
								color="secondary"
								align="right"
								className={classes.button}
								onClick={e => this.setState({ duplicateDialog: true })}
							>
								<Send className={classes.rightIcon} />
								Duplicate
							</Button>
							<Button
								variant="contained"
								color="secondary"
								align="right"
								style={{ float: "right" }}
								className={classes.button}
								onClick={e => {
									this.setState({ deleteDialog: true });
									localStorage.removeItem(prodStorage);
									localStorage.removeItem(prodOverview);
								}}
							>
								<Delete className={classes.rightIcon} />
								Remove
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
								stage={"production"}
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
									accept={this.deleteProductionArticle}
									prodMarker={true}
								/>
							)}
							{this.state.updateDialog && (
								<ProductionDialog
									open={this.state.updateDialog}
									onClose={e => this.setState({ updateDialog: false })}
									accept={this.handleSubmit}
									prodMarker={true}
									handleSend={this.handleSend}
									overview={this.state.overview}
									overviewMarker={"overview"}
								/>
							)}
							{this.state.duplicateDialog && (
								<DuplicateDialog
									open={this.state.duplicateDialog}
									onClose={e => this.setState({ dusplicateDialog: false })}
									accept={this.handleDuplicate}
								/>
							)}
						</Paper>
					</SwipeableViews>
				</form>
			</div>
		);
	}
}

ProdArticle.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(articleStyles, { withTheme: true })(ProdArticle);
