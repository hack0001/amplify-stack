const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	button: {
		margin: theme.spacing.unit,
	},
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
});

const createStyles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		// width: 500
	},
	textField: {
		width: "45%",
		margin: 20,
	},
	delete: {
		float: "right",
	},
});

const siteStyles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
	},
	width: 500,
	appBar: {
		width: 900,
		marginBottom: 35,
		margin: "auto",
	},
});

const dataStyles = theme => ({
	button: {
		margin: "auto 0",
	},
	icon: {
		marginRight: theme.spacing.unit,
	},
	root: {
		marginTop: theme.spacing.unit * 3,
		margin: "auto 1px",
	},
	table: {
		minWidth: 1020,
	},
	tableWrapper: {
		overflowX: "auto",
	},
});

const contentStyles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		// width: 500
	},
	textField: {
		width: 500,
		margin: 20,
	},
	delete: {
		float: "right",
	},
	addChat: {
		marginLeft: 10,
	},
});

export { styles, createStyles, siteStyles, dataStyles, contentStyles };
