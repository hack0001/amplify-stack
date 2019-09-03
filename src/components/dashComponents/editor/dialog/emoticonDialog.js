import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { imageStyles } from "./styles/dialogStyles";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const EmoticonDialog = props => {
  const {
    editor,
    openDialog,
    closeDialog,
    blockType,
    classEmbed,
    theme
  } = props;
  const [loading, setLoading] = useState(false);

  const addEmoticon = value => {
    editor
      .insertInline({
        type: blockType,
        isVoid: true,
        data: { code: value.native }
      })
      .moveToStartOfNextText()
      .focus();
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        {loading && <LinearProgress />}
        <Picker
          onSelect={addEmoticon}
          title="Pick your emoji…"
          emoji="point_up"
          sheetSize={16}
        />
      </Dialog>
    </div>
  );
};

export default withStyles(imageStyles, { withTheme: true })(EmoticonDialog);
