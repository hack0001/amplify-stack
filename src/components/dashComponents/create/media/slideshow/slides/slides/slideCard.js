import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import { slideStyles } from "../../styles/slideStyles";
import { useStyles } from "../../styles/slideStyles";
import ImageDialog from "../../../imageDialog/imageDialog";
import DEFAULT_IMAGE from "../../../../../../../default.jpg";
import _ from "lodash";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import initialValue from "../initialValue";
import {
	plugins,
	renderMark,
	renderNode,
	renderInline,
} from "../../../../../editor";
import Embed from "../../../embedo/embed";
import Select from "../select/select";

const SlideCards = props => {
	const classes = useStyles();
	const {
		data,
		handleSend,
		slidesLayout,
		allData,
		currentTab,
		setNewTab,
	} = props;

	const [editorValue, setEditorValue] = useState({
		value: allData["slides"][data["slidePosition"] - 1]["slideDetails"]
			? JSON.parse(allData["slides"][data["slidePosition"] - 1]["slideDetails"])
			: initialValue,
	});

	const [imageDialog, setImageDialog] = useState(false);

	const handleOnChange = value => {
		const newMappedSlides = allData["slides"].map((e, index) => {
			if (e.slidePosition === data["slidePosition"]) {
				e = { ...e, slidePosition: index + 1, ...value };
			}
			return e;
		});

		handleSend({
			mainSlides: {
				...allData,
				slides: newMappedSlides,
			},
		});
	};
	const handlePositionChange = (oldPosition, newPosition, value) => {
		let newData = allData["slides"].slice();
		newData.splice(oldPosition - 1, 1);
		newData.splice(newPosition - 1, 0, allData["slides"][oldPosition - 1]);

		const insertMappedSlides = newData.map((e, index) => {
			e = { ...e, slidePosition: index + 1 };
			return e;
		});
		handleSend({
			mainSlides: {
				...allData,
				slides: insertMappedSlides,
			},
		});
	};

	const textField = (label, value, width, index) => {
		return (
			<div style={{ padding: 15, display: "inline-block", width }} key={index}>
				<TextField
					label={label}
					name={value}
					className={classes.textField}
					value={allData["slides"][data["slidePosition"] - 1][value]}
					style={{ width: "100%" }}
					onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
				/>
			</div>
		);
	};

	const selectField = (item, index) => {
		let numberItems = [];
		allData.slides.map((number, index) => {
			numberItems.push({ name: index + 1 });
		});

		return (
			<Select
				item={item}
				index={index}
				value={allData["slides"][data["slidePosition"] - 1][item.name]}
				name={item.name}
				selectValues={numberItems}
				handleValueChange={handlePositionChange}
				text={item.placeholder}
				helperText={item.helper}
			/>
		);
	};

	const handleChange = ({ value }) => {
		handleOnChange({ slideDetails: JSON.stringify(value.toJSON()) });
		setEditorValue({ value });
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

	const image = (value, alt, index) => {
		const imageData = allData["slides"][data["slidePosition"] - 1];

		if (imageData[`${value}-embed`]) {
			return (
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
						url={imageData[value] ? imageData[value] : ""}
						onClick={e => setImageDialog(true)}
					/>
				</div>
			);
		}
		return (
			<div
				style={{ margin: "0 auto" }}
				key={index}
				onClick={e => {
					setImageDialog(true);
				}}
			>
				<img
					style={{ objectFit: "cover", width: "100%", height: "360px" }}
					alt={alt}
					src={imageData[value] ? imageData[value] : DEFAULT_IMAGE}
				/>
			</div>
		);
	};

	const slideArrow = direction => {
		const arrow =
			direction === "right" ? (
				<ArrowRight style={{ fontSize: 50 }} />
			) : (
				<ArrowRight
					style={{
						fontSize: 50,
						transform: "rotate(180deg)",
						margin: "0 auto",
					}}
				/>
			);
		return (
			<Tooltip title="Next Slide" placement="top">
				<IconButton
					className={classes.button}
					aria-label="Clear"
					color="primary"
					onClick={e => {
						const newPosition =
							direction === "right" ? currentTab + 1 : currentTab - 1;
						setNewTab(newPosition);
					}}
				>
					{arrow}
				</IconButton>
			</Tooltip>
		);
	};

	const slide = (dataLayout, gridColumn) => {
		return (
			<Paper
				style={{
					display: "inline-block",
					width: "55%",
					margin: "0 auto",
					gridColumn: gridColumn,
				}}
			>
				{slidesLayout.map((item, index) => {
					switch (item.type) {
						case "image":
							return image(item.name, item.alt, index);
						case "textField":
							return textField(item.placeholder, item.name, item.width, index);
						case "selectField":
							return selectField(item, index);
						case "editor":
							return editor(item, index);
						default:
							return <div key={index} />;
					}
				})}
			</Paper>
		);
	};

	return (
		<div style={{ display: "grid" }}>
			<div style={{ gridColumn: 1, margin: "auto" }}>{slideArrow("left")}</div>
			{slide(slidesLayout, 2, true)}
			<div style={{ gridColumn: 4, margin: "auto" }}>{slideArrow("right")}</div>
			<ImageDialog
				imageDialog={imageDialog}
				setImageDialog={setImageDialog}
				handleOnChange={handleOnChange}
				value={"slideImage"}
				imageAttribution={"slideImageAttribution"}
				imageAttributionLink={"slideImageAttributionLink"}
				imageAlt={"slideImageAlt"}
			/>
		</div>
	);
};

export default withStyles(slideStyles)(SlideCards);
