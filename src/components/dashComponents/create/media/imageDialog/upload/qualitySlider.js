import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const useStyles = makeStyles({
  root: {
    width: "70%",
    padding: 20
  },
  input: {
    width: 42
  }
});

const InputSlider = props => {
  const { imageQuality, setImageQuality } = props;
  const classes = useStyles();
  const [sliderColor, setSliderColor] = useState("green");

  const handleSliderChange = (event, newValue) => {
    if (newValue <= 100 && newValue >= 70) {
      setSliderColor("green");
    } else if (newValue <= 69 && newValue >= 40) {
      setSliderColor("orange");
    } else {
      setSliderColor("red");
    }
    setImageQuality(newValue);
  };

  const handleInputChange = event => {
    setImageQuality(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    if (imageQuality < 0) {
      setImageQuality(0);
    } else if (imageQuality > 100) {
      setImageQuality(100);
    }
  };

  return (
    <div className={classes.root}>
      <Typography
        id="input-slider"
        style={{ marginLeft: 15, marginTop: 15 }}
        gutterBottom
      >
        Image Quality
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item />
        <Grid item xs>
          <Slider
            value={typeof imageQuality === "number" ? imageQuality : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={imageQuality}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            style={{ color: sliderColor }}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default InputSlider;
