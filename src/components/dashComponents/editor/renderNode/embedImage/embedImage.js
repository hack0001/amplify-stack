import React, { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import DEFAULT_IMAGE from "../../../../../default.jpg";

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
    <div
      {...attributes}
      style={{
        display: "block",
        width: "100%",
        margin: "0 auto"
      }}
    >
      <img
        className={"embedImage"}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "360px",
          margin: 10
        }}
        alt={embedImage.imageAlt}
        src={embedImage.imageUrl ? embedImage.imageUrl : DEFAULT_IMAGE}
      />
      {children}
      <span>{embedImage.imageCaption}</span>
    </div>
  );
};

export default EmbedImage;
