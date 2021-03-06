const INITIAL_QUIZ_DETAILS = {
	headlineImage: "",
	headlineImageAlt: "",
	headlineImageAttribution: "",
	headlineImageAttributionLink: "",
	title: "",
	blurb: "",
	scoreCommentsDetails: {},
	numScoreComments: 1,
	quizUrl: "",
	metaTag: "",
	quizTitle: "",
	quizCategory: "",
	quizTags: [],
	quizTag: "",
	production: false,
	development: false,
};

const OPENING_QUIZ_STATE = {
	opening: "",
	openingImage: "",
	openingImageAlt: "",
	openingImageAttribution: "",
	openingImageAttributionLink: "",
};

const CLOSING_QUIZ_STATE = {
	closing: "",
	closingImage: "",
	closingImageAlt: "",
	closingImageAttribution: "",
	closingImageAttributionLink: "",
};

const INITIAL_QUESTIONS = [
	{
		value: 5,
		name: "Five",
	},
	{
		value: 10,
		name: "Ten",
	},
	{
		value: 15,
		name: "Fifteen",
	},
	{
		value: 20,
		name: "Twenty",
	},
	{
		value: 25,
		name: "Twenty Five",
	},
	{
		value: 30,
		name: "Thirty",
	},
	{
		value: 35,
		name: "Thirty Five",
	},
	{
		value: 40,
		name: "Forty",
	},
	{
		value: 50,
		name: "Fifty",
	},
];

const INITIAL_QUESTIONS_STATE = {
	questionPosition: "",
	questionImage: "",
	questionImageAttribution: "",
	questionImageAttributionLink: "",
	questionImageAlt: "",
	answerImage: "",
	answerImageAttribution: "",
	answerImageAttributionLink: "",
	answerImageAlt: "",
	longAnswer: "",
	longFalseAnswer: "",
	numCorrectAnswers: 1,
	numIncorrectAnswers: 1,
	correctAnswerDetails: {},
	inCorrectAnswerDetails: {},
};

const requiredValues = [
	"title",
	"blurb",
	"scoreComment1",
	"scoreComment2",
	"scoreComment3",
	"quizUrl",
	"metaTag",
	"quizTitle",
	"headlineImageAlt",
];

export {
	INITIAL_QUIZ_DETAILS,
	INITIAL_QUESTIONS,
	INITIAL_QUESTIONS_STATE,
	OPENING_QUIZ_STATE,
	CLOSING_QUIZ_STATE,
	requiredValues,
};
