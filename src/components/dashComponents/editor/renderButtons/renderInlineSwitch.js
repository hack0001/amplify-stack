const inlineSwitch = (
  type,
  value,
  setContent,
  onClickInline,
  editor,
  isActive
) => {
  let buttonHandler;
  switch (type) {
    case "emoji":
      buttonHandler = e => {
        e.preventDefault();
        setContent({ emoticonDialog: true, type });
      };
      break;
    default:
      if (isActive) {
        buttonHandler = e => {
          e.preventDefault();
          onClickInline(e, type, editor, isActive);
        };
      } else {
        buttonHandler = e => {
          e.preventDefault();
          setContent({ slateDialog: true, type });
        };
      }
      break;
  }
  return { buttonHandler };
};

export default inlineSwitch;
