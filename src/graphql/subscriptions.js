// eslint-disable
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
export const onCreateConvoLink = `subscription OnCreateConvoLink {
  onCreateConvoLink {
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
export const onUpdateConvoLink = `subscription OnUpdateConvoLink {
  onUpdateConvoLink {
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
export const onDeleteConvoLink = `subscription OnDeleteConvoLink {
  onDeleteConvoLink {
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
