import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Options from "./options/dialogOptions";
import { INITIAL_STATE } from "./options/initialState";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { hasLinks } from "../hasHelpers/hasHelpers";

const wrapLink = (editor, linkUrl) => {
  editor.wrapInline({
    type: "link",
    data: { linkUrl }
  });

  editor.moveToEnd();
};

const unwrapLink = editor => {
  editor.unwrapInline("link");
};

const SlateDialog = props => {
  const { editor, embedOpen, embedClose, blockType } = props;
  const currentBlockType = blockType ? blockType : "default";

  const [dialogData, setDialogData] = useState(
    INITIAL_STATE[blockType] ? INITIAL_STATE[blockType] : {}
  );

  const add = async () => {
    if (blockType === "link") {
      const { value } = editor;
      const hasLinksNode = hasLinks(value);
      if (hasLinksNode) {
        editor.command(unwrapLink);
      } else if (value.selection.isExpanded) {
        if (dialogData.linkUrl == null) {
          return;
        }

        await editor.command(wrapLink, dialogData.linkUrl);
      }
    } else {
      console.log("SLASTE HANDLE VHANE", blockType);
      console.log("SLASTE HANDLE VHANE", dialogData);
      await editor
        .insertBlock({
          type: blockType,
          isVoid: true,
          data: dialogData
        })
        .insertBlock("paragraph");
    }

    setDialogData({});
    embedClose();
  };
  console.log("BLOCK", dialogData);
  return (
    <Dialog
      open={embedOpen}
      onClose={embedClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {Options[currentBlockType].title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {Options[currentBlockType].content}
        </DialogContentText>
        {Options[currentBlockType].form.map(dialog => {
          if (dialog.type === "quoteStyle") {
            return (
              <FormControl
                style={{
                  marginBottom: 5,
                  marginTop: 25,
                  width: "100%"
                  // display: item.layout
                }}
              >
                <InputLabel htmlFor={`${dialog.label}-helper`}>
                  {dialog.label}
                </InputLabel>
                <Select
                  value={dialogData[dialog.type]}
                  onChange={e => {
                    setDialogData({
                      ...dialogData,
                      [dialog.type]: e.target.value
                    });
                  }}
                  input={
                    <Input
                      name={dialog.label}
                      style={{ width: "100%" }}
                      id={`${dialog.label}-helper`}
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {dialog.values.map((val, index) => {
                    return (
                      <MenuItem value={val.type} key={index}>
                        {val.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            );
          }
          return (
            <TextField
              autoFocus
              autoComplete="off"
              margin="dense"
              id={dialog.type}
              label={dialog.label}
              type={dialog.type}
              fullWidth
              onChange={e =>
                setDialogData({
                  ...dialogData,
                  [dialog.type]: e.target.value
                })
              }
            />
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={embedClose} color="primary">
          Cancel
        </Button>
        <Button onClick={add} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SlateDialog;
