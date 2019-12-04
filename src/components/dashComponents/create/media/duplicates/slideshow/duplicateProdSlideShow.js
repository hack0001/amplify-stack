import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Slides from "../../slideshow/slides/slides";
import SlideDetails from "../../slideshow/slideDetails/slideDetails";
import { slideStyles } from "../../slideshow/styles/slideStyles";
import SwipeableViews from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Delete from "@material-ui/icons/Delete";
import {
	INITIAL_SLIDES,
	INITIAL_SLIDES_STATE,
	requiredValues,
} from "../../slideshow/initialState/initialState";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import _ from "lodash";
import AuthContext from "../../../../../../context/authContext";
import { API, graphqlOperation } from "aws-amplify";
import ReduceDialog from "../../dialog/reduceQuestions";
import DeleteDialog from "../../dialog/deleteContent";
import ProductionDialog from "../../dialog/productionDialog/slideShowDialog/slideShowDialog";
import {
	updateProductionSlideShow,
	deleteProductionSlideShow,
} from "../../../production/graphql/mutations";
import { getProductionSlideShow } from "../../../production/graphql/queries";
import { updateDuplicateSlideShow } from "../../../../../../graphql/mutations";

import axios from "axios";

class DuplicateProdSlideShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			numSlides: 5,
			overviewValues: [],
			mainSlides: {
				opening: [],
				closing: [],
				slides: [],
			},
			production: false,
			developmentId: "",
			productionId: "",
			inputSlideTag: "",
			targetValue: "",
			reduceDialog: false,
			deleteDialog: false,
			errors: {},
		};
	}

	componentDidMount = async () => {
		const { id } = this.props.match.params;

		if (id) {
			const getProdSlideShowData = {
				query: getProductionSlideShow,
				operationName: "GetProductionSlideShow",
				variables: { id: id },
			};
			try {
				const { data } = await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(getProdSlideShowData),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});

				const prodSlideShowData = data.data.getProductionSlideShow;

				const overview = JSON.parse(prodSlideShowData.overview[0]);
				const finalOverview = [
					{
						...overview[0],
						production: prodSlideShowData.production,
						development: prodSlideShowData.development,
						original: prodSlideShowData.original,
					},
				];
				this.setState({
					overviewValues: finalOverview,
					numSlides: prodSlideShowData.numSlides,
					developmentId: prodSlideShowData.developmentId,
					mainSlides: JSON.parse(prodSlideShowData.slides),
					production: prodSlideShowData.production,
					development: prodSlideShowData.development,
					original: prodSlideShowData.original,
				});
			} catch (err) {
				console.log("Error Occurred", err);
			}
		}
	};

	static contextType = AuthContext;

	deleteProductionSlideShow = async () => {
		const { id } = this.props.match.params;
		const deleteProdQuiz = {
			query: deleteProductionSlideShow,
			operationName: "DeleteProductionSlideShow",
			variables: { input: { id: id } },
		};

		try {
			await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(deleteProdQuiz),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});
			await API.graphql(
				graphqlOperation(updateDuplicateSlideShow, {
					input: {
						id: this.state.developmentId,
						overview: JSON.stringify([
							{
								...this.state.overviewValues[0],
								productionSlideShowUserId: "",
								productionSlideShowSiteId: "",
								category: "",
								slideShowSiteId: "",
								site: "",
								slideShowUserId: "",
							},
						]),
						production: false,
						development: true,
					},
				}),
			);
			this.props.history.push("/duplicates");
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	slidesHandler = e => {
		const newValue = e.target.value;
		let slideValues = this.state.mainSlides.slides.slice();
		if (newValue > this.state.numSlides) {
			const addValue = newValue - this.state.numSlides;

			const newSlideState = _.range(addValue).map((val, index) => {
				return {
					...INITIAL_SLIDES_STATE,
					slidePosition: index + this.state.numSlides + 1,
				};
			});
			slideValues = slideValues.concat(newSlideState);

			this.setState({
				mainSlides: {
					...this.state.mainSlides,
					slides: slideValues,
				},
				numSlides: newValue,
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
				slides: slideValues,
			},
			numSlides: newValue,
			targetValue: "",
			reduceDialog: false,
		});
	};

	handleErrors = error => {
		this.setState({ errors: error });
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

	validate = () => {
		let validateSubmit = {};
		Object.keys(this.state.overviewValues[0]).map(key => {
			if (requiredValues.includes(key)) {
				if (this.state.overviewValues[0][key] === "") {
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
		e.preventDefault();
		const { id } = this.props.match.params;
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const { overviewValues } = this.state;
			const submitSlideShow = {
				id: id,
				overview: JSON.stringify(overviewValues),
				slides: JSON.stringify(this.state.mainSlides),
				numSlides: this.state.numSlides,
				productionSlideShowSiteId: overviewValues[0].productionSlideShowSiteId,
			};
			const submitDevSlideShow = {
				id: this.state.developmentId,
				overview: JSON.stringify(this.state.overviewValues),
				slides: JSON.stringify(this.state.mainSlides),
				numSlides: this.state.numSlides,
			};

			const updateProdSlideShow = {
				query: updateProductionSlideShow,
				operationName: "UpdateProductionSlideShow",
				variables: { input: submitSlideShow },
			};
			try {
				await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(updateProdSlideShow),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});
				await API.graphql(
					graphqlOperation(updateDuplicateSlideShow, {
						input: submitDevSlideShow,
					}),
				);
				this.props.history.push("/duplicates");
			} catch (err) {
				console.log("Error occurred", err);
			}
		}
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
		if (!this.state.overviewValues[0]) {
			return <div></div>;
		}
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
							variant="contained"
							color="secondary"
							align="right"
							style={{ float: "right" }}
							className={classes.button}
							onClick={e => {
								this.setState({ deleteDialog: true });
							}}
						>
							<Delete className={classes.rightIcon} />
							Delete
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
								stage={"duplicateProduction"}
								production={this.state.production}
								development={this.state.development}
								errors={this.state.errors}
								setErrors={this.handleErrors}
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
							{this.state.deleteDialog && (
								<DeleteDialog
									open={this.state.deleteDialog}
									onClose={e => this.setState({ deleteDialog: false })}
									accept={this.deleteProductionSlideShow}
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
									overview={this.state.overviewValues}
									overviewMarker={"overviewValues"}
								/>
							)}
						</Paper>
					</SwipeableViews>
				</form>
			</div>
		);
	}
}

DuplicateProdSlideShow.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(slideStyles, { withTheme: true })(
	DuplicateProdSlideShow,
);
