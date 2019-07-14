const INITIAL_ARTICLE_OVERVIEW = {
  id: "",
  authorId: "",
  authorName: "",
  brief: "",
  category: "",
  headline: "",
  headlineSummary: "",
  headlineImage: "",
  headlineImageAlt: "",
  headlineImageAttribution: "",
  headlineImageAttributionLink: "",
  instantDevelopmentCheck: false,
  instantPublishCheck: false,
  kicker: "",
  longUrl: "",
  longMobileUrl: "",
  shareCount: "",
  shortUrl: "",
  shortMobileUrl: "",
  site: "",
  tags: [],
  tag: "",
  urlDescription: "",
  development: false,
  production: false,
  productionId: "",
  pushDate: "",
  schedule: "",
  scheduleTime: ""
};

const initialLayout = [
  {
    name: "headlineImage",
    type: "image"
  },
  {
    id: "Development",
    label: "Development",
    type: "checkBox",
    name: "development",
    width: "5%",
    layout: "inline-block"
  },
  {
    id: "Production",
    label: "Production",
    type: "checkBox",
    name: "production",
    width: "5%",
    layout: "inline-block"
  },
  {
    id: "InstantDevelopmentCheck",
    label: "Instant Development",
    type: "checkBox",
    name: "instantDevelopmentCheck",
    width: "5%",
    layout: "inline-block"
  },
  {
    id: "InstantPublishCheck",
    label: "Instant Publish Check",
    type: "checkBox",
    name: "instantPublishCheck",
    width: "5%",
    layout: "inline-block"
  },
  {
    id: "Headline",
    label: "Headline",
    type: "text",
    name: "headline",
    width: "45%",
    layout: "inline-block",
    gridCol: 1
  },
  {
    id: "Kicker",
    label: "Kicker",
    type: "text",
    name: "kicker",
    width: "45%",
    layout: "inline-block",
    gridCol: 2
  },
  {
    id: "HeadlineSummary",
    label: "Headline Summary",
    type: "text",
    name: "headlineSummary",
    width: "93%",
    layout: "inline-block",
    gridCol: 1
  },
  {
    id: "UrlDescription",
    label: "Url Description",
    type: "text",
    name: "urlDescription",
    width: "45%",
    layout: "inline-block",
    gridCol: 2
  },
  {
    id: "AuthorName",
    label: "Author Name",
    type: "text",
    name: "authorName",
    width: "45%",
    layout: "inline-block"
  },

  {
    id: "Category",
    label: "Category",
    type: "select",
    name: "category",
    width: "25%",
    layout: "inline-block",
    helper: "Enter Site",
    values: [
      {
        name: "Sport",
        type: "Sport",
        desc: "Sport"
      },
      {
        name: "Movie",
        type: "Movie",
        desc: "Movie"
      },
      {
        name: "Entrepreneur",
        type: "Entrepreneur",
        desc: "Entrepreneur"
      }
    ]
  },
  {
    id: "Brief",
    label: "Brief",
    type: "text",
    name: "brief",
    width: "65%",
    layout: "inline-block"
  },

  {
    id: "HeadlineImageAlt",
    label: "Headline Alt",
    type: "text",
    name: "headlineImageAlt",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "HaedlineImageAttribution",
    label: "HeadlineImage Attribution",
    type: "text",
    name: "headlineImageAttribution",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "HeadlineImageAttributionLink",
    label: "Headline Image Attribution Link",
    type: "text",
    name: "headlineImageAttributionLink",
    width: "27%",
    layout: "inline-block"
  },

  {
    id: "LongUrl",
    label: "Long Url",
    type: "text",
    name: "longUrl",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "LongMobileUrl",
    label: "Long Mobile Url",
    type: "text",
    name: "longMobileUrl",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "ShareCount",
    label: "Share Count",
    type: "text",
    name: "shareCount",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "ShortUrl",
    label: "Short Url",
    type: "text",
    name: "shortUrl",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "ShortMobileUrl",
    label: "Short Mobile Url",
    type: "text",
    name: "shortMobileUrl",
    width: "27%",
    layout: "inline-block"
  },
  {
    id: "Site",
    label: "Site",
    type: "select",
    name: "site",
    width: "27%",
    layout: "inline-block",
    helper: "Enter Site",
    values: [
      {
        name: "Sport",
        type: "Sport",
        desc: "Sport"
      },
      {
        name: "Movie",
        type: "Movie",
        desc: "Movie"
      },
      {
        name: "Entrepreneur",
        type: "Entrepreneur",
        desc: "Entrepreneur"
      }
    ]
  },

  {
    id: "Tags",
    label: "Tags",
    type: "tags",
    name: "tag",
    width: "95%",
    layout: "inline-block",
    tagArray: "tags"
  }
];

export { INITIAL_ARTICLE_OVERVIEW, initialLayout };
