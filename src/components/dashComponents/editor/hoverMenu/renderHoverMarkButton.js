import React from "react";
import { hasMark } from "../hasHelpers/hasHelpers";
import { MarkButton } from "../renderButtons";
import markSwitch from "../renderButtons/renderMarkSwitch";

const renderMarkButton = (
  type,
  Icon,
  tooltip,
  editor,
  defaultColor,
  classes,
  setContent,
  clickMark
) => {
  const { value } = editor;
  const isActive = hasMark(value, type);
  const activeColor = isActive ? defaultColor : "grey";
  const switchMarks = markSwitch(
    type,
    value,
    setContent,
    clickMark,
    editor,
    isActive
  );
  const { buttonHandler } = switchMarks;
  return (
    <MarkButton
      Icon={Icon}
      tooltip={tooltip}
      classes={classes}
      type={type}
      activeColor={activeColor}
      handleMarkUp={buttonHandler}
      editor={editor}
      renderType={"hover"}
    />
  );
};

export default renderMarkButton;
