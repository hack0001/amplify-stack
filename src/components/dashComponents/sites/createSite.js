import React, { Fragment } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { createStyles } from "./styles/siteStyles";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import { createSite } from "./graphql/siteGraphql";
import { TabContainer } from "../../tabs/tabContainer";
import { INITIAL_STATE, createFieldTypes } from "./initialState/initialState";
import Tags from "./tags/tags";

const CreateSite = props => {
	const { classes, theme, push } = props;
	const { handleChange, values, handleTagChange } = useFormValidation(
		INITIAL_STATE,
		validateAuth,
	);

	const handleAddProject = async event => {
		event.preventDefault();
		const createSiteValues = {
			name: values.name,
			type: values.type,
			description: values.description,
			categories: values.tagArray,
			production: false,
			development: true,
		};

		try {
			await API.graphql(
				graphqlOperation(createSite, { input: createSiteValues }),
			);
			push("/sites");
		} catch (err) {
			console.log("Error", err);
		}
	};

	const textFields = ({ label, name, type }, index) => {
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
		<Fragment>
			<TabContainer dir={theme.direction}>
				<div style={{ width: "50%" }}>
					{createFieldTypes.map((field, index) => {
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
						onClick={e => handleAddProject(e)}
					>
						<SaveIcon className={classes.rightIcon} />
						Create
					</Button>
				</div>
			</TabContainer>
		</Fragment>
	);
};

export default withStyles(createStyles, { withTheme: true })(CreateSite);
