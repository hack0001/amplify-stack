import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Questions from "../../quiz/questions/questions";
import QuizDetails from "../../quiz/quizDetails/quizDetails";
import { quizStyles } from "../../quiz/styles/quizStyles";
import SwipeableViews from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Delete from "@material-ui/icons/Delete";
import {
	INITIAL_QUESTIONS,
	INITIAL_QUESTIONS_STATE,
	requiredValues,
} from "../../quiz/initialState/initialState";
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
import {
	updateProductionQuiz,
	deleteProductionQuiz,
} from "../../../production/graphql/mutations";
import ProductionDialog from "../../dialog/productionDialog/quizDialog/quizDialog";
import { getProductionQuiz } from "../../../production/graphql/queries";
import { updateDuplicateQuiz } from "../../../../../../graphql/mutations";
import axios from "axios";

class DuplicateProdQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			numQuizQuestions: 5,
			overviewValues: [],
			quizQuestions: {},
			development: null,
			production: null,
			developmentId: "",
			productionId: "",
			inputQuizTag: "",
			targetValue: "",
			reduceDialog: false,
			deleteDialog: false,
			errors: {},
		};
	}
	static contextType = AuthContext;

	componentDidMount = async () => {
		const { id } = this.props.match.params;

		if (id) {
			const getProdQuizData = {
				query: getProductionQuiz,
				operationName: "GetProductionQuiz",
				variables: { id: id },
			};
			try {
				const { data } = await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(getProdQuizData),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});

				const prodQuizData = data.data.getProductionQuiz;

				const overview = JSON.parse(prodQuizData.overview[0]);
				const finalOverview = [
					{
						...overview[0],
						production: prodQuizData.production,
						development: prodQuizData.development,
						original: prodQuizData.original,
					},
				];

				this.setState({
					overviewValues: finalOverview,
					developmentId: prodQuizData.developmentId,
					quizQuestions: JSON.parse(prodQuizData.questions),
					numQuizQuestions: prodQuizData.numQuestions,
					production: prodQuizData.production,
					development: prodQuizData.development,
					original: prodQuizData.original,
				});
			} catch (err) {
				console.log("Error Occurred", err);
			}
		}
	};

	deleteProductionQuiz = async () => {
		const { id } = this.props.match.params;
		const deleteProdQuiz = {
			query: deleteProductionQuiz,
			operationName: "DeleteProductionQuiz",
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
				graphqlOperation(updateDuplicateQuiz, {
					input: {
						id: this.state.developmentId,
						production: false,
						development: true,
						overview: JSON.stringify([
							{
								...this.state.overviewValues[0],
								productionQuizUserId: "",
								productionQuizSiteId: "",
								category: "",
								quizSiteId: "",
								site: "",
								quizUserId: "",
							},
						]),
					},
				}),
			);
			this.props.history.push("/duplicates");
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	questionsHandler = e => {
		const newValue = e.target.value;
		let questionValues = this.state.quizQuestions.questions.slice();
		if (newValue > this.state.numQuizQuestions) {
			const addValue = newValue - this.state.numQuizQuestions;

			const newQuestionState = _.range(addValue).map((val, index) => {
				return {
					...INITIAL_QUESTIONS_STATE,
					questionPosition: index + this.state.numQuizQuestions + 1,
				};
			});
			questionValues = questionValues.concat(newQuestionState);

			this.setState({
				quizQuestions: {
					...this.state.quizQuestions,
					questions: questionValues,
				},
				numQuizQuestions: newValue,
			});
		} else if (newValue < this.state.numQuizQuestions) {
			this.setState({ reduceDialog: true, targetValue: newValue });
		}
	};

	handleAccept = e => {
		const newValue = this.state.targetValue;
		let questionValues = this.state.quizQuestions.questions.slice();
		const subtractValue = newValue - this.state.numQuizQuestions;
		questionValues.splice(subtractValue);
		this.setState({
			quizQuestions: {
				...this.state.quizQuestions,
				questions: questionValues,
			},
			numQuizQuestions: newValue,
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

			const submitQuiz = {
				id: id,
				overview: JSON.stringify(overviewValues),
				questions: [JSON.stringify(this.state.quizQuestions)],
				numQuestions: this.state.numQuizQuestions,
				productionQuizSiteId: overviewValues[0].productionQuizSiteId,
			};
			const submitDevQuiz = {
				id: this.state.developmentId,
				overview: JSON.stringify(this.state.overviewValues),
				questions: [JSON.stringify(this.state.quizQuestions)],
				numQuestions: this.state.numQuizQuestions,
			};

			const updateProdQuiz = {
				query: updateProductionQuiz,
				operationName: "UpdateProductionQuiz",
				variables: { input: submitQuiz },
			};

			try {
				await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(updateProdQuiz),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});
				await API.graphql(
					graphqlOperation(updateDuplicateQuiz, {
						input: submitDevQuiz,
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
		const name = "Number of Questions";
		return (
			<FormControl
				className={classes.formControl}
				style={{ marginLeft: 20, width: "25%" }}
			>
				<InputLabel htmlFor={`${name}-helper`}>{name}</InputLabel>
				<Select
					value={this.state.numQuizQuestions}
					onChange={this.questionsHandler}
					input={<Input name={name} id={`${name}-helper`} />}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{INITIAL_QUESTIONS.map((val, index) => {
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
		const { classes, theme } = this.props;
		const { value } = this.state;
		if (!this.state.overviewValues[0]) {
			return <div></div>;
		}
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
							<Tab label="Questions" />
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
							<QuizDetails
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
							<Questions
								numberQuestions={this.state.numQuizQuestions}
								questions={this.state.quizQuestions}
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
									accept={this.deleteProductionQuiz}
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

DuplicateProdQuiz.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(quizStyles, { withTheme: true })(DuplicateProdQuiz);
