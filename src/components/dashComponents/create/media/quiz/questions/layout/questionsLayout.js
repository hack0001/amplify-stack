const questionLayout = [
  {
    name: "questionImage",
    type: "image",
    alt: "questionImageAlt",
    question: true
  },
  {
    name: "questionPosition",
    placeholder: "Position",
    type: "textField",
    width: "25%"
  },

  {
    name: "questionImageAlt",
    placeholder: "Alt Tag",
    type: "textField",
    width: "75%"
  },

  {
    name: "question",
    placeholder: "Question",
    type: "textField",
    width: "100%"
  },
  {
    name: "questionImageAttribution",
    placeholder: "Attribution",
    type: "textField",
    width: "100%"
  },
  {
    name: "questionImageAttributionLink",
    placeholder: "Attribution Link",
    type: "textField",
    width: "100%"
  }
];

const answerLayout = [
  {
    name: "answerImage",
    type: "image",
    alt: "answerImageAlt",
    question: false
  },
  {
    name: "answer",
    placeholder: "Answer",
    type: "textField",
    width: "50%"
  },

  {
    name: "wrongAnswer1",
    placeholder: "1st Wrong Answer",
    type: "textField",
    width: "50%"
  },
  {
    name: "wrongAnswer2",
    placeholder: "2nd Wrong Answer",
    type: "textField",
    width: "50%"
  },
  {
    name: "wrongAnswer3",
    placeholder: "3rd Wrong Answer",
    type: "textField",
    width: "50%"
  },
  {
    name: "longAnswer",
    placeholder: "Long Answer",
    type: "textField",
    width: "100%"
  },
  {
    name: "longFalseAnswer",
    placeholder: "Long Incorrect Answer",
    type: "textField",
    width: "100%"
  },
  {
    name: "answerImageAlt",
    placeholder: "Alt Tag",
    type: "textField",
    width: "50%"
  },
  {
    name: "answerImageAttribution",
    placeholder: "Attribution",
    type: "textField",
    width: "50%"
  },
  {
    name: "answerImageAttributionLink",
    placeholder: "Attribution Link",
    type: "textField",
    width: "100%"
  }
];

export { questionLayout, answerLayout };
