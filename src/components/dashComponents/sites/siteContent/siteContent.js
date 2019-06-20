import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContainer } from "../../../tabs/tabContainer";
import { contentStyles } from "../styles/siteStyles";
import { getSite } from "../../../../graphql/queries";
import { deleteSite } from "../../../../graphql/mutations";
import useFormValidation from "../form/useFormValidation";
import validateAuth from "../form/validateForm";
import DialogComponent from "../../../dialog/deleteDialog";
import SnackBar from "../../../snackBar/snackBar";
const heads = ["Site Details", "Articles", "Ideas", "Quiz", "SlideShows"];

const INITIAL_STATE = {
  name: "",
  createdAt: "",
  updatedAt: "",
  type: "",
  description: "",
  ideas: [],
  quiz: [],
  id: "",
  articles: [],
  slideShows: []
};

const textFieldTypes = [
  {
    label: "Name",
    type: "name"
  },
  {
    label: "Created At",
    type: "createdAt"
  },
  {
    label: "Type",
    type: "type"
  },
  {
    label: "Description",
    type: "description"
  },
  {
    label: "Updated At",
    type: "updatedAt"
  }
];

const SiteContent = props => {
  const { classes, theme } = props;
  const [value, setValue] = useState(0);
  const [toDelete, setDelete] = useState(false);
  const {
    handleSubmit,
    handleChange,
    values,
    setValues,
    snackBar,
    setSnackBar
  } = useFormValidation(INITIAL_STATE, validateAuth);

  useEffect(() => {
    handleSite();
  }, []);

  const handleSite = async () => {
    try {
      const { data } = await API.graphql(
        graphqlOperation(getSite, { id: props.match.params.id })
      );
      const siteValues = data.getSite;
      setValues({
        ...values,
        id: siteValues.id,
        name: siteValues.name,
        createdAt: siteValues.createdAt,
        type: siteValues.type,
        description: siteValues.description,
        updatedAt: siteValues.updatedAt,
        ideas: siteValues.ideas,
        articles: siteValues.articles,
        quiz: siteValues.quiz,
        slideShows: siteValues.slideShows
      });
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  const handleChangeTab = (event, value) => {
    setValue(value);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const textFields = ({ label, type }, index) => {
    return (
      <TextField
        key={index}
        label={`${label}`}
        className={classes.textField}
        value={values[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Link to={"/sites"} style={{ textDecoration: "none", marginBottom: 20 }}>
        <Button variant="contained" color="primary" className={classes.button}>
          <ArrowBack className={classes.rightIcon} />
          Back To Sites
        </Button>
      </Link>
      <AppBar style={{ marginTop: 25 }} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {heads.map(header => {
            return <Tab key={header} label={`${header}`} />;
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <form onSubmit={handleSubmit}>
            {textFieldTypes.map((field, index) => {
              return textFields(field, index);
            })}
            <div style={{ padding: 8 * 3, margin: "10px 1px 5px 1px" }}>
              <Button
                variant="contained"
                color="primary"
                align="right"
                className={classes.button}
                type="submit"
              >
                <SaveIcon className={classes.rightIcon} />
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.delete}
                onClick={e => setDelete(true)}
              >
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </Button>
            </div>
          </form>
        </TabContainer>
        <TabContainer dir={theme.direction}>Articles Here</TabContainer>
        <TabContainer dir={theme.direction}>Ideas Here</TabContainer>
        <TabContainer dir={theme.direction}>Quiz Here</TabContainer>
        <TabContainer dir={theme.direction}>SlideShow Here</TabContainer>
      </SwipeableViews>
      <SnackBar open={snackBar} closeFunc={setSnackBar} classes={classes} />
      <DialogComponent
        openDialog={toDelete}
        closeFunc={setDelete}
        push={props.history}
        values={values}
      />

      <DialogComponent
        openDialog={toDelete}
        closeFunc={setDelete}
        values={values}
        type={"Site"}
        deleteFunc={async e => {
          try {
            await API.graphql(
              graphqlOperation(deleteSite, {
                input: { id: values.id }
              })
            );
            setDelete(false);
            props.history.push("/sites");
          } catch (err) {
            console.log("Error occurred", err);
          }
        }}
      />
    </div>
  );
};

export default withStyles(contentStyles, { withTheme: true })(SiteContent);
