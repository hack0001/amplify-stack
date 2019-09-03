import React from "react";
import { hasBlock } from "../hasHelpers/hasHelpers";
import { BlockButton } from "../renderButtons";
import blockSwitch from "../renderButtons/renderBlockSwitch";

const renderHoverBlockButton = (
  type,
  Icon,
  tooltip,
  editor,
  defaultColor,
  setContent,
  onClickBlock
) => {
  const { value } = editor;
  let isActive = hasBlock(value, type);
  //   let buttonHandler;
  //   let listType;

  const switchBlocks = blockSwitch(
    type,
    value,
    setContent,
    onClickBlock,
    editor,
    isActive
  );
  const { listType, buttonHandler } = switchBlocks;
  const activeColor = isActive
    ? defaultColor
    : listType
    ? defaultColor
    : "grey";
  return (
    <BlockButton
      Icon={Icon}
      tooltip={tooltip}
      type={type}
      activeColor={activeColor}
      handleBlock={buttonHandler}
      editor={editor}
      renderType={"hover"}
    />
  );
};
export default renderHoverBlockButton;
