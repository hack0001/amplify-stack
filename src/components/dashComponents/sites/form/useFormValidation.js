import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateSite } from "../graphql/siteGraphql";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [snackBar, setSnackBar] = useState(false);
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
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    try {
      const updateValues = {
        id: values.id,
        name: values.name,
        createdAt: values.createdAt,
        type: values.type,
        description: values.description,
        updatedAt: values.updatedAt
      };

      await API.graphql(graphqlOperation(updateSite, { input: updateValues }));
      setSubmitting(false);
      setSnackBar(true);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    setValues,
    snackBar,
    setSnackBar
  };
};

export default useFormValidation;
