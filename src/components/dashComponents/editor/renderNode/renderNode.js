import React from "react";
import Divider from "@material-ui/core/Divider";
import { quoteStyle, quoteStyleText, blockQuoteStyle } from "./styles/styles";
import Embed from "./embed/embed";
import Quote from "./quote/quote";
import EmbedImage from "./embedImage/embedImage";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const formatSize = 18;
const lineHeight = 1.75;
const renderNode = (props, editor, next) => {
  const { attributes, children, node } = props;
  console.log("RENDER", node.type);
  switch (node.type) {
    case "code":
      return <code {...attributes}>{children}</code>;
    case "paragraph":
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
    case "emoji":
      const code = node.data.get("code");
      return (
        <span {...attributes}>
          {code}
          {children}
        </span>
      );
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return (
        <Typography variant="h1" {...attributes}>
          {children}
        </Typography>
      );
    case "heading-two":
      return (
        <Typography variant="h2" {...attributes}>
          {children}
        </Typography>
      );
    case "heading-three":
      return (
        <Typography variant="h3" {...attributes}>
          {children}
        </Typography>
      );
    case "heading-four":
      return (
        <Typography variant="h4" {...attributes}>
          {children}
        </Typography>
      );
    case "heading-five":
      return (
        <Typography variant="h5" {...attributes}>
          {children}
        </Typography>
      );
    case "format-align-left":
      return (
        <Box
          variant="body1"
          gutterBottom
          fontSize={formatSize}
          lineHeight={lineHeight}
          fontStyle="normal"
          align="left"
          {...attributes}
        >
          {children}
        </Box>
      );
    case "format-align-center":
      return (
        <Box
          variant="body1"
          gutterBottom
          fontSize={formatSize}
          lineHeight={lineHeight}
          fontStyle="normal"
          align="center"
          {...attributes}
        >
          {children}
        </Box>
      );
    case "format-align-right":
      return (
        <Box
          variant="body1"
          gutterBottom
          fontSize={formatSize}
          lineHeight={lineHeight}
          fontStyle="normal"
          align="right"
          {...attributes}
        >
          {children}
        </Box>
      );
    case "format-align-justify":
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
    case "bullet-list":
      return (
        <li style={{ fontSize: formatSize }} {...attributes}>
          {children}
        </li>
      );
    case "list-item":
      return (
        <li style={{ fontSize: formatSize }} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={{ fontSize: formatSize }} {...attributes}>
          {children}
        </ol>
      );
    case "quote":
      return <Quote {...props} {...attributes} {...node} {...children} />;
    case "horizontal-line":
      return (
        <span
          {...attributes}
          style={{
            borderBottom: "1px solid #000",
            display: "block",
            opacity: 0.2
          }}
        >
          {children}
        </span>
      );
    case "link":
      const { data } = node;
      const link = data.get("linkUrl");
      return (
        <a
          {...attributes}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );

    case "embed-image":
      return <EmbedImage {...props} {...attributes} {...node} {...children} />;
    case "embed":
      return <Embed {...props} {...attributes} {...node} {...children} />;

    default:
      return next();
  }
};

export default renderNode;
