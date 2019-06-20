const getCalendarDay = `query GetCalendarDay($id: ID!) {
  getCalendarDay(id: $id) {
    id
	userId
	alias
	username
	phoneNumber
	lastLoggedIn
	facebookProfile
	twitterProfile
	instagramProfile
	imageLink
	numberPosts
	siteName
  	createdAt
	updatedAt
   }
 }
`;

export { getCalendarDay };
