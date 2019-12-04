const INITIAL_STATE = {
	name: "",
	createdAt: "",
	updatedAt: "",
	type: "",
	description: "",
	ideas: [],
	quiz: [],
	id: "",
	production: null,
	development: null,
	productionId: "",
	developmentId: "",
	articles: [],
	slideShows: [],
	tagArray: [],
	tagValue: "",
};

const textFieldTypes = [
	{
		label: "Name",
		name: "name",
		type: "text",
	},
	{
		label: "Created At",
		name: "createdAt",
		type: "text",
	},
	{
		label: "Type",
		name: "type",
		type: "text",
	},
	{
		label: "Description",
		name: "description",
		type: "text",
	},
	{
		label: "Categories",
		name: "tagArray",
		type: "tags",
	},
];
const createFieldTypes = [
	{
		label: "Name",
		name: "name",
		type: "text",
	},
	{
		label: "Type",
		name: "type",
		type: "text",
	},
	{
		label: "Description",
		name: "description",
		type: "text",
	},
	{
		label: "Categories",
		name: "tagArray",
		type: "tags",
	},
];

export { INITIAL_STATE, textFieldTypes, createFieldTypes };
