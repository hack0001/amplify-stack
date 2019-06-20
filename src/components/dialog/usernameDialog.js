import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComponent = ({ openDialog, closeFunc }) => {
  const closeDialog = e => {
    closeFunc(false);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={closeDialog}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle id="draggable-dialog-title">
        Username Already Exists
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          The username entered already exists. Please Try a new username. If you
          believe this is an error please contact support
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogComponent;
