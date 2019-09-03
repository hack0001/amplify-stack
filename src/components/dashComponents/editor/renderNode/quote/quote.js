import React, { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { topLevelQuote } from "./quoteStyles";
import InstaQuote from "./instagram/instaQuote";
import ElectricQuote from "./electric/electricQuote";
import ShrimpyQuote from "./shrimpy/shrimpyQuote";
const Quote = props => {
  const { attributes, node, children } = props;
  const { data } = node;
  const [quote, setQuote] = useState({
    quote: "",
    additionalQuote: "",
    author: "",
    quoteImage: "",
    styleQuote: "instagram"
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleEmbed();
  }, []);

  const handleEmbed = () => {
    const quote = data.get("quote");
    const addQuote = data.get("additionalQuote");
    const author = data.get("author");
    const image = data.get("quoteImage");
    const style = data.get("quoteStyle") ? data.get("quoteStyle") : "instagram";
    setQuote({
      quote,
      additionalQuote: addQuote,
      author,
      quoteImage: image,
      styleQuote: style
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

  switch (quote.styleQuote) {
    case "instagram":
      return <InstaQuote {...props} quote={quote} />;
    case "electric":
      return <ElectricQuote {...props} quote={quote} />;
    case "normal":
      return <ElectricQuote {...props} quote={quote} />;
    case "shrimpy":
      return <ShrimpyQuote {...props} quote={quote} />;
    default:
      return <div {...attributes}>{children}</div>;
  }
};

export default Quote;
