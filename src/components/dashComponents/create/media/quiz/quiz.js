import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Questions from "./questions/questions";
import QuizDetails from "./quizDetails/quizDetails";
import { quizStyles } from "./styles/quizStyles";
import SwipeableViews from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Delete from "@material-ui/icons/Delete";
import {
	INITIAL_QUIZ_DETAILS,
	INITIAL_QUESTIONS,
	INITIAL_QUESTIONS_STATE,
	OPENING_QUIZ_STATE,
	CLOSING_QUIZ_STATE,
	requiredValues,
} from "./initialState/initialState";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import _ from "lodash";
import AuthContext from "../../../../../context/authContext";
import { API, graphqlOperation } from "aws-amplify";
import { createQuiz } from "../graphql/createGraphql";
import ReduceDialog from "../dialog/reduceQuestions";
import ClearDialog from "../dialog/clearValues";
import moment from "moment";

class Quiz extends Component {
	constructor(props) {
		super(props);

		const overviewStorage = this.getLocal("quiz-overviewValues");
		const mainQuestions = this.getLocal("quiz-quizQuestions");
		const numQuestions = this.getLocal("numQuestions");

		const questionsState = _.range(5).map((val, index) => {
			return { ...INITIAL_QUESTIONS_STATE, questionPosition: index + 1 };
		});

		this.state = {
			value: 0,
			numQuizQuestions: numQuestions ? numQuestions : 5,
			overviewValues: overviewStorage
				? overviewStorage
				: [INITIAL_QUIZ_DETAILS],
			quizQuestions: mainQuestions
				? mainQuestions
				: {
						opening: [OPENING_QUIZ_STATE],
						closing: [CLOSING_QUIZ_STATE],
						questions: questionsState,
				  },
			production: null,
			development: null,
			devId: "",
			productionId: "",
			inputQuizTag: "",
			targetValue: "",
			reduceDialog: false,
			clearDialog: false,
			errors: {},
		};
	}

	getLocal = prefix => {
		return localStorage.getItem(prefix)
			? JSON.parse(localStorage.getItem(prefix))
			: null;
	};

	clearLocal = prefix => {
		if (Array.isArray(prefix)) {
			prefix.map(x => {
				return localStorage.removeItem(x);
			});
		} else {
			localStorage.removeItem(prefix);
		}
	};
	static contextType = AuthContext;

	clearQuestionValues = () => {
		const questionsState = _.range(this.state.numQuizQuestions).map(
			(val, index) => {
				return { ...INITIAL_QUESTIONS_STATE, questionPosition: index + 1 };
			},
		);
		this.setState({
			...this.state,
			overviewValues: [INITIAL_QUIZ_DETAILS],
			quizQuestions: {
				opening: [OPENING_QUIZ_STATE],
				closing: [CLOSING_QUIZ_STATE],
				questions: questionsState,
			},
			clearDialog: false,
			errors: {},
		});
		this.clearLocal([
			"quiz-overviewValues",
			"quiz-quizQuestions",
			"numQuestions",
		]);
	};

	handleErrors = error => {
		this.setState({ errors: error });
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
		localStorage.setItem(`numQuestions`, e.target.value);
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

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleClose = event => {
		this.setState({ reduceDialog: false });
	};

	handleSend = values => {
		if (values.overviewValues !== this.state.overviewValues) {
			const prefix = Object.keys(values);
			localStorage.setItem(`quiz-${prefix[0]}`, JSON.stringify(values[prefix]));
		}
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
		await this.validate();
		if (
			Object.values(this.state.errors).every(
				x => x === "" || x === null || x === false,
			)
		) {
			const overviewDate = {
				...this.state.overviewValues,
				displayDate: moment().format(),
			};
			const submitQuiz = {
				overview: JSON.stringify(overviewDate),
				questions: [JSON.stringify(this.state.quizQuestions)],
				development: true,
				production: false,
				numQuestions: this.state.numQuizQuestions,
				quizUserId: this.context.profileId,
				original: true,
			};

			try {
				await API.graphql(graphqlOperation(createQuiz, { input: submitQuiz }));
				this.clearLocal([
					"quiz-overviewValues",
					"quiz-quizQuestions",
					"numQuestions",
				]);
				this.props.history.push("/home");
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
								this.clearLocal([
									"quiz-overviewValues",
									"quiz-quizQuestions",
									"numQuestions",
								]);
							}}
						>
							<Delete className={classes.rightIcon} />
							Clear Values
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
								production={this.state.production}
								development={this.state.development}
								handleSend={this.handleSend}
								stage={"initial"}
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
							{this.state.clearDialog && (
								<ClearDialog
									open={this.state.clearDialog}
									onClose={e => this.setState({ clearDialog: false })}
									accept={this.clearQuestionValues}
								/>
							)}
						</Paper>
					</SwipeableViews>
				</form>
			</div>
		);
	}
}

Quiz.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(quizStyles, { withTheme: true })(Quiz);
