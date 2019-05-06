import React from "react";
import Divider from "@material-ui/core/Divider";
import { quoteStyle, quoteStyleText } from "./styles";
import Video from "./embed/video";

const renderNode = (props, editor, next) => {
  switch (props.node.type) {
    case "code":
      return <code>{props.children}</code>;
    case "emoji":
      const code = props.node.data.get("code");
      return <span>{code}</span>;
    case "bulleted-list":
      return <ul>{props.children}</ul>;
    case "heading-one":
      return <h1>{props.children}</h1>;
    case "heading-two":
      return <h2>{props.children}</h2>;
    case "heading-three":
      return <h3>{props.children}</h3>;
    case "heading-four":
      return <h4>{props.children}</h4>;
    case "heading-five":
      return <h5>{props.children}</h5>;
    case "bullet-list":
      return <li>{props.children}</li>;
    case "list-item":
      return <li>{props.children}</li>;
    case "numbered-list":
      return <ol>{props.children}</ol>;
    case "quote":
      return (
        <div {...props.attributes} style={quoteStyle}>
          “<span style={quoteStyleText}>{props.children}</span>”
        </div>
      );
    case "horizontal-line":
      const divider = props.node.data.get("code");
      return <Divider />;

    case "link":
      const { data } = props.node;
      const href = data.get("href");
      return (
        <a
          {...props.attributes}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {props.children}
        </a>
      );

    case "embed-video":
      return <Video {...props} />;
    default:
      return next();
  }
};

export default renderNode;
