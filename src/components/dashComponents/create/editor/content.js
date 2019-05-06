import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import editorItems from "./editor";
import { styles } from "./styles";
import renderMark from "./renderMark/renderMark";
import renderNode from "./renderNode/renderNode";
import { plugins } from "../media/article/editorSettings";
import { onPaste, editorLinks } from "./links/links";
import { hasBlock } from "./hasHelpers/hasHelpers";

import Emoji from "./emojis/emoji";
const DEFAULT_NODE = "paragraph";

class Content extends Component {
  state = {
    emoji: false,
    emojiAnchor: null
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    if (type === "emoji") {
      this.setState({
        emoji: true,
        emojiAnchor: event.currentTarget
      });
    }
    this.editor.toggleMark(type);
  };

  onClickEmoji = (code, e) => {
    e.preventDefault();
    this.editor
      .insertInline({ type: "emoji", data: { code } })
      .moveToStartOfNextText()
      .focus();
  };

  onClickBlock = (event, type) => {
    event.preventDefault();
    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    if (type === "link") {
      editorLinks(editor, value);
    }
    if (type === "embed-video") {
      editor.setBlocks(type);
    }

    // Handle everything but list buttons.
    if (type !== "bulleted-list" && type !== "numbered-list") {
      const isActive = hasBlock(value, type);
      const isList = hasBlock(value, "list-item");
      const isDivider = hasBlock(value, "horizontal-line");
      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list");
      } else if (isDivider) {
        editor.setBlocks(type);
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = hasBlock(value, "list-item");
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list");
      } else if (isList) {
        editor
          .unwrapBlock(
            type === "bulleted-list" ? "numbered-list" : "bulleted-list"
          )
          .wrapBlock(type);
      } else {
        editor.setBlocks("list-item").wrapBlock(type);
      }
    }
  };

  ref = editor => {
    this.editor = editor;
  };

  handleClose = () => {
    this.setState({ emoji: false, emojiAnchor: null });
  };

  render() {
    const { value, onChange, classes } = this.props;
    const { emojiAnchor } = this.state;
    return (
      <Fragment>
        <Grid container alignItems="center">
          {editorItems.map(({ type, Icon, tooltip, editorType }) => {
            const mark =
              editorType === "mark" ? this.onClickMark : this.onClickBlock;
            if (type === "emoji") {
              return (
                <Emoji
                  key={type}
                  tooltip={tooltip}
                  type={type}
                  classes={classes}
                  Icon={Icon}
                  onClickMark={this.onClickMark.bind(this)}
                  onClickEmoji={this.onClickEmoji.bind(this)}
                  emojiAnchor={emojiAnchor}
                  handleClose={this.handleClose.bind(this)}
                  emoji={this.state.emoji}
                />
              );
            }
            return (
              <Tooltip title={tooltip} key={type}>
                <Grid className={classes.icons}>
                  <Icon onClick={event => mark(event, type)} />
                </Grid>
              </Tooltip>
            );
          })}
        </Grid>
        <Divider className={classes.editorDivide} variant="middle" />
        <Editor
          ref={this.ref}
          value={value}
          onChange={onChange}
          renderMark={renderMark.bind(this)}
          renderNode={renderNode.bind(this)}
          plugins={plugins}
          onPaste={onPaste.bind(this)}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Content);
