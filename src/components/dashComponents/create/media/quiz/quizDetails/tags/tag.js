import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../../styles/quizStyles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
const QuizCards = props => {
  const { label, value, index, overview, tagArray, handleOnChange } = props;
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
        [tagArray]: [...overview[0][tagArray], tagValue],
        [e.target.name]: ""
      });
    }
  };

  return (
    <div style={{ padding: 30, display: "block", width: "100%" }} key={index}>
      <TextField
        label={label}
        name={value}
        className={classes.textField}
        value={overview[0][value]}
        style={{ width: "100%" }}
        onChange={e => {
          handleOnChange({ [e.target.name]: e.target.value });
        }}
        onKeyDown={handleTagUpdate}
      />
      {overview[0][tagArray].map((chip, index) => {
        return (
          <div
            style={{ marginTop: 20, marginRight: 10, display: "inline-block" }}
            key={index}
          >
            <Chip
              icon={<DoneIcon />}
              label={chip}
              onDelete={
                (index,
                e => {
                  const newArray = [
                    ...overview[0][tagArray].filter(
                      (val, valIndex) => valIndex !== index
                    )
                  ];
                  handleOnChange({
                    [tagArray]: newArray
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

export default QuizCards;
