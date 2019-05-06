import React, { Fragment } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
const ITEM_HEIGHT = 48;
const Emojis = [
  "😃",
  "😬",
  "😂",
  "😅",
  "😆",
  "😍",
  "😱",
  "👋",
  "👏",
  "👍",
  "🙌",
  "👌",
  "🙏",
  "👻",
  "🍔",
  "🍑",
  "🔑"
];

const EmojiComponent = ({
  tooltip,
  type,
  classes,
  Icon,
  onClickMark,
  onClickEmoji,
  emojiAnchor,
  handleClose,
  emoji
}) => {
  return (
    <Fragment>
      <Tooltip title={tooltip} placement="top">
        <Grid className={classes.icons}>
          <Icon onClick={event => onClickMark(event, type)} />
          <Menu
            id="long-menu"
            open={emoji}
            anchorEl={emojiAnchor}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 405,
                display: "block"
              }
            }}
          >
            {Emojis.map(option => (
              <MenuItem
                key={option}
                style={{ display: "inline-block", width: "9%" }}
                onClick={event => onClickEmoji(option, event)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Tooltip>
    </Fragment>
  );
};

export default EmojiComponent;
