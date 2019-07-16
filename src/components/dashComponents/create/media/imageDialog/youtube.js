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
  const uploadYoutubeImageEl = useRef(null);
  const limit = 10;
  const [page, setPage] = useState(1);
  const [youtubeImages, setYoutubeImages] = useState([]);
  const [nextToken, setNextToken] = useState("");
  const [message, setMessage] = useState("");

  const uploadToBucket = async (file, width, height, tile, name, ext) => {
    console.log("Tile", tile);
    console.log("file", file);
    console.log("WIDTH", width, height, name, ext);
    // try {
    //   const listImages = await Storage.list(`${s3Directory}/`);
    //   const filePath = `${s3Directory}/${name}.${ext}`;
    //   if (listImages.filter(e => e.key === filePath).length > 0) {
    //     setMessage("Image Already Exists In Bucket - Please Choose Another");
    //     return;
    //   }
    //   await Storage.put(filePath, file, {
    //     contentType: file.type,
    //     cacheControl: "public, max-age=604800",
    //     expires: Date.now() + 60 * 60 * 24 * 7,
    //     level: "public"
    //   });

    //   const imageUpdate = `https://${bucket}.s3.${region}.amazonaws.com/public/${filePath}`;

    //   const uploadImageApi = {
    //     name: cleanup(name),
    //     description: cleanup(youtubeUrl),
    //     image: imageUpdate,
    //     category: tile.type,
    //     type: file.type,
    //     size: formatBytes(file.size),
    //     height: Math.round(height),
    //     width: Math.round(width),
    //     tags: [tile.tags],
    //     imageAttribution: tile.user,
    //     imageAttributionLink: tile.pageURL,
    //     access: "public"
    //   };

    //   clean(uploadImageApi);
    //   await API.graphql(
    //     graphqlOperation(createImage, { input: uploadImageApi })
    //   );
    //   handleOnChange({
    //     [value]: imageUpdate,
    //     [imageAlt]: youtubeUrl,
    //     [imageAttribution]: tile.user ? tile.user : "Youtube",
    //     [imageAttributionLink]: tile.userImageURL
    //       ? tile.userImageURL
    //       : "https://youtube.com/"
    //   });
    //   setImageDialog(false);
    //   setMessage("Success! Click again for another Image");
    // } catch (err) {
    //   console.log("Error", err);
    //   setMessage("Uh oh! Something went wrong please try again");
    // }
  };

  const getMoreYoutube = async () => {
    const updatePage = page + 1;
    setPage(updatePage);

    let searchTerm = youtubeUrl
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase();

    const url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=${limit}&q=${searchTerm}&key=${
      process.env.REACT_APP_GOOGLE_ACCESS_KEY
    }&pageToken=${nextToken}`;

    try {
      const youtubeResult = await axios.get(url, { crossdomain: true });
      if (!youtubeImages[0]) {
        setYoutubeImages(youtubeResult.data.items);
      } else {
        const addYoutubeImages = youtubeImages.concat(youtubeResult.data.items);
        setYoutubeImages(addYoutubeImages);
        setNextToken(youtubeResult.data.nextPageToken);
      }
    } catch (err) {
      console.log("Error getting Youtube Images", err);
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

      const url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=${limit}&q=${searchTerm}&key=${
        process.env.REACT_APP_GOOGLE_ACCESS_KEY
      }`;
      try {
        const youtubeResult = await axios.get(url, {
          crossdomain: true,
          crossorigin: true
        });
        setYoutubeImages(youtubeResult.data.items);
        setNextToken(youtubeResult.data.nextPageToken);
      } catch (err) {
        console.log("Error getting Youtube Images", err);
      }
    }
  };

  const youtubeThumbnailCheck = async link => {
    let img;
    let imgCheck = false;
    const imageLoadPromise = new Promise(resolve => {
      img = new Image();
      img.crossorigin = "null";
      //   img.setAttribute("crossOrigin", "null");
      img.onload = resolve;
      img.src = link;
    });
    await imageLoadPromise;

    if (img.width !== 120) {
      imgCheck = true;
    }
    console.log("IMAGE CHECK", imgCheck);
    return imgCheck;
  };

  const handleYoutube = async tile => {
    let imageSrc = "";
    let imageWidth;
    let imageHeight;
    const tileShort = tile.snippet;
    const newNameUpload = tileShort.title
      ? cleanup(tileShort.title)
      : "YoutubeImage" + Date.now();
    const videoId = tile.id.videoId;
    const maxRes = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    const mark = getMark(tileShort.thumbnails.high.url)[1];
    try {
      const maxResVerified = await youtubeThumbnailCheck(maxRes);
      if (maxResVerified) {
        imageSrc = maxRes;
        imageWidth = 1263;
        imageHeight = 710;
      } else if (!maxResVerified && tileShort.thumbnails.high) {
        imageSrc = tileShort.thumbnails.high.url;
        imageWidth = tileShort.thumbnails.high.width;
        imageHeight = tileShort.thumbnails.high.height;
      } else {
        imageSrc = tileShort.thumbnails.medium.url;
        imageWidth = tileShort.thumbnails.medium.width;
        imageHeight = tileShort.thumbnails.medium.height;
      }
    } catch (err) {
      console.log("Error", err);
    }

    console.log("IMAGE SOUCE", imageSrc);
    const image = new Image();
    image.crossorigin = "null";
    image.src = imageSrc;

    image.onload = () => {
      let width = imageWidth;
      let height = imageHeight;

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
      const elem = uploadYoutubeImageEl.current;
      elem.width = width;
      elem.height = height;

      //setDimensions
      const ctx = elem.getContext("2d");
      ctx.imageSmoothingQuality = "medium";

      // img.width and img.height will contain the original dimensions
      ctx.drawImage(image, 0, 0, width, height);
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
          onChange={getYoutube}
          onKeyDown={getYoutube}
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
                onClick={e => handleYoutube(tile)}
                cols={1}
              >
                <img
                  src={tile.snippet.thumbnails.high.url}
                  alt={tile.snippet.title}
                />
              </GridListTile>
            ))}
            <GridListTile style={{ textAlign: "center", paddingTop: 35 }}>
              <IconButton
                aria-label="More"
                style={{ fontSize: 25 }}
                size="large"
                type="button"
                onClick={getMoreYoutube}
              >
                <ArrowDownwardIcon style={{ fontSize: 50 }} />
              </IconButton>
            </GridListTile>
          </GridList>
        </Paper>
      )}
      <div style={{ display: "none" }}>
        <canvas ref={uploadYoutubeImageEl} />
      </div>
    </Fragment>
  );
};

export default withStyles(imageStyles)(YouTube);
