import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import { slideStyles } from "../../styles/slideStyles";
import { useStyles } from "../../styles/slideStyles";
import ImageDialog from "../../../imageDialog/imageDialog";
import DEFAULT_IMAGE from "../../../../../../../default.jpg";

const SlideCards = props => {
  const classes = useStyles();

  const {
    data,
    handleSend,
    slidesLayout,
    allData,
    currentTab,
    setNewTab
  } = props;

  const [imageDialog, setImageDialog] = useState(false);

  const handleOnChange = value => {
    const newMappedSlides = allData["slides"].map((e, index) => {
      if (e.slidePosition === data["slidePosition"]) {
        e = { ...e, slidePosition: index + 1, ...value };
      }
      return e;
    });
    handleSend({
      mainSlides: {
        ...allData,
        slides: newMappedSlides
      }
    });
  };

  const textField = (label, value, width, index) => {
    return (
      <div style={{ padding: 15, display: "inline-block", width }} key={index}>
        <TextField
          label={label}
          name={value}
          className={classes.textField}
          value={allData["slides"][data["slidePosition"] - 1][value]}
          style={{ width: "100%" }}
          onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
        />
      </div>
    );
  };

  const image = (value, alt, index) => {
    return (
      <div
        style={{ margin: "0 auto" }}
        key={index}
        onClick={e => {
          setImageDialog(true);
        }}
      >
        <img
          style={{ objectFit: "cover", width: "100%", height: "360px" }}
          alt={alt}
          src={
            allData["slides"][data["slidePosition"] - 1][value]
              ? allData["slides"][data["slidePosition"] - 1][value]
              : DEFAULT_IMAGE
          }
        />
      </div>
    );
  };

  const slideArrow = direction => {
    const arrow =
      direction === "right" ? (
        <ArrowRight style={{ fontSize: 50 }} />
      ) : (
        <ArrowRight
          style={{
            fontSize: 50,
            transform: "rotate(180deg)",
            margin: "0 auto"
          }}
        />
      );
    return (
      <Tooltip title="Next Slide" placement="top">
        <IconButton
          className={classes.button}
          aria-label="Clear"
          color="primary"
          onClick={e => {
            const newPosition =
              direction === "right" ? currentTab + 1 : currentTab - 1;
            setNewTab(newPosition);
          }}
        >
          {arrow}
        </IconButton>
      </Tooltip>
    );
  };

  const slide = (dataLayout, gridColumn) => {
    return (
      <Paper
        style={{
          display: "inline-block",
          width: "55%",
          margin: "0 auto",
          gridColumn: gridColumn
        }}
      >
        {slidesLayout.map((item, index) => {
          switch (item.type) {
            case "image":
              return image(item.name, item.alt, index);
            case "textField":
              return textField(item.placeholder, item.name, item.width, index);
            default:
              return <div key={index} />;
          }
        })}
      </Paper>
    );
  };

  return (
    <div style={{ display: "grid" }}>
      <div style={{ gridColumn: 1, margin: "auto" }}>{slideArrow("left")}</div>
      {slide(slidesLayout, 2, true)}
      <div style={{ gridColumn: 4, margin: "auto" }}>{slideArrow("right")}</div>
      <ImageDialog
        imageDialog={imageDialog}
        setImageDialog={setImageDialog}
        handleOnChange={handleOnChange}
        value={"slideImage"}
        imageAttribution={"slideImageAttribution"}
        imageAttributionLink={"slideImageAttributionLink"}
		imageAlt={"slideImageAlt"}
      />
    </div>
  );
};

export default withStyles(slideStyles)(SlideCards);
