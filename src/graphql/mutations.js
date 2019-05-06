// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createSite = `mutation CreateSite($input: CreateSiteInput!) {
  createSite(input: $input) {
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
export const updateSite = `mutation UpdateSite($input: UpdateSiteInput!) {
  updateSite(input: $input) {
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
export const deleteSite = `mutation DeleteSite($input: DeleteSiteInput!) {
  deleteSite(input: $input) {
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
export const createQuiz = `mutation CreateQuiz($input: CreateQuizInput!) {
  createQuiz(input: $input) {
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
export const updateQuiz = `mutation UpdateQuiz($input: UpdateQuizInput!) {
  updateQuiz(input: $input) {
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
export const deleteQuiz = `mutation DeleteQuiz($input: DeleteQuizInput!) {
  deleteQuiz(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
    quiz {
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
    quizId
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
    quiz {
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
    quizId
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
    quiz {
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
    quizId
  }
}
`;
export const createArticle = `mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(input: $input) {
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
export const updateArticle = `mutation UpdateArticle($input: UpdateArticleInput!) {
  updateArticle(input: $input) {
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
export const deleteArticle = `mutation DeleteArticle($input: DeleteArticleInput!) {
  deleteArticle(input: $input) {
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
export const createSlideShow = `mutation CreateSlideShow($input: CreateSlideShowInput!) {
  createSlideShow(input: $input) {
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
export const updateSlideShow = `mutation UpdateSlideShow($input: UpdateSlideShowInput!) {
  updateSlideShow(input: $input) {
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
export const deleteSlideShow = `mutation DeleteSlideShow($input: DeleteSlideShowInput!) {
  deleteSlideShow(input: $input) {
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
export const createSlide = `mutation CreateSlide($input: CreateSlideInput!) {
  createSlide(input: $input) {
    id
    media
    mediaAttribution
    mediaAttributionLink
    mediaAltTag
    slideTitle
    slideShow {
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
    slideShowId
    content
    order
  }
}
`;
export const updateSlide = `mutation UpdateSlide($input: UpdateSlideInput!) {
  updateSlide(input: $input) {
    id
    media
    mediaAttribution
    mediaAttributionLink
    mediaAltTag
    slideTitle
    slideShow {
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
    slideShowId
    content
    order
  }
}
`;
export const deleteSlide = `mutation DeleteSlide($input: DeleteSlideInput!) {
  deleteSlide(input: $input) {
    id
    media
    mediaAttribution
    mediaAttributionLink
    mediaAltTag
    slideTitle
    slideShow {
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
    slideShowId
    content
    order
  }
}
`;
export const createCalendarYear = `mutation CreateCalendarYear($input: CreateCalendarYearInput!) {
  createCalendarYear(input: $input) {
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
export const updateCalendarYear = `mutation UpdateCalendarYear($input: UpdateCalendarYearInput!) {
  updateCalendarYear(input: $input) {
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
export const deleteCalendarYear = `mutation DeleteCalendarYear($input: DeleteCalendarYearInput!) {
  deleteCalendarYear(input: $input) {
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
export const createCalendarMonth = `mutation CreateCalendarMonth($input: CreateCalendarMonthInput!) {
  createCalendarMonth(input: $input) {
    id
    createdAt
    day {
      items {
        id
        category
        createdAt
        description
        eventName
        lastUpdated
        monthId
      }
      nextToken
    }
    month
    year {
      id
      createdAt
      month {
        nextToken
      }
      year
      updatedAt
    }
    yearId
    updatedAt
  }
}
`;
export const updateCalendarMonth = `mutation UpdateCalendarMonth($input: UpdateCalendarMonthInput!) {
  updateCalendarMonth(input: $input) {
    id
    createdAt
    day {
      items {
        id
        category
        createdAt
        description
        eventName
        lastUpdated
        monthId
      }
      nextToken
    }
    month
    year {
      id
      createdAt
      month {
        nextToken
      }
      year
      updatedAt
    }
    yearId
    updatedAt
  }
}
`;
export const deleteCalendarMonth = `mutation DeleteCalendarMonth($input: DeleteCalendarMonthInput!) {
  deleteCalendarMonth(input: $input) {
    id
    createdAt
    day {
      items {
        id
        category
        createdAt
        description
        eventName
        lastUpdated
        monthId
      }
      nextToken
    }
    month
    year {
      id
      createdAt
      month {
        nextToken
      }
      year
      updatedAt
    }
    yearId
    updatedAt
  }
}
`;
export const createCalendarDay = `mutation CreateCalendarDay($input: CreateCalendarDayInput!) {
  createCalendarDay(input: $input) {
    id
    calendarMonth {
      id
      createdAt
      day {
        nextToken
      }
      month
      year {
        id
        createdAt
        year
        updatedAt
      }
      yearId
      updatedAt
    }
    category
    createdAt
    description
    eventName
    lastUpdated
    monthId
  }
}
`;
export const updateCalendarDay = `mutation UpdateCalendarDay($input: UpdateCalendarDayInput!) {
  updateCalendarDay(input: $input) {
    id
    calendarMonth {
      id
      createdAt
      day {
        nextToken
      }
      month
      year {
        id
        createdAt
        year
        updatedAt
      }
      yearId
      updatedAt
    }
    category
    createdAt
    description
    eventName
    lastUpdated
    monthId
  }
}
`;
export const deleteCalendarDay = `mutation DeleteCalendarDay($input: DeleteCalendarDayInput!) {
  deleteCalendarDay(input: $input) {
    id
    calendarMonth {
      id
      createdAt
      day {
        nextToken
      }
      month
      year {
        id
        createdAt
        year
        updatedAt
      }
      yearId
      updatedAt
    }
    category
    createdAt
    description
    eventName
    lastUpdated
    monthId
  }
}
`;
export const createConvo = `mutation CreateConvo($input: CreateConversationInput!) {
  createConvo(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    author {
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
    authorId
    content
    conversation {
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
    }
    createdAt
    messageConversationId
    updatedAt
  }
}
`;
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    id
    author {
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
    authorId
    content
    conversation {
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
    }
    createdAt
    messageConversationId
    updatedAt
  }
}
`;
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    id
    author {
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
    authorId
    content
    conversation {
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
    }
    createdAt
    messageConversationId
    updatedAt
  }
}
`;
export const createConvoLink = `mutation CreateConvoLink($input: CreateConvoLinkInput!) {
  createConvoLink(input: $input) {
    id
    convoLinkUserId
    conversation {
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
    }
    convoLinkConversationId
    createdAt
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
  }
}
`;
export const updateConvoLink = `mutation UpdateConvoLink($input: UpdateConvoLinkInput!) {
  updateConvoLink(input: $input) {
    id
    convoLinkUserId
    conversation {
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
    }
    convoLinkConversationId
    createdAt
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
  }
}
`;
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
export const createColTitle = `mutation CreateColTitle($input: CreateColTitleInput!) {
  createColTitle(input: $input) {
    id
    label
    numeric
    order
    project {
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
    projectName
    projectId
  }
}
`;
export const updateColTitle = `mutation UpdateColTitle($input: UpdateColTitleInput!) {
  updateColTitle(input: $input) {
    id
    label
    numeric
    order
    project {
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
    projectName
    projectId
  }
}
`;
export const deleteColTitle = `mutation DeleteColTitle($input: DeleteColTitleInput!) {
  deleteColTitle(input: $input) {
    id
    label
    numeric
    order
    project {
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
    projectName
    projectId
  }
}
`;
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    category
    createdAt
    description
    details {
      items {
        id
        order
        taskDetailLabel
        taskDetailContent
        taskId
        taskType
      }
      nextToken
    }
    project {
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
    projectId
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
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    category
    createdAt
    description
    details {
      items {
        id
        order
        taskDetailLabel
        taskDetailContent
        taskId
        taskType
      }
      nextToken
    }
    project {
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
    projectId
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
  }
}
`;
export const createTaskDetail = `mutation CreateTaskDetail($input: CreateTaskDetailInput!) {
  createTaskDetail(input: $input) {
    id
    order
    task {
      id
      category
      createdAt
      description
      details {
        nextToken
      }
      project {
        id
        createdAt
        owner
        ownerName
        members
        name
        siteId
        updatedAt
      }
      projectId
      updatedAt
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    taskDetailLabel
    taskDetailContent
    taskId
    taskType
  }
}
`;
export const updateTaskDetail = `mutation UpdateTaskDetail($input: UpdateTaskDetailInput!) {
  updateTaskDetail(input: $input) {
    id
    order
    task {
      id
      category
      createdAt
      description
      details {
        nextToken
      }
      project {
        id
        createdAt
        owner
        ownerName
        members
        name
        siteId
        updatedAt
      }
      projectId
      updatedAt
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    taskDetailLabel
    taskDetailContent
    taskId
    taskType
  }
}
`;
export const deleteTaskDetail = `mutation DeleteTaskDetail($input: DeleteTaskDetailInput!) {
  deleteTaskDetail(input: $input) {
    id
    order
    task {
      id
      category
      createdAt
      description
      details {
        nextToken
      }
      project {
        id
        createdAt
        owner
        ownerName
        members
        name
        siteId
        updatedAt
      }
      projectId
      updatedAt
      user {
        id
        createdAt
        siteName
        updatedAt
        username
      }
      userId
    }
    taskDetailLabel
    taskDetailContent
    taskId
    taskType
  }
}
`;
