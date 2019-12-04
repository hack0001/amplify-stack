import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "../../styles/quizStyles";
import { quizStyles } from "../../styles/quizStyles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DEFAULT_IMAGE from "../../../../../../../default.jpg";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import ImageDialog from "../../../imageDialog/imageDialog";
import Embed from "../../../embedo/embed";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import initialValue from "../initialValue";
import {
	plugins,
	renderMark,
	renderNode,
	renderInline,
} from "../../../../../editor";

const OpenCloseSlide = props => {
	const classes = useStyles();
	const {
		data,
		handleSend,
		layout,
		allData,
		open,
		currentTab,
		setNewTab,
	} = props;
	const openValue = open ? "opening" : "closing";

	const [editorValue, setEditorValue] = useState({
		value: data[`${openValue}QuizDetails`]
			? JSON.parse(data[`${openValue}QuizDetails`])
			: initialValue,
	});
	const [imageDialog, setImageDialog] = useState(false);
	const imageOpen = open ? "openingImage" : "closingImage";
	const imageOpenAlt = open ? "openingImageAlt" : "closingImageAlt";
	const imageAttribution = open
		? "openingImageAttribution"
		: "closingImageAttribution";
	const imageAttributionLink = open
		? "openingImageAttributionLink"
		: "closingImageAttributionLink";

	const handleOnChange = value => {
		handleSend({
			quizQuestions: {
				...allData,
				[openValue]: [{ ...data, ...value }],
			},
		});
	};

	const handleChange = ({ value }) => {
		handleOnChange({
			[`${openValue}QuizDetails`]: JSON.stringify(value.toJSON()),
		});
		setEditorValue({ value });
	};

	const textField = (label, value, width, index) => {
		return (
			<div style={{ padding: 15, display: "inline-block", width }} key={index}>
				<TextField
					label={label}
					name={value}
					className={classes.textField}
					value={data[value]}
					style={{ width: "100%" }}
					onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
				/>
			</div>
		);
	};

	const editor = (item, index) => {
		return (
			<Fragment key={index}>
				<Slate editor={editor} value={editorValue.value}>
					<Editable
						spellCheck
						placeholder="Enter text here..."
						onChange={handleChange}
						style={{ height: "500px", padding: 15, width: item.width }}
						renderMark={renderMark}
						renderBlock={renderNode}
						renderInline={renderInline}
						plugins={plugins}
					/>
				</Slate>
			</Fragment>
		);
	};

	const slideArrow = () => {
		const arrow = open ? (
			<ArrowRight style={{ fontSize: 50 }} />
		) : (
			<ArrowRight
				style={{ fontSize: 50, transform: "rotate(180deg)", margin: "0 auto" }}
			/>
		);
		return (
			<Tooltip title="Next Slide" placement="top">
				<IconButton
					className={classes.button}
					aria-label="Clear"
					color="primary"
					onClick={e => {
						const newPosition = open ? currentTab + 1 : currentTab - 1;
						setNewTab(newPosition);
					}}
				>
					{arrow}
				</IconButton>
			</Tooltip>
		);
	};

	return (
		<div style={{ display: "grid" }}>
			<div style={{ gridColumn: 1, margin: "auto" }}>
				{!open && slideArrow()}
			</div>
			<Paper
				style={{
					display: "block",
					width: "60%",
					margin: "0 auto",
					gridColumn: 2,
				}}
			>
				{data[`${imageOpen}-embed`] && (
					<div style={{ margin: "0 auto" }}>
						<div
							style={{
								width: "100%",
								cursor: "pointer",
								color: "grey",
								textAlign: "center",
								textTransform: "uppercase",
								padding: 20,
							}}
							onClick={e => setImageDialog(true)}
						>
							Change
						</div>

						<Embed
							url={data[imageOpen] ? data[imageOpen] : ""}
							onClick={e => setImageDialog(true)}
						/>
					</div>
				)}
				{!data[`${imageOpen}-embed`] && (
					<div style={{ margin: "0 auto" }} onClick={e => setImageDialog(true)}>
						<img
							style={{ objectFit: "cover", width: "100%", height: "360px" }}
							alt={imageOpenAlt}
							src={data[imageOpen] ? data[imageOpen] : DEFAULT_IMAGE}
						/>
					</div>
				)}

				{layout.map((item, index) => {
					switch (item.type) {
						case "textField":
							return textField(item.placeholder, item.name, item.width, index);
						case "editor":
							return editor(item, index);
						default:
							return <div key={index} />;
					}
				})}
			</Paper>
			<div style={{ gridColumn: 3, margin: "auto" }}>
				{open && slideArrow()}
			</div>
			<ImageDialog
				imageDialog={imageDialog}
				setImageDialog={setImageDialog}
				value={imageOpen}
				handleOnChange={handleOnChange}
				imageAttribution={imageAttribution}
				imageAttributionLink={imageAttributionLink}
				imageAlt={imageOpenAlt}
			/>
		</div>
	);
};

OpenCloseSlide.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(quizStyles)(OpenCloseSlide);
