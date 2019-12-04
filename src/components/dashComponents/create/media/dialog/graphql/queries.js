export const listSites = `query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        categories
        development
        production
        productionId
        quiz {
          nextToken
        }
        slideShows {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
  `;
