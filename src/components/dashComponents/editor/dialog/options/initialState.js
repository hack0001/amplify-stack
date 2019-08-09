const INITIAL_STATE = {
  embed: {
    url: "",
    caption: "",
    attribution: "",
    attributionLink: ""
  },
  quote: {
    quote: "",
    additionalQuote: "",
    author: "",
    quoteImage: "",
    colorStyle: ""
  },
  link: {
    linkUrl: ""
  }
};

const INITIAL_IMAGE_STATE = {
  imageUrl: "",
  imageAttribution: "",
  imageAttributionLink: "",
  imageAlt: ""
};

export { INITIAL_STATE, INITIAL_IMAGE_STATE };
