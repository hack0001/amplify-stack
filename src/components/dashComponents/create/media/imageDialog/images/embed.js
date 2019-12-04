import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "../dialogStyles";

const embedUpload = props => {
	const { setUrl, setImageDialog, handleOnChange, value, url } = props;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
			}}
		>
			<DialogContent>
				<TextField
					autoFocus
					autoComplete="off"
					value={url}
					onChange={e => {
						setUrl(e.target.value);
					}}
					margin="dense"
					id="url"
					label="Embed Url"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={e => {
						setImageDialog(false);
						setUrl("");
					}}
					color="primary"
				>
					Cancel
				</Button>
				<Button
					onClick={async e => {
						await handleOnChange({ [value]: url, [`${value}-embed`]: true });
						setImageDialog(false);
					}}
					color="primary"
				>
					Add
				</Button>
			</DialogActions>
		</div>
	);
};

export default withStyles(imageStyles)(embedUpload);
