import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Auth } from "aws-amplify";
import { SignIn, Dashboard } from "./pages";
import AuthContext from "./context/authContext";
import "./App.css";

class App extends Component {
  state = {
    token: null,
    userId: null,
    logOutError: null,
    currentTabName: "Dashboard"
  };

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.email;
      const userToken = user.signInUserSession.accessToken.jwtToken;
      this.setState({
        token: userToken,
        userId
      });
    } catch (err) {
      this.setState({
        token: null,
        userId: null
      });
    }
  }

  handleCurrentTab = newTab => {
    this.setState({ currentTabName: newTab });
  };

  login = (token, userId) => {
    this.setState({ token: token, userId: userId });
  };

  logout = async () => {
    try {
      await Auth.signOut();
      this.setState({
        token: null,
        userId: null
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
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout,
              logOutError: this.state.logOutError,
              handleCurrentTab: this.handleCurrentTab,
              currentTabName: this.state.currentTabName
            }}
          >
            <Switch>
              {this.state.token && (
                <Redirect from="/auth" to="/create/article" exact />
              )}
              {!this.state.token && <Route path="/auth" component={SignIn} />}
              {this.state.token && <Route path="/" component={Dashboard} />}
              {!this.state.token && <Redirect to="/auth" exact />}
            </Switch>
          </AuthContext.Provider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
