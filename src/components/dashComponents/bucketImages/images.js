import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { useStyles } from "./styles/imageStyles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import BucketDialog from "./dialog/bucketDialog";

const BucketGridList = props => {
  const classes = useStyles();
  const [dialog, setDialog] = useState(false);
  const [data, setData] = useState(null);
  const { tileData, handleBucket, deleteBucket, updateBucket } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={240} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.image} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>size: {tile.size}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.name}`}
                  className={classes.icon}
                  onClick={e => {
                    setDialog(true);
                    setData(tile);
                  }}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
        <GridListTile style={{ textAlign: "center", paddingTop: 35 }}>
          <IconButton
            aria-label="More"
            style={{ fontSize: 25 }}
            size="large"
            type="Button"
            onClick={e => handleBucket(true)}
          >
            <ArrowDownwardIcon style={{ fontSize: 50 }} />
          </IconButton>
        </GridListTile>
      </GridList>
      <BucketDialog
        data={data}
        handleDialog={setDialog}
        deleteBucket={deleteBucket}
        updateBucket={updateBucket}
        dialog={dialog}
      />
    </div>
  );
};
export default BucketGridList;
