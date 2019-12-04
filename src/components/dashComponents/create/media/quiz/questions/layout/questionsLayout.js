const questionLayout = [
	{
		name: "questionImage",
		type: "image",
		alt: "questionImageAlt",
		question: true,
	},
	{
		name: "questionPosition",
		placeholder: "Position",
		type: "selectField",
		layout: "inline-block",
		width: "25%",
	},
	{
		name: "questionImageAlt",
		placeholder: "Alt Tag",
		type: "textField",
		width: "75%",
	},
	{
		name: "questionImageAttribution",
		placeholder: "Attribution",
		type: "textField",
		width: "100%",
	},
	{
		name: "questionImageAttributionLink",
		placeholder: "Attribution Link",
		type: "textField",
		width: "100%",
	},
	{
		name: "question",
		placeholder: "Question",
		type: "textField",
		width: "100%",
	},
];

const answerLayout = [
	{
		name: "answerImage",
		type: "image",
		alt: "answerImageAlt",
		question: false,
	},
	{
		id: "NumberCorrectAnswers",
		placeholder: "Number of Correct Answers",
		selectName: "correctAnswer",
		type: "selection",
		name: "numCorrectAnswers",
		details: "correctAnswerDetails",
		width: "100%",
		layout: "block",
		helper: "Enter Number of Correct Answers",
		selectVals: [
			{
				name: 1,
				type: 1,
				desc: "One",
			},
			{
				name: 2,
				type: 2,
				desc: "Two",
			},
			{
				name: 3,
				type: 3,
				desc: "Three",
			},
			{
				name: 4,
				type: 4,
				desc: "Four",
			},
			{
				name: 5,
				type: 5,
				desc: "Five",
			},
			{
				name: 10,
				type: 10,
				desc: "Ten",
			},
		],
	},
	{
		id: "CorrectAnswers",
		type: "answers",
		details: "correctAnswerDetails",
		numAnswers: "numCorrectAnswers",
		schema: {
			id: "CorrrectAnswer",
			placeholder: "Correct Answer",
			type: "textField",
			name: "correctAnswer",
			width: "100%",
			layout: "block",
			helper: "Enter Correct Answer",
		},
	},

	{
		id: "NumberIncorrectAnswers",
		selectName: "incorrectAnswer",
		placeholder: "Number of Incorrect Answers",
		details: "inCorrectAnswerDetails",
		type: "selection",
		name: "numIncorrectAnswers",
		width: "100%",
		layout: "block",
		helper: "Enter Number of Incorrect Answers",
		selectVals: [
			{
				name: 1,
				type: 1,
				desc: "One",
			},
			{
				name: 2,
				type: 2,
				desc: "Two",
			},
			{
				name: 3,
				type: 3,
				desc: "Three",
			},
			{
				name: 4,
				type: 4,
				desc: "Four",
			},
			{
				name: 5,
				type: 5,
				desc: "Five",
			},
			{
				name: 10,
				type: 10,
				desc: "Ten",
			},
		],
	},
	{
		id: "IncorrectAnswer",
		type: "answers",
		numAnswers: "numIncorrectAnswers",
		details: "inCorrectAnswerDetails",
		schema: {
			id: "IncorrectAnswer",
			placeholder: "Incorrect Answer",
			type: "textField",
			name: "incorrectAnswer",
			width: "100%",
			layout: "block",
			helper: "Enter Incorrect Answer",
		},
	},

	{
		name: "longAnswer",
		placeholder: "Enter Long Answer",
		type: "editor",
		width: "100%",
		height: "250px",
	},
	{
		name: "longFalseAnswer",
		placeholder: "Enter Long Incorrect Answer",
		type: "editor",
		width: "100%",
		height: "250px",
	},

	{
		name: "answerImageAlt",
		placeholder: "Alt Tag",
		type: "textField",
		width: "50%",
	},
	{
		name: "answerImageAttribution",
		placeholder: "Attribution",
		type: "textField",
		width: "50%",
	},
	{
		name: "answerImageAttributionLink",
		placeholder: "Attribution Link",
		type: "textField",
		width: "100%",
	},
];

export { questionLayout, answerLayout };
