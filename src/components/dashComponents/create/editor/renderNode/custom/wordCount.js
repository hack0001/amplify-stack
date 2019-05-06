import React from "react";
import Paper from "@material-ui/core/Paper";

const WordCounter = {
  marginTop: "10px",
  padding: "12px",
  display: "inline-block"
};

const WordCount = options => {
  return {
    renderEditor(props, editor, next) {
      const children = next();
      const wordCount = props.value.document
        .getBlocks()
        .reduce((memo, b) => memo + b.text.trim().split(/\s+/).length, 0);
      return (
        <div>
          <div>{children}</div>
          <Paper style={WordCounter}>Word Count: {wordCount}</Paper>
        </div>
      );
    }
  };
};
export default WordCount;
