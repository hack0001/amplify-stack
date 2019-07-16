import React, { useState, Fragment, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "./dialogStyles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { formatBytes } from "./upload/formatBytes";
import config from "../../../../../aws-exports";
import { createImage } from "./graphql/uploadImages";
import { clean, cleanup, getMark } from "./clean";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;

const UnplashUpload = props => {
  const {
    setImageDialog,
    handleOnChange,
    value,
    classes,
    imageAlt,
    imageAttribution,
    imageAttributionLink,
    s3Directory
  } = props;
  const [validImage, setValidImage] = useState(true);
  const [unsplashUrl, setUnsplashUrl] = useState("");
  const uploadUnsplashImageEl = useRef(null);
  const photosPerPage = 10;
  const [page, setPage] = useState(1);
  const [unsplashImages, setUnsplashImages] = useState([]);
  const [message, setMessage] = useState("");

  const uploadToBucket = async (file, width, height, tile, name, ext) => {
    try {
      const listImages = await Storage.list(`${s3Directory}/`);
      const filePath = `${s3Directory}/${name}.${ext}`;
      if (listImages.filter(e => e.key === filePath).length > 0) {
        setMessage("Image Already Exists In Bucket - Please Choose Another");
        return;
      }
      await Storage.put(filePath, file, {
        contentType: file.type,
        cacheControl: "public, max-age=604800",
        expires: Date.now() + 60 * 60 * 24 * 7,
        level: "public"
      });

      const imageUpdate = `https://${bucket}.s3.${region}.amazonaws.com/public/${filePath}`;

      const uploadImageApi = {
        name: cleanup(name),
        description: tile.description, //check here
        image: imageUpdate,
        category: tile.categories,
        type: file.type,
        size: formatBytes(file.size),
        height: Math.round(height),
        width: Math.round(width),
        tags: tile.tags,
        imageAttribution: tile.user.name,
        imageAttributionLink: tile.user.portfolio_url
          ? tile.user.portfolio_url
          : "https://unsplash.com/",
        access: "public"
      };
      clean(uploadImageApi);
      await API.graphql(
        graphqlOperation(createImage, { input: uploadImageApi })
      );

      handleOnChange({
        [value]: tile.urls.regular,
        [imageAlt]: tile.alt_description,
        [imageAttribution]: tile.user.name ? tile.user.name : "Unsplash",
        [imageAttributionLink]: tile.user.links.html
          ? tile.user.links.html
          : "https://unsplash.com/"
      });

      setImageDialog(false);
      setMessage("Success! Click again for another Image");
    } catch (err) {
      console.log("Error", err);
      setMessage("Uh oh! Something went wrong please try again");
    }
  };

  const getMoreUnsplash = async () => {
    const updatePage = page + 1;
    setPage(updatePage);

    let searchTerm = unsplashUrl
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase();

    const url = `https://api.unsplash.com/search/photos/?page=${updatePage}&per_page=${photosPerPage}&query=${searchTerm}&client_id=${
      process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    }`;

    try {
      const unsplashResult = await axios.get(url, { crossdomain: true });
      if (!unsplashImages[0]) {
        setUnsplashImages(unsplashResult.data.results);
      } else {
        const addUnsplashImages = unsplashImages.concat(
          unsplashResult.data.results
        );
        setUnsplashImages(addUnsplashImages);
      }
    } catch (err) {
      console.log("Error getting Unplash Images", err);
    }
  };

  const getUnsplash = async e => {
    const value = e.target.value;
    setUnsplashUrl(value);
    if (e.keyCode === 13 && unsplashUrl.length > 1) {
      let searchTerm = value
        .trim()
        .replace(/\s/g, "+")
        .toLowerCase();

      const url = `https://api.unsplash.com/search/photos/?page=${page}&per_page=${photosPerPage}&query=${searchTerm}&client_id=${
        process.env.REACT_APP_UNSPLASH_ACCESS_KEY
      }`;
      try {
        const unsplashResult = await axios.get(url, { crossdomain: true });
        setUnsplashImages(unsplashResult.data.results);
      } catch (err) {
        console.log("Error getting Unplash Images", err);
      }
    }
  };

  const handleUnsplash = tile => {
    const newNameUpload = tile.alt_description
      ? cleanup(tile.alt_description)
      : "UnsplashImage" + Date.now();
    const mark = "jpeg";

    const img = new Image();
    img.crossorigin = "anonymous";
    img.setAttribute("crossOrigin", "anonymous");
    img.src = tile.urls.regular;
    img.onload = () => {
      let width = tile.width;
      let height = tile.height;

      const widthRatio = 1.785;
      const MAX_WIDTH = 1065;
      const MAX_HEIGHT = 1065;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        } else {
          height = width / widthRatio;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      const elem = uploadUnsplashImageEl.current;
      elem.width = width;
      elem.height = height;

      //setDimensions
      const ctx = elem.getContext("2d");
      ctx.imageSmoothingQuality = "medium";

      // img.width and img.height will contain the original dimensions
      ctx.drawImage(img, 0, 0, width, height);
      ctx.canvas.toBlob(
        blob => {
          const file = new File([blob], newNameUpload, {
            type: `image/${mark}`,
            lastModified: Date.now()
          });
          uploadToBucket(file, width, height, tile, newNameUpload, mark);
        },
        `image/${mark}`, // imageType,
        100 // imageQualityRound
      );
    };
  };

  return (
    <Fragment>
      <DialogContent>
        <TextField
          autoFocus
          autoComplete="off"
          value={unsplashUrl}
          onChange={getUnsplash}
          onKeyDown={getUnsplash}
          margin="dense"
          id="unsplash"
          label="Search Unsplash"
          type="unsplash"
          fullWidth
        />
      </DialogContent>
      {message && (
        <div style={{ textAlign: "center", color: "red" }}>{message}</div>
      )}
      <DialogActions>
        <Button
          onClick={e => {
            setImageDialog(false);
            setUnsplashUrl("");
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          disabled={validImage}
          onClick={e => {
            handleOnChange({ [value]: unsplashUrl });
            setImageDialog(false);
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
      {unsplashImages.length > 1 && (
        <Paper style={{ overflow: "hidden" }}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {unsplashImages.map((tile, index) => (
              <GridListTile
                key={index}
                onClick={e => handleUnsplash(tile)}
                cols={1}
              >
                <img src={tile.urls.regular} alt={tile.alt_description} />
              </GridListTile>
            ))}
            <GridListTile style={{ textAlign: "center", paddingTop: 35 }}>
              <IconButton
                aria-label="More"
                style={{ fontSize: 25 }}
                size="large"
                type="button"
                onClick={getMoreUnsplash}
              >
                <ArrowDownwardIcon style={{ fontSize: 50 }} />
              </IconButton>
            </GridListTile>
          </GridList>
        </Paper>
      )}
      <div style={{ display: "none" }}>
        <canvas ref={uploadUnsplashImageEl} />
      </div>
    </Fragment>
  );
};

export default withStyles(imageStyles)(UnplashUpload);
