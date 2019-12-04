import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateSite } from "../graphql/siteGraphql";
import axios from "axios";
import { updateProductionSite } from "../../create/production/graphql/mutations";

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
			[event.target.name]: event.target.value,
		});
	};

	const handleTagChange = event => {
		setValues(event);
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
				type: values.type,
				description: values.description,
				categories: values.tagArray,
			};
			if (values.production) {
				const updateProd = {
					id: values.productionId,
					name: values.name,
					type: values.type,
					description: values.description,
					categories: values.tagArray,
				};
				const updateProdSite = {
					query: updateProductionSite,
					operationName: "UpdateProductionSite",
					variables: { input: updateProd },
				};
				await axios({
					url: process.env.REACT_APP_PROD_ENDPOINT,
					method: "POST",
					data: JSON.stringify(updateProdSite),
					headers: {
						Accept: "application/json",
						"x-api-key": process.env.REACT_APP_PROD_API_KEY,
					},
				});
			}

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
		setSnackBar,
		handleTagChange,
	};
};

export default useFormValidation;
