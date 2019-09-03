import React from "react";
import QuoteIcon from "@material-ui/icons/FormatQuote";
import {
  quoteIconFirst,
  quoteIconSecond,
  quoteWordStyle,
  quoteIconFooter
} from "./electricQuoteStyle";
const ElectricQuote = ({ quote, attributes, children }) => {
  return (
    <div {...attributes} style={{ padding: 15 }}>
      <QuoteIcon style={quoteIconFirst} />

      <div style={quoteWordStyle}>
        <p>{quote.quote}</p>
        <p>{quote.additionalQuote}</p>
      </div>
      {children}
      <QuoteIcon style={quoteIconSecond} />
      <footer style={quoteIconFooter}>
        {quote.author ? <span>- {quote.author}</span> : ""}
      </footer>
    </div>
  );
};
export default ElectricQuote;
