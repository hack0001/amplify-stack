import React, { useState, useRef, useEffect, Fragment } from "react";
import { Editor } from "slate-react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {
  editorItems,
  hoverEditorItems,
  hoverEditorHighlightItems
} from "./editor";
import { styles } from "./styles";
import renderMark from "./renderMark/renderMark";
import renderNode from "./renderNode/renderNode";
import renderInline from "./renderInline/renderInline";
import { plugins } from "./plugins/plugins";
import { onPaste, editorLinks } from "./links/links";
import { hasBlock, hasMark, hasInline } from "./hasHelpers/hasHelpers";
import SlateDialog from "./dialog/slateDialog";
import ImageDialog from "./dialog/imageDialog";
import EmoticonDialog from "./dialog/emoticonDialog";
import HoverMenu from "./hoverMenu/hoverMenu";
import { clickBlock, clickMark, clickInline } from "./clickEvent";
import {
  MarkButton,
  BlockButton,
  blockSwitch,
  markSwitch,
  InlineButton,
  inlineSwitch
} from "./renderButtons";

const defaultColor = "#3f51b5";

const Content = ({
  value,
  handleChange,
  classes,
  headline,
  bulletHeaders,
  bulletHeadlines
}) => {
  const [content, setContent] = useState({
    color: null,
    inputModal: false,
    slateDialog: false,
    imageDialog: false,
    emoticonDialog: false,
    type: "",
    value: ""
  });

  const edit = useRef(null);
  const hover = useRef(null);
  const hoverSelect = useRef(null);

  useEffect(() => {
    handleHover();
  });

  const hoverClick = () => {
    const menu = hover.current;
    if (!menu) return;
    const editor = edit.current;
    const { value } = editor;
    const { startBlock } = value;

    if (startBlock) {
      if (startBlock.text === "") {
        if (menu.style.opacity === "1") {
          menu.style.opacity = 0;
          menu.style.display = "none";
        } else {
          const native = window.getSelection();
          const range = native.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          menu.style.opacity = 1;

          menu.style.top = `${rect.top + window.pageYOffset - 60}px`;
          menu.style.backgroundColor = "#dedede";
          menu.style.display = "block";

          const marginLeftBuffer =
            rect.left - menu.offsetWidth / 2 + rect.width / 2 < 100
              ? 100
              : rect.left + menu.offsetWidth / 2 + rect.width / 2 > 970
              ? 405
              : rect.left - menu.offsetWidth / 2 + rect.width / 2 + 50;
          menu.style.left = `${marginLeftBuffer}px`;
        }
      } else {
        menu.style.opacity = 0;
        menu.style.display = "none";
        return;
      }
    }
  };

  const handleHover = () => {
    const menu = hoverSelect.current;
    if (!menu) return;
    const editor = edit.current;
    const { value } = editor;
    const { fragment, selection } = value;

    if (selection.isBlurred || selection.isCollapsed || fragment.text === "") {
      menu.style.opacity = 0;
      menu.style.display = "none";
      return;
    }

    const native = window.getSelection();
    const range = native.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    menu.style.opacity = 1;

    menu.style.top = `${rect.top + window.pageYOffset - 60}px`;
    menu.style.backgroundColor = "#dedede";
    menu.style.display = "block";

    const marginLeftBuffer =
      rect.left - menu.offsetWidth / 2 + rect.width / 2 < 100
        ? 100
        : rect.left + menu.offsetWidth / 2 + rect.width / 2 > 970
        ? 405
        : rect.left - menu.offsetWidth / 2 + rect.width / 2 + 50;
    menu.style.left = `${marginLeftBuffer}px`;
  };

  const onDialogClose = e => {
    setContent({
      slateDialog: false,
      imageDialog: false,
      emoticonDialog: false,
      type: ""
    });
  };

  const renderBlockButton = (type, Icon, tooltip, renderType) => {
    let isActive = hasBlock(value, type);
    const editor = edit.current;
    const switchBlocks = blockSwitch(
      type,
      value,
      setContent,
      clickBlock,
      editor,
      isActive
    );
    const { listType, buttonHandler } = switchBlocks;
    const activeColor = isActive
      ? defaultColor
      : listType
      ? defaultColor
      : "grey";

    return (
      <BlockButton
        Icon={Icon}
        tooltip={tooltip}
        classes={classes}
        type={type}
        activeColor={activeColor}
        handleBlock={buttonHandler}
        editor={editor}
        renderType={renderType}
      />
    );
  };

  const renderMarkButton = (type, Icon, tooltip, renderType) => {
    const isActive = hasMark(value, type);
    const editor = edit.current;
    const activeColor = isActive ? defaultColor : "grey";
    const switchMarks = markSwitch(
      type,
      value,
      setContent,
      clickMark,
      editor,
      isActive
    );
    const { buttonHandler } = switchMarks;
    return (
      <MarkButton
        Icon={Icon}
        tooltip={tooltip}
        classes={classes}
        type={type}
        activeColor={activeColor}
        handleMarkUp={buttonHandler}
        editor={editor}
        renderType={renderType}
      />
    );
  };

  const renderInlineButton = (type, Icon, tooltip, renderType) => {
    const isActive = hasInline(value, type);
    const editor = edit.current;
    const activeColor = isActive ? defaultColor : "grey";
    const switchInline = inlineSwitch(
      type,
      value,
      setContent,
      clickInline,
      editor,
      isActive
    );
    const { buttonHandler } = switchInline;
    return (
      <InlineButton
        Icon={Icon}
        tooltip={tooltip}
        classes={classes}
        type={type}
        activeColor={activeColor}
        handleInline={buttonHandler}
        editor={editor}
        renderType={renderType}
      />
    );
  };

  const renderEditor = (props, editor, next) => {
    const children = next();
    return (
      <Fragment>
        {children}
        <HoverMenu
          ref={hover}
          hoverItems={hoverEditorItems}
          editor={editor}
          renderMarkButton={renderMarkButton}
          renderBlockButton={renderBlockButton}
          renderInlineButton={renderInlineButton}
          defaultColor={defaultColor}
          setContent={setContent}
          onClickBlock={clickBlock}
          onClickInline={clickInline}
          onClickMark={clickMark}
          classes={classes}
        />
        <HoverMenu
          ref={hoverSelect}
          hoverItems={hoverEditorHighlightItems}
          editor={editor}
          renderMarkButton={renderMarkButton}
          renderBlockButton={renderBlockButton}
          renderInlineButton={renderInlineButton}
          defaultColor={defaultColor}
          setContent={setContent}
          onClickBlock={clickBlock}
          onClickInline={clickInline}
          onClickMark={clickMark}
          classes={classes}
        />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Grid container alignItems="center" style={{ padding: 20 }}>
        {editorItems.map(({ type, Icon, tooltip, editorType }) => {
          switch (editorType) {
            case "mark":
              return renderMarkButton(type, Icon, tooltip, "main");
            case "block":
              return renderBlockButton(type, Icon, tooltip, "main");
            case "inline":
              return renderInlineButton(type, Icon, tooltip, "main");
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
          placeholder="Enter text here..."
          ref={edit}
          value={value}
          onChange={handleChange}
          renderMark={renderMark}
          renderBlock={renderNode}
          renderEditor={renderEditor}
          renderInline={renderInline}
          plugins={plugins}
          onClick={hoverClick}
          // onPaste={onPaste.bind(this)}
        />
      </div>
      {content.slateDialog && (
        <SlateDialog
          blockType={content.type}
          classEmbed={classes.icons}
          editor={edit.current}
          embedOpen={content.slateDialog}
          embedClose={onDialogClose}
        />
      )}
      {content.imageDialog && (
        <ImageDialog
          blockType={content.type}
          classEmbed={classes.icons}
          editor={edit.current}
          imageOpen={content.imageDialog}
          imageClose={onDialogClose}
        />
      )}
      {content.emoticonDialog && (
        <EmoticonDialog
          blockType={content.type}
          openDialog={content.emoticonDialog}
          closeDialog={onDialogClose}
          editor={edit.current}
        />
      )}
    </Fragment>
  );
};

export default withStyles(styles)(Content);
