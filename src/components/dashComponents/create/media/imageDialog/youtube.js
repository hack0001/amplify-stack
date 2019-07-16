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

const YouTube = props => {
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
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const uploadImageEl = useRef(null);
  const photosPerPage = 10;
  const [page, setPage] = useState(1);
  const [youtubeImages, setYoutubeImages] = useState([]);
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
        description: cleanup(youtubeUrl),
        image: imageUpdate,
        category: tile.type,
        type: file.type,
        size: formatBytes(file.size),
        height: Math.round(height),
        width: Math.round(width),
        tags: [tile.tags],
        imageAttribution: tile.user,
        imageAttributionLink: tile.pageURL,
        access: "public"
      };

      clean(uploadImageApi);
      await API.graphql(
        graphqlOperation(createImage, { input: uploadImageApi })
      );
      handleOnChange({
        [value]: imageUpdate,
        [imageAlt]: youtubeUrl,
        [imageAttribution]: tile.user ? tile.user : "Youtube",
        [imageAttributionLink]: tile.userImageURL
          ? tile.userImageURL
          : "https://youtube.com/"
      });
      setImageDialog(false);
      setMessage("Success! Click again for another Image");
    } catch (err) {
      console.log("Error", err);
      setMessage("Uh oh! Something went wrong please try again");
    }
  };

  const getMoreYoutube = async () => {
    const updatePage = page + 1;
    setPage(updatePage);

    let searchTerm = youtubeUrl
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase();

      const url = `https://www.googleapis.com/youtube/v3/search?key=${
        process.env.REACT_APP_GOOGLE_ACCESS_KEY
      }&part=snippet,id&type=video`;

    try {
      const youtubeResult = await axios.get(url, { crossdomain: true });
      if (!youtubeImages[0]) {
        setYoutubeImages(youtubeResult.data.hits);
      } else {
        const addYoutubeImages = youtubeImages.concat(youtubeResult.data.hits);
        setYoutubeImages(addYoutubeImages);
      }
    } catch (err) {
      console.log("Error getting Pixabay Images", err);
    }
  };

  const getYoutube = async e => {
    const value = e.target.value;
    setYoutubeUrl(value);
    if (e.keyCode === 13 && youtubeUrl.length > 1) {
      let searchTerm = value
        .trim()
        .replace(/\s/g, "+")
        .toLowerCase();

    //   const url = `https://pixabay.com/api/?key=${
    //     process.env.REACT_APP_PIXABAY_ACCESS_KEY
    //   }&q=${searchTerm}&page=${page}&per_page=${photosPerPage}`;

      const url = `https://www.googleapis.com/youtube/v3/search?key=${
        process.env.REACT_APP_GOOGLE_ACCESS_KEY
      }&part=snippet,id&type=video`;

      try {
        const youtubeResult = await axios.get(url, { crossdomain: true });
        setYoutubeImages(youtubeResult.data.hits);
      } catch (err) {
        console.log("Error getting Pixabay Images", err);
      }
    }
  };

  const handlePixaBay = tile => {
    const pageURL = tile.pageURL;
    const nameUpload = pageURL.split("/");
    const newNameUpload = nameUpload[nameUpload.length - 2]
      ? nameUpload[nameUpload.length - 2]
      : "PixaImage" + Date.now();

    const mark = getMark(tile.webformatURL)[1];

    const img = new Image();
    img.crossorigin = "anonymous";
    img.setAttribute("crossOrigin", "anonymous");
    img.src = tile.webformatURL;
    img.onload = () => {
      let width = tile.webformatWidth;
      let height = tile.webformatHeight;

      const elem = uploadImageEl.current;
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
          value={youtubeUrl}
          onChange={getPixabay}
          onKeyDown={getPixabay}
          margin="dense"
          id="youtube"
          label="Search Youtube"
          type="youtube"
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
            setYoutubeUrl("");
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          disabled={validImage}
          onClick={e => {
            handleOnChange({ [value]: youtubeUrl });
            setImageDialog(false);
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
      {youtubeImages.length > 1 && (
        <Paper style={{ overflow: "hidden" }}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {youtubeImages.map((tile, index) => (
              <GridListTile
                key={index}
                onClick={e => handlePixaBay(tile)}
                cols={1}
              >
                <img src={tile.previewURL} alt={tile.alt_description} />
              </GridListTile>
            ))}
            <GridListTile style={{ textAlign: "center", paddingTop: 35 }}>
              <IconButton
                aria-label="More"
                style={{ fontSize: 25 }}
                size="large"
                type="button"
                onClick={getMorePixabay}
              >
                <ArrowDownwardIcon style={{ fontSize: 50 }} />
              </IconButton>
            </GridListTile>
          </GridList>
        </Paper>
      )}
      <div style={{ display: "none" }}>
        <canvas ref={uploadImageEl} />
      </div>
    </Fragment>
  );
};

export default withStyles(imageStyles)(YouTube);
