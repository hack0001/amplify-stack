import React, { useRef, useState, useEffect } from "react";
import { Storage, API } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./profileStyles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import config from "../../aws-exports";
import uuid from "uuid/v4";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config;

const ProfilePic = props => {
  const {
    classes,
    s3Directory,
    userId,	
    handleChange,
    itemName,
    imageUrl
  } = props;
 

  const avatarWidth = 180;
  const avatarHeight = 180;
  const personIconHeight = 80;
  const personIconWidth = 80;
  const inputEl = useRef(null);
  const uploadImageEl = useRef(null);
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    setProfileImage(imageUrl);
  }, [imageUrl]);

  const filePath = `${s3Directory}/${userId}/public_profile/${uuid()}`;

  const uploadToBucket = async (file, width, height) => {
    try {
      await Storage.put(filePath, file, {
        contentType: file.type,
        cacheControl: "public, max-age=604800",
        expires: Date.now() + 60 * 60 * 24 * 7,
        level: "public"
      });

      const imageUpdate = `https://${bucket}.s3.${region}.amazonaws.com/public/${filePath}`;
      handleChange({ name: itemName, value: imageUpdate });
      console.log("IMAGE UPDATE", imageUpdate);
      setProfileImage(imageUpdate);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const uploadImage = async e => {
    const imageFile = e.target.files[0];
    const imageQualityRound = 100;

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = event => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const widthRatio = 1.785;
        const MAX_WIDTH = 180;
        const MAX_HEIGHT = 180;
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
            const file = new File([blob], `profile_pic`, {
              type: imageFile.type,
              lastModified: Date.now()
            });
            uploadToBucket(file, width, height);
          },
          imageFile.type,
          imageQualityRound
        );
      };
      reader.onerror = error => console.log(error);
    };
  };

  return (
    <Avatar
      className={classes.avatar}
      style={{ width: avatarWidth, height: avatarHeight, margin: "0 auto" }}
      onClick={e => inputEl.current.click()}
    >
      <input
        style={{ display: "none" }}
        onChange={uploadImage}
        type="file"
        accept="image/*"
        ref={inputEl}
        multiple
      />
      {!profileImage && (
        <PersonIcon
          style={{
            margin: 0,
            width: personIconWidth,
            height: personIconHeight
          }}
        />
      )}
      {profileImage && <img src={profileImage} alt={""} />}
      <div style={{ display: "none" }}>
        <canvas ref={uploadImageEl} />
      </div>
    </Avatar>
  );
};

export default withStyles(styles, { withTheme: true })(ProfilePic);
