import React, { useState, Fragment, useEffect } from "react";
import { useStyles } from "./styles/imageStyles";
import Dialog from "@material-ui/core/Dialog";
import { selectLayout, layout } from "./bucketLayout";
import TextField from "@material-ui/core/TextField";
import Select from "./select";
import Tags from "./tags";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import INITIAL_STATE from "./initialState";

const BucketGridList = props => {
  const classes = useStyles();
  const { data, handleDialog, dialog, deleteBucket, updateBucket } = props;
  const [imageDetails, setImageDetails] = useState({ INITIAL_STATE });

  useEffect(() => {
    if (data)
      setImageDetails({
        ...data
      });
  }, [data]);

  const text = (item, index) => {
    return (
      <TextField
        key={index}
        autoFocus
        InputProps={{
          readOnly: item.readOnly
        }}
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
    <Dialog
      open={dialog}
      style={{ padding: 25 }}
      fullWidth={true}
      onClose={e => handleDialog(false)}
      aria-labelledby="form-dialog-title"
    >
      <div>
        <img
          style={{ margin: 35, width: "87%" }}
          src={imageDetails.image}
          alt={imageDetails.name}
        />
      </div>
      <div>
        {selectLayout.map((item, index) => {
          switch (item.type) {
            case "select":
              return select(item);
            default:
              return null;
          }
        })}
      </div>
      <div>
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
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          align="right"
          type="submit"
          style={{ float: "left", margin: 25 }}
          onClick={e => {
            updateBucket(imageDetails);
            handleDialog(false);
          }}
        >
          <SaveIcon className={classes.rightIcon} style={{ marginRight: 7 }} />
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={e => {
            deleteBucket(imageDetails);
            handleDialog(false);
          }}
          style={{ float: "right", margin: 25 }}
        >
          Delete
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </div>
    </Dialog>
  );
};
export default BucketGridList;
