import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { articleStyle } from "../styles/articleStyles";
import { initialLayout } from "./layout/initialState";
import Select from "./select/select";
import Tags from "./tags/tags";
import DEFAULT_IMAGE from "../../../../../../default.jpg";
import Paper from "@material-ui/core/Paper";
import ImageDialog from "../../imageDialog/imageDialog";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import _ from "lodash";

const ArticleOverview = props => {
	const [loading, setLoading] = useState(false);
	const { handleSend, overview, classes } = props;
	const [imageDialog, setImageDialog] = useState(false);
	const handleOnChange = value => {
		handleSend({
			overview: [
				{
					...overview[0],
					...value,
				},
			],
		});
	};

	const text = (item, index) => {
		return (
			<div
				style={{
					margin: 20,
					display: item.layout,
					width: item.width,
				}}
				key={index}
			>
				<TextField
					autoFocus
					autoComplete="off"
					name={item.name}
					value={overview[0][item.name]}
					onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
					margin="dense"
					id={item.name}
					label={item.label}
					type="text"
					style={{
						width: "100%",
						marginBottom: 5,
					}}
				/>
			</div>
		);
	};

	const bullets = (item, index) => {
		const bulletNo = overview[0].bulletHeadlines;
		const bulletHeaders = _.range(bulletNo).map((val, index) => {
			return { ...item.schema, bulletNumber: index + 1 };
		});

		return bulletHeaders.map((bullet, index) => {
			const bulletName = `${bullet.name}${bullet.bulletNumber}`;
			const bulletLabel = `${bullet.label} ${bullet.bulletNumber}`;
			return (
				<div
					style={{
						margin: 20,
						display: bullet.layout,
						width: bullet.width,
					}}
					key={index}
				>
					<TextField
						autoFocus
						autoComplete="off"
						name={bulletName}
						value={overview[0]["bulletHeadlinesDetails"][bulletName]}
						onChange={e => {
							handleOnChange({
								bulletHeadlinesDetails: {
									...overview[0]["bulletHeadlinesDetails"],
									[e.target.name]: e.target.value,
								},
							});
						}}
						margin="dense"
						id={bulletName}
						label={bulletLabel}
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

	const checkBox = (item, index) => {
		return (
			<FormControlLabel
				key={index}
				name={`${item.name}`}
				label={`${item.label}`}
				checked={overview[0][item.name]}
				onChange={e =>
					handleOnChange({ [e.target.name]: !overview[0][item.name] })
				}
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

	const select = (item, index) => {
		return (
			<Select
				item={item}
				key={index}
				value={overview[0][item.name]}
				name={item.name}
				selectValues={item.values}
				handleValueChange={handleOnChange}
				text={item.label}
				helperText={item.helper}
				overview={overview}
			/>
		);
	};

	const image = (item, index) => {
		return (
			<div
				key={index}
				style={{
					display: "block",
					width: "50%",
					margin: "0 auto",
				}}
				onClick={e => setImageDialog(true)}
			>
				<img
					style={{
						objectFit: "cover",
						width: "100%",
						height: "360px",
						margin: 10,
					}}
					alt={overview[0]["headlineImageAlt"]}
					src={overview[0][item.name] ? overview[0][item.name] : DEFAULT_IMAGE}
				/>
			</div>
		);
	};

	const tags = (item, index) => {
		return (
			<Fragment key={index}>
				<Tags
					label={item.label}
					value={item.name}
					handleOnChange={handleOnChange}
					overview={overview}
					tagArray={item.tagArray}
					width={item.width}
				/>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<Paper style={{ display: "block" }}>
				{loading && <LinearProgress />}
				{initialLayout.map((item, index) => {
					switch (item.type) {
						case "select":
							return select(item, index);
						case "bullets":
							return bullets(item, index);
						case "image":
							return image(item, index);
						case "text":
							return text(item, index);
						case "tags":
							return tags(item, index);
						case "checkBox":
							return checkBox(item, index);
						default:
							return <div key={index} />;
					}
				})}
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

export default withStyles(articleStyle)(ArticleOverview);
