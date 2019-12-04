import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "../../styles/quizStyles";

const QuizCards = props => {
	const {
		selectValues,
		value,
		handleValueChange,
		text,
		helperText,
		name,
		overview,
		details,
		selectName,
	} = props;
	const classes = useStyles();

	const range = (start, end) => {
		return Array(end - start + 1)
			.fill()
			.map((_, idx) => start + idx);
	};

	return (
		<FormControl className={classes.formControl} style={{ width: "100%" }}>
			<InputLabel htmlFor={`${name}-helper`}>{text}</InputLabel>
			<Select
				value={value}
				onChange={e => {
					if (overview[name] > e.target.value) {
						let answerObject = { ...overview[details] };
						range(e.target.value + 1, overview[name]).map(
							comment => delete answerObject[`${selectName}${comment}`],
						);
						handleValueChange({
							[details]: answerObject,
							[e.target.name]: e.target.value,
						});
					} else {
						handleValueChange({
							[e.target.name]: e.target.value,
						});
					}
				}}
				input={<Input name={name} id={`${name}-helper`} />}
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

export default QuizCards;
