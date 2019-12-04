import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import { quizStyles } from "../../styles/quizStyles";
import { useStyles } from "../../styles/quizStyles";
import ImageDialog from "../../../imageDialog/imageDialog";
import DEFAULT_IMAGE from "../../../../../../../default.jpg";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import initialValue from "../initialValue";
import Selection from "../select/selection";
import _ from "lodash";
import {
	plugins,
	renderMark,
	renderNode,
	renderInline,
} from "../../../../../editor";
import Embed from "../../../embedo/embed";
import Select from "../select/positionSelect";

const editorItems = [{ name: "longAnswer" }, { name: "longFalseAnswer" }];
const QuizCards = props => {
	const classes = useStyles();

	const {
		data,
		handleSend,
		questionLayout,
		answerLayout,
		allData,
		currentTab,
		setNewTab,
	} = props;
	const INITIAL_EDITOR_VALUE = editorItems.reduce((initial, type) => {
		return {
			...initial,
			[type.name]: allData["questions"][data["questionPosition"] - 1][type.name]
				? JSON.parse(
						allData["questions"][data["questionPosition"] - 1][type.name],
				  )
				: initialValue,
		};
	}, {});

	const [editorValue, setEditorValue] = useState(INITIAL_EDITOR_VALUE);

	const [imageDialog, setImageDialog] = useState(false);
	const [qandADialog, setQandADialog] = useState(null);
	const imageQuestion = qandADialog ? "questionImage" : "answerImage";
	const imageQuestionAlt = qandADialog ? "questionImageAlt" : "answerImageAlt";
	const imageAttribution = qandADialog
		? "questionImageAttribution"
		: "answerImageAttribution";
	const imageAttributionLink = qandADialog
		? "questionImageAttributionLink"
		: "answerImageAttributionLink";

	const handleOnChange = value => {
		const newMappedQuestions = allData["questions"].map((e, index) => {
			if (e.questionPosition === data["questionPosition"]) {
				e = { ...e, questionPosition: index + 1, ...value };
			}
			return e;
		});
		handleSend({
			quizQuestions: {
				...allData,
				questions: newMappedQuestions,
			},
		});
	};

	const handlePositionChange = (oldPosition, newPosition, value) => {
		let newData = allData["questions"].slice();
		newData.splice(oldPosition - 1, 1);
		newData.splice(newPosition - 1, 0, allData["questions"][oldPosition - 1]);

		const insertMappedQuestions = newData.map((e, index) => {
			e = { ...e, questionPosition: index + 1 };
			return e;
		});
		handleSend({
			quizQuestions: {
				...allData,
				questions: insertMappedQuestions,
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
					value={allData["questions"][data["questionPosition"] - 1][value]}
					style={{ width: "100%" }}
					onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
				/>
			</div>
		);
	};

	const handleChange = (value, name) => {
		handleOnChange({ [name]: JSON.stringify(value.toJSON()) });
		setEditorValue({ ...editorValue, [name]: value });
	};

	const editor = (item, index) => {
		return (
			<Fragment key={index}>
				<Slate editor={editor} value={editorValue[item.name]}>
					<Editable
						spellCheck
						placeholder={
							item.placeholder ? item.placeholder : "Enter content here..."
						}
						onChange={({ value }) => handleChange(value, item.name)}
						style={{
							height: item.height ? item.height : "500px",
							padding: 15,
							width: item.width,
						}}
						renderMark={renderMark}
						renderBlock={renderNode}
						renderInline={renderInline}
						plugins={plugins}
					/>
				</Slate>
			</Fragment>
		);
	};

	const image = (value, alt, question, index) => {
		const imageData = allData["questions"][data["questionPosition"] - 1];
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
						onClick={e => {
							setImageDialog(true);
							question ? setQandADialog(true) : setQandADialog(false);
						}}
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
					question ? setQandADialog(true) : setQandADialog(false);
				}}
			>
				<img
					style={{ objectFit: "cover", width: "100%", height: "240px" }}
					alt={alt}
					src={imageData[value] ? imageData[value] : DEFAULT_IMAGE}
				/>
			</div>
		);
	};

	const answerDetails = (item, index) => {
		const overview = allData["questions"][data["questionPosition"] - 1];
		const detailMarker = item.details;
		const correctMarker =
			item.details === "correctAnswerDetails" ? true : false;
		const numAnswers = overview[item.numAnswers];

		const numQuizAnswers = _.range(numAnswers).map((val, index) => {
			return { ...item.schema, numberMarker: index + 1 };
		});

		return numQuizAnswers.map((answer, index) => {
			const answerName = `${answer.name}${answer.numberMarker}`;
			const answerLabel = `${answer.placeholder} ${answer.numberMarker}`;
			return (
				<div
					style={{
						padding: 15,
						display: answer.layout,
						width: answer.width,
					}}
					key={index}
				>
					<TextField
						autoComplete="off"
						name={answerName}
						value={
							overview[detailMarker][answerName]
								? overview[detailMarker][answerName].answer
								: ""
						}
						onChange={e => {
							handleOnChange({
								[detailMarker]: {
									...overview[detailMarker],
									[e.target.name]: {
										answer: e.target.value,
										votes: "",
										correct: correctMarker,
									},
								},
							});
						}}
						margin="dense"
						id={answerName}
						label={answerLabel}
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

	const selection = (val, index) => {
		const overview = allData["questions"][data["questionPosition"] - 1];
		return (
			<div
				key={index}
				style={{
					padding: 15,
					display: val.layout,
					width: val.width,
				}}
			>
				<Selection
					value={overview[val.name]}
					name={val.name}
					selectName={val.selectName}
					selectValues={val.selectVals}
					handleValueChange={handleOnChange}
					text={val.placeholder}
					helperText={val.helper}
					overview={overview}
					details={val.details}
				/>
			</div>
		);
	};

	const positionSelect = (item, index) => {
		let numberItems = [];
		allData.questions.map((number, index) => {
			numberItems.push({ name: index + 1 });
		});

		return (
			<Select
				item={item}
				index={index}
				value={allData["questions"][data["questionPosition"] - 1][item.name]}
				name={item.name}
				selectValues={numberItems}
				handleValueChange={handlePositionChange}
				text={item.placeholder}
				helperText={item.helper}
			/>
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

	const questionAnswer = (dataLayout, gridColumn, question) => {
		return (
			<Paper
				style={{
					display: "inline-block",
					width: "80%",
					margin: "0 auto",
					gridColumn: gridColumn,
				}}
			>
				{dataLayout.map((item, index) => {
					switch (item.type) {
						case "image":
							return image(item.name, item.alt, item.question, index);
						case "textField":
							return textField(item.placeholder, item.name, item.width, index);
						case "editor":
							return editor(item, index);
						case "selection":
							return selection(item, index);
						case "selectField":
							return positionSelect(item, index);
						case "answers":
							return answerDetails(item, index);
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
			{questionAnswer(questionLayout, 2, true)}
			{questionAnswer(answerLayout, 3, false)}
			<div style={{ gridColumn: 4, margin: "auto" }}>{slideArrow("right")}</div>
			<ImageDialog
				imageDialog={imageDialog}
				setImageDialog={setImageDialog}
				value={imageQuestion}
				handleOnChange={handleOnChange}
				imageAttribution={imageAttribution}
				imageAttributionLink={imageAttributionLink}
				imageAlt={imageQuestionAlt}
			/>
		</div>
	);
};

export default withStyles(quizStyles)(QuizCards);
