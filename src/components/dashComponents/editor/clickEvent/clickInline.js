import { unwrapLink } from "../links/links";
const DEFAULT_NODE = "paragraph";
const onClickInline = (event, type, editor, isActive) => {
  event.preventDefault();
  switch (type) {
    case "link":
      if (isActive) {
        editor.command(unwrapLink);
      }
      break;
    case "emoji":
      editor.setBlocks(isActive ? DEFAULT_NODE : type);
      break;
    default:
      break;
  }
};

export default onClickInline;
