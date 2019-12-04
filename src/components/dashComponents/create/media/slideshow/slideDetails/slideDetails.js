import React, { Fragment, useState } from "react";
import { useStyles } from "../styles/slideStyles";
import Paper from "@material-ui/core/Paper";
import Selection from "./select/selection";
import TextField from "@material-ui/core/TextField";
import Tag from "./tags/tag";
import { layout } from "./layout/slideLayout";
import ImageDialog from "../../imageDialog/imageDialog";
import DEFAULT_IMAGE from "../../../../../../default.jpg";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SlideCards = props => {
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
				style={{ padding: 30, display: val.layout, width: val.width }}
			>
				<Selection
					value={overview[0][val.name]}
					name={val.name}
					selectValues={val.selectVals}
					handleValueChange={handleOnChange}
					text={val.placeholder}
					helperText={val.helper}
				/>
			</div>
		);
	};

	const textField = (val, index) => {
		return (
			<div
				style={{ padding: 30, display: val.layout, width: val.width }}
				key={index}
			>
				<TextField
					error={errors[val.name]}
					label={val.placeholder}
					name={val.name}
					className={classes.textField}
					value={overview[0][val.name]}
					style={{ width: "100%" }}
					onBlur={val.name === "slideUrl" ? handleUrlBlur : handleBlur}
					onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
				/>
			</div>
		);
	};

	const image = (label, index) => {
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
					src={overview[0][label] ? overview[0][label] : DEFAULT_IMAGE}
				/>
			</div>
		);
	};

	const checkBox = (item, index) => {
		return (
			<FormControlLabel
				key={index}
				readOnly={item.readOnly}
				name={`${item.name}`}
				label={`${item.placeholder}`}
				checked={overview[0][item.name]}
				className={classes.textField}
				control={<Checkbox color="primary" />}
				labelPlacement="end"
				onChange={
					!item.readOnly
						? e => handleOnChange({ [e.target.name]: !overview[0][item.name] })
						: null
				}
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
								return image(item.name, index);
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

export default SlideCards;
