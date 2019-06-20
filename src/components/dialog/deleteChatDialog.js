import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComponent = ({ openDialog, closeFunc, convoName, deleteFunc }) => {
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
        Delete Chat - {convoName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have chosen to delete this ChatRoom. Please confirm that this is
          correct.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={deleteFunc} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogComponent;
