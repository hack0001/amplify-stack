import React, { Fragment, useState } from "react";
import { useStyles } from "../styles/quizStyles";
import Paper from "@material-ui/core/Paper";
import Selection from "./select/selection";
import TextField from "@material-ui/core/TextField";
import Tag from "./tags/tag";
import { layout } from "./layout/quizLayout";
import ImageDialog from "../../imageDialog/imageDialog";
import DEFAULT_IMAGE from "../../../../../../default.jpg";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import _ from "lodash";
const QuizCards = props => {
	const { handleSend, overview, stage, errors, setErrors } = props;
	const classes = useStyles();
	const [imageDialog, setImageDialog] = useState(false);
	const handleOnChange = value => {
		handleSend({
			overviewValues: [
				{
					...overview[0],
					...value,
				},
			],
		});
	};

	const handleBlur = e => {
		if (!e.target.value) {
			setErrors({ ...errors, [e.target.name]: true });
		} else {
			setErrors({ ...errors, [e.target.name]: false });
		}
	};

	const handleUrlBlur = e => {
		if (!e.target.value) {
			setErrors({ ...errors, [e.target.name]: true });
		} else {
			const cleanUrl = e.target.value
				.trim()
				.replace(/\s/g, "-")
				.toLowerCase();

			handleOnChange({ [e.target.name]: cleanUrl });
			setErrors({ ...errors, [e.target.name]: false });
		}
	};

	const selection = (val, index) => {
		return (
			<div
				key={index}
				style={{
					padding: 30,
					display: val.layout,
					width: val.width,
				}}
			>
				<Selection
					value={overview[0][val.name]}
					name={val.name}
					selectValues={val.selectVals}
					handleValueChange={handleOnChange}
					text={val.placeholder}
					helperText={val.helper}
					overview={overview}
				/>
			</div>
		);
	};

	const textField = (val, index) => {
		return (
			<div
				style={{
					padding: 30,
					display: val.layout,
					width: val.width,
				}}
				key={index}
			>
				<TextField
					error={errors[val.name]}
					label={val.placeholder}
					name={val.name}
					className={classes.textField}
					value={overview[0][val.name]}
					style={{ width: "100%" }}
					onBlur={val.name === "quizUrl" ? handleUrlBlur : handleBlur}
					onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
				/>
			</div>
		);
	};

	const scoreComments = (item, index) => {
		const numComments = overview[0].numScoreComments;
		const numScoreComments = _.range(numComments).map((val, index) => {
			return { ...item.schema, scoreCommentNumber: index + 1 };
		});

		return numScoreComments.map((comment, index) => {
			const scoreCommentName = `${comment.name}${comment.scoreCommentNumber}`;
			const scoreCommentLabel = `${comment.placeholder} ${comment.scoreCommentNumber}`;
			return (
				<div
					style={{
						margin: 25,
						display: comment.layout,
						width: comment.width,
					}}
					key={index}
				>
					<TextField
						error={errors[scoreCommentName]}
						onBlur={handleBlur}
						autoComplete="off"
						name={scoreCommentName}
						value={overview[0]["scoreCommentsDetails"][scoreCommentName]}
						onChange={e => {
							handleOnChange({
								scoreCommentsDetails: {
									...overview[0]["scoreCommentsDetails"],
									[e.target.name]: e.target.value,
								},
							});
						}}
						margin="dense"
						id={scoreCommentName}
						label={scoreCommentLabel}
						type="text"
						style={{
							width: "100%",
							marginBottom: 5,
						}}
					/>
				</div>
			);
		});
	};

	const image = (val, index) => {
		return (
			<div
				key={index}
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					margin: "0 auto",
				}}
			>
				<img
					style={{
						objectFit: "cover",
						width: "50%",
						height: "360px",
						margin: 10,
					}}
					onClick={e => setImageDialog(true)}
					alt={overview[0]["headlineImageAlt"]}
					src={overview[0][val.name] ? overview[0][val.name] : DEFAULT_IMAGE}
				/>
			</div>
		);
	};
	const checkBox = (item, index) => {
		return (
			<FormControlLabel
				key={index}
				name={`${item.name}`}
				label={`${item.placeholder}`}
				checked={overview[0][item.name]}
				className={classes.textField}
				control={<Checkbox color="primary" />}
				labelPlacement="end"
				style={{
					marginTop: 20,
					marginRight: 20,
					marginLeft: 20,
				}}
			/>
		);
	};

	const tags = (val, index) => {
		return (
			<Fragment key={index}>
				<Tag
					label={val.placeholder}
					value={val.name}
					handleOnChange={handleOnChange}
					overview={overview}
					tagArray={val.tagArray}
				/>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<Paper style={{ display: "block" }}>
				<div
					style={{
						display: "flex", //item.layout,
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{layout[stage].map((item, index) => {
						switch (item.type) {
							case "textField":
								return textField(item, index);
							case "selection":
								return selection(item, index);
							case "tags":
								return tags(item, index);
							case "checkBox":
								return checkBox(item, index);
							case "image":
								return image(item, index);
							case "scoreComments":
								return scoreComments(item, index);
							default:
								return <div key={index} />;
						}
					})}
				</div>
			</Paper>
			<ImageDialog
				imageDialog={imageDialog}
				setImageDialog={setImageDialog}
				value={"headlineImage"}
				handleOnChange={handleOnChange}
				imageAttribution={"headlineImageAttribution"}
				imageAttributionLink={"headlineImageAttributionLink"}
				imageAlt={"headlineImageAlt"}
			/>
		</Fragment>
	);
};

export default QuizCards;
