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
	INITIAL_SLIDES,
	INITIAL_SLIDES_STATE,
	requiredValues,
} from "./initialState/initialState";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ProductionDialog from "../dialog/productionDialog/slideShowDialog/slideShowDialog";
import _ from "lodash";
import AuthContext from "../../../../../context/authContext";
import { API, graphqlOperation } from "aws-amplify";
import { updateSlideShow, deleteSlideShow } from "../graphql/createGraphql";
import { getSlideShow } from "../../../../../graphql/queries";
import ReduceDialog from "../dialog/reduceQuestions";
import DeleteDialog from "../dialog/deleteContent";
import { createProductionSlideShow } from "../../production/graphql/mutations";
import axios from "axios";

class DevSlideShow extends Component {
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
		this.interval = setInterval(() => this.timerBackup(), 60 * 1000 * 5);
		const { id } = this.props.match.params;
		if (id) {
			try {
				const { data } = await API.graphql(
					graphqlOperation(getSlideShow, { id }),
				);

				const slideData = data.getSlideShow;
				const overview = JSON.parse(slideData.overview[0]);
				const finalOverview = [
					{
						...overview[0],
						production: slideData.production,
						development: slideData.development,
						original: slideData.original,
					},
				];
				this.setState({
					overviewValues: finalOverview,
					mainSlides: JSON.parse(slideData.slides),
					numSlides: slideData.numSlides,
					slideShowUserId: data.getSlideShow.user.userId
						? data.getSlideShow.user.userId
						: null,
					original: slideData.original,
				});
			} catch (err) {
				console.log("Error Occurred", err);
			}
		}
	};

	componentWillUnmount = () => {
		clearInterval(this.interval);
	};

	static contextType = AuthContext;

	deleteSlideShowValues = async () => {
		const { id } = this.props.match.params;
		try {
			await API.graphql(graphqlOperation(deleteSlideShow, { input: { id } }));
			this.props.history.push("/home");
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

	timerBackup = async () => {
		const { id } = this.props.match.params;
		clearInterval(this.interval);
		const submitSlideshow = {
			id: id,
			overview: JSON.stringify(this.state.overviewValues),
			slides: JSON.stringify(this.state.mainSlides),
			numSlides: this.state.numSlides,
		};
		try {
			await API.graphql(
				graphqlOperation(updateSlideShow, { input: submitSlideshow }),
			);
			this.props.history.push("/home");
		} catch (err) {
			console.log("Error occurred", err);
		}
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
			const submitSlideshow = {
				id: id,
				overview: JSON.stringify(this.state.overviewValues),
				slides: JSON.stringify(this.state.mainSlides),
				numSlides: this.state.numSlides,
				development: true,
				production: false,
			};
			try {
				await API.graphql(
					graphqlOperation(updateSlideShow, { input: submitSlideshow }),
				);
				this.props.history.push("/home");
			} catch (err) {
				console.log("Error occurred", err);
			}
		}
	};

	selectSlides = values => {
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

	submitProduction = async e => {
		const { id } = this.props.match.params;
		e.preventDefault();
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const { overviewValues } = this.state;
			const prodSlideShow = {
				development: false,
				production: true,
				overview: JSON.stringify(overviewValues),
				slides: JSON.stringify(this.state.mainSlides),
				developmentId: id,
				numSlides: this.state.numSlides,
				original: this.state.original,
				productionSlideShowUserId: overviewValues[0].productionSlideShowUserId,
				productionSlideShowSiteId: overviewValues[0].productionSlideShowSiteId,
				tags: overviewValues[0].tags ? overviewValues[0].tags : ["Bug to Fix"],
				category: overviewValues[0].category,
				mainHeadline: overviewValues[0].mainHeadline
					? overviewValues[0].mainHeadline
					: false,
				sideHeadline: overviewValues[0].sideHeadline
					? overviewValues[0].sideHeadline
					: false,
				bottomHeadline: overviewValues[0].bottomHeadline
					? overviewValues[0].bottomHeadline
					: false,
				shareCount: overviewValues[0].shareCount
					? overviewValues[0].shareCount
					: 0,
			};

			const devUpdate = {
				id: id,
				overview: JSON.stringify(this.state.overviewValues),
				slides: JSON.stringify(this.state.mainSlides),
				development: false,
				production: true,
				numSlides: this.state.numSlides,
			};

			const mutationData = {
				query: createProductionSlideShow,
				operationName: "CreateProductionSlideShow",
				variables: { input: prodSlideShow },
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

				const productionId = data.data.createProductionSlideShow.id;
				await API.graphql(
					graphqlOperation(updateSlideShow, {
						input: { ...devUpdate, productionId },
					}),
				);

				this.props.history.push("/home");
			} catch (err) {
				console.error(`[ERROR] ${err} `);
				throw err;
			}
		}
	};

	render() {
		const { id } = this.props.match.params;
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
					<div style={{ marginTop: 20 }}>{this.selectSlides()}</div>

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
								stage={"development"}
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
									accept={this.deleteSlideShowValues}
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
									overview={this.state.overviewValues}
									userId={this.state.overviewValues[0].slideShowUserId}
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

DevSlideShow.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(slideStyles, { withTheme: true })(DevSlideShow);
