const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
	id
	userId
	creator
	createdAt
	updatedAt
	username
	overview
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
	profilePic
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

const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
	  items{
		id
		userId
		creator
		createdAt
		updatedAt
		username
		overview
	  }
   }
 }
`;

const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
	id
	userId
	creator
	createdAt
	updatedAt
	username
	overview
	}
  } 
`;

const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
const createProductionUser = `mutation CreateProductionUser($input: CreateProductionUserInput!) {
	createProductionUser(input: $input) {
		id
		userId
		creator
		createdAt
		updatedAt
		overview
	}
  }
  `;
const updateProductionUser = `mutation UpdateProductionUser($input: UpdateProductionUserInput!) {
	updateProductionUser(input: $input) {
		id
		userId
		creator
		createdAt
		updatedAt
		overview
	}
  }
  `;

const deleteProductionUser = `mutation DeleteProductionUser($input: DeleteProductionUserInput!) {
	deleteProductionUser(input: $input) {
	  id
	  userId
	  creator
	  updatedAt
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
	createProductionUser,
	updateProductionUser,
	updateChatUser,
	deleteProductionUser,
};
