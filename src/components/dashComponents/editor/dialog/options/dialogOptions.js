const options = {
  embed: {
    title: "Embed",
    content: "Please enter a valid Url to embed",
    form: [
      {
        type: "url",
        label: "Please Enter Url"
      },
      {
        type: "caption",
        label: "Enter Caption (optional)"
      },
      {
        type: "attribution",
        label: "Attribution"
      },
      {
        type: "attributionLink",
        label: "Attribution Link"
      }
    ]
  },
  quote: {
    title: "Quote",
    content: "Please enter a quote together with its original author",
    form: [
      {
        type: "quote",
        label: "Please Enter a Quote"
      },
      {
        type: "additionalQuote",
        label: "Long Quote or Details"
      },
      {
        type: "author",
        label: "Quote Author"
      },
      {
        type: "quoteImage",
        label: "Quote Image Url(optional) "
      },
      {
        type: "quoteStyle",
        label: "Quote Style",
        values: [
          { name: "Normal", type: "normal" },
          { name: "Instagram", type: "instagram" },
          { name: "Electric", type: "electric" },
          { name: "Shrimpy", type: "shrimpy" }
        ]
      }
    ]
  },
  link: {
    title: "Link",
    content: "Please enter a valid Url to link the selection",
    form: [
      {
        type: "linkUrl",
        label: "Please Url to Link"
      }
    ]
  },
  default: {
    title: "Default",
    content: "Default",
    form: [
      {
        type: "default",
        label: "default"
      }
    ]
  }
};

export default options;
