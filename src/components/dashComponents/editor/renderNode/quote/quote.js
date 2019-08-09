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
      return (
        <blockquote {...attributes} style={topLevelQuote}>
          <InstaQuote quote={quote}>{children}</InstaQuote>
        </blockquote>
      );
    case "electric":
      return (
        <blockquote {...attributes} style={topLevelQuote}>
          <ElectricQuote quote={quote}>{children}</ElectricQuote>
        </blockquote>
      );
    case "normal":
      return (
        <blockquote {...attributes} style={topLevelQuote}>
          <ElectricQuote quote={quote}>{children}</ElectricQuote>
        </blockquote>
      );
    case "shrimpy":
      return (
        <blockquote {...attributes} style={topLevelQuote}>
          <ShrimpyQuote quote={quote}>{children}</ShrimpyQuote>
        </blockquote>
      );

    default:
      return <div>{children}</div>;
  }
};

export default Quote;
