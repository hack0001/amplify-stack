const quizLayout = [
  {
    name: "headlineImage",
    type: "image"
  },
  {
    name: "title",
    placeholder: "Quiz Title",
    type: "textField"
  },
  {
    name: "headlineImageAlt",
    placeholder: "Alt",
    type: "textField"
  },
  {
    name: "headlineImageAttribution",
    placeholder: "Image Attribution",
    type: "textField"
  },
  {
    name: "headlineImageAttributionLink",
    placeholder: "Attribution Link",
    type: "textField"
  },
  {
    name: "blurb",
    placeholder: "Quiz Blurb",
    type: "textField"
  },
  {
    name: "scoreComment1",
    placeholder: "Score Comment 1",
    type: "textField"
  },
  {
    name: "scoreComment2",
    placeholder: "Score Comment 2",
    type: "textField"
  },
  {
    name: "scoreComment3",
    placeholder: "Score Comment 3",
    type: "textField"
  },

  {
    name: "quizUrl",
    placeholder: "Quiz Url",
    type: "textField"
  },
  {
    name: "metaTag",
    placeholder: "Quiz Meta Tag",
    type: "textField"
  },
  {
    name: "quizTitle",
    placeholder: "Quiz Title",
    type: "textField"
  },
  {
    name: "quizCategory",
    placeholder: "Quiz Category",
    type: "selection",
    helper: "Enter category",
    selectVals: [
      {
        value: 0,
        name: "Sport"
      },
      {
        value: 1,
        name: "Entrepreneur"
      },
      {
        value: 2,
        name: "Film"
      }
    ]
  },
  {
    name: "quizTag",
    placeholder: "Quiz Tags",
    type: "tags",
    tagArray: "quizTags"
  }
];
export { quizLayout };
