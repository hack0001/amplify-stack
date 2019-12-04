import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "../dialogStyles";
import Paper from "@material-ui/core/Paper";
import { API, graphqlOperation } from "aws-amplify";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const BucketList = props => {
	const {
		setImageDialog,
		handleOnChange,
		imageAlt,
		value,
		tab,
		classes,
		imageAttribution,
		imageAttributionLink,
	} = props;

	const [bucketImages, setBucketImages] = useState([]);
	const limit = 8;
	const [token, setToken] = useState("");

	useEffect(() => {
		handleBucket(false);
	}, []);

	const handleBucket = async loadMore => {
		try {
			const isToken = loadMore && token ? `nextToken:"${token}",` : "";
			const selected = await API.graphql(
				graphqlOperation(`query ListImages{
					listImages(${isToken}limit:${limit})  
					{
						items{		
						id
						name
						description
						image
						category
						type
						size
						height
						width
						imageAttribution
						imageAttributionLink
						createdAt
						updatedAt
						}
						nextToken
					}
					}
			`),
			);
			if (!bucketImages[0]) {
				setBucketImages(selected.data.listImages.items);
			} else if (token) {
				const addBucketImages = bucketImages.concat(
					selected.data.listImages.items,
				);
				setBucketImages(addBucketImages);
			}
			setToken(selected.data.listImages.nextToken);
		} catch (err) {
			console.log("Error", err);
		}
	};

	const handleBucketImage = async tile => {
		await handleOnChange({
			[value]: tile.image,
			[imageAlt]: tile.name,
			[imageAttribution]: tile.imageAttribution,
			[imageAttributionLink]: tile.imageAttributionLink,
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
			{bucketImages.length >= 1 && (
				<Paper style={{ overflow: "hidden" }}>
					<GridList cellHeight={160} className={classes.gridList} cols={3}>
						{bucketImages.map((tile, index) => (
							<GridListTile
								key={index}
								onClick={e => handleBucketImage(tile)}
								cols={tile.cols || 1}
							>
								<img src={tile.image} alt={tile.name} />
							</GridListTile>
						))}
						<GridListTile style={{ textAlign: "center", paddingTop: 35 }}>
							{token && (
								<IconButton
									aria-label="More"
									style={{ fontSize: 25 }}
									size="large"
									type="Button"
									onClick={e => handleBucket(true)}
								>
									<ArrowDownwardIcon style={{ fontSize: 50 }} />
								</IconButton>
							)}
						</GridListTile>
					</GridList>
				</Paper>
			)}
			<DialogActions>
				<Button
					onClick={e => {
						setImageDialog(false);
					}}
					color="primary"
				>
					Cancel
				</Button>
			</DialogActions>
		</div>
	);
};

export default withStyles({ withTheme: true }, imageStyles)(BucketList);
