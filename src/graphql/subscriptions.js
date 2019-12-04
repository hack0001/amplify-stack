/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
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
export const onUpdateConversation = `subscription OnUpdateConversation {
  onUpdateConversation {
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
export const onDeleteConversation = `subscription OnDeleteConversation {
  onDeleteConversation {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateConvoLink = `subscription OnCreateConvoLink($owner: String) {
  onCreateConvoLink(owner: $owner) {
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
export const onUpdateConvoLink = `subscription OnUpdateConvoLink($owner: String) {
  onUpdateConvoLink(owner: $owner) {
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
export const onDeleteConvoLink = `subscription OnDeleteConvoLink($owner: String) {
  onDeleteConvoLink(owner: $owner) {
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
export const onCreateImage = `subscription OnCreateImage {
  onCreateImage {
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
export const onUpdateImage = `subscription OnUpdateImage {
  onUpdateImage {
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
export const onDeleteImage = `subscription OnDeleteImage {
  onDeleteImage {
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
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
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
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
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
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
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
