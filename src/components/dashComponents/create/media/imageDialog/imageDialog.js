import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "./dialogStyles";
import SwipeableViews from "react-swipeable-views";
import Url from "./url";
import Upload from "./upload/upload";
import Giphy from "./giphy";
import Bucket from "./bucket";
import Unsplash from "./unsplash";
import Pixabay from "./pixabay";

const ImageDialog = props => {
  const {
    imageDialog,
    setImageDialog,
    theme,
    value,
    handleOnChange,
    imageAttribution,
    imageAttributionLink,
    imageAlt
  } = props;
  const [tab, setTab] = useState(0);
  const [url, setUrl] = useState("");

  return (
    <div>
      <Dialog
        open={imageDialog}
        fullWidth={true}
        onClose={e => setImageDialog(false)}
        aria-labelledby="form-dialog-title"
        maxWidth={"md"}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={tab}
            onChange={(e, value) => {
              setTab(value);
            }}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
            variant="fullWidth"
          >
            <Tab label={"Image Url"} />;
            <Tab label={"Image Upload"} />;
            <Tab label={"Gif"} />;
            <Tab label={"Bucket"} />;
            <Tab label={"Unsplash"} />;
            <Tab label={"Pixabay"} />;
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={tab}
        >
          <Url
            setUrl={setUrl}
            url={url}
            setImageDialog={setImageDialog}
            handleOnChange={handleOnChange}
            value={value}
          />
          <Upload
            setImageDialog={setImageDialog}
            handleOnChange={handleOnChange}
            value={value}
            s3Directory={"allImages"}
          />
          <Giphy
            setImageDialog={setImageDialog}
            handleOnChange={handleOnChange}
            value={value}
            imageAttribution={imageAttribution}
            imageAttributionLink={imageAttributionLink}
          />
          <Bucket
            setImageDialog={setImageDialog}
            s3Directory={"allImages"}
            value={value}
            handleOnChange={handleOnChange}
            tab={tab}
            imageAlt={imageAlt}
            imageAttribution={imageAttribution}
            imageAttributionLink={imageAttributionLink}
          />
          <Unsplash
		              s3Directory={"allImages"}
            setImageDialog={setImageDialog}
            handleOnChange={handleOnChange}
            value={value}
            imageAlt={imageAlt}
            imageAttribution={imageAttribution}
            imageAttributionLink={imageAttributionLink}
          />
          <Pixabay
		              s3Directory={"allImages"}
            setImageDialog={setImageDialog}
            handleOnChange={handleOnChange}
            value={value}
            imageAlt={imageAlt}
            imageAttribution={imageAttribution}
            imageAttributionLink={imageAttributionLink}
          />
        </SwipeableViews>
      </Dialog>
    </div>
  );
};

export default withStyles(imageStyles, { withTheme: true })(ImageDialog);
