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
      updatedAt
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
      updatedAt
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
      updatedAt
    }
  }
  `;
export const createSlideShow = `mutation CreateSlideShow($input: CreateSlideShowInput!) {
    createSlideShow(input: $input) {
      id
      category
      createdAt
      development
      production
      productionId
      slides
      schedule
      scheduleTime
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
      production
      productionId
      slides
      schedule
      scheduleTime
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
      production
      productionId
      slides
      schedule
      scheduleTime     
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
      questions
      schedule
      scheduleTime
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
      questions
      schedule
      scheduleTime
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
      questions
      schedule
      scheduleTime
      updatedAt
    }
  }
  `;
