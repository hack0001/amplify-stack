import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { slideStyles } from "../../styles/slideStyles";
import FormHelperText from "@material-ui/core/FormHelperText";

const ArticleSelect = props => {
	const {
		item,
		classes,
		selectValues,
		value,
		handleValueChange,
		text,
		helperText,
		name,
		index,
		overview,
	} = props;

	const range = (start, end) => {
		return Array(end - start + 1)
			.fill()
			.map((_, idx) => start + idx);
	};

	return (
		<FormControl
			className={classes.formControl}
			style={{
				margin: "0rem 1rem",
				width: item.width,
				display: item.layout,
			}}
			key={index}
		>
			<InputLabel htmlFor={`${name}-helper`}>{text}</InputLabel>
			<Select
				value={value}
				onChange={e => {
					handleValueChange(value, e.target.value, {
						[name]: e.target.value,
					});
				}}
				input={
					<Input name={name} style={{ width: "100%" }} id={`${name}-helper`} />
				}
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{selectValues.map((val, index) => {
					return (
						<MenuItem value={val.name} key={index}>
							{val.name}
						</MenuItem>
					);
				})}
			</Select>
			<FormHelperText>{helperText}</FormHelperText>
		</FormControl>
	);
};

export default withStyles(slideStyles)(ArticleSelect);
