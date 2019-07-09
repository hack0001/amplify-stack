import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Snack = ({ open, closeFunc, classes }) => {
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    closeFunc(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleCloseSnack}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">Successfully Updated</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleCloseSnack}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default Snack;
