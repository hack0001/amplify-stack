import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateTask } from "../graphql/taskGraphql";

const useFormValidation = (initialState, validate) => {
  const [taskValues, setTaskValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

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
    setTaskValues({
      ...taskValues,
      [event.target.name]: event.target.value
    });
  };

  const clean = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null || values[key] === "") && delete values[key];
    });
  };

  const handleSubmit = async event => {
    const validationErrors = validate(taskValues);
    setErrors(validationErrors);
    setSubmitting(true);
    try {
      let updateValues = {
        id: taskValues.id,
        category: taskValues.category,
        createdAt: taskValues.createdAt,
        content: taskValues.content,
        members: taskValues.members,
        name: taskValues.name,
        updatedAt: taskValues.updatedAt,
        type: taskValues.type,
        title: taskValues.title,
        status: taskValues.status,
        taskUserId: taskValues.taskUserId,
        siteId: taskValues.taskSiteId,
        taskSiteId: taskValues.taskSiteId //Default Site - to be updated by admin user
      };

      clean(updateValues);
      await API.graphql(graphqlOperation(updateTask, { input: updateValues }));
      setSubmitting(false);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return {
    handleSubmit,
    handleChange,
    taskValues,
    errors,
    isSubmitting,
    setTaskValues
  };
};

export default useFormValidation;
