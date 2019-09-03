import React from "react";
import { hasInline } from "../hasHelpers/hasHelpers";
import { InlineButton } from "../renderButtons";
import inlineSwitch from "../renderButtons/renderInlineSwitch";

const renderHoverInlineButton = (
  type,
  Icon,
  tooltip,
  editor,
  defaultColor,
  setContent,
  onClickInline,
  classes
) => {
  const { value } = editor;
  const isActive = hasInline(value, type);

  const switchInline = inlineSwitch(
    type,
    value,
    setContent,
    onClickInline,
    editor,
    isActive
  );

  const { buttonHandler } = switchInline;
  const activeColor = isActive ? defaultColor : "grey";

  return (
    <InlineButton
      Icon={Icon}
      tooltip={tooltip}
      type={type}
      classes={classes}
      handleInline={buttonHandler}
      activeColor={activeColor}
      editor={editor}
      renderType={"hover"}
    />
  );
};

export default renderHoverInlineButton;
