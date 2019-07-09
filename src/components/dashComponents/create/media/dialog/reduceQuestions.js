import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComponent = ({ open, onClose, accept }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Reduce Number of Questions?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to reduce Questions? You will lose previous
          questions
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={accept} color="primary" autoFocus>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogComponent;
