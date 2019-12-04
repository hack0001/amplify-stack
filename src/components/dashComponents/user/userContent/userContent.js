import React, { useState, useEffect } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import PersonIcon from "@material-ui/icons/Person";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContainer } from "../../../tabs/tabContainer";
import { contentStyles } from "../styles/userStyles";
import {
	userDetails,
	deleteUser,
	deleteChatUser,
	createChatUser,
	updateUser,
	deleteProductionUser,
	createProductionUser,
} from "../graphql/userGraphql";
import useFormValidation from "../form/useFormValidation";
import validateAuth from "../form/validateForm";
import DialogComponent from "../../../dialog/deleteDialog";
import SnackBar from "../../../snackBar/snackBar";
import AuthContext from "../../../../context/authContext";
import ProfilePic from "../../../profilePic/profilePic";
import { INITIAL_STATE, textFieldTypes } from "../initialState/initialState";
import axios from "axios";
const heads = ["Site Details", "Articles", "Ideas", "Quiz", "SlideShows"];

const UserContent = props => {
	const { classes, theme } = props;
	const [value, setValue] = useState(0);
	const [toDelete, setDelete] = useState(false);
	const {
		handleSubmit,
		handleChange,
		userValues,
		setUserValues,
		snackBar,
		setSnackBar,
		handleImageChange,
	} = useFormValidation(INITIAL_STATE, validateAuth);

	useEffect(() => {
		handleUser();
	}, []);

	const clean = values => {
		Object.keys(values).forEach(key => {
			if (values[key] === null || values[key] === undefined) {
				values[key] = "";
			}
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

	const handleUser = async () => {
		try {
			const { data } = await API.graphql(
				graphqlOperation(userDetails, { id: props.match.params.id }),
			);

			let indivUserValues = data.getUser;
			clean(indivUserValues);
			const overviewVals = JSON.parse(indivUserValues.overview[0]);
			setUserValues({
				...userValues,
				id: indivUserValues.id ? indivUserValues.id : overviewVals[0].username,
				userId: indivUserValues.userId,
				username: overviewVals[0].username,
				overview: overviewVals,
				createdAt: indivUserValues.createdAt,
				updatedAt: indivUserValues.updatedAt,
				chatUser: indivUserValues.chatUser,
			});
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	const handleChangeTab = (event, value) => {
		setValue(value);
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	const addChatUser = async context => {
		try {
			let newChatUser = {
				alias: userValues.overview[0].name,
				username: userValues.overview[0].username,
				profilePic: userValues.overview[0].profilePic,
				creator: context.username,
				chatUserUserId: userValues.id,
			};

			cleanChatUser(newChatUser);

			if (userValues.id) {
				const chatUser = await API.graphql(
					graphqlOperation(createChatUser, { input: newChatUser }),
				);

				let updateChatUser = {
					id: userValues.id,
					userChatUserId: chatUser.data.createChatUser.id,
				};
				await API.graphql(
					graphqlOperation(updateUser, { input: updateChatUser }),
				);
				props.history.push("/users");
			}
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	const removeChatUser = async () => {
		try {
			if (userValues.chatUser.id) {
				await API.graphql(
					graphqlOperation(deleteChatUser, {
						input: { id: userValues.chatUser.id },
					}),
				);
				props.history.push("/users");
			}
		} catch (err) {
			console.log("Error occurred", err);
		}
	};
	const removeProductionUser = async () => {
		try {
			if (userValues.overview[0].userProductionId) {
				const mutationData = {
					query: deleteProductionUser,
					operationName: "DeleteProductionUser",
					variables: {
						input: { id: userValues.overview[0].userProductionId },
					},
				};
				await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(mutationData),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});

				const updateDevUser = {
					id: userValues.id,
					overview: JSON.stringify([
						{
							...userValues.overview[0],
							userProductionId: "",
							productionUser: false,
						},
					]),
				};

				await API.graphql(
					graphqlOperation(updateUser, {
						input: updateDevUser,
					}),
				);
				props.history.push("/users");
			}
		} catch (err) {
			console.log("Error occurred", err);
		}
	};
	const addProductionUser = async ctx => {
		const newProdUser = {
			id: userValues.overview[0].username,
			userId: userValues.userId,
			creator: ctx.username,
			overview: JSON.stringify([
				{
					...userValues.overview[0],
					production: true,
					developmentId: userValues.id,
				},
			]),
		};
		try {
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
				id: userValues.id,
				overview: JSON.stringify([
					{
						...userValues.overview[0],
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

			props.history.push("/users");
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	const textFields = ({ label, name, width }, index) => {
		return (
			<TextField
				key={index}
				label={`${label}`}
				autoComplete="off"
				style={{ width: width }}
				className={classes.textField}
				value={userValues["overview"][0][name]}
				onChange={handleChange}
				margin="normal"
				name={`${name}`}
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
				imageUrl={userValues["overview"][0][name]}
			/>
		);
	};

	return (
		<div className={classes.root}>
			<Link to={"/users"} style={{ textDecoration: "none", marginBottom: 20 }}>
				<Button variant="contained" color="primary" className={classes.button}>
					<ArrowBack className={classes.rightIcon} />
					Back To Users
				</Button>
			</Link>
			<AppBar style={{ marginTop: 25 }} position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
				>
					{heads.map(header => {
						return <Tab key={header} label={`${header}`} />;
					})}
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabContainer dir={theme.direction}>
					{textFieldTypes.map((field, index) => {
						switch (field.type) {
							case "text":
								return textFields(field, index);
							case "image":
								return image(field, index);

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
							onClick={handleSubmit}
						>
							<SaveIcon
								className={classes.rightIcon}
								style={{ marginRight: 7 }}
							/>
							Save
						</Button>
						<Button
							variant="contained"
							color="secondary"
							className={classes.delete}
							onClick={e => setDelete(true)}
						>
							Delete
							<DeleteIcon className={classes.rightIcon} />
						</Button>
						{!userValues.chatUser && (
							<AuthContext.Consumer>
								{context => {
									return (
										<Button
											variant="contained"
											color="secondary"
											align="right"
											className={classes.addChat}
											onClick={e => addChatUser(context)}
										>
											<PersonIcon className={classes.rightIcon} />
											Add to Chat
										</Button>
									);
								}}
							</AuthContext.Consumer>
						)}
						{userValues.chatUser && (
							<Button
								variant="contained"
								color="secondary"
								align="right"
								className={classes.addChat}
								onClick={e => removeChatUser()}
							>
								<PersonIcon className={classes.rightIcon} />
								Remove From Chat
							</Button>
						)}
						{userValues.overview[0].userProductionId && (
							<Button
								variant="contained"
								color="primary"
								align="right"
								className={classes.addChat}
								onClick={e => removeProductionUser()}
							>
								<PersonIcon className={classes.rightIcon} />
								Remove From Production
							</Button>
						)}

						{!userValues.overview[0].userProductionId && (
							<AuthContext.Consumer>
								{context => {
									return (
										<Button
											variant="contained"
											color="primary"
											align="right"
											className={classes.addChat}
											onClick={e => addProductionUser(context)}
										>
											<PersonIcon className={classes.rightIcon} />
											Add to Production
										</Button>
									);
								}}
							</AuthContext.Consumer>
						)}
					</div>
				</TabContainer>
				<TabContainer dir={theme.direction}>Articles Here</TabContainer>
				<TabContainer dir={theme.direction}>Ideas Here</TabContainer>
				<TabContainer dir={theme.direction}>Quiz Here</TabContainer>
				<TabContainer dir={theme.direction}>SlideShow Here</TabContainer>
			</SwipeableViews>
			<SnackBar open={snackBar} closeFunc={setSnackBar} classes={classes} />
			<DialogComponent
				openDialog={toDelete}
				closeFunc={setDelete}
				values={userValues}
				type={"User"}
				deleteFunc={async e => {
					try {
						await API.graphql(
							graphqlOperation(deleteUser, {
								input: { id: userValues.id },
							}),
						);
						if (userValues.chatUser.id) {
							await API.graphql(
								graphqlOperation(deleteChatUser, {
									input: { id: userValues.chatUser.id },
								}),
							);
						}
						if (userValues.overview[0].userProductionId) {
							const mutationData = {
								query: deleteProductionUser,
								operationName: "DeleteProductionUser",
								variables: {
									input: { id: userValues.overview[0].userProductionId },
								},
							};
							await axios({
								url: process.env.REACT_APP_PROD_ENDPOINT,
								method: "POST",
								data: JSON.stringify(mutationData),
								headers: {
									Accept: "application/json",
									"x-api-key": process.env.REACT_APP_PROD_API_KEY,
								},
							});
						}
						setDelete(false);
						props.history.push("/users");
					} catch (err) {
						console.log("Error occurred", err);
					}
				}}
			/>
		</div>
	);
};

export default withStyles(contentStyles, { withTheme: true })(UserContent);
