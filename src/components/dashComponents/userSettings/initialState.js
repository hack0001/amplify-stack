const INITIAL_STATE = {
  id: "",
  articles: [],
  slideShows: [],
  userId: "",
  ideas: [],
  quiz: [],
  username: "",
  phone: "",
  name: "",
  lastLogged: "",
  facebookLink: "",
  twitterLink: "",
  instagramLink: "",
  imageLink: "",
  numberPosts: "",
  website: "",
  createdAt: "",
  updatedAt: "",
  type: "",
  description: "",
  profilePic: "",
  chatUser: ""
};

const textFieldTypes = [
  {
    label: "Profile Pic",
    name: "profilePic",
    type: "image"
  },
  {
    label: "Name",
    name: "name",
    type: "text"
  },
  {
    label: "Username",
    name: "username",
    type: "text"
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "text"
  },
  {
    label: "Last Logged In",
    name: "lastLogged",
    type: "text"
  },
  {
    label: "Facebook Profile Link",
    name: "facebookLink",
    type: "text"
  },
  {
    label: "Twitter Profile Link",
    name: "twitterLink",
    type: "text"
  },
  {
    label: "Instagram Profile Link",
    name: "instagramLink",
    type: "text"
  },
  {
    label: "Image Link",
    name: "imageLink",
    type: "text"
  },
  {
    label: "Number of Posts",
    name: "numberPosts",
    type: "text"
  },
  {
    label: "Website",
    name: "website",
    type: "text"
  }
];
export { textFieldTypes, INITIAL_STATE };
