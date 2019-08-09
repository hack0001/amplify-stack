import React, { Fragment, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "../dialogStyles";
import { Storage, API, graphqlOperation } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import Select from "./select";
import QualitySlider from "./qualitySlider";
import Typography from "@material-ui/core/Typography";
import { layout, selectLayout } from "./uploadLayout";
import { formatBytes } from "./formatBytes";
import Tags from "./tags";
import config from "../../../../../../aws-exports";
const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;
const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
		id
  		name
  		description
  		image
  		category
  		type
  		size
  		height
  		width
  		createdAt
  		updatedAt
  }
}
`;

const Upload = props => {
  const {
    setImageDialog,
    handleOnChange,
    value,
    s3Directory,
    imageAlt,
    imageAttributionLink
  } = props;

  const inputEl = useRef(null);
  const imageEl = useRef(null);
  const imageContainerEl = useRef(null);
  const uploadImageEl = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("Upload");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [imageQuality, setImageQuality] = useState(75);
  const [imageDetails, setImageDetails] = useState({
    imageName: "",
    imageDescription: "",
    imageType: "",
    imageExtension: "",
    imageFileSize: "",
    imageCategory: "",
    imageAttribution: "",
    imageAttributionLink: "",
    imageTags: []
  });

  const cleanup = name => {
    return name
      .trim()
      .replace(/\s/g, "_")
      .toLowerCase();
  };
  const getMark = name => {
    const re = /(?:\.([^.]+))?$/;
    return re.exec(name);
  };

  const clean = values => {
    Object.keys(values).forEach(key => {
      (values[key] === null || values[key] === "") && delete values[key];
    });
  };

  const uploadToBucket = async (file, width, height) => {
    try {
      const listImages = await Storage.list(`${s3Directory}/`);

      const filePath = `${s3Directory}/${imageDetails.imageName}.${
        imageDetails.imageExtension
      }`;
      if (listImages.filter(e => e.key === filePath).length > 0) {
        setMessage("File Name Already Exists - Please Change");
        setLoading(false);
        return;
      }
      await Storage.put(filePath, file, {
        contentType: file.type,
        cacheControl: "public, max-age=604800",
        expires: Date.now() + 60 * 60 * 24 * 7,
        level: "public"
      });

      const imageUpdate = `https://${bucket}.s3.${region}.amazonaws.com/public/${filePath}`;
      handleOnChange({ [value]: imageUpdate });

      const uploadImageApi = {
        name: cleanup(imageDetails.imageName),
        description: imageDetails.imageDescription,
        image: imageUpdate,
        category: imageDetails.imageCategory,
        type: file.type,
        size: formatBytes(file.size),
        height: Math.round(height),
        width: Math.round(width),
        tags: imageDetails.imageTags,
        imageAttribution: imageDetails.imageAttribution,
        imageAttributionLink: imageDetails.imageAttributionLink,
        access: "public"
      };
      clean(uploadImageApi);
      await API.graphql(
        graphqlOperation(createImage, { input: uploadImageApi })
      );

      setLoading(false);
      setMessage("Success! Click again for another Image");
    } catch (err) {
      console.log("Error", err);
      setMessage("Uh oh! Something went wrong please try again");
    }
  };

  const uploadImage = async () => {
    setLoading(true);
    setMessage("");

    const nameCleanup = cleanup(imageDetails.imageName);

    if (!imageDetails.imageExtension) {
      setMessage("Please set a file extension");
      setLoading(false);
      return;
    }

    const imageFileName = imageDetails.imageName.split(".")[0];
    if (imageFileName === "") {
      setMessage("Please enter a file Name");
      setLoading(false);
      return;
    }

    const imageMarker = imageDetails.imageType
      ? imageDetails.imageType
      : `image/${imageDetails.imageExtension}`;
    const imageExtension = imageDetails.imageType
      ? imageDetails.imageType.split("/")[1]
      : imageDetails.imageExtension;
    const nameExt =
      nameCleanup.substr(0, nameCleanup.lastIndexOf(".")) +
      `.${imageExtension}`;

    setImageDetails({
      ...imageDetails,
      imageExtension: imageExtension
    });

    const imageQualityRound = Math.round(imageQuality / 10) / 10;
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = event => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
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
            const file = new File([blob], `${nameExt}`, {
              type: `${imageMarker}`,
              lastModified: Date.now()
            });
            uploadToBucket(file, width, height);
            const fileSize = formatBytes(file.size);
            setImageDetails({ ...imageDetails, imageFileSize: fileSize });
          },
          imageDetails.imageType,
          imageQualityRound
        );
      };
      reader.onerror = error => console.log(error);
    };
  };

  const resizeImage = async e => {
    setImage(true);
    setMessage("");
    const fileName = e.target.files[0].name;
    setImageFile(e.target.files[0]);

    const nameCleanup = cleanup(fileName);
    const nameNoExt = nameCleanup.replace(/\.[^/.]+$/, "");
    const mark = getMark(nameCleanup)[1];

    setImageDetails({
      ...imageDetails,
      imageExtension: mark,
      imageName: nameNoExt
    });

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = event => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const elem = imageEl.current;
        const containerRef = imageContainerEl.current;
        elem.width = containerRef.clientWidth;
        elem.height = containerRef.clientWidth * (img.height / img.width);
        const ctx = elem.getContext("2d");
        // img.width and img.height will contain the original dimensions
        const middleWidth = containerRef.clientWidth / 2 - elem.width / 2 / 2;
        const middleHeight =
          elem.height / 2 - ((elem.width / 2) * (img.height / img.width)) / 2;
        ctx.drawImage(
          img,
          middleWidth,
          middleHeight,
          elem.width / 2,
          (elem.width / 2) * (img.height / img.width)
        );
      };
      reader.onerror = error => console.log(error);
    };
  };

  const text = (item, index) => {
    return (
      <TextField
        key={index}
        autoFocus
        autoComplete="off"
        name={item.name}
        value={imageDetails[item.name]}
        onChange={e =>
          setImageDetails({ ...imageDetails, [item.name]: e.target.value })
        }
        margin="dense"
        id={item.name}
        label={item.label}
        type="text"
        style={{
          width: item.width,
          marginLeft: 35,
          marginBottom: 5,
          marginTop: 30
        }}
      />
    );
  };

  const select = (item, index) => {
    return (
      <Select
        item={item}
        details={imageDetails}
        setItem={setImageDetails}
        index={index}
      />
    );
  };

  const tags = (item, index) => {
    return (
      <Fragment key={index}>
        <Tags
          name={item.name}
          label={item.label}
          handleOnChange={setImageDetails}
          values={imageDetails}
          tagArray={item.tagArray}
          index={index}
        />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {loading && <LinearProgress />}
      <DialogContent style={{ textAlign: "center", marginTop: 25 }}>
        <input
          style={{ display: "none" }}
          onChange={resizeImage}
          type="file"
          accept="image/*"
          ref={inputEl}
          multiple
        />
        <Button onClick={e => inputEl.current.click()} color="secondary">
          {message}
        </Button>
      </DialogContent>
      {image && (
        <div ref={imageContainerEl}>
          {selectLayout.map((item, index) => {
            switch (item.type) {
              case "select":
                return select(item);
              default:
                return null;
            }
          })}

          {imageDetails.imageExtension === "jpeg" && (
            <QualitySlider
              imageQuality={imageQuality}
              setImageQuality={setImageQuality}
            />
          )}
          {layout.map((item, index) => {
            switch (item.type) {
              case "text":
                return text(item);
              case "tags":
                return tags(item, index);
              default:
                return null;
            }
          })}
          <div>
            <canvas ref={imageEl} />
          </div>
          <div style={{ display: "none" }}>
            <canvas ref={uploadImageEl} />
          </div>
        </div>
      )}
      {imageDetails.imageFileSize && (
        <Typography
          variant="body2"
          style={{ textAlign: "center" }}
          color="textSecondary"
          component="p"
        >
          Upload Size: {imageDetails.imageFileSize}
        </Typography>
      )}
      <DialogActions>
        <Button
          onClick={e => {
            setImageDialog(false);
            setImageDetails({ ...imageDetails, imageFileSize: "" });
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button disabled={false} onClick={e => uploadImage()} color="primary">
          Add
        </Button>
      </DialogActions>
    </Fragment>
  );
};

export default withStyles(imageStyles)(Upload);
