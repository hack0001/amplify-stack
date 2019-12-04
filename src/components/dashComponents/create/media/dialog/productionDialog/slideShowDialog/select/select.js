import React, { Fragment } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const ProductionSelect = props => {
	const {
		selectValues,
		value,
		handleSend,
		userId,
		setData,
		text,
		helperText,
		name,
		overview,
		overviewMarker,
	} = props;

	const selectionVals = selectValues[name] ? selectValues[name] : [""];
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
	const handleInfoChange = info => {
		handleSend({
			[overviewMarker]: [
				{
					...overview[0],
					...info,
				},
			],
			...info,
		});
	};
	return (
		<FormControl
			style={{
				width: "100%",
				marginTop: 10,
				marginBottom: 10,
			}}
		>
			<InputLabel htmlFor={`${name}-helper`}>{text}</InputLabel>
			<Select
				style={{
					width: "100%",
					margin: "0 auto",
					textTransform: "capitalize",
				}}
				value={name === "user" ? userId : value}
				onChange={e => {
					if (name === "site") {
						const siteSelected = selectionVals.filter(
							x => x.id === e.target.value,
						);
						handleInfoChange({
							slideShowSiteId: e.target.value,
							site: e.target.value,
							productionSlideShowSiteId: siteSelected[0].productionId,
						});

						const siteCategories = selectValues.site.filter(
							x => x.id === e.target.value,
						);
						setData({
							...selectValues,
							category: siteCategories[0].categories
								? siteCategories[0].categories
								: [""],
						});
					} else if (name === "user") {
						const userSelect = selectionVals.filter(
							x => x.id === e.target.value,
						);
						handleInfoChange({
							slideShowUserId: userSelect[0].id,
							productionSlideShowUserId: userSelect[0].userId,
						});
					} else {
						handleOnChange({
							[e.target.name]: e.target.value,
						});
					}
				}}
				input={
					<Input
						name={name}
						style={{ width: "100%", margin: 20 }}
						id={`${name}-helper`}
					/>
				}
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{selectionVals.map((val, index) => {
					let alias;
					if (name === "user") {
						if (val.overview) {
							const overview = JSON.parse(val.overview);
							alias = overview[0].name ? overview[0].name : "";
						}
					}
					const selectVal =
						name === "site" ? val.id : name === "user" ? val.id : val;
					const selection =
						name === "site" ? val.name : name === "user" ? alias : val;
					const email = name === "user" ? val.userId : "";

					return (
						<MenuItem name={val.name} value={selectVal} key={index}>
							{name === "user" ? (
								<Fragment>
									<span style={{ textTransform: "capitalize" }}>
										{selection}-
									</span>
									<span style={{ textTransform: "none" }}>{email}</span>
								</Fragment>
							) : (
								<span style={{ textTransform: "capitalize" }}>{selection}</span>
							)}
						</MenuItem>
					);
				})}
			</Select>
			<FormHelperText>{helperText}</FormHelperText>
		</FormControl>
	);
};

export default ProductionSelect;
