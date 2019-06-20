import React, { Component, Fragment } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import AuthContext from "../context/authContext";
import SignIn from "../components/signIn/signIn";
import ChangePass from "../components/signIn/newPassword";
import ForgotPass from "../components/signIn/forgotPassword";

class AuthSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      header: "Sign in",
      forgotPassword: false,
      forgotPasswordCode: "",
      forgotPasswordReset: "",
      forgotPasswordResetConfirm: "",
      isLogin: false,
      direction: null,
      showSignIn: true,
      error: null,
      newPassRequired: false,
      newPassword1: "",
      newPassword2: "",
      cognitoUser: null
    };
  }

  static contextType = AuthContext;

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await Auth.signIn(email, password);
      if (
        user.challengeName === "NEW_PASSWORD_REQUIRED" ||
        user.challengeName === "PasswordResetRequiredException"
      ) {
        const newDirection = this.state.direction === "left" ? "right" : "left";
        this.setState({
          newPassRequired: true,
          direction: newDirection,
          showSignIn: false,
          error: null,
          cognitoUser: user,
          header: "Change Password"
        });
      } else {
        const admin = user.signInUserSession.accessToken.payload[
          "cognito:groups"
        ].includes("Admin");

        this.context.login(user,admin);
      }
    } catch (err) {
      this.setState({
        error: err.message,
        password: ""
      });
    }
  };

  handlePasswordChange = async e => {
    e.preventDefault();
    const { newPassword1, newPassword2 } = this.state;
    try {
      if (newPassword1 === newPassword2) {
        await Auth.completeNewPassword(this.state.cognitoUser, newPassword2);
        this.setState({
          header: "Password Changed Successfully, Please Re-Enter Your Details"
        });
        this.props.history.push("/home");
      } else {
        this.setState({
          error: "Passwords don't match, please try again"
        });
      }
    } catch (err) {
      console.log("Error occurred in Sign In", err);
      this.setState({
        error: err.message
      });
    }
  };

  handleForgotPassword = async e => {
    e.preventDefault();

    try {
      await Auth.forgotPassword(this.state.email);
      this.setState({
        showSignIn: false,
        forgotPassword: true,
        error: "",
        header:
          "A Code Has Been Sent To Your Inbox. Please Enter The Digits Below With A New Password"
      });
    } catch (err) {
      console.log("Error occurred in Forgot Password Request", err);
      this.setState({
        error: err.message
      });
    }
  };

  handleForgotPasswordReset = async e => {
    e.preventDefault();
    const {
      email,
      forgotPasswordCode,
      forgotPasswordReset,
      forgotPasswordResetConfirm
    } = this.state;

    try {
      if (forgotPasswordReset !== forgotPasswordResetConfirm) {
        this.setState({
          error: "Passwords don't match, please try again"
        });
      } else {
        await Auth.forgotPasswordSubmit(
          email,
          forgotPasswordCode,
          forgotPasswordReset
        );
        this.setState({
          showSignIn: true,
          forgotPassword: false,
          error: "",
          header: "Password Successfully Reset, Please Re-Enter Your Details"
        });
      }
    } catch (err) {
      console.log("Error occurred in Sign In", err);
      this.setState({
        error: err.message
      });
    }
  };

  handleUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.showSignIn && (
          <SignIn
            {...this.state}
            handleSignIn={this.handleSignIn}
            handleUpdate={this.handleUpdate}
            handleForgotPassword={this.handleForgotPassword}
          />
        )}
        {this.state.newPassRequired && (
          <ChangePass
            {...this.state}
            handlePasswordChange={this.handlePasswordChange}
            handleUpdate={this.handleUpdate}
          />
        )}
        {this.state.forgotPassword && (
          <ForgotPass
            {...this.state}
            handleForgotPasswordReset={this.handleForgotPasswordReset}
            handleUpdate={this.handleUpdate}
          />
        )}
      </Fragment>
    );
  }
}

export default AuthSignIn;
