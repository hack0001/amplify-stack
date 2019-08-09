import React, { useState, Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "../dialogStyles";

const urlUpload = props => {
  const { setUrl, setImageDialog, handleOnChange, value, url } = props;
  const [validImage, setValidImage] = useState(true);

  const validUrl = url => {
    const valid = new Image();
    valid.src = url;
    valid.onload = () => {
      setValidImage(false);
    };
    valid.onerror = () => {
      setValidImage(true);
    };
  };
  return (
    <Fragment>
      <DialogContent>
        <TextField
          autoFocus
          autoComplete="off"
          value={url}
          onChange={e => {
            validUrl(e.target.value);
            setUrl(e.target.value);
          }}
          margin="dense"
          id="url"
          label="Image Url"
          type="email"
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
          disabled={validImage}
          onClick={async e => {
            await handleOnChange({ [value]: url });
            setImageDialog(false);
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Fragment>
  );
};

export default withStyles(imageStyles)(urlUpload);
