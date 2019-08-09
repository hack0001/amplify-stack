import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import editorItems from "./editor";
import { styles } from "./styles";
import renderMark from "./renderMark/renderMark";
import renderNode from "./renderNode/renderNode";
import { plugins } from "./plugins/plugins";
import { onPaste, editorLinks } from "./links/links";
import { hasBlock, hasMark } from "./hasHelpers/hasHelpers";
import SlateDialog from "./dialog/slateDialog";
import ImageDialog from "./dialog/imageDialog";
import Embed from "./renderNode/embed/embed";
import Emoji from "./emojis/emoji";
const defaultColor = "#3f51b5";
const DEFAULT_NODE = "paragraph";

class Content extends Component {
  state = {
    color: null,
    inputModal: false,
    slateDialog: false,
    imageDialog: false,
    type: ""
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  onDialogClose = e => {
    this.setState({
      slateDialog: false,
      imageDialog: false,
      type: ""
    });
  };

  renderMarkButton = (type, Icon, tooltip) => {
    const { value, classes } = this.props;
    const isActive = hasMark(value, type);
    const activeColor = isActive ? defaultColor : "grey";
    return (
      <Button>
        <Tooltip title={tooltip} key={type}>
          <Grid
            className={classes.icons}
            onClick={event => this.onClickMark(event, type)}
          >
            <Icon style={{ color: activeColor }} />
          </Grid>
        </Tooltip>
      </Button>
    );
  };

  renderBlockButton = (type, Icon, tooltip) => {
    const { value, classes } = this.props;
    let isActive = hasBlock(value, type);

    const activeColor = isActive ? defaultColor : "grey";

    if (["numbered-list", "bulleted-list"].includes(type)) {
      const {
        value: { document, blocks }
      } = this.props;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive =
          hasBlock(value, "list-item") && parent && parent.type === type;
      }
    }

    if ("embed-image" === type) {
      return (
        <Button>
          <Tooltip title={tooltip} key={type}>
            <Grid
              className={classes.icons}
              onClick={event => this.setState({ imageDialog: true, type })}
            >
              <Icon style={{ color: activeColor }} />
            </Grid>
          </Tooltip>
        </Button>
      );
    } else if (["embed", "quote", "link"].includes(type)) {
      return (
        <Button>
          <Tooltip title={tooltip} key={type}>
            <Grid
              className={classes.icons}
              onClick={event => this.setState({ slateDialog: true, type })}
            >
              <Icon style={{ color: activeColor }} />
            </Grid>
          </Tooltip>
        </Button>
      );
    }

    return (
      <Button>
        <Tooltip title={tooltip} key={type}>
          <Grid
            className={classes.icons}
            onClick={event => this.onClickBlock(event, type)}
          >
            <Icon style={{ color: activeColor }} />
          </Grid>
        </Tooltip>
      </Button>
    );
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

    // switch (type){
    // 	case "link":
    // 	return editorLinks(editor,value)
    // 	case "embed":
    // 	editor.setBlocks(type)
    // case "emoji":
    // <Emoji
    //         key={type}
    //         tooltip={tooltip}
    //         type={type}
    //         classes={classes}
    //         Icon={Icon}
    //         onClickMark={this.onClickMark}
    //         onClickEmoji={this.onClickEmoji}
    //         emojiAnchor={emojiAnchor}
    //         handleClose={this.handleClose}
    //         emoji={this.state.emoji}
    //       />
    // 	case !"bulleted-list" && !"numbered-list":
    // 	return
    // 	default:
    // 	return null
    // }

    // switch (type) {
    //   case "emoji":
    //     return (
    //       <Emoji
    //         key={type}
    //         tooltip={tooltip}
    //         type={type}
    //         classes={classes}
    //         Icon={Icon}
    //         onClickMark={this.onClickMark}
    //         onClickEmoji={this.onClickEmoji}
    //         emojiAnchor={emojiAnchor}
    //         handleClose={this.handleClose}
    //         emoji={this.state.emoji}
    //       />
    //     );
    //   default:
    //     return (
    //       <Tooltip title={tooltip} key={type}>
    //         <Grid className={classes.icons}>
    //           <Icon
    //             style={{ color: "grey" }}
    //             onClick={event => mark(event, type)}
    //           />
    //         </Grid>
    //       </Tooltip>
    //     );
    // }

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

  onChange = ({ value }) => {
    // const content = JSON.stringify(value.toJSON());
    // console.log("CONTENT", content);
    // localStorage.setItem('content', content)
    this.setState({ value });
  };

  render() {
    const {
      value,
      handleChange,
      classes,
      headline,
      bulletHeaders,
      bulletHeadlines
    } = this.props;

    console.log("THIS", this.state);
    return (
      <Fragment>
        <Grid container alignItems="center" style={{ padding: 20 }}>
          {editorItems.map(({ type, Icon, tooltip, editorType }) => {
            switch (editorType) {
              case "mark":
                return this.renderMarkButton(type, Icon, tooltip);
              case "block":
                return this.renderBlockButton(type, Icon, tooltip);
              default:
                return <div />;
            }
          })}
        </Grid>
        <Divider className={classes.editorDivide} variant="middle" />
        <div
          style={{
            maxWidth: "60%",
            marginLeft: 100,
            marginTop: 50,
            marginBottom: 50,
            paddingBottom: 100
          }}
        >
          {headline && !bulletHeadlines && (
            <Fragment>
              <Typography variant="h3" component="h2">
                {headline}
              </Typography>
              <Divider
                className={classes.editorDivide}
                style={{ width: "100%", marginTop: 25 }}
              />
            </Fragment>
          )}
          {headline && bulletHeadlines && (
            <Fragment>
              <Typography variant="h3" component="h2">
                {headline}
              </Typography>
            </Fragment>
          )}
          {bulletHeadlines && (
            <Fragment>
              <ul style={{ marginBottom: 35 }}>
                {Object.keys(bulletHeaders).map(bullet => {
                  return (
                    <li style={{ fontSize: 25 }}>
                      <Typography variant="h6" gutterBottom>
                        {bulletHeaders[bullet]}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
              <Divider
                className={classes.editorDivide}
                style={{ width: "100%" }}
              />
            </Fragment>
          )}
          <Editor
            spellCheck
            ref={this.ref}
            value={value}
            onChange={handleChange}
            renderMark={renderMark.bind(this)}
            renderNode={renderNode.bind(this)}
            plugins={plugins}
            // onPaste={onPaste.bind(this)}
          />
        </div>
        {this.state.slateDialog && (
          <SlateDialog
            blockType={this.state.type}
            classEmbed={classes.icons}
            editor={this.editor}
            embedOpen={this.state.slateDialog}
            embedClose={this.onDialogClose}
          />
        )}
        {this.state.imageDialog && (
          <ImageDialog
            blockType={this.state.type}
            classEmbed={classes.icons}
            editor={this.editor}
            imageOpen={this.state.imageDialog}
            imageClose={this.onDialogClose}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Content);
