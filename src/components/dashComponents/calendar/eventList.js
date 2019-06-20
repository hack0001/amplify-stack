import React, { Fragment, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import DataTable from "./dataTable/dataTable";
import { styles } from "./styles/eventStyles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import { DatePicker } from "@material-ui/pickers";

const EventList = props => {
  const { classes } = props;
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    handleEvent();
  }, []);

  const handleDateChange = async date => {
    await setSelectedDate(moment(date));
    handleEvent();
  };

  const handleEvent = async () => {
    const day = moment(selectedDate).format("D");
    const month = moment(selectedDate)
      .format("MMMM")
      .toLowerCase();
    try {
      const { data } = await API.graphql(
        graphqlOperation(`query ListCalendarMonths{
		listCalendarMonths(filter: {
			month:{eq:"${month}"}
			}){
				items {
				id
				createdAt
				day(filter:{ day: {eq:"${day}"}}){
					items{
						id
						category
						description 
						eventName 
						site						
						year
						day
					}	
				}
				month
				updatedAt
				}
			}				
		}`)
      );

      setEvents(data.listCalendarMonths.items);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return (
    <Fragment>
      <Paper className={classes.pickerWrapper}>
        <DatePicker
          label="Events"
          className={classes.datePicker}
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling
        />
      </Paper>
      <DataTable data={events} />
    </Fragment>
  );
};

export default withStyles(styles)(EventList);
