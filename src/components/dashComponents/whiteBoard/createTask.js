import React, { Fragment, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { createStyles } from "./styles/taskStyles";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import { createTask } from "./graphql/taskGraphql";
import { TabContainer } from "../../tabs/tabContainer";
import Dialog from "../../dialog/usernameDialog";

const INITIAL_STATE = {
  category: "",
  createdAt: "",
  content: "",
  name: "",
  updatedAt: "",
  type: "",
  title: "",
  siteId: ""
};

const textFieldTypes = [
  {
    label: "Task",
    type: "title"
  },
  {
    label: "Description",
    type: "content"
  },
  {
    label: "Type",
    type: "type"
  },
  {
    label: "Category",
    type: "category"
  }
];

const CreateTask = props => {
  const { classes, theme, push, context } = props;
  const [error, setError] = useState(false);
  const { handleChange, taskValues } = useFormValidation(
    INITIAL_STATE,
    validateAuth
  );

  const clean = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null || values[key] === "") && delete values[key];
    });
  };

  const handleAddTask = async event => {
    event.preventDefault();
    const initialSiteId = context.siteNames.filter(
      n => n.name === "Initial Site"
    );
    try {
      let newTask = {
        id: taskValues.id,
        category: taskValues.category,
        createdAt: taskValues.createdAt,
        content: taskValues.content,
        name: context.userId,
        updatedAt: taskValues.updatedAt,
        type: taskValues.type,
        title: taskValues.title,
        status: "PENDING-APPROVAL",
        taskUserId: context.profileId,
        userId: context.userId,
        siteId: initialSiteId[0].id,
        taskSiteId: initialSiteId[0].id //Default Site - to be updated by admin user
      };

      clean(newTask);
      await API.graphql(graphqlOperation(createTask, { input: newTask }));
      push("/whiteboard");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const textFields = ({ label, type }, index) => {
    return (
      <TextField
        key={index}
        autoComplete="off"
        label={`${label}`}
        className={classes.textField}
        value={taskValues[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  return (
    <Fragment>
      <TabContainer dir={theme.direction}>
        <form onSubmit={handleAddTask}>
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
              <SendIcon style={{ marginRight: 15 }} />
              Send for Approval
            </Button>
          </div>
        </form>
      </TabContainer>
      <Dialog openDialog={error} closeFunc={setError} />
    </Fragment>
  );
};

export default withStyles(createStyles, { withTheme: true })(CreateTask);
