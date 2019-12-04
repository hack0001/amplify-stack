const listChatUsers = `query ListChatUsers(
  $filter: ModelChatUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      creator
      createdAt
      updatedAt
      alias
      imageLink
      user {
        id
        userId
        creator
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;

export { listChatUsers };
