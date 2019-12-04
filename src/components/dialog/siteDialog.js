import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComponent = ({
	openDialog,
	closeFunc,
	values,
	type,
	productionFunc,
}) => {
	const closeDialog = e => {
		closeFunc(false);
	};
	const head =
		type === "production"
			? "Push Site to Production?"
			: "Remove from Production?";
	const message =
		type === "production"
			? "You have chosen to push this site to production. Do you want to continue?"
			: "You have chosen to remove this site from production. Do you want to continue?";
	return (
		<Dialog
			open={openDialog}
			onClose={closeDialog}
			aria-labelledby="draggable-dialog-title"
		>
			<DialogTitle id="draggable-dialog-title">{head}</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeDialog} color="primary">
					Cancel
				</Button>
				<Button onClick={productionFunc} color="secondary">
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default DialogComponent;
