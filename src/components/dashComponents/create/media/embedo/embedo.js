import Embedo from "embedo";

const embedo = new Embedo({
	facebook: {
		appId: process.env.REACT_APP_FACEBOOK_APP_ID, // Enable facebook SDK
		version: "v2.10",
	},
	twitter: true, // Enable twitter SDK
	instagram: true, // Enable instagram SDK
	pinterest: true, // Enable pinterest SDK,
	//   googlemaps: {
	//     key: 'my_api_key' // Enables google maps API
	//   }
});

export default embedo;
