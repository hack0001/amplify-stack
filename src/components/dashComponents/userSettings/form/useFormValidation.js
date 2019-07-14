import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateUser, updateChatUser } from "../graphql/userSettingsGraphql";

const useFormValidation = (initialState, validate) => {
  const [userValues, setUserValues] = useState(initialState);
  const [snackBar, setSnackBar] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    setUserValues({
      ...userValues,
      [event.target.name]: event.target.value
    });
  };

  const handleImageChange = image => {
    setUserValues({
      ...userValues,
      [image.name]: image.value
    });
  };

  const clean = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null || values[key] === "") && delete values[key];
    });
  };

  const cleanChatUser = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null ||
        values[key] === "" ||
        values[key] === undefined) &&
        delete values[key];
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const validationErrors = validate(userValues);
    setErrors(validationErrors);
    setSubmitting(true);

    try {
      let updateValues = {
        id: userValues.id,
        twitterProfile: userValues.twitterLink,
        facebookProfile: userValues.facebookLink,
        instagramProfile: userValues.instagramLink,
        siteName: userValues.website,
        username: userValues.username,
        userId: userValues.username,
        alias: userValues.name,
        numberPosts: userValues.numberPosts,
        updatedAt: userValues.updatedAt,
        createdAt: userValues.createdAt,
        lastLoggedIn: userValues.lastLogged,
        phoneNumber: userValues.phone,
        imageLink: userValues.imageLink,
        profilePic: userValues.profilePic
      };

      if (userValues.chatUser) {
        let updateChatUserValues = {
          id: userValues.chatUser,
          alias: userValues.name,
          username: userValues.username,
          profilePic: userValues.profilePic
        };
        cleanChatUser(updateChatUserValues);

        await API.graphql(
          graphqlOperation(updateChatUser, { input: updateChatUserValues })
        );
      }

      clean(updateValues);
      await API.graphql(graphqlOperation(updateUser, { input: updateValues }));
      setSubmitting(false);
      setSnackBar(true);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return {
    handleSubmit,
    handleChange,
    userValues,
    errors,
    isSubmitting,
    setUserValues,
    snackBar,
    setSnackBar,
    handleImageChange
  };
};

export default useFormValidation;
