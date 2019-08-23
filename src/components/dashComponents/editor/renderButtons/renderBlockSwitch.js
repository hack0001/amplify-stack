const blockSwitch =  (
  type,
  value,
  setContent,
  onClickBlock,
  editor,
  isActive
) => {
  let buttonHandler;
  let listType;
  switch (type) {
    case "bulleted-list":
    case "numbered-list":
    case "list-item":
      const { document } = value;
      listType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });
      buttonHandler = e => {
        e.preventDefault();
        onClickBlock(e, type, editor, listType);
      };
      break;

    case "embed-image":
      buttonHandler = e => {
        e.preventDefault();
        setContent({ imageDialog: true, type });
      };
      break;
    case "embed":
    case "quote":
    case "link":
      buttonHandler = e => {
        e.preventDefault();
        setContent({ slateDialog: true, type });
      };
      break;
    default:
      buttonHandler = e => {
        e.preventDefault();
        onClickBlock(e, type, editor, isActive);
      };
      break;
  }
  return { buttonHandler, listType };
};

export default blockSwitch;
