// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCalendarMonth = `query GetCalendarMonth($id: ID!) {
  getCalendarMonth(id: $id) {
    id
    createdAt
    day {
      items {
        id
        category
        createdAt
        description
        eventName
        updatedAt
        site
        year
        day
      }
      nextToken
    }
    month
    updatedAt
  }
}
`;
export const listCalendarMonths = `query ListCalendarMonths(
  $filter: ModelCalendarMonthFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalendarMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      day {
        nextToken
      }
      month
      updatedAt
    }
    nextToken
  }
}
`;
export const getCalendarDay = `query GetCalendarDay($id: ID!) {
  getCalendarDay(id: $id) {
    id
    calendarMonth {
      id
      createdAt
      day {
        nextToken
      }
      month
      updatedAt
    }
    category
    createdAt
    description
    eventName
    updatedAt
    site
    year
    day
  }
}
`;
export const listCalendarDays = `query ListCalendarDays(
  $filter: ModelCalendarDayFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalendarDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      calendarMonth {
        id
        createdAt
        month
        updatedAt
      }
      category
      createdAt
      description
      eventName
      updatedAt
      site
      year
      day
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($id: ID!) {
  getConversation(id: $id) {
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
    subject
    conversationCreator
  }
}
`;
export const listConversations = `query ListConversations(
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      associated {
        nextToken
      }
      createdAt
      members
      messages {
        nextToken
      }
      name
      updatedAt
      subject
      conversationCreator
    }
    nextToken
  }
}
`;
export const getChatUser = `query GetChatUser($id: ID!) {
  getChatUser(id: $id) {
    id
    username
    creator
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
    createdAt
    updatedAt
    alias
    imageLink
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      lastLoggedIn
      twitterProfile
      facebookProfile
      linkedinProfile
      instagramProfile
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
      alias
      phoneNumber
      imageLink
      numberPosts
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
      }
    }
  }
}
`;
export const listChatUsers = `query ListChatUsers(
  $filter: ModelChatUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      creator
      conversations {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
      alias
      imageLink
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
    }
    nextToken
  }
}
`;
export const getImage = `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    name
    description
    image
    category
    type
    size
    height
    width
    imageAttribution
    imageAttributionLink
    createdAt
    updatedAt
    access
    tags
  }
}
`;
export const listImages = `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      category
      type
      size
      height
      width
      imageAttribution
      imageAttributionLink
      createdAt
      updatedAt
      access
      tags
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
        tags
        updatedAt
        urlDescription
      }
      nextToken
    }
    createdAt
    description
    tasks {
      items {
        id
        category
        createdAt
        content
        siteId
        userId
        members
        name
        updatedAt
        type
        title
        status
      }
      nextToken
    }
    name
    type
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
        tags
        title
        updatedAt
        urlDescription
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
      description
      tasks {
        nextToken
      }
      name
      type
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
        closingImage
        closingImageAttribution
        closingImageAttributionLink
        closingImageAltTag
        closingImageType
        longAnswer
        longIncorrectAnswer
        openingImage
        openingImageAttribution
        openingImageAttributionLink
        openingImageAltTag
        openingImageType
        order
        question
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
      description
      tasks {
        nextToken
      }
      name
      type
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    tags
    title
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      lastLoggedIn
      twitterProfile
      facebookProfile
      linkedinProfile
      instagramProfile
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
      alias
      phoneNumber
      imageLink
      numberPosts
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
      }
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
        description
        name
        type
        updatedAt
      }
      tags
      title
      updatedAt
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
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
      description
      tasks {
        nextToken
      }
      name
      type
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    tags
    updatedAt
    urlDescription
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      lastLoggedIn
      twitterProfile
      facebookProfile
      linkedinProfile
      instagramProfile
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
      alias
      phoneNumber
      imageLink
      numberPosts
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
      }
    }
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
        description
        name
        type
        updatedAt
      }
      tags
      updatedAt
      urlDescription
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
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
      description
      tasks {
        nextToken
      }
      name
      type
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    tags
    title
    updatedAt
    urlDescription
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      lastLoggedIn
      twitterProfile
      facebookProfile
      linkedinProfile
      instagramProfile
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
      alias
      phoneNumber
      imageLink
      numberPosts
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
      }
    }
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
        description
        name
        type
        updatedAt
      }
      tags
      title
      updatedAt
      urlDescription
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    category
    createdAt
    content
    site {
      id
      articles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      updatedAt
    }
    siteId
    userId
    members
    name
    updatedAt
    type
    title
    status
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      lastLoggedIn
      twitterProfile
      facebookProfile
      linkedinProfile
      instagramProfile
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
      alias
      phoneNumber
      imageLink
      numberPosts
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
      }
    }
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      createdAt
      content
      site {
        id
        createdAt
        description
        name
        type
        updatedAt
      }
      siteId
      userId
      members
      name
      updatedAt
      type
      title
      status
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userId
    creator
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
        tags
        updatedAt
        urlDescription
      }
      nextToken
    }
    createdAt
    ideas {
      items {
        id
        category
        createdAt
        content
        siteId
        userId
        members
        name
        updatedAt
        type
        title
        status
      }
      nextToken
    }
    lastLoggedIn
    twitterProfile
    facebookProfile
    linkedinProfile
    instagramProfile
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
        tags
        title
        updatedAt
        urlDescription
      }
      nextToken
    }
    updatedAt
    username
    alias
    phoneNumber
    imageLink
    numberPosts
    chatUser {
      id
      username
      creator
      conversations {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
      alias
      imageLink
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
    }
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
      userId
      creator
      articles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      lastLoggedIn
      twitterProfile
      facebookProfile
      linkedinProfile
      instagramProfile
      quiz {
        nextToken
      }
      siteName
      slideShows {
        nextToken
      }
      updatedAt
      username
      alias
      phoneNumber
      imageLink
      numberPosts
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
      }
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
        description
        name
        type
        updatedAt
      }
      tags
      title
      updatedAt
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
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
        description
        name
        type
        updatedAt
      }
      tags
      updatedAt
      urlDescription
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
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
        description
        name
        type
        updatedAt
      }
      tags
      title
      updatedAt
      urlDescription
      user {
        id
        userId
        creator
        createdAt
        lastLoggedIn
        twitterProfile
        facebookProfile
        linkedinProfile
        instagramProfile
        siteName
        updatedAt
        username
        alias
        phoneNumber
        imageLink
        numberPosts
      }
    }
    nextToken
  }
}
`;
