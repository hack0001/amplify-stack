const INITIAL_STATE = {
  name: "",
  username: "",
  phone: "",
  lastLogged: "",
  facebookLink: "",
  twitterLink: "",
  instagramLink: "",
  imageLink: "",
  numberPosts: "",
  website: "",
  createChatUser: false,
  profilePic: ""
};

const textFieldTypes = [
  {
    label: "Profile Pic",
    name: "profilePic",
    type: "image"
  },
  {
    label: "Name",
    type: "text",
    name: "name"
  },
  {
    label: "Username",
    type: "text",
    name: "username"
  },
  {
    label: "Phone Number",
    type: "text",
    name: "phone"
  },
  {
    label: "Last Logged In",
    type: "text",
    name: "lastLogged"
  },
  {
    label: "Facebook Profile Link",
    type: "text",
    name: "facebookLink"
  },
  {
    label: "Twitter Profile Link",
    type: "text",
    name: "twitterLink"
  },
  {
    label: "Instagram Profile Link",
    type: "text",
    name: "instagramLink"
  },
  {
    label: "Image Link",
    type: "text",
    name: "imageLink"
  },
  {
    label: "Number of Posts",
    type: "text",
    name: "numberPosts"
  },
  {
    label: "Website",
    type: "text",
    name: "website"
  },
  {
    label: "Create Chat User",
    type: "createChatUser",
    name: "createChatUser"
  }
];
export { INITIAL_STATE, textFieldTypes };
