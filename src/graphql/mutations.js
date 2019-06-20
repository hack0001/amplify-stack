// eslint-disable
// this is an auto generated file. This will be overwritten

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
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    author {
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
      subject
      conversationCreator
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
      subject
      conversationCreator
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
      subject
      conversationCreator
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
      subject
      conversationCreator
    }
    convoLinkConversationId
    createdAt
    updatedAt
    user {
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
      subject
      conversationCreator
    }
    convoLinkConversationId
    createdAt
    updatedAt
    user {
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
export const deleteConvoLink = `mutation DeleteConvoLink($input: DeleteConvoLinkInput!) {
  deleteConvoLink(input: $input) {
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
      subject
      conversationCreator
    }
    convoLinkConversationId
    createdAt
    updatedAt
    user {
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
export const createChatUser = `mutation CreateChatUser($input: CreateChatUserInput!) {
  createChatUser(input: $input) {
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
export const updateChatUser = `mutation UpdateChatUser($input: UpdateChatUserInput!) {
  updateChatUser(input: $input) {
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
export const deleteChatUser = `mutation DeleteChatUser($input: DeleteChatUserInput!) {
  deleteChatUser(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    answer {
      answer
      votes
    }
    closingImage
    closingImageAttribution
    closingImageAttributionLink
    closingImageAltTag
    closingImageType
    incorrectAnswers {
      answer
      votes
    }
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
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    answer {
      answer
      votes
    }
    closingImage
    closingImageAttribution
    closingImageAttributionLink
    closingImageAltTag
    closingImageType
    incorrectAnswers {
      answer
      votes
    }
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
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    answer {
      answer
      votes
    }
    closingImage
    closingImageAttribution
    closingImageAttributionLink
    closingImageAltTag
    closingImageType
    incorrectAnswers {
      answer
      votes
    }
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
    slideShowId
    content
    order
  }
}
`;
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
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
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
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
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
