import React, { Fragment, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import DataTable from "./dataTable/dataTable";
import { styles } from "./styles/homeStyles";

const header = ["Site Name", "Created At", "ID"];

const HomeList = props => {
	const { queryFetch, dataCategory, type, original } = props;
	const [content, setContent] = useState([]);

	useEffect(() => {
		handleSite();
	}, []);

	const handleSite = async () => {
		try {
			const { data } = await API.graphql(graphqlOperation(queryFetch));
			setContent(data[dataCategory].items);
		} catch (err) {
			console.log("Error occurred", err);
		}
	};
	return (
		<Fragment>
			<DataTable
				header={header}
				data={content}
				type={type}
				original={original}
			/>
		</Fragment>
	);
};

export default withStyles(styles)(HomeList);
