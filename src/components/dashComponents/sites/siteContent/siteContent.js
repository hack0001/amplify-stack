import React, { useState, useEffect, Fragment } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContainer } from "../../../tabs/tabContainer";
import { contentStyles } from "../styles/siteStyles";
import { getSite } from "../../../../graphql/queries";
import { deleteSite, updateSite } from "../../../../graphql/mutations";
import useFormValidation from "../form/useFormValidation";
import validateAuth from "../form/validateForm";
import DialogComponent from "../../../dialog/deleteDialog";
import SiteDialogComponent from "../../../dialog/siteDialog";
import SnackBar from "../../../snackBar/snackBar";
import uuid from "uuid";
import {
	createProductionSite,
	deleteProductionSite,
} from "../../create/production/graphql/mutations";
import axios from "axios";
import { INITIAL_STATE, textFieldTypes } from "../initialState/initialState";
import Tags from "../tags/tags";

const heads = ["Site Details", "Articles", "Ideas", "Quiz", "SlideShows"];
const SiteContent = props => {
	const { classes, theme } = props;
	const [value, setValue] = useState(0);
	const [toDelete, setDelete] = useState(false);
	const [production, setProduction] = useState(false);
	const [development, setDevelopment] = useState(false);
	const {
		handleSubmit,
		handleChange,
		values,
		setValues,
		snackBar,
		setSnackBar,
		handleTagChange,
	} = useFormValidation(INITIAL_STATE, validateAuth);

	useEffect(() => {
		handleSite();
	}, []);

	const handleSite = async () => {
		try {
			const { data } = await API.graphql(
				graphqlOperation(getSite, { id: props.match.params.id }),
			);
			const siteValues = data.getSite;
			setValues({
				...values,
				id: siteValues.id,
				name: siteValues.name,
				createdAt: siteValues.createdAt,
				type: siteValues.type,
				description: siteValues.description,
				tagArray: siteValues.categories ? siteValues.categories : [],
				updatedAt: siteValues.updatedAt,
				ideas: siteValues.ideas,
				production: siteValues.production,
				productionId: siteValues.productionId ? siteValues.productionId : "",
				development: siteValues.development,
				articles: siteValues.articles,
				quiz: siteValues.quiz,
				slideShows: siteValues.slideShows,
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

	const developmentOnly = async e => {
		const updateDevValues = {
			id: values.id,
			production: false,
			development: true,
		};

		const deleteProdSite = {
			query: deleteProductionSite,
			operationName: "DeleteProductionSite",
			variables: { input: values.productionId },
		};

		try {
			await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(deleteProdSite),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});

			await API.graphql(
				graphqlOperation(updateSite, {
					input: { ...updateDevValues },
				}),
			);
			setProduction(false);
			props.history.push("/sites");
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	const textFields = ({ label, name }, index) => {
		return (
			<TextField
				autoComplete="off"
				key={index}
				label={`${label}`}
				className={classes.textField}
				value={values[name]}
				onChange={handleChange}
				margin="normal"
				name={`${name}`}
			/>
		);
	};
	const sendProduction = async e => {
		const prodSiteValues = {
			id: uuid(),
			developmentId: values.id,
			name: values.name,
			type: values.type,
			description: values.description,
			categories: values.tagArray,
			production: true,
			development: false,
		};

		const updateDevValues = {
			id: values.id,
			production: true,
			development: false,
			description: values.description,
			categories: values.tagArray,
			name: values.name,
			type: values.type,
		};

		const createProdSite = {
			query: createProductionSite,
			operationName: "CreateProductionSite",
			variables: { input: prodSiteValues },
		};
		try {
			await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(createProdSite),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});

			await API.graphql(
				graphqlOperation(updateSite, {
					input: { ...updateDevValues, productionId: prodSiteValues.id },
				}),
			);
			setProduction(false);
			props.history.push("/sites");
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	const tags = (item, index) => {
		return (
			<Fragment key={index}>
				<Tags
					label={item.label}
					value={item.name}
					handleOnChange={handleTagChange}
					values={values}
					tagArray={item.name}
					width={item.width}
				/>
			</Fragment>
		);
	};

	return (
		<div className={classes.root}>
			<Link to={"/sites"} style={{ textDecoration: "none", marginBottom: 20 }}>
				<Button variant="contained" color="primary" className={classes.button}>
					<ArrowBack className={classes.rightIcon} />
					Back To Sites
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
					<div style={{ width: "50%" }}>
						{textFieldTypes.map((field, index) => {
							switch (field.type) {
								case "text":
									return textFields(field, index);
								case "tags":
									return tags(field, index);
								default:
									return <div key={index} />;
							}
						})}
					</div>
					<div style={{ padding: 8 * 3, margin: "10px 1px 5px 1px" }}>
						<Button
							variant="contained"
							color="primary"
							align="right"
							className={classes.button}
							onClick={handleSubmit}
						>
							<SaveIcon className={classes.rightIcon} />
							Save
						</Button>
						{!values.production && (
							<Button
								variant="contained"
								color="secondary"
								align="right"
								style={{ marginLeft: 10 }}
								className={classes.button}
								onClick={e => setProduction(true)}
							>
								<SaveIcon className={classes.rightIcon} />
								Production
							</Button>
						)}
						{values.production && (
							<Button
								variant="contained"
								color="secondary"
								className={classes.delete}
								onClick={e => setDevelopment(true)}
							>
								<SaveIcon className={classes.rightIcon} />
								Development
							</Button>
						)}
						{!values.production && (
							<Button
								variant="contained"
								color="secondary"
								className={classes.delete}
								onClick={e => setDelete(true)}
							>
								Delete
								<DeleteIcon className={classes.rightIcon} />
							</Button>
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
				push={props.history}
				values={values}
			/>

			<SiteDialogComponent
				openDialog={development}
				closeFunc={setDevelopment}
				values={values}
				type={"development"}
				productionFunc={developmentOnly}
			/>
			<SiteDialogComponent
				openDialog={production}
				closeFunc={setProduction}
				values={values}
				type={"production"}
				productionFunc={sendProduction}
			/>
			<DialogComponent
				openDialog={toDelete}
				closeFunc={setDelete}
				values={values}
				type={"Site"}
				deleteFunc={async e => {
					try {
						await API.graphql(
							graphqlOperation(deleteSite, {
								input: { id: values.id },
							}),
						);
						setDelete(false);
						props.history.push("/sites");
					} catch (err) {
						console.log("Error occurred", err);
					}
				}}
			/>
		</div>
	);
};

export default withStyles(contentStyles, { withTheme: true })(SiteContent);
