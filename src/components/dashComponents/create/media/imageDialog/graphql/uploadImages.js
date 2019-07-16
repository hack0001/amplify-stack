const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
		id
  		name
  		description
  		image
  		category
  		type
  		size
  		height
  		width
  		createdAt
  		updatedAt
  }
}
`;

export { createImage };
