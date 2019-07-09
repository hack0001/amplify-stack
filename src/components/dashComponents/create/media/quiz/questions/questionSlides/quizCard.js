import React, { useState } from "react";
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

const QuizCards = props => {
  const classes = useStyles();

  const {
    data,
    handleSend,
    questionLayout,
    answerLayout,
    allData,
    currentTab,
    setNewTab
  } = props;

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
        questions: newMappedQuestions
      }
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

  const image = (value, alt, question, index) => {
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
          src={
            allData["questions"][data["questionPosition"] - 1][value]
              ? allData["questions"][data["questionPosition"] - 1][value]
              : DEFAULT_IMAGE
          }
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
            margin: "0 auto"
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
          gridColumn: gridColumn
        }}
      >
        {dataLayout.map((item, index) => {
          switch (item.type) {
            case "image":
              return image(item.name, item.alt, item.question, index);
            case "textField":
              return textField(item.placeholder, item.name, item.width, index);
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
