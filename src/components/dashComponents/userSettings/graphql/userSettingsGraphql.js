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
	chatUser{
		id
	}
   }
 }
`;

const listUser = `query ListUser($filter:ModelUserFilterInput!) {
  listUsers(filter: $filter) {
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
		chatUser{
		id
		}
	 }
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
  }
}
`;

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

export { updateUser, userDetails, listUser, updateChatUser };
