import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import renderHoverMarkButton from "./renderHoverMarkButton";
import renderHoverBlockButton from "./renderHoverBlockButton";
import renderHoverInlineButton from "./renderHoverInlineButton";

const HoverMenu = forwardRef(
  (
    {
      editor,
      hoverItems,
      renderBlockButton,
      defaultColor,
      setContent,
      onClickBlock,
      onClickInline,
      onClickMark,
      classes
    },
    ref
  ) => {
    const root = window.document.getElementById("root");
    return createPortal(
      <Paper
        ref={ref}
        style={{
          position: "absolute",
          zIndex: 1,
          top: "-10000px",
          left: "-10000px",
          marginTop: "-6px",
          opacity: 0,
          backgroundColor: "#222",
          borderRadius: "4px",
          transition: "opacity 0.75s"
        }}
      >
        <Grid container alignItems="center" style={{ padding: 5 }}>
          {hoverItems.map(({ type, Icon, tooltip, editorType }) => {
            switch (editorType) {
              case "mark":
                return renderHoverMarkButton(
                  type,
                  Icon,
                  tooltip,
                  editor,
                  defaultColor,
                  classes,
                  setContent,
                  onClickMark
                );
              case "block":
                return renderHoverBlockButton(
                  type,
                  Icon,
                  tooltip,
                  editor,
                  defaultColor,
                  setContent,
                  onClickBlock
                );
              case "inline":
                return renderHoverInlineButton(
                  type,
                  Icon,
                  tooltip,
                  editor,
                  defaultColor,
                  setContent,
                  onClickInline,
                  classes
                );
              default:
                return <div />;
            }
          })}
        </Grid>
      </Paper>,
      root
    );
  }
);
export default HoverMenu;
