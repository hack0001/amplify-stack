import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { useStyles } from "./tagStyles";

const SiteTags = props => {
	const { label, value, values, tagArray, handleOnChange, width } = props;
	const classes = useStyles();

	const handleTagUpdate = e => {
		const valLength = e.target.value.length;
		let tagValue = e.target.value;
		if (e.keyCode === 13 && valLength > 1) {
			tagValue = tagValue
				.trim()
				.replace(/\s/g, "-")
				.toLowerCase();

			handleOnChange({
				...values,
				[tagArray]: [...values[tagArray], tagValue],
				[e.target.name]: "",
			});
		}
	};

	return (
		<div
			style={{
				paddingLeft: 20,
				paddingTop: 20,
				paddingBottom: 20,
				paddingRight: 5,
				display: "block",
				width: width,
			}}
		>
			<TextField
				autoComplete="off"
				label={label}
				name={"tagValue"}
				className={classes.textField}
				value={values["tagValue"]}
				style={{ width: "100%" }}
				onChange={e => {
					handleOnChange({ ...values, [e.target.name]: e.target.value });
				}}
				onKeyDown={e => {
					handleTagUpdate(e);
				}}
			/>
			{values[tagArray].length === 0 && <div />}
			{values[tagArray].map((chip, index) => {
				return (
					<div
						style={{ marginTop: 20, marginRight: 10, display: "inline-block" }}
					>
						<Chip
							icon={<DoneIcon />}
							label={chip}
							onDelete={
								(index,
								e => {
									const newArray = [
										...values[tagArray].filter(
											(val, valIndex) => valIndex !== index,
										),
									];
									handleOnChange({
										...values,
										[tagArray]: newArray,
									});
								})
							}
							className={classes.chip}
							color="secondary"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default SiteTags;
