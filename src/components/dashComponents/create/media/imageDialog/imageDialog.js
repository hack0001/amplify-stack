import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "./dialogStyles";
import SwipeableViews from "react-swipeable-views";
import Upload from "./upload/upload";
import {
	Url,
	Giphy,
	Embed,
	Bucket,
	Unsplash,
	Pixabay,
	Youtube,
} from "./images";
import LinearProgress from "@material-ui/core/LinearProgress";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ImageDialog = props => {
	const {
		imageDialog,
		setImageDialog,
		theme,
		classes,
		value,
		handleOnChange,
		imageAttribution,
		imageAttributionLink,
		imageAlt,
	} = props;
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState({});
	const dialogItems = [
		{
			name: "Image Url",
			expansionComponent: (
				<Url
					setUrl={setUrl}
					url={url}
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
				/>
			),
		},
		{
			name: "Image Upload",
			expansionComponent: (
				<Upload
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
					s3Directory={"allImages"}
				/>
			),
		},
		{
			name: "Gif",
			expansionComponent: (
				<Giphy
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
					imageAttribution={imageAttribution}
					imageAttributionLink={imageAttributionLink}
				/>
			),
		},
		{
			name: "Bucket",
			expansionComponent: (
				<Bucket
					setImageDialog={setImageDialog}
					s3Directory={"allImages"}
					value={value}
					handleOnChange={handleOnChange}
					imageAlt={imageAlt}
					imageAttribution={imageAttribution}
					imageAttributionLink={imageAttributionLink}
				/>
			),
		},
		{
			name: "Unsplash",
			expansionComponent: (
				<Unsplash
					s3Directory={"allImages"}
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
					imageAlt={imageAlt}
					imageAttribution={imageAttribution}
					imageAttributionLink={imageAttributionLink}
				/>
			),
		},
		{
			name: "Pixabay",
			expansionComponent: (
				<Pixabay
					s3Directory={"allImages"}
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
					imageAlt={imageAlt}
					imageAttribution={imageAttribution}
					imageAttributionLink={imageAttributionLink}
				/>
			),
		},
		{
			name: "Youtube",
			expansionComponent: (
				<Youtube
					s3Directory={"allImages"}
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
					imageAlt={imageAlt}
					setLoading={setLoading}
					imageAttribution={imageAttribution}
					imageAttributionLink={imageAttributionLink}
				/>
			),
		},
		{
			name: "Embed",
			expansionComponent: (
				<Embed
					setUrl={setUrl}
					url={url}
					setImageDialog={setImageDialog}
					handleOnChange={handleOnChange}
					value={value}
				/>
			),
		},
	];
	return (
		<div>
			<Dialog
				open={imageDialog}
				fullWidth={true}
				onClose={e => setImageDialog(false)}
				aria-labelledby="form-dialog-title"
				maxWidth={"sm"}
			>
				{loading && <LinearProgress />}

				{dialogItems.map((item, index) => {
					if (value === "headlineImage" && item.name === "Embed") return null;
					return (
						<ExpansionPanel
							key={index}
							onChange={e => setOpen({ [item.name]: true })}
						>
							<ExpansionPanelSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={classes.heading}>{item.name}</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								{open[item.name] && item.expansionComponent}
							</ExpansionPanelDetails>
						</ExpansionPanel>
					);
				})}
			</Dialog>
		</div>
	);
};

export default withStyles(imageStyles, { withTheme: true })(ImageDialog);
