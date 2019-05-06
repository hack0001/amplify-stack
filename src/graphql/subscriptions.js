// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateConvoLink = `subscription OnCreateConvoLink($convoLinkUserId: ID!) {
  onCreateConvoLink(convoLinkUserId: $convoLinkUserId) {
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
export const onCreateMessage = `subscription OnCreateMessage($messageConversationId: ID!) {
  onCreateMessage(messageConversationId: $messageConversationId) {
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
export const onCreateTask = `subscription OnCreateTask($projectId: ID!) {
  onCreateTask(projectId: $projectId) {
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
