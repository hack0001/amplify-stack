import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { SignIn, Dashboard } from "./pages";
import AuthContext from "./context/authContext";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnUtils from "@date-io/date-fns";

class App extends Component {
  state = {
    token: null,
    userId: null,
    username: null,
    profileId: null,
    admin: null,
    logOutError: null,
    currentTabName: "Dashboard",
    siteNames: null,
    chatUserId: null
  };

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.email;
      const userToken = user.signInUserSession.accessToken.jwtToken;
      const admin = user.signInUserSession.accessToken.payload[
        "cognito:groups"
      ].includes("Admin");

      const userData = await API.graphql(
        graphqlOperation(`query listUser{
		listUsers(filter: {
			username:{eq:"${user.username}"}
			}) {
				items{
					id
					userId
					alias
					username
					chatUser{
						id 
						creator 
						alias
					}
				}
			}	
		}`)
      );

      const siteData = await API.graphql(
        graphqlOperation(`query ListSites{
		listSites{
				items{
					id				
					name
				}
			}	
		}`)
      );

      const username = user.username;
      const profileId = userData.data.listUsers.items[0].id;
      const siteNames = siteData.data.listSites.items;
      const chatUserId = userData.data.listUsers.items[0].chatUser.id;
      this.setState({
        token: userToken,
        userId,
        admin,
        username,
        profileId,
        siteNames,
        chatUserId
      });
    } catch (err) {
      console.log("Error", err);
      this.setState({
        token: null,
        userId: null,
        admin: null,
        username: null,
        profileId: null,
        siteNames: null,
        chatUserId: null
      });
    }
  }

  handleCurrentTab = newTab => {
    this.setState({ currentTabName: newTab });
  };

  login = async (user, admin) => {
    const userData = await API.graphql(
      graphqlOperation(`query listUser{
			listUsers(filter: {
				username:{eq:"${user.username}"}
				}) {
					items{
						id
						userId
						alias
						username
						chatUser{
							id 
							creator 
							alias
						}
					}
				}	
			}`)
    );

    const siteData = await API.graphql(
      graphqlOperation(`query ListSites{
			listSites{
					items{
						id				
						name
					}
				}	
			}`)
    );

    this.setState({
      token: user.signInUserSession.accessToken.jwtToken,
      username: user.username,
      admin: admin,
      profileId: userData.data.listUsers.items[0].id,
      siteNames: siteData.data.listSites.items,
      chatUserId: userData.data.listUsers.items[0].chatUser.id
    });
  };

  logout = async () => {
    try {
      await Auth.signOut();
      this.setState({
        token: null,
        userId: null,
        admin: null,
        username: null,
        profileId: null,
        siteNames: null,
        chatUserId: null
      });
    } catch (err) {
      this.setState({
        logOutError:
          "Something went wrong when trying to log out. Please try again"
      });
    }
  };

  render() {
    return (
      <Router>
        <Fragment>
          <MuiPickersUtilsProvider utils={DateFnUtils}>
            <AuthContext.Provider
              value={{
                token: this.state.token,
                userId: this.state.userId,
                username: this.state.username,
                profileId: this.state.profileId,
                siteNames: this.state.siteNames,
                login: this.login,
                logout: this.logout,
                admin: this.state.admin,
                logOutError: this.state.logOutError,
                handleCurrentTab: this.handleCurrentTab,
                currentTabName: this.state.currentTabName,
                chatUserId: this.state.chatUserId
              }}
            >
              <Switch>
                {this.state.token && (
                  <Redirect from="/auth" to="/discussion" exact />
                )}
                {!this.state.token && <Route path="/auth" component={SignIn} />}
                {this.state.token && <Route path="/" component={Dashboard} />}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
            </AuthContext.Provider>
          </MuiPickersUtilsProvider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
