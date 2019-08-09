import React, { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const EmbedImage = props => {
  const { attributes, node, children } = props;
  const { data } = node;
  const [embedImage, setEmbedImageUrl] = useState({
    imageUrl: "",
    imageAlt: "",
    imageAttribution: "",
    imageAttributionLink: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleImageEmbed();
  }, []);

  const handleImageEmbed = () => {
    const embedImageUrl = data.get("imageUrl");
    const embedImageAlt = data.get("imageAlt");
    const embedImageAttribution = data.get("imageAttribution");
    const embedImageAttributionLink = data.get("imageAttributionLink");
    setEmbedImageUrl({
      imageUrl: embedImageUrl,
      imageAlt: embedImageAlt,
      imageAttribution: embedImageAttribution,
      imageAttributionLink: embedImageAttributionLink
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
      <img
        src={embedImage.imageUrl}
        className={"embedImage"}
        alt={embedImage.imageAlt}
      />
      {children}
      <span>{embedImage.imageCaption}</span>
    </div>
  );
};

export default EmbedImage;
