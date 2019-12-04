import React, { Fragment, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createStyles } from "./styles/userStyles";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import {
	createUser,
	createChatUser,
	updateUser,
	createProductionUser,
} from "./graphql/userGraphql";
import { TabContainer } from "../../tabs/tabContainer";
import Dialog from "../../dialog/usernameDialog";
import AuthContext from "../../../context/authContext";
import ProfilePic from "../../profilePic/profilePic";
import { INITIAL_STATE, createTextFields } from "./initialState/initialState";
import axios from "axios";
import content from "../editor/content";

const CreateUser = props => {
	const { classes, theme, push } = props;
	const [error, setError] = useState(false);
	const [checkUser, setCheckUser] = useState({
		createChatUser: false,
		createProductionUser: false,
	});

	const { handleChange, userValues, handleImageChange } = useFormValidation(
		INITIAL_STATE,
		validateAuth,
	);

	const clean = values => {
		Object.keys(values).forEach(key => {
			(values[key] === null || values[key] === "") && delete values[key];
		});
	};

	const cleanUser = values => {
		Object.keys(values).forEach(key => {
			(values[key] === null ||
				values[key] === "" ||
				values[key] === undefined) &&
				delete values[key];
		});
	};

	const handleAddUser = async context => {
		let newUser = {
			userId: userValues.overview[0].username,
			creator: context.username,
			overview: JSON.stringify(userValues.overview),
			username: userValues.overview[0].username,
		};
		cleanUser(newUser);

		try {
			await Auth.signUp({
				username: newUser.username,
				password: "Password1@",
				attributes: {
					email: newUser.username,
				},
			});

			const createdUser = await API.graphql(
				graphqlOperation(createUser, { input: newUser }),
			);

			const newUserId = createdUser.data.createUser.id;
			// 	//If Chat User Box checked add Chat User too and then reupdate original User
			if (checkUser.createChatUser) {
				let newChatUser = {
					alias: userValues.overview[0].name,
					username: userValues.overview[0].username,
					creator: context.username,
					profilePic: userValues.overview[0].profilePic,
					chatUserUserId: newUserId,
				};

				cleanUser(newChatUser);

				const chatUser = await API.graphql(
					graphqlOperation(createChatUser, { input: newChatUser }),
				);

				let updateChatUser = {
					id: newUserId,
					userChatUserId: chatUser.data.createChatUser.id,
				};

				await API.graphql(
					graphqlOperation(updateUser, { input: updateChatUser }),
				);
			}

			if (checkUser.createProductionUser) {
				const newProdUser = {
					id: newUser.username,
					userId: newUser.userId,
					creator: context.username,
					overview: JSON.stringify([
						{
							...newUser.overview[0],
							production: true,
							developmentId: newUserId,
						},
					]),
				};

				const mutationData = {
					query: createProductionUser,
					operationName: "CreateProductionUser",
					variables: {
						input: newProdUser,
					},
				};
				const productionUser = await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(mutationData),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});
				const productionId = productionUser.data.data.createProductionUser.id;
				const updateDevUser = {
					id: newUserId,
					overview: JSON.stringify([
						{
							...newUser.overview[0],
							userProductionId: productionId,
							productionUser: true,
						},
					]),
				};

				await API.graphql(
					graphqlOperation(updateUser, {
						input: updateDevUser,
					}),
				);

				push("/users");
			}
		} catch (err) {
			console.log("Error", err);
			if (err.code === "UsernameExistsException") {
				setError(true);
			}
		}
	};

	const textFields = ({ label, name, width }, index) => {
		return (
			<TextField
				key={index}
				autoComplete="off"
				style={{ width: width }}
				label={`${label}`}
				className={classes.textField}
				value={userValues["overview"][0][name]}
				onChange={handleChange}
				margin="normal"
				name={`${name}`}
			/>
		);
	};

	const handleCheckChange = e => {
		setCheckUser({
			...checkUser,
			[e.target.name]: !checkUser[e.target.name],
		});
	};

	const checkBox = ({ label, type, name }, index) => {
		return (
			<FormControlLabel
				key={index}
				name={name}
				label={`${label}`}
				value={checkUser[name]}
				onChange={handleCheckChange}
				className={classes.textField}
				control={<Checkbox color="primary" />}
				labelPlacement="end"
			/>
		);
	};

	const image = ({ label, name }, index) => {
		return (
			<ProfilePic
				s3Directory={"profileImages"}
				userId={userValues.id}
				handleChange={handleImageChange}
				itemName={name}
				imageUrl={userValues[name]}
			/>
		);
	};

	return (
		<AuthContext.Consumer>
			{context => {
				return (
					<Fragment>
						<TabContainer dir={theme.direction}>
							<form
								onSubmit={e => {
									e.preventDefault();
									handleAddUser(context);
								}}
							>
								{createTextFields.map((field, index) => {
									switch (field.type) {
										case "text":
											return textFields(field, index);
										case "image":
											return image(field, index);
										case "checkbox":
											return checkBox(field, index);
										default:
											return <div />;
									}
								})}
								<div style={{ padding: 8 * 3, margin: "10px 1px 5px 1px" }}>
									<Button
										variant="contained"
										color="primary"
										align="right"
										className={classes.button}
										type="submit"
									>
										<SaveIcon className={classes.rightIcon} />
										Create
									</Button>
								</div>
							</form>
						</TabContainer>
						<Dialog openDialog={error} closeFunc={setError} />
					</Fragment>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default withStyles(createStyles, { withTheme: true })(CreateUser);
