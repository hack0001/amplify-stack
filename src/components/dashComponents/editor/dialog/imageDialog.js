import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { INITIAL_IMAGE_STATE } from "./options/initialState";
import Upload from "../../create/media/imageDialog/upload/upload";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import LinearProgress from "@material-ui/core/LinearProgress";
import { imageStyles } from "./styles/dialogStyles";
import {
  Url,
  Giphy,
  Bucket,
  Unsplash,
  Pixabay,
  Youtube
} from "../../create/media/imageDialog/images";

const ImageDialog = props => {
  const { editor, imageOpen, imageClose, blockType, classEmbed, theme } = props;
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [url, setUrl] = useState("");

  const addImage = value => {
    editor
      .insertBlock({
        type: blockType,
        isVoid: true,
        data: value
      })
      .insertBlock("paragraph");
  };

  return (
    <div>
      <Dialog
        open={imageOpen}
        fullWidth={true}
        onClose={imageClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"lg"}
      >
        {loading && <LinearProgress />}
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
            <Tab label={"Youtube"} />;
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={tab}
        >
          <Url
            setUrl={setUrl}
            url={url}
            setImageDialog={imageClose}
            handleOnChange={addImage}
            value={"imageUrl"}
          />
          <Upload
            setImageDialog={imageClose}
            handleOnChange={addImage}
            value={"imageUrl"}
            s3Directory={"allImages"}
          />
          <Giphy
            setImageDialog={imageClose}
            handleOnChange={addImage}
            value={"imageUrl"}
            imageAttribution={"imageAttribution"}
            imageAttributionLink={"imageAttributionLink"}
          />
          <Bucket
            setImageDialog={imageClose}
            s3Directory={"allImages"}
            value={"imageUrl"}
            handleOnChange={addImage}
            tab={tab}
            imageAlt={"imageAlt"}
            imageAttribution={"imageAttribution"}
            imageAttributionLink={"imageAttributionLink"}
          />
          <Unsplash
            s3Directory={"allImages"}
            setImageDialog={imageClose}
            handleOnChange={addImage}
            value={"imageUrl"}
            imageAlt={"imageAlt"}
            imageAttribution={"imageAttribution"}
            imageAttributionLink={"imageAttributionLink"}
          />
          <Pixabay
            s3Directory={"allImages"}
            setImageDialog={imageClose}
            handleOnChange={addImage}
            value={"imageUrl"}
            imageAlt={"imageAlt"}
            imageAttribution={"imageAttribution"}
            imageAttributionLink={"imageAttributionLink"}
          />
          <Youtube
            s3Directory={"allImages"}
            setImageDialog={imageClose}
            handleOnChange={addImage}
            value={"imageUrl"}
            setLoading={setLoading}
            imageAlt={"imageAlt"}
            imageAttribution={"imageAttribution"}
            imageAttributionLink={"imageAttributionLink"}
          />
        </SwipeableViews>
      </Dialog>
    </div>
  );
};

export default withStyles(imageStyles, { withTheme: true })(ImageDialog);
