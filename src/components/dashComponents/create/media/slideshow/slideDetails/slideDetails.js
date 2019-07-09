import React, { Fragment, useState } from "react";
import { useStyles } from "../styles/slideStyles";
import Paper from "@material-ui/core/Paper";
import Selection from "./select/selection";
import TextField from "@material-ui/core/TextField";
import Tag from "./tags/tag";
import { slideLayout } from "./slideLayout";
import ImageDialog from "../../imageDialog/imageDialog";
import DEFAULT_IMAGE from "../../../../../../default.jpg";

const SlideCards = props => {
  const { handleSend, overview } = props;
  const classes = useStyles();
  const [imageDialog, setImageDialog] = useState(false);

  const handleOnChange = value => {
    handleSend({
      overviewValues: [
        {
          ...overview[0],
          ...value
        }
      ]
    });
  };

  const selection = (val, selectVals, desc, helper, index) => {
    return (
      <div
        key={index}
        style={{ padding: 30, display: "inline-block", width: "50%" }}
      >
        <Selection
          value={overview[0][val]}
          name={val}
          selectValues={selectVals}
          handleValueChange={handleOnChange}
          text={desc}
          helperText={helper}
        />
      </div>
    );
  };

  const textField = (label, value, index) => {
    return (
      <div
        style={{ padding: 30, display: "inline-block", width: "50%" }}
        key={index}
      >
        <TextField
          label={label}
          name={value}
          className={classes.textField}
          value={overview[0][value]}
          style={{ width: "100%" }}
          onChange={e => handleOnChange({ [e.target.name]: e.target.value })}
        />
      </div>
    );
  };

  const image = (label, index) => {
    return (
      <div
        key={index}
        style={{
          display: "block",
          width: "50%",
          margin: "0 auto",
          gridColumn: 2
        }}
        onClick={e => setImageDialog(true)}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "360px",
            margin: 10
          }}
          alt={overview[0]["headlineImageAlt"]}
          src={overview[0][label] ? overview[0][label] : DEFAULT_IMAGE}
        />
      </div>
    );
  };

  const tags = (val, name, array, index) => {
    return (
      <Fragment key={index}>
        <Tag
          label={name}
          value={val}
          handleOnChange={handleOnChange}
          overview={overview}
          tagArray={array}
        />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Paper style={{ display: "block" }}>
        {slideLayout.map((item, index) => {
          switch (item.type) {
            case "textField":
              return textField(item.placeholder, item.name, index);
            case "selection":
              return selection(
                item.name,
                item.selectVals,
                item.placeholder,
                item.helper,
                index
              );
            case "tags":
              return tags(item.name, item.placeholder, item.tagArray, index);
            case "image":
              return image(item.name, index);
            default:
              return <div key={index} />;
          }
        })}
      </Paper>
      <ImageDialog
        imageDialog={imageDialog}
        setImageDialog={setImageDialog}
        value={"headlineImage"}
        handleOnChange={handleOnChange}
        imageAttribution={"headlineImageAttribution"}
        imageAttributionLink={"headlineImageAttributionLink"}
        imageAlt={"headlineImageAlt"}
      />
    </Fragment>
  );
};

export default SlideCards;
