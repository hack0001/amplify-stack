const quoteIconFirst = {
  fontSize: 50,
  transform: "rotate(180deg)",
  position: "relative",
  top: 34,
  color: "#0C62C2"
};

const quoteIconFooter = {
  margin: "5px 0 10px 0",
  fontSize: "18px",
  textAlign: "right",
  color: "#0C62C2",
  fontFamily: "Source Sans Pro, sans-serif",
  fontWeight: 900,
  textTransform: "capitalize"
};

const quoteIconSecond = {
  fontSize: 50,
  right: 0,
  position: "relative",
  bottom: 80,
  float: "right",
  color: "#0C62C2"
};

const quoteWordStyle = {
  fontFamily: "Source Sans Pro, sans-serif",
  fontWeight: 400,
  fontSize: "2em",
  textAlign: "center",
  margin: "0 auto",
  textTransform: "capitalize",
  fontStyle: "italic",
  lineHeight: 1,
  padding: "0 .5em 1em .5em",
  width: "80%",
  color: "white",
  background:
    "-webkit-gradient(linear,left top,left bottom,from(#e43a15),to(#e65245))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

export { quoteIconFirst, quoteIconSecond, quoteWordStyle, quoteIconFooter };
