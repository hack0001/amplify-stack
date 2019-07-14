const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
	userId
	alias
	username
	phoneNumber
	lastLoggedIn
	facebookProfile
	twitterProfile
	instagramProfile
	imageLink
	numberPosts
	siteName
  	createdAt
	updatedAt
	profilePic
  }
}
`;

const createChatUser = `mutation CreateChatUser($input: CreateChatUserInput!) {
  createChatUser(input: $input) {
	id
	username
	creator
	createdAt
	updatedAt
	alias
	imageLink
	profilePic
	user {
		id
	}
  }
}`;

const updateChatUser = `mutation UpdateChatUser($input: UpdateChatUserInput!) {
  updateChatUser(input: $input) {
	id
	username
	creator
	createdAt
	updatedAt
	alias
	imageLink
	profilePic
	user {
		id
	}
  }
}`;


const deleteChatUser = `mutation DeleteChatUser($input: DeleteChatUserInput!) {
  deleteChatUser(input: $input) {
	id
	username
	creator
	createdAt
	updatedAt
	alias
	imageLink
	user {
		id
	}
	}
  } 
`;

const userDetails = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
	userId
	alias
	username
	phoneNumber
	lastLoggedIn
	facebookProfile
	twitterProfile
	instagramProfile
	imageLink
	numberPosts
	siteName
  	createdAt
	updatedAt
	profilePic
	chatUser{
		id
	}
   }
 }
`;

const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
	  items{
		id
		userId
		alias
		username
		phoneNumber
		lastLoggedIn
		facebookProfile
		twitterProfile
		instagramProfile
		imageLink
		numberPosts
		siteName
		createdAt
		updatedAt
		profilePic
	  }
   }
 }
`;

const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
	userId
	alias
	username
	phoneNumber
	lastLoggedIn
	facebookProfile
	twitterProfile
	instagramProfile
	imageLink
	numberPosts
	siteName
  	createdAt
	updatedAt
	}
  } 
`;

const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
	userId
	alias
	username
	phoneNumber
	lastLoggedIn
	facebookProfile
	twitterProfile
	instagramProfile
	imageLink
	numberPosts
	siteName
  	createdAt
	updatedAt
	profilePic
	chatUser{
		id
	}
  }
}
`;

export {
  createUser,
  updateUser,
  deleteUser,
  userDetails,
  listUsers,
  createChatUser,
  deleteChatUser,
  updateChatUser
};
