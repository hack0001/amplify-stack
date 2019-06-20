import React, { useEffect, Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import { contentStyles } from "../styles/taskStyles";
import { withStyles } from "@material-ui/core/styles";
import { API, graphqlOperation } from "aws-amplify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { TabContainer } from "../../../tabs/tabContainer";
import { taskDetails } from "../graphql/taskGraphql";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import AuthContext from "../../../../context/authContext";

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
  },
  {
    label: "Site",
    type: "taskSiteId"
  },
  {
    label: "Status",
    type: "status"
  }
];
const status = [
  { name: "OPEN-APPROVED", id: "OPEN-APPROVED", color: "green" },
  { name: "PENDING-APPROVAL", id: "PENDING-APPROVAL", color: "green" },
  { name: "REJECTED", id: "REJECTED", color: "red" },
  { name: "COMPLETED", id: "COMPLETED", color: "red" },
  { name: "HELP", id: "HELP", color: "green" }
];
const DashDrawer = props => {
  const {
    classes,
    theme,
    drawer,
    drawFunc,
    setTaskValues,
    taskValues,
    handleSubmit,
    handleChange,
    setDelete,
    selected
  } = props;

  useEffect(() => {
    handleTask();
  }, [selected]);

  const clean = values => {
    Object.keys(values).forEach(key => {
      if (values[key] === null || values[key] === undefined) {
        values[key] = "";
      }
    });
  };

  const handleTask = async () => {
    try {
      if (!selected) return;
      const { data } = await API.graphql(
        graphqlOperation(taskDetails, { id: selected })
      );

      let indivTaskValues = data.getTask;
      clean(indivTaskValues);

      setTaskValues({
        ...taskValues,
        id: indivTaskValues.id,
        category: indivTaskValues.category,
        createdAt: indivTaskValues.createdAt,
        content: indivTaskValues.content,
        name: indivTaskValues.name,
        updatedAt: indivTaskValues.updatedAt,
        type: indivTaskValues.type,
        title: indivTaskValues.title,
        status: indivTaskValues.status,
        taskUserId: indivTaskValues.user.id,
        siteId: indivTaskValues.site.id,
        taskSiteId: indivTaskValues.site.id //Default Site - to be updated by admin user
      });
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
        value={taskValues[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  const selectField = ({ label, type }, index, context, selectValues, none) => {
    if (!context.admin) return;
    return (
      <Fragment key={index}>
        <InputLabel
          style={{ marginLeft: 20, marginTop: 20 }}
          shrink
          htmlFor="age-label-placeholder"
        >
          {label}
        </InputLabel>
        <Select
          value={taskValues[type]}
          input={<Input name={label} id={`${label}-label-placeholder`} />}
          className={classes.selectField}
          onChange={handleChange}
          placeholder={label}
          name={`${type}`}
        >
          {!none && (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
          {selectValues.map((item, index) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </Fragment>
    );
  };
  return (
    <div className={classes.root}>
      <Drawer anchor="right" open={drawer} onClose={e => drawFunc(false)}>
        <div className={classes.drawer}>
          <TabContainer dir={theme.direction}>
            <AuthContext.Consumer>
              {context => {
                return (
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      handleSubmit();
                      drawFunc(false);
                    }}
                  >
                    {textFieldTypes.map((field, index) => {
                      if (field.type === "taskSiteId")
                        return selectField(
                          field,
                          index,
                          context,
                          context.siteNames,
                          false
                        );
                      else if (field.type === "status")
                        return selectField(field, index, context, status, true);
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
                        onClick={e => {
                          setDelete(true);
                          drawFunc(false);
                        }}
                      >
                        Delete
                        <DeleteIcon className={classes.rightIcon} />
                      </Button>
                    </div>
                  </form>
                );
              }}
            </AuthContext.Consumer>
          </TabContainer>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(contentStyles, { withTheme: true })(DashDrawer);
