const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "15px",
    width: "100%",
    maxWidth: "75%",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  title: {
    marginBottom: "20px"
  },
  linear: {
    flexGrow: 1
  },
  status: {
    color: "red"
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`
  }
});

const taskStyles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "15px",
    width: "100%",
    maxWidth: "75%",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  title: {
    marginBottom: "20px"
  },
  linear: {
    flexGrow: 1
  },

  status: {
    color: "red"
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`
  }
});

const taskStylesSubs = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: "15px"
  },
  title: {
    marginBottom: "20px"
  },
  linear: {
    flexGrow: 1
  }
});

const createStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 500,
    margin: 20
  },
  selectField: {
    width: 500,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  delete: {
    float: "right"
  },
  list: {
    width: 500
  },
  fullList: {
    width: "auto"
  }
});

const siteStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  width: 500,
  appBar: {
    width: 900,
    marginBottom: 35,
    margin: "auto"
  }
});

const dataStyles = theme => ({
  button: {
    margin: "auto 0"
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  root: {
    marginTop: theme.spacing.unit * 3,
    margin: "auto 1px"
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const contentStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
    // width: 500
  },
  textField: {
    width: "90%",
    margin: 20
  },
  selectField: {
    width: "90%",
    margin: 20
  },
  delete: {
    float: "right"
  },
  drawer: {
    width: 500,
    padding: 10
  }
});

export {
  styles,
  taskStyles,
  taskStylesSubs,
  createStyles,
  contentStyles,
  dataStyles,
  siteStyles
};
