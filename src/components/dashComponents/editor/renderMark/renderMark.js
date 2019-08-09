import React from "react";
import Box from "@material-ui/core/Box";

const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props;
  switch (mark.type) {
    case "bold":
      return (
        <Box fontWeight="fontWeightBold" {...attributes}>
          {children}
        </Box>
      );
    case "code":
      return <code {...attributes}>{children}</code>;
    case "italic":
      return (
        <Box fontStyle="italic" {...attributes}>
          {children}
        </Box>
      );
    case "strikethrough":
      return <del {...attributes}>{children}</del>;
    case "underline":
      return <u {...attributes}>{children}</u>;
    default:
      return next();
  }
};

export default renderMark;
