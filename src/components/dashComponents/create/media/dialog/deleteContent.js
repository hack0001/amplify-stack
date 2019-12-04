import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComponent = ({ open, onClose, accept, prodMarker }) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle id="responsive-dialog-title">
				{"Delete Content?"}
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
						Are you sure you want to Delete the current content? You will lose
						ALL the data entered so far
					</DialogContentText>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancel
				</Button>
				<Button onClick={accept} color="primary" autoFocus>
					YES
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default DialogComponent;
