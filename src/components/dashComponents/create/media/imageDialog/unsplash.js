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
    imageAlt,
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
    handleOnChange({
      [value]: tile.urls.regular,
      [imageAlt]: tile.alt_description,
      [imageAttribution]: tile.user.name ? tile.user.name : "Unsplash",
      [imageAttributionLink]: tile.user.links.html
        ? tile.user.links.html
        : "https://unsplash.com/"
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
          onKeyDown={getUnsplash}
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
    </Fragment>
  );
};

export default withStyles(imageStyles)(UnplashUpload);
