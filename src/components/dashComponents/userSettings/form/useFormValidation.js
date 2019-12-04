import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
	updateUser,
	updateChatUser,
	updateProductionUser,
} from "../graphql/userSettingsGraphql";
import axios from "axios";

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
			overview: [
				{
					...userValues.overview[0],
					[event.target.name]: event.target.value,
				},
			],
		});
	};

	const handleImageChange = image => {
		setUserValues({
			...userValues,
			overview: [
				{
					...userValues.overview[0],
					[image.name]: image.value,
				},
			],
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
		// const validationErrors = validate(userValues);
		// setErrors(validationErrors);
		setSubmitting(true);

		try {
			let updateValues = {
				id: userValues.id ? userValues.id : userValues.overview[0].username,
				username: userValues.overview[0].username,
				overview: JSON.stringify(userValues.overview),
			};

			if (userValues.chatUser) {
				let updateChatUserValues = {
					id: userValues.chatUser,
					alias: userValues.overview[0].name,
					username: userValues.username,
					profilePic: userValues.overview[0].profilePic,
				};
				cleanChatUser(updateChatUserValues);

				await API.graphql(
					graphqlOperation(updateChatUser, { input: updateChatUserValues }),
				);
			}

			if (userValues.overview[0].production) {
				let updateProdUser = {
					id: userValues.overview[0].username,
					username: userValues.overview[0].username,
					overview: JSON.stringify(userValues.overview),
				};
				const mutationData = {
					query: updateProductionUser,
					operationName: "updateProductionUser",
					variables: {
						input: updateProdUser,
					},
				};
				try {
					await axios({
						url: process.env.REACT_APP_PROD_ENDPOINT,
						method: "POST",
						data: JSON.stringify(mutationData),
						headers: {
							Accept: "application/json",
							"x-api-key": process.env.REACT_APP_PROD_API_KEY,
						},
					});
				} catch (err) {
					console.log("Error", err);
				}
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
		handleImageChange,
	};
};

export default useFormValidation;
