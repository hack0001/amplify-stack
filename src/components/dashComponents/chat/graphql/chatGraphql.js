const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
  id
  createdAt
  members
  name
  updatedAt
  subject
  conversationCreator
   }
 }
`;

const createConvoLink = `mutation CreateConvoLink($input: CreateConvoLinkInput!) {
  createConvoLink(input: $input) {
    id
    convoLinkUserId
    convoLinkConversationId
    createdAt
    updatedAt
  }
}
`;

const createNewMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    authorId
	content
    messageConversationId
    createdAt
    updatedAt
	conversation {
     messages(sortDirection:DESC, limit:5){
		items{
			authorId 
			content
			id
			createdAt
			author{
				alias
			}
		}
      }
    }
  }
}
`;

const onCreateMessage = `subscription OnCreateMessage {
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
		items{
			authorId 
			content
			id
			author{
				alias
			}
		}
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

const getConvo = `query GetConvo($input:ID!){
  getConversation(id:$input){
    id 
    createdAt
	members
    associated{
      items{
        id
        createdAt
        convoLinkUserId
      }
    }
  }
}
`;

const archiveConvo = `mutation ArchiveConvo($input:UpdateConvoLinkInput!){
  updateConvoLink(input:$input){
	id
	createdAt
	convoLinkUserId
  }
}
`;

const updateConvo = `mutation UpdateConvo($input:UpdateConversationInput!){
  updateConversation(input:$input){
   	id 
    createdAt
	members
    associated{
      items{
        id
        createdAt
        convoLinkUserId
      }
    }
  }
}
`;

export {
  createConversation,
  createConvoLink,
  createNewMessage,
  onCreateMessage,
  getConvo,
  archiveConvo,
  updateConvo
};
