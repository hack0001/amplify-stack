const slideLayout = [
  {
    name: "headlineImage",
    type: "image"
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
    name: "title",
    placeholder: "Slide Title",
    type: "textField"
  },
  {
    name: "blurb",
    placeholder: "Slide Blurb",
    type: "textField"
  },
  {
    name: "slideUrl",
    placeholder: "Slide Url",
    type: "textField"
  },
  {
    name: "metaTag",
    placeholder: "Slide Meta Tag",
    type: "textField"
  },
  {
    name: "slideTitle",
    placeholder: "Slide Title",
    type: "textField"
  },
  {
    name: "slideCategory",
    placeholder: "Slide Category",
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
    name: "slideTag",
    placeholder: "Slide Tags",
    type: "tags",
    tagArray: "slideTags"
  }
];
export { slideLayout };
