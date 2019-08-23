import React from "react";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const MarkButton = ({
  tooltip,
  classes,
  type,
  activeColor,
  editor,
  Icon,
  handleMarkUp,
  renderType
}) => {

  if (renderType === "hover") {
    return (
      <Tooltip title={tooltip}>
        <button
          onClick={handleMarkUp}
          style={{
            padding: 7,
            margin: 2,
            backgroundColor: "white",
            border: "none"
          }}
          key={type}
        >
          <Icon style={{ backgroundColor: "white", color: activeColor }} />
        </button>
      </Tooltip>
    );
  }
  return (
    <Button>
      <Tooltip title={tooltip} key={type}>
        <Grid className={classes.icons} onClick={handleMarkUp}>
          <Icon style={{ color: activeColor }} />
        </Grid>
      </Tooltip>
    </Button>
  );
};
export default MarkButton;
