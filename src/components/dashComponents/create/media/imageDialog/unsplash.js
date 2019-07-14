import React, { useState, Fragment } from "react";
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

const UnplashUpload = props => {
  const {
    setImageDialog,
    handleOnChange,
    value,
    classes,
    imageAttribution,
    imageAttributionLink
  } = props;
  const [validImage, setValidImage] = useState(true);
  const [unsplashUrl, setUnsplashUrl] = useState("");
  const photosPerPage = 10;
  const [page, setPage] = useState(1);
  const [unsplashImages, setUnsplashImages] = useState([]);

  const getMoreUnsplash = async () => {
    const updatePage = page + 1;
    setPage(updatePage);

    let searchTerm = unsplashUrl
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase();

    const url = `https://api.unsplash.com/search/photos/?page=${page}&per_page=${photosPerPage}&query=${searchTerm}&client_id=${
      process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    }`;

    try {
      const unsplashResult = await axios.get(url, { crossdomain: true });
      if (!unsplashImages[0]) {
        setUnsplashImages(unsplashResult.data.data);
      } else {
        const addGiphyImages = unsplashImages.concat(unsplashResult.data.data);
        setUnsplashImages(addGiphyImages);
      }
    } catch (err) {
      console.log("Error getting Giphy", err);
    }
  };

  const getUnsplash = async e => {
    const value = e.target.value;
    setUnsplashUrl(value);

    if (value === "") return;

    let searchTerm = value
      .trim()
      .replace(/\s/g, "+")
      .toLowerCase();

    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${
      process.env.REACT_APP_GIPHY_API
    }&limit=${limit}&offset=${offset}&lang=en`;

    try {
      const unsplashResult = await axios.get(url, { crossdomain: true });
      setUnsplashImages(unsplashResult.data.data);
    } catch (err) {
      console.log("Error getting Giphy", err);
    }
  };

  const handleUnsplash = tile => {
    handleOnChange({
      [value]: tile.images.downsized.url,
      [imageAttribution]: "Unsplash",
      [imageAttributionLink]: tile.bitly_gif_url
    });

    setImageDialog(false);
  };

  return (
    <Fragment>
      <DialogContent>
        <TextField
          autoFocus
          autoComplete="off"
          value={unsplashUrl}
          onChange={getUnsplash}
          margin="dense"
          id="unsplash"
          label="Search Unsplash"
          type="unsplash"
          fullWidth
        />
      </DialogContent>
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
                cols={tile.cols || 1}
              >
                <img src={tile.images.downsized.url} alt={tile.title} />
              </GridListTile>
            ))}
            <GridListTile style={{ textAlign: "center", paddingTop: 35 }}>
              <IconButton
                aria-label="More"
                style={{ fontSize: 25 }}
                size="large"
                type="Button"
                onClick={getMoreUnsplash}
              >
                <ArrowDownwardIcon style={{ fontSize: 50 }} />
              </IconButton>
            </GridListTile>
          </GridList>
        </Paper>
      )}
    </Fragment>
  );
};

export default withStyles(imageStyles)(UnplashUpload);
