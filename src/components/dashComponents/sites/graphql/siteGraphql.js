const createSite = `mutation CreateSite($input: CreateSiteInput!) {
  createSite(input: $input) {
    id
	name
	createdAt
	updatedAt
  }
}
`;

const siteDetails = `query GetSite($id: ID!) {
  getSite(id: $id) {
    id
    createdAt
    description
    name
    type
    updatedAt
    production
    development
   }
 }
`;

const deleteSite = `mutation DeleteSite($input: DeleteSiteInput!) {
  deleteSite(input: $input) {
    id
    createdAt
    description
    name
    type
    updatedAt
	}
  } 
`;

const updateSite = `mutation UpdateSite($input: UpdateSiteInput!) {
  updateSite(input: $input) {
    id
	name
	createdAt
	updatedAt
	type
	description
  }
}
`;

export { createSite, siteDetails, updateSite, deleteSite };
