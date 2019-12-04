const INITIAL_STATE = {
	id: "",
	articles: [],
	slideShows: [],
	userId: "",
	ideas: [],
	quiz: [],
	overview: [""],
	username: "",
	createdAt: "",
	updatedAt: "",
	type: "",
	chatUser: "",
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
		name: "name",
		type: "text",
		width: defaultWidth,
	},
	{
		label: "Username - Email",
		name: "username",
		type: "text",
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
		name: "phone",
		type: "text",
		width: defaultWidth,
	},
	{
		label: "Last Logged In",
		name: "lastLogged",
		type: "text",
		width: defaultWidth,
	},
	{
		label: "Facebook Profile Link",
		name: "facebookLink",
		type: "text",
		width: defaultWidth,
	},
	{
		label: "Twitter Profile Link",
		name: "twitterLink",
		type: "text",
		width: defaultWidth,
	},

	{
		label: "Instagram Profile Link",
		name: "instagramLink",
		type: "text",
		width: defaultWidth,
	},
	{
		label: "Image Link",
		name: "imageLink",
		type: "text",
		width: defaultWidth,
	},
	{
		label: "Number of Posts",
		name: "numberPosts",
		type: "text",
		width: defaultWidth,
	},

	{
		label: "Bio",
		name: "bio",
		type: "text",
		width: "95%",
	},
];
export { textFieldTypes, INITIAL_STATE };
