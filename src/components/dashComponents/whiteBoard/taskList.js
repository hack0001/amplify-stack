import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { taskStyles } from "./styles/taskStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { listTasks } from "../../../graphql/queries";
import { subscribeToAll } from "./graphql/taskGraphql";
import { API, graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import DataTable from "./dataTable/dataTable";
import { deleteTask } from "../../../graphql/mutations";
import DialogComponent from "../../dialog/eventDialog";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";

const INITIAL_STATE = {
  id: "",
  category: "",
  createdAt: "",
  content: "",
  name: "",
  updatedAt: "",
  type: "",
  title: "",
  taskSiteId: "",
  taskUserId: "",
  status: "",
  siteId: ""
};

const TaskList = ({ items, classes }) => {
  const [selected, setSelected] = useState("");
  const [toDelete, setDelete] = useState(false);

  const {
    handleSubmit,
    handleChange,
    taskValues,
    setTaskValues
  } = useFormValidation(INITIAL_STATE, validateAuth);

  const onNewTask = (prevData, newData) => {
    let updatedQuery = Object.assign({}, prevData);

    if (newData.onUpdateTask) {
      const updateIndex = prevData.listTasks.items.findIndex(
        obj => obj.id === newData.onUpdateTask.id
      );
      updatedQuery.listTasks.items[updateIndex] = newData.onUpdateTask;
    } else if (newData.onDeleteTask) {
      const deleteIndex = prevData.listTasks.items.findIndex(
        obj => obj.id === newData.onDeleteTask.id
      );
      updatedQuery.listTasks.items.splice(deleteIndex, 1);
    }
    return updatedQuery;
  };

  return (
    <Fragment>
      <Connect
        query={graphqlOperation(listTasks)}
        onSubscriptionMsg={onNewTask}
        subscription={graphqlOperation(subscribeToAll)}
      >
        {({ data, loading, errors }) => {
          if (loading) return <LinearProgress />;
          if (!data.listTasks) return <LinearProgress />;
          return (
            <Fragment>
              <DataTable
                data={data.listTasks.items}
                setTaskValues={setTaskValues}
                taskValues={taskValues}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setDelete={setDelete}
                selected={selected}
                setSelected={setSelected}
              />
            </Fragment>
          );
        }}
      </Connect>
      <DialogComponent
        openDialog={toDelete}
        closeFunc={setDelete}
        values={taskValues}
        type={"Task"}
        deleteFunc={async e => {
          try {
            await API.graphql(
              graphqlOperation(deleteTask, {
                input: { id: taskValues.id }
              })
            );
            setDelete(false);
          } catch (err) {
            console.log("Error occurred", err);
          }
        }}
      />
    </Fragment>
  );
};

export default withStyles(taskStyles)(TaskList);
