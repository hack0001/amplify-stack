import { getEventTransfer } from "slate-react";
import isUrl from "is-url";
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

const onPaste = (event, editor, next) => {
  if (editor.value.selection.isCollapsed) return next();

  const transfer = getEventTransfer(event);
  const { type, text } = transfer;
  if (type !== "text" && type !== "html") return next();
  if (!isUrl(text)) return next();

  if (hasLinks()) {
    editor.command(unwrapLink);
  }
  editor.command(wrapLink, text);
};

const editorLinks = (editor, value) => {
  const hasLinksNode = hasLinks(value);
  if (hasLinksNode) {
    editor.command(unwrapLink);
  } else if (value.selection.isExpanded) {
    const href = window.prompt("Enter the URL of the link:");

    if (href == null) {
      return;
    }

    editor.command(wrapLink, href);
  } else {
    const href = window.prompt("Enter the URL of the link:");

    if (href == null) {
      return;
    }

    const text = window.prompt("Enter the text for the link:");

    if (text == null) {
      return;
    }

    editor
      .insertText(text)
      .moveFocusBackward(text.length)
      .command(wrapLink, href);
  }
};

export { wrapLink, unwrapLink, onPaste, editorLinks };
