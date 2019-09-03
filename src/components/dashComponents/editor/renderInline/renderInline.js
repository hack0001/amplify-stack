import React from "react";

const renderInline = (props, editor, next) => {
  const { children, attributes, node } = props;
  switch (node.type) {
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
    case "emoji":
      const code = node.data.get("code");
      return (
        <span {...attributes}>
          {code}
          {children}
        </span>
      );
    default:
      return next();
  }
};

export default renderInline;
