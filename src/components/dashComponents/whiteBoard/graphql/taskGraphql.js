const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
	id
	category
	createdAt
	content
	members
	name
	updatedAt
	type
	title
	status
  }
}
`;

const taskDetails = `query GetTask($id: ID!) {
  getTask(id: $id) {
	id
	category
	createdAt
	content
	members
	name
	updatedAt
	type
	title
	status
	site {
		id
	}
	user {
		id
	}
   }
 }
`;

const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
	  items{
		id
		category
		createdAt
		content
		members
		name
		updatedAt
		type
		title
		status
		site {
			id
		}
		user {
			id
		}
	  }
   }
 }
`;

const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
	id
	category
	createdAt
	content
	members
	name
	updatedAt
	type
	title
	}
  } 
`;

const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
	id
	category
	createdAt
	content
	members
	name
	updatedAt
	type
	title
	status
  }
}
`;

//Subscriptions
const subscribeToAll = `subscription subscribeToAll {
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
    }
  },
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
    }
  }
}
`;

export {
  createTask,
  updateTask,
  deleteTask,
  taskDetails,
  listTasks,
  subscribeToAll
};
