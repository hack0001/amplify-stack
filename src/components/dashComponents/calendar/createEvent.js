import React, { Fragment, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { createStyles } from "./styles/eventStyles";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import { createCalendarDay } from "../../../graphql/mutations";
import { TabContainer } from "../../tabs/tabContainer";
import Dialog from "../../dialog/usernameDialog";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";

const INITIAL_STATE = {
	eventName: "",
	updatedAt: "",
	createdAt: "",
	year: "",
	day: "",
	month: "",
	category: "",
	description: "",
	site: "",
};

const textFieldTypes = [
	{
		label: "Event Name",
		type: "eventName",
	},
	{
		label: "Category",
		type: "category",
	},
	{
		label: "Description",
		type: "description",
	},
	{
		label: "Site",
		type: "site",
	},
];

const CreateEvent = props => {
	const { classes, theme, push } = props;
	const [error, setError] = useState(false);
	const [selectedDate, setSelectedDate] = useState(moment());

	const { handleChange, eventValues } = useFormValidation(
		INITIAL_STATE,
		validateAuth,
	);

	const clean = values => {
		Object.keys(values).forEach(key => {
			(values[key] === null ||
				values[key] === "" ||
				values[key] === undefined) &&
				delete values[key];
		});
	};

	const handleAddEvent = async event => {
		event.preventDefault();

		const day = moment(selectedDate).format("D");
		const year = moment(selectedDate).format("Y");
		const month = moment(selectedDate)
			.format("MMMM")
			.toLowerCase();

		try {
			const { data } = await API.graphql(
				graphqlOperation(`query ListCalendarMonths{
					listCalendarMonths(filter: {
					month:{eq:"${month}"}
					}){
						items {
						id
						}
					}				
				}`),
			);

			const newEvent = {
				id: eventValues.id,
				calendarDayCalendarMonthId: data.listCalendarMonths.items[0].id,
				category: eventValues.category,
				createdAt: eventValues.createdAt,
				updatedAt: eventValues.updatedAt,
				description: eventValues.description,
				eventName: eventValues.eventName,
				author: eventValues.author,
				site: eventValues.site,
				year: year,
				day,
			};

			clean(newEvent);

			await API.graphql(
				graphqlOperation(createCalendarDay, { input: newEvent }),
			);
			push("/calendar");
		} catch (err) {
			console.log("Error", err);
		}
	};

	const handleDateChange = date => {
		setSelectedDate(moment(date));
	};

	const textFields = ({ label, type }, index) => {
		return (
			<TextField
				key={index}
				label={`${label}`}
				className={classes.textField}
				value={eventValues[type]}
				onChange={handleChange}
				margin="normal"
				name={`${type}`}
			/>
		);
	};

	return (
		<Fragment>
			<TabContainer dir={theme.direction}>
				<form onSubmit={handleAddEvent}>
					<div className={classes.textField}>
						<DatePicker
							label="Date"
							className={classes.datePicker}
							value={selectedDate}
							onChange={handleDateChange}
							animateYearScrolling
						/>
					</div>
					{textFieldTypes.map((field, index) => {
						return textFields(field, index);
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
};

export default withStyles(createStyles, { withTheme: true })(CreateEvent);
