/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProductionSite = `mutation CreateProductionSite($input: CreateProductionSiteInput!) {
  createProductionSite(input: $input) {
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
export const updateProductionSite = `mutation UpdateProductionSite($input: UpdateProductionSiteInput!) {
  updateProductionSite(input: $input) {
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
export const deleteProductionSite = `mutation DeleteProductionSite($input: DeleteProductionSiteInput!) {
  deleteProductionSite(input: $input) {
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
export const createEmailSignup = `mutation CreateEmailSignup($input: CreateEmailSignupInput!) {
  createEmailSignup(input: $input) {
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
export const updateEmailSignup = `mutation UpdateEmailSignup($input: UpdateEmailSignupInput!) {
  updateEmailSignup(input: $input) {
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
export const deleteEmailSignup = `mutation DeleteEmailSignup($input: DeleteEmailSignupInput!) {
  deleteEmailSignup(input: $input) {
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
export const createProductionArticle = `mutation CreateProductionArticle($input: CreateProductionArticleInput!) {
  createProductionArticle(input: $input) {
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
export const updateProductionArticle = `mutation UpdateProductionArticle($input: UpdateProductionArticleInput!) {
  updateProductionArticle(input: $input) {
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
export const deleteProductionArticle = `mutation DeleteProductionArticle($input: DeleteProductionArticleInput!) {
  deleteProductionArticle(input: $input) {
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
export const createProductionSlideShow = `mutation CreateProductionSlideShow($input: CreateProductionSlideShowInput!) {
  createProductionSlideShow(input: $input) {
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
export const updateProductionSlideShow = `mutation UpdateProductionSlideShow($input: UpdateProductionSlideShowInput!) {
  updateProductionSlideShow(input: $input) {
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
export const deleteProductionSlideShow = `mutation DeleteProductionSlideShow($input: DeleteProductionSlideShowInput!) {
  deleteProductionSlideShow(input: $input) {
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
export const createProductionQuiz = `mutation CreateProductionQuiz($input: CreateProductionQuizInput!) {
  createProductionQuiz(input: $input) {
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
export const updateProductionQuiz = `mutation UpdateProductionQuiz($input: UpdateProductionQuizInput!) {
  updateProductionQuiz(input: $input) {
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
export const deleteProductionQuiz = `mutation DeleteProductionQuiz($input: DeleteProductionQuizInput!) {
  deleteProductionQuiz(input: $input) {
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
