

const ImageReader = tile => {
		  console.log("TILE",tile)
	const request = new XMLHttpRequest();
	request.open('GET', tile.webformatUrl, true);
	request.responseType = 'blob';
	request.onload = function() {
		var reader = new FileReader();
		reader.readAsDataURL(request.response);
		reader.onload =  function(e){
			console.log('DataURL:', e.target.result);

			const file = new File([e.target.result], `jpg`, {
						type: `image`,
						lastModified: Date.now()
						});
		console.log("FILE",file)



		};
	};
	request.send();
}

export { ImageReader };


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


