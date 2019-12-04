import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "../dialogStyles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const GiphyUpload = props => {
	const {
		setImageDialog,
		handleOnChange,
		value,
		classes,
		imageAttribution,
		imageAttributionLink,
	} = props;
	const [validImage, setValidImage] = useState(true);
	const [giphyUrl, setGiphyUrl] = useState("");
	const limit = 8;
	const [offset, setOffset] = useState(0);
	const [giphyImages, setGiphyImages] = useState([]);

	const getMoreGiphy = async () => {
		const offsetGiphy = offset + limit;
		setOffset(offsetGiphy);

		let searchTerm = giphyUrl
			.trim()
			.replace(/\s/g, "+")
			.toLowerCase();

		const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.REACT_APP_GIPHY_API}&limit=${limit}&offset=${offsetGiphy}&lang=en`;

		try {
			const giphyResult = await axios.get(url, { crossdomain: true });
			if (!giphyImages[0]) {
				setGiphyImages(giphyResult.data.data);
			} else {
				const addGiphyImages = giphyImages.concat(giphyResult.data.data);
				setGiphyImages(addGiphyImages);
			}
		} catch (err) {
			console.log("Error getting Giphy", err);
		}
	};

	const getGiphy = async e => {
		const value = e.target.value;
		setGiphyUrl(value);

		if (value === "") return;

		let searchTerm = value
			.trim()
			.replace(/\s/g, "+")
			.toLowerCase();

		const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.REACT_APP_GIPHY_API}&limit=${limit}&offset=${offset}&lang=en`;

		try {
			const giphyResult = await axios.get(url, { crossdomain: true });
			setGiphyImages(giphyResult.data.data);
		} catch (err) {
			console.log("Error getting Giphy", err);
		}
	};

	const handleGiphy = async tile => {
		await handleOnChange({
			[value]: tile.images.downsized.url,
			[imageAttribution]: "Giphy",
			[imageAttributionLink]: tile.bitly_gif_url,
			[`${value}-embed`]: false,
		});

		setImageDialog(false);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
			}}
		>
			<DialogContent>
				<TextField
					autoFocus
					autoComplete="off"
					value={giphyUrl}
					onChange={getGiphy}
					margin="dense"
					id="giphy"
					label="Search Giphy"
					type="giphy"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={e => {
						setImageDialog(false);
						setGiphyUrl("");
					}}
					color="primary"
				>
					Cancel
				</Button>
				<Button
					disabled={validImage}
					onClick={e => {
						handleOnChange({ [value]: giphyUrl, [`${value}-embed`]: false });
						setImageDialog(false);
					}}
					color="primary"
				>
					Add
				</Button>
			</DialogActions>
			{giphyImages.length > 1 && (
				<Paper style={{ overflow: "hidden" }}>
					<GridList cellHeight={160} className={classes.gridList} cols={3}>
						{giphyImages.map((tile, index) => (
							<GridListTile
								key={index}
								onClick={e => handleGiphy(tile)}
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
								onClick={getMoreGiphy}
							>
								<ArrowDownwardIcon style={{ fontSize: 50 }} />
							</IconButton>
						</GridListTile>
					</GridList>
				</Paper>
			)}
		</div>
	);
};

export default withStyles(imageStyles)(GiphyUpload);
