import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import _ from "lodash";
import QuizCard from "./questionSlides/quizCard";
import { quizStyles } from "../styles/quizStyles";
import TabContainer from "../../tabContainer/tabContainer";
import OpeningClose from "./openCloseSlide/openingClosingSlide";
import {
	openingQuestionsLayout,
	closingQuestionsLayout,
} from "./layout/openingQuestionLayout";
import { questionLayout, answerLayout } from "./layout/questionsLayout";

const QuizQuestions = props => {
	const [tab, setTab] = useState(0);
	const { classes, numberQuestions, questions, handleSend, theme } = props;

	const questionsArray = _.range(numberQuestions).map((val, index) => {
		return { ...questions.questions[0], questionPosition: index + 1 };
	});

	questionsArray.unshift(questions.opening[0]);
	questionsArray.push(questions.closing[0]);

	const questionsTitle = _.reduce(
		_.range(numberQuestions + 2),
		(running, value) => {
			const title =
				value === 0
					? `Opening Slide`
					: value === questionsArray.length - 1
					? `Closing Slide`
					: `Question ${value}`;
			running.push({
				title,
			});
			return running;
		},
		[],
	);

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={tab}
					onChange={(e, value) => {
						setTab(value);
					}}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
				>
					{questionsTitle.map((tab, index) => {
						return <Tab label={`${tab.title}`} key={index} />;
					})}
				</Tabs>
			</AppBar>

			{questionsArray.map((question, index) => {
				if (tab === index) {
					if (index === 0) {
						return (
							<TabContainer key={index}>
								<OpeningClose
									handleSend={handleSend}
									layout={openingQuestionsLayout}
									data={question}
									allData={questions}
									open={true}
									currentTab={tab}
									setNewTab={setTab}
								/>
							</TabContainer>
						);
					} else if (index === questionsArray.length - 1) {
						return (
							<TabContainer key={index}>
								<OpeningClose
									handleSend={handleSend}
									layout={closingQuestionsLayout}
									data={question}
									allData={questions}
									open={false}
									currentTab={tab}
									setNewTab={setTab}
								/>
							</TabContainer>
						);
					} else {
						return (
							<TabContainer key={index}>
								<QuizCard
									handleSend={handleSend}
									questionLayout={questionLayout}
									answerLayout={answerLayout}
									data={question}
									allData={questions}
									currentTab={tab}
									setNewTab={setTab}
								/>
							</TabContainer>
						);
					}
				}
			})}
		</div>
	);
};

QuizQuestions.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(quizStyles, { withTheme: true })(QuizQuestions);
