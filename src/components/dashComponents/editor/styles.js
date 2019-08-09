const styles = theme => ({
  root: {
    width: "40%"
  },
  icons: {
    margin: `${theme.spacing.unit * 1.05}px `
  },
  editorDivide: {
    marginBottom: `${theme.spacing.unit * 5}px `
  },
  gridList: { margin: "10px" },
  gridTiles: {
    onHover: {
      cursor: "pointer"
    }
  },

  title: {
    color: theme.palette.primary.light,
    margin: `${theme.spacing.unit * 1.05}px `
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

const quoteStyle = {
  fontWeight: "bold",
  fontSize: "50px",
  color: "#C0C0C0",
  fontFamily: "Times New Roman"
};

export { styles, quoteStyle };
