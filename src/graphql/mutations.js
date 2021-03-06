/* eslint-disable */
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
        owner
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
        owner
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
        owner
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
    owner
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
    owner
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
    owner
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
        owner
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
    profilePic
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
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
        owner
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
    profilePic
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
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
        owner
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
    profilePic
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
  }
}
`;
export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
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
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
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
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
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
export const createSite = `mutation CreateSite($input: CreateSiteInput!) {
  createSite(input: $input) {
    id
    articles {
      items {
        id
        userId
        authorName
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    duplicateArticles {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
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
    categories
    development
    production
    productionId
    quiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateQuiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateSlideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
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
        userId
        authorName
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    duplicateArticles {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
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
    categories
    development
    production
    productionId
    quiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateQuiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateSlideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
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
        userId
        authorName
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    duplicateArticles {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
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
    categories
    development
    production
    productionId
    quiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateQuiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateSlideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    updatedAt
  }
}
`;
export const createArticle = `mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(input: $input) {
    id
    userId
    authorName
    overview
    createdAt
    content
    development
    production
    productionId
    schedule
    scheduleTime
    original
    duplicates {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
  }
}
`;
export const updateArticle = `mutation UpdateArticle($input: UpdateArticleInput!) {
  updateArticle(input: $input) {
    id
    userId
    authorName
    overview
    createdAt
    content
    development
    production
    productionId
    schedule
    scheduleTime
    original
    duplicates {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
  }
}
`;
export const deleteArticle = `mutation DeleteArticle($input: DeleteArticleInput!) {
  deleteArticle(input: $input) {
    id
    userId
    authorName
    overview
    createdAt
    content
    development
    production
    productionId
    schedule
    scheduleTime
    original
    duplicates {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
  }
}
`;
export const createDuplicateArticle = `mutation CreateDuplicateArticle($input: CreateDuplicateArticleInput!) {
  createDuplicateArticle(input: $input) {
    id
    overview
    createdAt
    content
    development
    production
    productionId
    schedule
    scheduleTime
    original
    originalArticle {
      id
      userId
      authorName
      overview
      createdAt
      content
      development
      production
      productionId
      schedule
      scheduleTime
      original
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      updatedAt
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
  }
}
`;
export const updateDuplicateArticle = `mutation UpdateDuplicateArticle($input: UpdateDuplicateArticleInput!) {
  updateDuplicateArticle(input: $input) {
    id
    overview
    createdAt
    content
    development
    production
    productionId
    schedule
    scheduleTime
    original
    originalArticle {
      id
      userId
      authorName
      overview
      createdAt
      content
      development
      production
      productionId
      schedule
      scheduleTime
      original
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      updatedAt
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
  }
}
`;
export const deleteDuplicateArticle = `mutation DeleteDuplicateArticle($input: DeleteDuplicateArticleInput!) {
  deleteDuplicateArticle(input: $input) {
    id
    overview
    createdAt
    content
    development
    production
    productionId
    schedule
    scheduleTime
    original
    originalArticle {
      id
      userId
      authorName
      overview
      createdAt
      content
      development
      production
      productionId
      schedule
      scheduleTime
      original
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      updatedAt
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    updatedAt
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
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
    overview
    production
    productionId
    slides
    numSlides
    original
    schedule
    scheduleTime
    duplicates {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const updateSlideShow = `mutation UpdateSlideShow($input: UpdateSlideShowInput!) {
  updateSlideShow(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    slides
    numSlides
    original
    schedule
    scheduleTime
    duplicates {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const deleteSlideShow = `mutation DeleteSlideShow($input: DeleteSlideShowInput!) {
  deleteSlideShow(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    slides
    numSlides
    original
    schedule
    scheduleTime
    duplicates {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const createDuplicateSlideShow = `mutation CreateDuplicateSlideShow($input: CreateDuplicateSlideShowInput!) {
  createDuplicateSlideShow(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    slides
    numSlides
    original
    originalSlideShow {
      id
      category
      createdAt
      development
      overview
      production
      productionId
      slides
      numSlides
      original
      schedule
      scheduleTime
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
      updatedAt
    }
    schedule
    scheduleTime
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const updateDuplicateSlideShow = `mutation UpdateDuplicateSlideShow($input: UpdateDuplicateSlideShowInput!) {
  updateDuplicateSlideShow(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    slides
    numSlides
    original
    originalSlideShow {
      id
      category
      createdAt
      development
      overview
      production
      productionId
      slides
      numSlides
      original
      schedule
      scheduleTime
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
      updatedAt
    }
    schedule
    scheduleTime
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const deleteDuplicateSlideShow = `mutation DeleteDuplicateSlideShow($input: DeleteDuplicateSlideShowInput!) {
  deleteDuplicateSlideShow(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    slides
    numSlides
    original
    originalSlideShow {
      id
      category
      createdAt
      development
      overview
      production
      productionId
      slides
      numSlides
      original
      schedule
      scheduleTime
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
      updatedAt
    }
    schedule
    scheduleTime
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const createQuiz = `mutation CreateQuiz($input: CreateQuizInput!) {
  createQuiz(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    original
    questions
    numQuestions
    schedule
    scheduleTime
    duplicates {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const updateQuiz = `mutation UpdateQuiz($input: UpdateQuizInput!) {
  updateQuiz(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    original
    questions
    numQuestions
    schedule
    scheduleTime
    duplicates {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const deleteQuiz = `mutation DeleteQuiz($input: DeleteQuizInput!) {
  deleteQuiz(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    original
    questions
    numQuestions
    schedule
    scheduleTime
    duplicates {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const createDuplicateQuiz = `mutation CreateDuplicateQuiz($input: CreateDuplicateQuizInput!) {
  createDuplicateQuiz(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    original
    questions
    numQuestions
    schedule
    scheduleTime
    originalQuiz {
      id
      category
      createdAt
      development
      overview
      production
      productionId
      original
      questions
      numQuestions
      schedule
      scheduleTime
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
      updatedAt
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const updateDuplicateQuiz = `mutation UpdateDuplicateQuiz($input: UpdateDuplicateQuizInput!) {
  updateDuplicateQuiz(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    original
    questions
    numQuestions
    schedule
    scheduleTime
    originalQuiz {
      id
      category
      createdAt
      development
      overview
      production
      productionId
      original
      questions
      numQuestions
      schedule
      scheduleTime
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
      updatedAt
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
  }
}
`;
export const deleteDuplicateQuiz = `mutation DeleteDuplicateQuiz($input: DeleteDuplicateQuizInput!) {
  deleteDuplicateQuiz(input: $input) {
    id
    category
    createdAt
    development
    overview
    production
    productionId
    original
    questions
    numQuestions
    schedule
    scheduleTime
    originalQuiz {
      id
      category
      createdAt
      development
      overview
      production
      productionId
      original
      questions
      numQuestions
      schedule
      scheduleTime
      duplicates {
        nextToken
      }
      site {
        id
        createdAt
        description
        name
        type
        categories
        development
        production
        productionId
        updatedAt
      }
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
      updatedAt
    }
    site {
      id
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
    }
    user {
      id
      userId
      creator
      articles {
        nextToken
      }
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
      }
    }
    updatedAt
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
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
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
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
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
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
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
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
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
      duplicateArticles {
        nextToken
      }
      createdAt
      description
      tasks {
        nextToken
      }
      name
      type
      categories
      development
      production
      productionId
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
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
      duplicateArticles {
        nextToken
      }
      createdAt
      ideas {
        nextToken
      }
      quiz {
        nextToken
      }
      duplicateQuiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      duplicateSlideShows {
        nextToken
      }
      updatedAt
      username
      overview
      chatUser {
        id
        username
        creator
        createdAt
        updatedAt
        alias
        imageLink
        profilePic
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
        userId
        authorName
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    duplicateArticles {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
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
    quiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateQuiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateSlideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    updatedAt
    username
    overview
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
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
        userId
        authorName
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    duplicateArticles {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
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
    quiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateQuiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateSlideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    updatedAt
    username
    overview
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
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
        userId
        authorName
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
        updatedAt
      }
      nextToken
    }
    duplicateArticles {
      items {
        id
        overview
        createdAt
        content
        development
        production
        productionId
        schedule
        scheduleTime
        original
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
    quiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateQuiz {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        original
        questions
        numQuestions
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    duplicateSlideShows {
      items {
        id
        category
        createdAt
        development
        overview
        production
        productionId
        slides
        numSlides
        original
        schedule
        scheduleTime
        updatedAt
      }
      nextToken
    }
    updatedAt
    username
    overview
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
      profilePic
      user {
        id
        userId
        creator
        createdAt
        updatedAt
        username
        overview
      }
    }
  }
}
`;
