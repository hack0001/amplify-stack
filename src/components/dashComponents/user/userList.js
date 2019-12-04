import React, { Fragment, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "./graphql/userGraphql";
import { withStyles } from "@material-ui/core/styles";
import DataTable from "./dataTable/dataTable";
import { styles } from "./styles/userStyles";

const header = ["Site Name", "Created At", "ID"];

const UserList = props => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		handleUser();
	}, []);

	const handleUser = async () => {
		try {
			const { data } = await API.graphql(graphqlOperation(listUsers));
			setUsers(data.listUsers.items);
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	return (
		<Fragment>
			<DataTable header={header} data={users} />
		</Fragment>
	);
};

export default withStyles(styles)(UserList);
