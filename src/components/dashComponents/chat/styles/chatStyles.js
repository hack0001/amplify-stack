const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "100%",
    height: "90%",

    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap",
      flexDirection: "column"
    }
  },
  avatar: {
    flex: 1
  },
  chatMessage: {
    display: "flex",
    flexWrap: "wrap"
  },
  avatarBlock: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  content: {
    color: "white",
    borderRadius: 10,
    padding: 10
  },
  contentBlock: {
    width: "auto",
    marginTop: 5
  },
  msgAuthor: {
    fontSize: 14,
    color: "grey",
    textAlign: "center"
  },
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  rightIcon: {
    marginRight: 10,
    marginLeft: -10
  },
  convoBlock: {
    height: "100%",
    width: "30%",
    float: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto"
    }
  },
  paper: {
    height: "100%"
  },
  chatOverview: {
    height: "98%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  button: {
    padding: 5
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0,
    [theme.breakpoints.down("sm")]: { display: "none" }
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
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
  },
  userButton: {
    float: "right"
  },
  chatDrawer: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  chatInline: {
    display: "inline"
  },
  chatBox: {
    height: "95%",
    float: "right",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
      marginTop: 5,
      marginBottom: 5
    }
  },
  chatPaper: {
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 20
    }
  },
  input: {
    width: "70%",
    marginLeft: 5,
    marginTop: 6,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0
    }
  },
  list: {
    marginBottom: theme.spacing(2)
  }
});

export { styles };
