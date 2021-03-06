import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/dashBoard/navBar";
import SideMenu from "../components/dashBoard/drawer";
import AuthContext from "../context/authContext";
import styles from "../styles/Dashboard";
import { Route } from "react-router-dom";
import {
	Calendar,
	CalendarEvent,
	Site,
	WhiteBoard,
	User,
	SiteContent,
	UserContent,
	UserSettings,
	Chat,
	BucketImages,
	Home,
	Duplicates,
} from "../components/dashComponents";
import {
	Article,
	DevArticle,
	ProdArticle,
	Quiz,
	DevQuiz,
	ProdQuiz,
	SlideShow,
	DevSlideShow,
	ProdSlideShow,
	DuplicateDevArticle,
	DuplicateProdArticle,
	DuplicateDevQuiz,
	DuplicateProdQuiz,
	DuplicateDevSlideShow,
	DuplicateProdSlideShow,
} from "../components/dashComponents/create/media";

class Dashboard extends React.Component {
	state = {
		isLogin: true,
		open: false,
		currentComponent: null,
		currentTabName: "Dashboard",
	};

	static contextType = AuthContext;

	handleDrawer = () => {
		this.setState({ open: !this.state.open });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleSignOut = () => {
		this.context.logout();
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<NavBar
					{...this.state}
					handleDrawer={this.handleDrawer}
					classes={classes}
				/>
				<Route
					render={({ location, history }) => (
						<SideMenu
							{...this.state}
							handleCurrentTab={this.handleCurrentTab}
							handleDrawer={this.handleDrawerClose}
							classes={classes}
							location={location}
							history={history}
						/>
					)}
				/>

				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					{this.context.logOutError ? (
						<Typography
							component="h4"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							{this.context.logOutError}
						</Typography>
					) : (
						""
					)}
					<Route exact path="/home" component={props => <Home {...props} />} />
					<Route
						exact
						path="/duplicates"
						component={props => <Duplicates {...props} />}
					/>
					<Route
						path="/home/development/article/:id"
						component={props => <DevArticle {...props} />}
					/>
					<Route
						path="/home/production/article/:id"
						component={props => <ProdArticle {...props} />}
					/>
					<Route
						path="/home/development/quiz/:id"
						component={props => <DevQuiz {...props} />}
					/>
					<Route
						path="/home/production/quiz/:id"
						component={props => <ProdQuiz {...props} />}
					/>

					<Route
						path="/home/development/slideshow/:id"
						component={props => <DevSlideShow {...props} />}
					/>
					<Route
						path="/home/production/slideshow/:id"
						component={props => <ProdSlideShow {...props} />}
					/>

					<Route
						path="/home/development/duplicate/article/:id"
						component={props => <DuplicateDevArticle {...props} />}
					/>
					<Route
						path="/home/production/duplicate/article/:id"
						component={props => <DuplicateProdArticle {...props} />}
					/>

					<Route
						path="/home/development/duplicate/quiz/:id"
						component={props => <DuplicateDevQuiz {...props} />}
					/>
					<Route
						path="/home/production/duplicate/quiz/:id"
						component={props => <DuplicateProdQuiz {...props} />}
					/>

					<Route
						path="/home/development/duplicate/slideshow/:id"
						component={props => <DuplicateDevSlideShow {...props} />}
					/>
					<Route
						path="/home/production/duplicate/slideshow/:id"
						component={props => <DuplicateProdSlideShow {...props} />}
					/>

					<Route
						exact
						path="/calendar"
						component={props => <Calendar {...props} />}
					/>
					<Route
						path="/calendar/:id"
						component={props => <CalendarEvent {...props} />}
					/>
					<Route exact path="/sites" component={props => <Site {...props} />} />
					<Route
						path="/sites/:id"
						component={props => <SiteContent {...props} />}
					/>
					<Route
						path="/whiteboard"
						component={props => <WhiteBoard {...props} />}
					/>
					<Route
						exact
						path="/discussion"
						component={props => <Chat {...props} />}
					/>
					<Route
						path="/create/article"
						component={props => <Article {...props} />}
					/>
					<Route path="/create/quiz" component={props => <Quiz {...props} />} />
					<Route
						path="/create/slideshow"
						component={props => <SlideShow {...props} />}
					/>
					<Route exact path="/users" component={props => <User {...props} />} />
					<Route
						path="/users/:id"
						component={props => <UserContent {...props} />}
					/>
					<Route
						exact
						path="/user"
						component={props => <UserSettings {...props} />}
					/>
					<Route
						exact
						path="/bucket-images"
						component={props => <BucketImages {...props} />}
					/>
				</main>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
