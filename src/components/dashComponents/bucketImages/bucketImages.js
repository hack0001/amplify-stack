import React, { useState, useEffect, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles/imageStyles";
import { API, graphqlOperation, Storage } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import Snack from "./bucketSnack";
import ImageList from "./images";

const BucketList = props => {
  const [bucketImages, setBucketImages] = useState([]);
  const [snack, setSnack] = useState(false);
  const limit = 8;
  const [token, setToken] = useState("");
  const s3Directory = "allImages";

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
					tags
					}
				nextToken
			}
			}
			`)
      );

      if (!bucketImages[0]) {
        setBucketImages(selected.data.listImages.items);
      } else {
        const addBucketImages = bucketImages.concat(
          selected.data.listImages.items
        );
        setBucketImages(addBucketImages);
      }
      setToken(selected.data.listImages.nextToken);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const deleteBucketImage = async image => {
    const lastName = image.image.match(/([^\/]*)\/*$/)[1];
    try {
      await API.graphql(
        graphqlOperation(
          `mutation DeleteImage($input:DeleteImageInput!){
        		deleteImage(input:$input)
        		{
        			id
        			name
        			description
        			image
        			category
        			type
        		}
        	}
        	`,
          { input: { id: image.id } }
        )
      );

      const filteredBucketImages = bucketImages.filter(
        item => item.id !== image.id
      );
      const filePath = `${s3Directory}/${lastName}`;
      await Storage.remove(filePath);
      setBucketImages(filteredBucketImages);
      setSnack(true);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const cleanup = name => {
    return name
      .trim()
      .replace(/\s/g, "_")
      .toLowerCase();
  };

  const updateBucketImage = async image => {
    const cleanImage = { ...image, name: cleanup(image.name) };
    try {
      await API.graphql(
        graphqlOperation(
          `mutation UpdateImage($input:UpdateImageInput!){
          		updateImage(input:$input)
          		{
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
      				tags
          		}
          	}
          	`,
          { input: cleanImage }
        )
      );
      const objIndex = bucketImages.findIndex(obj => obj.id === cleanImage.id);
      bucketImages[objIndex] = cleanImage;
      setBucketImages(bucketImages.slice());
      setSnack(true);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <Fragment>
      {!bucketImages[0] && <LinearProgress />}
      {bucketImages[0] && (
        <ImageList
          handleBucket={handleBucket}
          deleteBucket={deleteBucketImage}
          tileData={bucketImages}
          updateBucket={updateBucketImage}
        />
      )}
      <Snack open={snack} closeFunc={setSnack} />
    </Fragment>
  );
};

export default withStyles({ withTheme: true }, styles)(BucketList);
