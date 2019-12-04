const INITIAL_STATE = {
	overview: [""],
	createChatUser: false,
};
const defaultWidth = "45%";
const textFieldTypes = [
	{
		label: "Profile Pic",
		name: "profilePic",
		type: "image",
	},
	{
		label: "Name",
		type: "text",
		name: "name",
		width: defaultWidth,
	},
	{
		label: "Alias",
		type: "text",
		name: "alias",
		width: defaultWidth,
	},
	{
		label: "Username - Email",
		type: "text",
		name: "username",
		width: defaultWidth,
	},
	{
		label: "Title",
		type: "text",
		name: "title",
		width: defaultWidth,
	},
	{
		label: "Phone Number",
		type: "text",
		name: "phone",
		width: defaultWidth,
	},
	{
		label: "Last Logged In",
		type: "text",
		name: "lastLogged",
		width: defaultWidth,
	},
	{
		label: "Facebook Profile Link",
		type: "text",
		name: "facebookLink",
		width: defaultWidth,
	},
	{
		label: "Twitter Profile Link",
		type: "text",
		name: "twitterLink",
		width: defaultWidth,
	},
	{
		label: "Instagram Profile Link",
		type: "text",
		name: "instagramLink",
		width: defaultWidth,
	},

	{
		label: "Image Link",
		type: "text",
		name: "imageLink",
		width: defaultWidth,
	},
	{
		label: "Number of Posts",
		type: "text",
		name: "numberPosts",
		width: defaultWidth,
	},

	{
		label: "Bio",
		type: "text",
		name: "bio",
		width: "95%",
	},
];
const createTextFields = [
	{
		label: "Profile Pic",
		name: "profilePic",
		type: "image",
	},
	{
		label: "Name",
		type: "text",
		name: "name",
		width: defaultWidth,
	},
	{
		label: "Alias",
		type: "text",
		name: "alias",
		width: defaultWidth,
	},
	{
		label: "Username - Email",
		type: "text",
		name: "username",
		width: defaultWidth,
	},
	{
		label: "Title",
		type: "text",
		name: "title",
		width: defaultWidth,
	},
	{
		label: "Phone Number",
		type: "text",
		name: "phone",
		width: defaultWidth,
	},
	{
		label: "Facebook Profile Link",
		type: "text",
		name: "facebookLink",
		width: defaultWidth,
	},
	{
		label: "Twitter Profile Link",
		type: "text",
		name: "twitterLink",
		width: defaultWidth,
	},
	{
		label: "Instagram Profile Link",
		type: "text",
		name: "instagramLink",
		width: defaultWidth,
	},
	{
		label: "Image Link",
		type: "text",
		name: "imageLink",
		width: defaultWidth,
	},

	{
		label: "Bio",
		type: "text",
		name: "bio",
		width: "95%",
	},
	{
		label: "Create Chat User",
		type: "checkbox",
		name: "createChatUser",
	},
	{
		label: "Create Production User",
		type: "checkbox",
		name: "createProductionUser",
	},
];
export { INITIAL_STATE, textFieldTypes, createTextFields };
