const onClickMark = (event, type, editor, isActive) => {
  event.preventDefault();

  switch (type) {
    default:
      // Handle the extra wrapping required for list buttons.
      editor
        .toggleMark(type)
        .moveToEnd()
        .focus();
      break;
  }
};

export default onClickMark;
