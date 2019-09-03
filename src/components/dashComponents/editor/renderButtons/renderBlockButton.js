import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const ButtonBlock = ({
  tooltip,
  classes,
  type,
  activeColor,
  handleBlock,
  Icon,
  renderType
}) => {
  if (renderType === "hover") {
    return (
      <Fragment key={type}>
        <Tooltip title={tooltip}>
          <button
            onClick={handleBlock}
            style={{
              padding: 7,
              margin: 2,
              backgroundColor: "white",
              border: "none"
            }}
          >
            <Icon style={{ backgroundColor: "white", color: activeColor }} />
          </button>
        </Tooltip>
      </Fragment>
    );
  }
  return (
    <Fragment key={type}>
      <Button>
        <Tooltip title={tooltip}>
          <Grid className={classes.icons} onClick={handleBlock}>
            <Icon style={{ color: activeColor }} />
          </Grid>
        </Tooltip>
      </Button>
    </Fragment>
  );
};

export default ButtonBlock;
