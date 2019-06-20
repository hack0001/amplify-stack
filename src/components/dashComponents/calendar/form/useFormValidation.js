import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateCalendarDay } from "../../../../graphql/mutations";
import moment from "moment";

const useFormValidation = (initialState, validate) => {
  const [eventValues, setEventValues] = useState(initialState);
  const [snackBar, setSnackBar] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    setEventValues({
      ...eventValues,
      [event.target.name]: event.target.value
    });
  };

  const clean = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null ||
        values[key] === "" ||
        values[key] === undefined) &&
        delete values[key];
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const validationErrors = validate(eventValues);
    setErrors(validationErrors);
    setSubmitting(true);
    let calendarId = eventValues.calendarDayCalendarMonthId;
    const day = moment(selectedDate).format("D");
    const year = moment(selectedDate).format("Y");
    try {
      if (
        moment(eventValues.originalDate).format("M") !==
        moment(selectedDate).format("M")
      ) {
        const newMonth = moment(selectedDate)
          .format("MMMM")
          .toLowerCase();
        const newMonthId = await API.graphql(
          graphqlOperation(`query ListCalendarMonths{
			listCalendarMonths(filter: {
				month:{eq:"${newMonth}"}
				}){
					items {
					id
					}
				}				
			}`)
        );
        calendarId = newMonthId.data.listCalendarMonths.items[0].id;
      }

      let updateValues = {
        id: eventValues.id,
        calendarDayCalendarMonthId: calendarId,
        category: eventValues.category,
        createdAt: eventValues.createdAt,
        updatedAt: eventValues.updatedAt,
        description: eventValues.description,
        eventName: eventValues.eventName,
        author: eventValues.author,
        site: eventValues.site,
        year,
        day
      };

      clean(updateValues);

      await API.graphql(
        graphqlOperation(updateCalendarDay, { input: updateValues })
      );
      setSubmitting(false);
      setSnackBar(true);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return {
    handleSubmit,
    handleChange,
    eventValues,
    errors,
    isSubmitting,
    setEventValues,
    snackBar,
    setSnackBar,
    selectedDate,
    setSelectedDate
  };
};

export default useFormValidation;
