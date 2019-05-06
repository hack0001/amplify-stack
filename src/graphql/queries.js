// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    articles {
      items {
        id
        authorId
        authorName
        brief
        category
        createdAt
        content
        development
        headline
        headlineSummary
        headlineImage
        headlineImageAlt
        headlineImageAttribution
        headlineImageAttributionLink
        instantDevelopmentCheck
        instantPublishCheck
        kicker
        longUrl
        longMobileUrl
        production
        productionId
        pushDate
        schedule
        scheduleTime
        shareCount
        shortUrl
        shortMobileUrl
        siteId
        tags
        updatedAt
        urlDescription
        userId
      }
      nextToken
    }
    conversations {
      items {
        id
        convoLinkUserId
        convoLinkConversationId
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    ideas {
      items {
        id
        category
        createdAt
        description
        projectId
        updatedAt
        userId
      }
      nextToken
    }
    messages {
      items {
        id
        authorId
        content
        createdAt
        messageConversationId
        updatedAt
      }
      nextToken
    }
    quiz {
      items {
        id
        category
        closingTitle
        closingImage
        closingImageAlt
        closingImageAttribution
        closingImageAttributionLink
        closingImageType
        createdAt
        development
        longQuizUrl
        longMobileQuizUrl
        metaTag
        numberOfQuestions
        opening
        openingBlurb
        openingImage
        openingImageAlt
        openingImageAttributionLink
        openingImageAttribution
        openingImageType
        production
        productionId
        schedule
        scheduleTime
        scoreCommentOne
        scoreCommmentTwo
        scoreCommmentThree
        shortMobileQuizUrl
        shortQuizUrl
        siteId
        tags
        title
        updatedAt
        userId
        urlDescription
      }
      nextToken
    }
    siteName
    slideShows {
      items {
        id
        category
        createdAt
        development
        longSlideUrl
        longMobileSlideUrl
        metaTag
        numberOfSlides
        opening
        openingBlurb
        openingImage
        openingImageAlt
        openingImageAttributionLink
        openingImageAttribution
        openingImageType
        production
        productionId
        schedule
        scheduleTime
        shortMobileSlideUrl
        shortSlideUrl
        siteId
        tags
        title
        updatedAt
        urlDescription
        userId
      }
      nextToken
    }
    updatedAt
    username
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      articles {
        nextToken
      }
      conversations {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      messages {
        nextToken
      }
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
    }
    nextToken
  }
}
`;
export const getSite = `query GetSite($id: ID!) {
  getSite(id: $id) {
    id
    articles {
      items {
        id
        authorId
        authorName
        brief
        category
        createdAt
        content
        development
        headline
        headlineSummary
        headlineImage
        headlineImageAlt
        headlineImageAttribution
        headlineImageAttributionLink
        instantDevelopmentCheck
        instantPublishCheck
        kicker
        longUrl
        longMobileUrl
        production
        productionId
        pushDate
        schedule
        scheduleTime
        shareCount
        shortUrl
        shortMobileUrl
        siteId
        tags
        updatedAt
        urlDescription
        userId
      }
      nextToken
    }
    createdAt
    ideas {
      items {
        id
        createdAt
        owner
        ownerName
        members
        name
        siteId
        updatedAt
      }
      nextToken
    }
    name
    quiz {
      items {
        id
        category
        closingTitle
        closingImage
        closingImageAlt
        closingImageAttribution
        closingImageAttributionLink
        closingImageType
        createdAt
        development
        longQuizUrl
        longMobileQuizUrl
        metaTag
        numberOfQuestions
        opening
        openingBlurb
        openingImage
        openingImageAlt
        openingImageAttributionLink
        openingImageAttribution
        openingImageType
        production
        productionId
        schedule
        scheduleTime
        scoreCommentOne
        scoreCommmentTwo
        scoreCommmentThree
        shortMobileQuizUrl
        shortQuizUrl
        siteId
        tags
        title
        updatedAt
        userId
        urlDescription
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        longSlideUrl
        longMobileSlideUrl
        metaTag
        numberOfSlides
        opening
        openingBlurb
        openingImage
        openingImageAlt
        openingImageAttributionLink
        openingImageAttribution
        openingImageType
        production
        productionId
        schedule
        scheduleTime
        shortMobileSlideUrl
        shortSlideUrl
        siteId
        tags
        title
        updatedAt
        urlDescription
        userId
      }
      nextToken
    }
    updatedAt
  }
}
`;
export const listSites = `query ListSites(
  $filter: ModelSiteFilterInput
  $limit: Int
  $nextToken: String
) {
  listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      name
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    nextToken
  }
}
`;
export const getQuiz = `query GetQuiz($id: ID!) {
  getQuiz(id: $id) {
    id
    category
    closingTitle
    closingImage
    closingImageAlt
    closingImageAttribution
    closingImageAttributionLink
    closingImageType
    createdAt
    development
    longQuizUrl
    longMobileQuizUrl
    metaTag
    numberOfQuestions
    opening
    openingBlurb
    openingImage
    openingImageAlt
    openingImageAttributionLink
    openingImageAttribution
    openingImageType
    production
    productionId
    questions {
      items {
        id
        answer
        closingImage
        closingImageAttribution
        closingImageAttributionLink
        closingImageAltTag
        closingImageType
        incorrectAnswers
        longAnswer
        longIncorrectAnswer
        openingImage
        openingImageAttribution
        openingImageAttributionLink
        openingImageAltTag
        openingImageType
        order
        question
        quizId
      }
      nextToken
    }
    schedule
    scheduleTime
    scoreCommentOne
    scoreCommmentTwo
    scoreCommmentThree
    shortMobileQuizUrl
    shortQuizUrl
    site {
      id
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      name
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    siteId
    tags
    title
    updatedAt
    user {
      id
      articles {
        nextToken
      }
      conversations {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      messages {
        nextToken
      }
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
    }
    userId
    urlDescription
  }
}
`;
export const listQuizs = `query ListQuizs(
  $filter: ModelQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      closingTitle
      closingImage
      closingImageAlt
      closingImageAttribution
      closingImageAttributionLink
      closingImageType
      createdAt
      development
      longQuizUrl
      longMobileQuizUrl
      metaTag
      numberOfQuestions
      opening
      openingBlurb
      openingImage
      openingImageAlt
      openingImageAttributionLink
      openingImageAttribution
      openingImageType
      production
      productionId
      questions {
        nextToken
      }
      schedule
      scheduleTime
      scoreCommentOne
      scoreCommmentTwo
      scoreCommmentThree
      shortMobileQuizUrl
      shortQuizUrl
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      tags
      title
      updatedAt
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
      urlDescription
    }
    nextToken
  }
}
`;
export const getArticle = `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    authorId
    authorName
    brief
    category
    createdAt
    content
    development
    headline
    headlineSummary
    headlineImage
    headlineImageAlt
    headlineImageAttribution
    headlineImageAttributionLink
    instantDevelopmentCheck
    instantPublishCheck
    kicker
    longUrl
    longMobileUrl
    production
    productionId
    pushDate
    schedule
    scheduleTime
    shareCount
    shortUrl
    shortMobileUrl
    site {
      id
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      name
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    siteId
    tags
    updatedAt
    urlDescription
    user {
      id
      articles {
        nextToken
      }
      conversations {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      messages {
        nextToken
      }
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
    }
    userId
  }
}
`;
export const listArticles = `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      authorId
      authorName
      brief
      category
      createdAt
      content
      development
      headline
      headlineSummary
      headlineImage
      headlineImageAlt
      headlineImageAttribution
      headlineImageAttributionLink
      instantDevelopmentCheck
      instantPublishCheck
      kicker
      longUrl
      longMobileUrl
      production
      productionId
      pushDate
      schedule
      scheduleTime
      shareCount
      shortUrl
      shortMobileUrl
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      tags
      updatedAt
      urlDescription
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    nextToken
  }
}
`;
export const getSlideShow = `query GetSlideShow($id: ID!) {
  getSlideShow(id: $id) {
    id
    category
    createdAt
    development
    longSlideUrl
    longMobileSlideUrl
    metaTag
    numberOfSlides
    opening
    openingBlurb
    openingImage
    openingImageAlt
    openingImageAttributionLink
    openingImageAttribution
    openingImageType
    production
    productionId
    slides {
      items {
        id
        media
        mediaAttribution
        mediaAttributionLink
        mediaAltTag
        slideTitle
        slideShowId
        content
        order
      }
      nextToken
    }
    schedule
    scheduleTime
    shortMobileSlideUrl
    shortSlideUrl
    site {
      id
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      name
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    siteId
    tags
    title
    updatedAt
    urlDescription
    user {
      id
      articles {
        nextToken
      }
      conversations {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      messages {
        nextToken
      }
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
    }
    userId
  }
}
`;
export const listSlideShows = `query ListSlideShows(
  $filter: ModelSlideShowFilterInput
  $limit: Int
  $nextToken: String
) {
  listSlideShows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      createdAt
      development
      longSlideUrl
      longMobileSlideUrl
      metaTag
      numberOfSlides
      opening
      openingBlurb
      openingImage
      openingImageAlt
      openingImageAttributionLink
      openingImageAttribution
      openingImageType
      production
      productionId
      slides {
        nextToken
      }
      schedule
      scheduleTime
      shortMobileSlideUrl
      shortSlideUrl
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      tags
      title
      updatedAt
      urlDescription
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    nextToken
  }
}
`;
export const getCalendarYear = `query GetCalendarYear($id: ID!) {
  getCalendarYear(id: $id) {
    id
    createdAt
    month {
      items {
        id
        createdAt
        month
        yearId
        updatedAt
      }
      nextToken
    }
    year
    updatedAt
  }
}
`;
export const listCalendarYears = `query ListCalendarYears(
  $filter: ModelCalendarYearFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalendarYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      month {
        nextToken
      }
      year
      updatedAt
    }
    nextToken
  }
}
`;
export const getConvo = `query GetConvo($id: ID!) {
  getConvo(id: $id) {
    id
    associated {
      items {
        id
        convoLinkUserId
        convoLinkConversationId
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    members
    messages {
      items {
        id
        authorId
        content
        createdAt
        messageConversationId
        updatedAt
      }
      nextToken
    }
    name
    updatedAt
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    createdAt
    headCols {
      items {
        id
        label
        numeric
        order
        projectName
        projectId
      }
      nextToken
    }
    owner
    ownerName
    members
    name
    site {
      id
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      name
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    siteId
    task {
      items {
        id
        category
        createdAt
        description
        projectId
        updatedAt
        userId
      }
      nextToken
    }
    updatedAt
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      headCols {
        nextToken
      }
      owner
      ownerName
      members
      name
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      task {
        nextToken
      }
      updatedAt
    }
    nextToken
  }
}
`;
export const searchQuizs = `query SearchQuizs(
  $filter: SearchableQuizFilterInput
  $sort: SearchableQuizSortInput
  $limit: Int
  $nextToken: Int
) {
  searchQuizs(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      category
      closingTitle
      closingImage
      closingImageAlt
      closingImageAttribution
      closingImageAttributionLink
      closingImageType
      createdAt
      development
      longQuizUrl
      longMobileQuizUrl
      metaTag
      numberOfQuestions
      opening
      openingBlurb
      openingImage
      openingImageAlt
      openingImageAttributionLink
      openingImageAttribution
      openingImageType
      production
      productionId
      questions {
        nextToken
      }
      schedule
      scheduleTime
      scoreCommentOne
      scoreCommmentTwo
      scoreCommmentThree
      shortMobileQuizUrl
      shortQuizUrl
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      tags
      title
      updatedAt
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
      urlDescription
    }
    nextToken
  }
}
`;
export const searchArticles = `query SearchArticles(
  $filter: SearchableArticleFilterInput
  $sort: SearchableArticleSortInput
  $limit: Int
  $nextToken: Int
) {
  searchArticles(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorId
      authorName
      brief
      category
      createdAt
      content
      development
      headline
      headlineSummary
      headlineImage
      headlineImageAlt
      headlineImageAttribution
      headlineImageAttributionLink
      instantDevelopmentCheck
      instantPublishCheck
      kicker
      longUrl
      longMobileUrl
      production
      productionId
      pushDate
      schedule
      scheduleTime
      shareCount
      shortUrl
      shortMobileUrl
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      tags
      updatedAt
      urlDescription
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    nextToken
  }
}
`;
export const searchSlideShows = `query SearchSlideShows(
  $filter: SearchableSlideShowFilterInput
  $sort: SearchableSlideShowSortInput
  $limit: Int
  $nextToken: Int
) {
  searchSlideShows(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      category
      createdAt
      development
      longSlideUrl
      longMobileSlideUrl
      metaTag
      numberOfSlides
      opening
      openingBlurb
      openingImage
      openingImageAlt
      openingImageAttributionLink
      openingImageAttribution
      openingImageType
      production
      productionId
      slides {
        nextToken
      }
      schedule
      scheduleTime
      shortMobileSlideUrl
      shortSlideUrl
      site {
        id
        createdAt
        name
        updatedAt
      }
      siteId
      tags
      title
      updatedAt
      urlDescription
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    nextToken
  }
}
`;
