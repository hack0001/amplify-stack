const blockMarkSwitch = (
  type,
  value,
  setContent,
  onClickMark,
  editor,
  isActive
) => {
  let buttonHandler;
  switch (type) {
    default:
      buttonHandler = e => {
        e.preventDefault();
        onClickMark(e, type, editor, isActive);
      };
      break;
  }
  return { buttonHandler };
};

export default blockMarkSwitch;
