/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductionSite = `query GetProductionSite($id: ID!) {
  getProductionSite(id: $id) {
    id
    name
    description
    type
    development
    production
    categories
    developmentId
    articles {
      items {
        id
        authorId
        authorName
        category
        viewCount
        development
        production
        overview
        developmentId
        content
        schedule
        original
        scheduleTime
        createdAt
        updatedAt
      }
      nextToken
    }
    quiz {
      items {
        id
        authorId
        authorName
        category
        viewCount
        development
        production
        overview
        developmentId
        questions
        original
        numQuestions
        schedule
        scheduleTime
        createdAt
        updatedAt
      }
      nextToken
    }
    slideShows {
      items {
        id
        authorId
        authorName
        category
        viewCount
        development
        production
        overview
        developmentId
        slides
        numSlides
        original
        schedule
        scheduleTime
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const listProductionSites = `query ListProductionSites(
  $filter: ModelProductionSiteFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductionSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      type
      development
      production
      categories
      developmentId
      articles {
        nextToken
      }
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getEmailSignup = `query GetEmailSignup($id: ID!) {
  getEmailSignup(id: $id) {
    id
    firstName
    lastName
    popUp
    createdAt
    updatedAt
    email
    website
    contentType
    contentHeadline
    contentCategory
    source
  }
}
`;
export const listEmailSignups = `query ListEmailSignups(
  $filter: ModelEmailSignupFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmailSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      popUp
      createdAt
      updatedAt
      email
      website
      contentType
      contentHeadline
      contentCategory
      source
    }
    nextToken
  }
}
`;
export const getProductionArticle = `query GetProductionArticle($id: ID!) {
  getProductionArticle(id: $id) {
    id
    authorId
    authorName
    category
    viewCount
    development
    production
    overview
    developmentId
    content
    schedule
    original
    scheduleTime
    site {
      id
      name
      description
      type
      development
      production
      categories
      developmentId
      articles {
        nextToken
      }
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const listProductionArticles = `query ListProductionArticles(
  $filter: ModelProductionArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductionArticles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorId
      authorName
      category
      viewCount
      development
      production
      overview
      developmentId
      content
      schedule
      original
      scheduleTime
      site {
        id
        name
        description
        type
        development
        production
        categories
        developmentId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getProductionSlideShow = `query GetProductionSlideShow($id: ID!) {
  getProductionSlideShow(id: $id) {
    id
    authorId
    authorName
    category
    viewCount
    development
    production
    overview
    developmentId
    slides
    numSlides
    original
    schedule
    scheduleTime
    site {
      id
      name
      description
      type
      development
      production
      categories
      developmentId
      articles {
        nextToken
      }
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const listProductionSlideShows = `query ListProductionSlideShows(
  $filter: ModelProductionSlideShowFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductionSlideShows(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorId
      authorName
      category
      viewCount
      development
      production
      overview
      developmentId
      slides
      numSlides
      original
      schedule
      scheduleTime
      site {
        id
        name
        description
        type
        development
        production
        categories
        developmentId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getProductionQuiz = `query GetProductionQuiz($id: ID!) {
  getProductionQuiz(id: $id) {
    id
    authorId
    authorName
    category
    viewCount
    development
    production
    overview
    developmentId
    questions
    original
    numQuestions
    schedule
    scheduleTime
    site {
      id
      name
      description
      type
      development
      production
      categories
      developmentId
      articles {
        nextToken
      }
      quiz {
        nextToken
      }
      slideShows {
        nextToken
      }
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const listProductionQuizs = `query ListProductionQuizs(
  $filter: ModelProductionQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductionQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      authorId
      authorName
      category
      viewCount
      development
      production
      overview
      developmentId
      questions
      original
      numQuestions
      schedule
      scheduleTime
      site {
        id
        name
        description
        type
        development
        production
        categories
        developmentId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
