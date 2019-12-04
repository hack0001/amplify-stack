const userDetails = `query GetUser($id: ID!) {
  getUser(id: $id) {
	id
	userId
	creator
	createdAt
	updatedAt
	username
	overview
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
		creator
		createdAt
		updatedAt
		username
		overview
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
	creator
	createdAt
	updatedAt
	username
  }
}
`;

const updateChatUser = `mutation UpdateChatUser($input: UpdateChatUserInput!) {
  updateChatUser(input: $input) {
	id
	creator
	createdAt
	updatedAt
	username
	user {
		id
	}
  }
}`;

const updateProductionUser = `mutation UpdateProductionUser($input: UpdateProductionUserInput!) {
	updateProductionUser(input: $input) {
		id
		creator
		createdAt
		updatedAt

	}
  }
  `;
export {
	updateUser,
	userDetails,
	listUser,
	updateChatUser,
	updateProductionUser,
};
