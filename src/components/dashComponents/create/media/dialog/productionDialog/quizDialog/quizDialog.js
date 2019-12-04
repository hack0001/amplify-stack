import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DatePicker } from "@material-ui/pickers";
import { pushProduction, updateProduction } from "../../layout/layout";
import { API, graphqlOperation } from "aws-amplify";
import { listSites, listUsers } from "../../../../../../../graphql/queries";
import Select from "./select/select";
import moment from "moment";

const ProductionDialog = ({
	open,
	onClose,
	accept,
	prodMarker,
	handleSend,
	overview,
	userId,
	overviewMarker,
	type,
}) => {
	const [selectData, setData] = useState({});
	const fields = prodMarker ? updateProduction : pushProduction;
	useEffect(() => {
		handleSite();
	}, []);

	const handleOnChange = value => {
		handleSend({
			[overviewMarker]: [
				{
					...overview[0],
					...value,
				},
			],
		});
	};

	const handleSite = async () => {
		try {
			const { data } = await API.graphql(
				graphqlOperation(listSites, {
					filter: { production: { eq: true } },
				}),
			);
			const user = await API.graphql(graphqlOperation(listUsers));

			const siteCategories = data.listSites.items.filter(
				x => x.id === overview[0].quizSiteId,
			);

			setData({
				site: data.listSites.items,
				category: siteCategories[0] ? siteCategories[0].categories : [""],
				user: user.data.listUsers.items,
			});
		} catch (err) {
			console.log("Error occurred", err);
		}
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle id="responsive-dialog-title">
				{prodMarker ? "Update Production" : "Submit to Production"}
			</DialogTitle>
			<DialogContent>
				{prodMarker && (
					<DialogContentText>
						Are you sure you want to Remove the current content from Production?
						The content will go back to Development
					</DialogContentText>
				)}
				{!prodMarker && (
					<DialogContentText>
						You are submitting the content to a live website. Please select
						which site and its category
					</DialogContentText>
				)}
			</DialogContent>
			<DialogContent>
				{fields.map((value, index) => {
					switch (value.type) {
						case "checkBox":
							return (
								<FormControlLabel
									key={index}
									name={value.name}
									label={value.label}
									checked={overview[0][value.name]}
									onChange={e =>
										handleOnChange({
											[e.target.name]: !overview[0][value.name],
										})
									}
									control={<Checkbox color="primary" />}
									labelPlacement="end"
									style={{
										marginTop: 10,
										marginRight: 20,
										marginLeft: 20,
									}}
								/>
							);
						case "select":
							return (
								<DialogContent key={index} style={{ marginTop: 10 }}>
									<Select
										value={overview[0][value.name]}
										userId={userId}
										name={value.name}
										selectValues={selectData}
										handleSend={handleSend}
										overview={overview}
										setData={setData}
										helperText={value.label}
										overviewMarker={overviewMarker}
										type={type}
									/>
								</DialogContent>
							);
						default:
							return null;
					}
				})}
				<DialogContent>
					<DatePicker
						label="Display Date"
						name="displayDate"
						value={
							overview[0]["displayDate"] !== ""
								? moment(overview[0]["displayDate"])
								: moment()
						}
						onChange={e =>
							handleSend({
								[overviewMarker]: [
									{
										...overview[0],
										...{ displayDate: moment(e).format() },
									},
								],
							})
						}
						animateYearScrolling
						style={{
							marginTop: 20,
						}}
					/>
				</DialogContent>
			</DialogContent>
			<DialogContent>
				<DialogActions>
					<Button onClick={onClose} color="primary">
						Cancel
					</Button>
					<Button onClick={accept} color="primary">
						{prodMarker ? "Update" : "Push"}
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};
export default ProductionDialog;
