import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { TabContainer } from "../../../tabs/tabContainer";
import { contentStyles } from "../styles/eventStyles";
import useFormValidation from "../form/useFormValidation";
import validateAuth from "../form/validateForm";
import DialogComponent from "../../../dialog/eventDialog";
import { getCalendarDay } from "../../../../graphql/queries";
import { deleteCalendarDay } from "../../../../graphql/mutations";
import SnackBar from "../../../snackBar/snackBar";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";

const INITIAL_STATE = {
  eventName: "",
  updatedAt: "",
  createdAt: "",
  year: "",
  day: "",
  month: "",
  category: "",
  description: "",
  site: "",
  date: "",
  originalDate: ""
};

const textFieldTypes = [
  {
    label: "Event Name",
    type: "eventName"
  },
  {
    label: "Category",
    type: "category"
  },
  {
    label: "Description",
    type: "description"
  },
  {
    label: "Site",
    type: "site"
  }
];

const EventContent = props => {
  const { classes, theme } = props;
  const [toDelete, setDelete] = useState(false);
  const {
    handleSubmit,
    handleChange,
    eventValues,
    setEventValues,
    snackBar,
    setSnackBar,
    selectedDate,
    setSelectedDate
  } = useFormValidation(INITIAL_STATE, validateAuth);

  useEffect(() => {
    handleEvent();
  }, []);

  const clean = values => {
    Object.keys(values).forEach(key => {
      if (values[key] === null || values[key] === undefined) {
        values[key] = "";
      }
    });
  };

  const handleEvent = async () => {
    try {
      const { data } = await API.graphql(
        graphqlOperation(getCalendarDay, { id: props.match.params.id })
      );
      let indivEventValues = data.getCalendarDay;
      clean(indivEventValues);
      const dateToSet = moment(
        `${indivEventValues.day}-${indivEventValues.calendarMonth.month}-${
          indivEventValues.year
        }`
      ).format();

      setEventValues({
        ...eventValues,
        id: indivEventValues.id,
        calendarDayCalendarMonthId: indivEventValues.calendarMonth.id,
        category: indivEventValues.category,
        createdAt: indivEventValues.createdAt,
        updatedAt: indivEventValues.updatedAt,
        description: indivEventValues.description,
        eventName: indivEventValues.eventName,
        author: indivEventValues.author,
        site: indivEventValues.site,
        year: indivEventValues.year,
        day: indivEventValues.day,
        month: indivEventValues.calendarMonth.month,
        originalDate: dateToSet,
		
      });
      setSelectedDate(moment(dateToSet));
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  const textFields = ({ label, type }, index) => {
    return (
      <TextField
        key={index}
        label={`${label}`}
        className={classes.textField}
        value={eventValues[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  const handleDateChange = date => {
    setSelectedDate(moment(date));
  };

  return (
    <div className={classes.root}>
      <Link
        to={"/calendar"}
        style={{ textDecoration: "none", marginBottom: 20 }}
      >
        <Button variant="contained" color="primary" className={classes.button}>
          <ArrowBack className={classes.rightIcon} />
          Back To Calendar
        </Button>
      </Link>
      <TabContainer dir={theme.direction}>
        <form onSubmit={handleSubmit}>
          <div className={classes.textField}>
            <DatePicker
              label="Date"
              className={classes.datePicker}
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling
            />
          </div>
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
      <SnackBar open={snackBar} closeFunc={setSnackBar} classes={classes} />
      <DialogComponent
        openDialog={toDelete}
        closeFunc={setDelete}
        values={eventValues}
        type={"Event"}
        deleteFunc={async e => {
          try {
            await API.graphql(
              graphqlOperation(deleteCalendarDay, {
                input: { id: eventValues.id }
              })
            );
            setDelete(false);
            props.history.push("/calendar");
          } catch (err) {
            console.log("Error occurred", err);
          }
        }}
      />
    </div>
  );
};

export default withStyles(contentStyles, { withTheme: true })(EventContent);
