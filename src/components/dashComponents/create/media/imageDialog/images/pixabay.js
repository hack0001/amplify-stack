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

const PixaBay = props => {
	const {
		setImageDialog,
		handleOnChange,
		value,
		classes,
		imageAlt,
		imageAttribution,
		imageAttributionLink,
		s3Directory,
	} = props;
	const [validImage, setValidImage] = useState(true);
	const [pixabayUrl, setPixabayUrl] = useState("");
	const uploadImageEl = useRef(null);
	const photosPerPage = 10;
	const [page, setPage] = useState(1);
	const [pixabayImages, setPixabayImages] = useState([]);
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
				level: "public",
			});

			const imageUpdate = `https://${bucket}.s3.${region}.amazonaws.com/public/${filePath}`;

			const uploadImageApi = {
				name: cleanup(name),
				description: cleanup(pixabayUrl),
				image: imageUpdate,
				category: tile.type,
				type: file.type,
				size: formatBytes(file.size),
				height: Math.round(height),
				width: Math.round(width),
				tags: [tile.tags],
				imageAttribution: tile.user,
				imageAttributionLink: tile.pageURL,
				access: "public",
			};

			clean(uploadImageApi);
			await API.graphql(
				graphqlOperation(createImage, { input: uploadImageApi }),
			);
			await handleOnChange({
				[value]: imageUpdate,
				[imageAlt]: pixabayUrl,
				[imageAttribution]: tile.user ? tile.user : "Pixbay",
				[imageAttributionLink]: tile.userImageURL
					? tile.userImageURL
					: "https://pixabay.com/",
				[`${value}-embed`]: false,
			});
			setImageDialog(false);
			setMessage("Success! Click again for another Image");
		} catch (err) {
			console.log("Error", err);
			setMessage("Uh oh! Something went wrong please try again");
		}
	};

	const getMorePixabay = async () => {
		const updatePage = page + 1;
		setPage(updatePage);

		let searchTerm = pixabayUrl
			.trim()
			.replace(/\s/g, "+")
			.toLowerCase();

		const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_ACCESS_KEY}&q=${searchTerm}&page=${updatePage}&per_page=${photosPerPage}`;

		try {
			const pixabayResult = await axios.get(url, { crossdomain: true });
			if (!pixabayImages[0]) {
				setPixabayImages(pixabayResult.data.hits);
			} else {
				const addPixabayImages = pixabayImages.concat(pixabayResult.data.hits);
				setPixabayImages(addPixabayImages);
			}
		} catch (err) {
			console.log("Error getting Pixabay Images", err);
		}
	};

	const getPixabay = async e => {
		const value = e.target.value;
		setPixabayUrl(value);
		if (e.keyCode === 13 && pixabayUrl.length > 1) {
			let searchTerm = value
				.trim()
				.replace(/\s/g, "+")
				.toLowerCase();

			const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_ACCESS_KEY}&q=${searchTerm}&page=${page}&per_page=${photosPerPage}`;

			try {
				const pixabayResult = await axios.get(url, { crossdomain: true });
				setPixabayImages(pixabayResult.data.hits);
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
						lastModified: Date.now(),
					});
					uploadToBucket(file, width, height, tile, newNameUpload, mark);
				},
				`image/${mark}`, // imageType,
				100, // imageQualityRound
			);
		};
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
					value={pixabayUrl}
					onChange={getPixabay}
					onKeyDown={getPixabay}
					margin="dense"
					id="pixabay"
					label="Search Pixabay"
					type="pixabay"
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
						setPixabayUrl("");
					}}
					color="primary"
				>
					Cancel
				</Button>
				<Button
					disabled={validImage}
					onClick={e => {
						handleOnChange({ [value]: pixabayUrl, [`${value}-embed`]: false });
						setImageDialog(false);
					}}
					color="primary"
				>
					Add
				</Button>
			</DialogActions>

			{pixabayImages.length > 1 && (
				<Paper style={{ overflow: "hidden" }}>
					<GridList cellHeight={160} className={classes.gridList} cols={3}>
						{pixabayImages.map((tile, index) => (
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
		</div>
	);
};

export default withStyles(imageStyles)(PixaBay);
