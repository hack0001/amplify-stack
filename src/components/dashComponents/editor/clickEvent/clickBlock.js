// import React from "react";
import { hasBlock } from "../hasHelpers/hasHelpers";
const DEFAULT_NODE = "paragraph";

const onClickBlock = (event, type, editor, isActive) => {
  event.preventDefault();
  const { value } = editor;
  const { document } = value;

  switch (type) {
    case "undo":
      editor.undo();
      break;
    case "redo":
      editor.redo();
      break;
    case "bulleted-list":
    case "numbered-list":
    case "list-item":
      const isList = hasBlock(value, "list-item");
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      isList && isType
        ? editor
            .setBlocks(DEFAULT_NODE)
            .unwrapBlock("bulleted-list")
            .unwrapBlock("numbered-list")
        : isList
        ? editor
            .unwrapBlock(
              type === "bulleted-list" ? "numbered-list" : "bulleted-list"
            )
            .wrapBlock(type)
        : editor.setBlocks("list-item").wrapBlock(type);

      break;
    case "paid-ad":
    case "site-ad":
    case "horizontal-line":
    case "embed":
    case "embed-image":
    case "quote":
      isActive
        ? editor.setBlocks(DEFAULT_NODE)
        : editor
            .moveToEndOfBlock()
            .insertBlock(type)
            .insertBlock(DEFAULT_NODE)
            .focus();

      break;
    // case "indent":
    // case "outdent":
    //   editor
    //     .setBlocks({ type: DEFAULT_NODE, data: { styleIndent: type } })
    //     .focus();

    //   break;
    default:
      // Handle the extra wrapping required for list buttons.
      isList
        ? editor
            .setBlocks(isActive ? DEFAULT_NODE : type)
            .unwrapBlock("bulleted-list")
            .unwrapBlock("numbered-list")
            .focus()
        : editor.setBlocks(isActive ? DEFAULT_NODE : type);

      break;
  }
};

export default onClickBlock;
