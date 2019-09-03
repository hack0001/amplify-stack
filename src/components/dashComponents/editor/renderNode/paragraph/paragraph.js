import React from "react";
import Box from "@material-ui/core/Box";

const Paragraph = ({ props, attributes, node, children }) => {
  const { data } = node;

  //   const currentIndent = attributes.ref.current
  //     ? attributes.ref.current.style.marginLeft.split("p")
  //     : 0;
  //   console.log(Number(currentIndent[0]));
  //   const getCurrentIndent = Number(currentIndent[0])
  //     ? Number(currentIndent[0])
  //     : 0;

  let marginLeft = 0;
  const formatSize = 18;
  const lineHeight = 1.75;
  //   const indent = data.get("styleIndent");
  //   marginLeft =
  //     indent === "indent"
  //       ? getCurrentIndent + 20
  //       : indent === "outdent"
  //       ? getCurrentIndent - 20
  //       : marginLeft;

  return (
    <Box
      variant="body1"
      gutterBottom
      fontSize={formatSize}
      lineHeight={lineHeight}
      fontStyle="normal"
      align="justify"
      {...attributes}
    >
      {children}
    </Box>
  );
};

export default Paragraph;
