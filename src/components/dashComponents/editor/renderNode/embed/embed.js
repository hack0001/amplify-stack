import React, { Component, useEffect, useState, useRef } from "react";
import Embedo from "./embedo";
import LinearProgress from "@material-ui/core/LinearProgress";

const EmbedUrl = props => {
  const { isFocused, attributes, node, values, children } = props;
  const { data } = node;
  const [embedUrl, setEmbedUrl] = useState({
    url: "",
    caption: "",
    attribution: "",
    attributionLink: ""
  });
  const embedoContainer = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleEmbed();
  }, []);

  const handleEmbed = () => {
    const embedUrlString = data.get("url");
    const embedCaption = data.get("caption");
    const embedAttribution = data.get("attribution");
    const embedAttributionLink = data.get("attributionLink");

    setEmbedUrl({
      url: embedUrlString,
      caption: embedCaption,
      attribution: embedAttribution,
      attributionLink: embedAttributionLink
    });

    Embedo.load(embedoContainer.current, embedUrlString, {})
      .done(data => {
        setLoading(false);
      })
      .fail(err => {
        console.error("error", err);
        setLoading(false);
      });
  };

  //   const onChange = e => {
  //     const embed = e.target.value;
  //     const { node, editor } = this.props;
  //     editor.setNodeByKey(node.key, { data: { embed } });
  //   };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div {...attributes}>
      <div
        href={embedUrl.url}
        className={"embedo"}
        target="_blank"
        rel="noopener noreferrer"
        ref={embedoContainer}
      />
      {children}
      <span>{embedUrl.caption}</span>
    </div>
  );
};

export default EmbedUrl;
