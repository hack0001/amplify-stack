import React, { Fragment } from "react";
import QuoteIcon from "@material-ui/icons/FormatQuote";
import {
  quoteIconFirst,
  quoteIconSecond,
  quoteWordStyle,
  quoteIconFooter
} from "./shrimpyQuoteStyle";
const ShrimpyQuote = ({ quote }) => {
  return (
    <Fragment>
      <QuoteIcon style={quoteIconFirst} />

      <div style={quoteWordStyle}>
        <p>{quote.quote}</p>
        <p>{quote.additionalQuote}</p>
      </div>
      <QuoteIcon style={quoteIconSecond} />
      <footer style={quoteIconFooter}>
        {quote.author ? <span>- {quote.author}</span> : ""}
      </footer>
    </Fragment>
  );
};
export default ShrimpyQuote;
