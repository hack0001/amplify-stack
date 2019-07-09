import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../dialogStyles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const ImageTags = props => {
  const { label, name, handleOnChange, values, index, tagArray } = props;
  const classes = useStyles();
  const [tagItem, setTagItem] = useState("");

  const handleTagUpdate = e => {
    const valLength = tagItem.length;
    let tagValue = tagItem;
    if (e.keyCode === 13 && valLength > 1) {
      tagValue = tagValue
        .trim()
        .replace(/\s/g, "-")
        .toLowerCase();
      handleOnChange({
        ...values,
        [tagArray]: [...values[tagArray], tagValue]
      });
      setTagItem("");
    }
  };

  return (
    <div style={{ padding: 30, display: "block", width: "100%" }} key={index}>
      <TextField
        label={label}
        autoComplete="off"
        name={name}
        className={classes.textField}
        value={tagItem}
        style={{ width: "95%", marginLeft: 5 }}
        onChange={e => setTagItem(e.target.value)}
        onKeyDown={handleTagUpdate}
      />
      {values[tagArray].length === 0 && <div />}
      {values[tagArray].map((chip, indexNo) => {
        return (
          <div
            style={{ marginTop: 20, marginRight: 10, display: "inline-block" }}
            key={indexNo}
          >
            <Chip
              icon={<DoneIcon />}
              label={chip}
              onDelete={
                (indexNo,
                e => {
                  const newArray = [
                    ...values[tagArray].filter(
                      (val, valIndex) => valIndex !== indexNo
                    )
                  ];
                  handleOnChange({
                    ...values,
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

export default ImageTags;
