import React from "react";

const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props;
  switch (mark.type) {
    case "bold":
      return <strong {...attributes}>{children}</strong>;
    case "code":
      return <code {...attributes}>{children}</code>;
    case "italic":
      return <em {...attributes}>{children}</em>;
    case "strikethrough":
      return <del {...attributes}>{children}</del>;
    case "underline":
      return <u {...attributes}>{children}</u>;
    default:
      return next();
  }
};

export default renderMark;
