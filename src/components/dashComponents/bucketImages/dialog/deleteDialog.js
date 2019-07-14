import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComponent = ({
  deleteImage,
  closeFunc,
  handleBucketDialog,
  deleteCheck
}) => {
  return (
    <Dialog
      open={deleteCheck}
      onClose={e => closeFunc(false)}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle id="draggable-dialog-title">Delete Image?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have chosen to delete this iamge. Please confirm that this is
          correct. You will not be able to access this image again
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={e => closeFunc(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={e => {
            deleteImage();
            closeFunc(false);
            handleBucketDialog();
          }}
          color="secondary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogComponent;
