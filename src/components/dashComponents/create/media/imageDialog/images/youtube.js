import React, { useState, useRef } from "react";
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
import { API, graphqlOperation, Storage } from "aws-amplify";
import { formatBytes } from "../upload/formatBytes";
import config from "../../../../../../aws-exports";
import { createImage } from "../graphql/uploadImages";
import { clean, cleanup, getMark } from "../clean";
const {
	aws_user_files_s3_bucket_region: region,
	aws_user_files_s3_bucket: bucket,
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
		s3Directory,
		setLoading,
	} = props;
	const [validImage, setValidImage] = useState(true);
	const [youtubeUrl, setYoutubeUrl] = useState("");
	const uploadYoutubeImageEl = useRef(null);
	const limit = 10;
	const [page, setPage] = useState(1);
	const [youtubeImages, setYoutubeImages] = useState([]);
	const [nextToken, setNextToken] = useState("");
	const [message, setMessage] = useState("");
	const defaultExt = "jpg";

	const uploadToBucket = async (file, width, height, tile, name) => {
		const channelId = tile.snippet.channelId;
		try {
			const listImages = await Storage.list(`${s3Directory}/`);
			const filePath = `${s3Directory}/${name}-${Date.now()}.${defaultExt}`;
			if (listImages.filter(e => e.key === filePath).length > 0) {
				setMessage("Image Already Exists In Bucket - Please Choose Another");
				return;
			}

			await Storage.put(filePath, file, {
				contentType: file.type,
				cacheControl: "public, max-age=604800",
				expires: Date.now() + 60 * 60 * 24 * 7,
				level: "public",
			});

			const imageUpdate = `https://${bucket}.s3.${region}.amazonaws.com/public/${filePath}`;
			const channelLink = `https://www.youtube.com/channel/${channelId}`;
			const imageDesc = cleanup(youtubeUrl);
			const uploadImageApi = {
				name: cleanup(name),
				description: imageDesc,
				image: imageUpdate,
				category: file.type,
				type: file.type,
				size: formatBytes(file.size),
				height: Math.round(height),
				width: Math.round(width),
				tags: [imageDesc],
				imageAttribution: tile.snippet.channelTitle,
				imageAttributionLink: channelLink,
				access: "public",
			};

			clean(uploadImageApi);
			await API.graphql(
				graphqlOperation(createImage, { input: uploadImageApi }),
			);
			await handleOnChange({
				[value]: imageUpdate,
				[imageAlt]: imageDesc,
				[imageAttribution]: tile.snippet.channelTitle
					? tile.snippet.channelTitle
					: "Youtube",
				[imageAttributionLink]: channelId
					? channelLink
					: "https://youtube.com/",
				[`${value}-embed`]: false,
			});
			setImageDialog(false);
			setLoading(false);

			setMessage("Success! Click again for another Image");
		} catch (err) {
			console.log("Error", err);
			setLoading(false);

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

		const url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=${limit}&q=${searchTerm}&key=${process.env.REACT_APP_GOOGLE_ACCESS_KEY}&pageToken=${nextToken}`;

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

			const url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=${limit}&q=${searchTerm}&key=${process.env.REACT_APP_GOOGLE_ACCESS_KEY}`;
			try {
				const youtubeResult = await axios.get(url, {
					crossdomain: true,
					crossorigin: true,
				});
				setYoutubeImages(youtubeResult.data.items);
				setNextToken(youtubeResult.data.nextPageToken);
			} catch (err) {
				console.log("Error getting Youtube Images", err);
			}
		}
	};

	const handleYoutube = async tile => {
		setMessage("");
		setLoading(true);
		const tileShort = tile.snippet;
		const newNameUpload = tileShort.title
			? cleanup(tileShort.title)
			: "YoutubeImage" + Date.now();
		const videoId = tile.id.videoId ? tile.id.videoId : tile.snippet.channelId;

		//check out https://github.com/Rob--W/cors-anywhere/ to create own CORS proxy if alot of traffic
		const proxyUrl = "https://cors-anywhere.herokuapp.com/";

		const maxRes = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
		try {
			const imageFile = await axios.get(proxyUrl + maxRes, {
				crossdomain: true,
				headers: { "Access-Control-Allow-Origin": "*" },
				responseType: "blob",
			});
			const blob = new Blob([imageFile.data], {
				type: `image/${defaultExt}`,
			});

			const reader = new FileReader();
			reader.readAsDataURL(blob);

			reader.onload = event => {
				if (event.target.readyState === 2) {
					const img = new Image();
					img.src = event.target.result;

					img.onload = imageInfo => {
						if (imageInfo.path[0].width < 130) {
							setMessage("Image Not Available - Please Choose Another");
							setLoading(false);
							return;
						}

						const widthRatio = 1.785;
						const MAX_WIDTH = 1065;

						const MAX_HEIGHT = 1065;
						let width = img.width;
						let height = img.height;

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
						ctx.drawImage(img, 0, 0, width, height);
						ctx.canvas.toBlob(
							blob => {
								const file = new File([blob], `${defaultExt}`, {
									type: `image/${defaultExt}`,
									lastModified: Date.now(),
								});

								uploadToBucket(file, width, height, tile, newNameUpload);
							},
							`image/${defaultExt}`,
							100,
						);
					};
					reader.onerror = error => console.log(error);
				}
			};
		} catch (err) {
			console.log(err);
			setMessage("Image Not Available - Please Choose Another");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
			}}
		>
			{" "}
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
						handleOnChange({ [value]: youtubeUrl, [`${value}-embed`]: false });
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
		</div>
	);
};

export default withStyles(imageStyles)(YouTube);
