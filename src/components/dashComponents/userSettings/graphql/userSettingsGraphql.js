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

export { updateUser, userDetails, listUser };
