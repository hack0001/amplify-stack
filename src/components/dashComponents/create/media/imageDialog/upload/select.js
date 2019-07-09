import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { imageStyles } from "../dialogStyles";

const UploadSelect = props => {
  const { classes, item, index, details, setItem } = props;
  const name = item.name;
  return (
    <FormControl
      className={classes.formControl}
      style={{ marginLeft: 35, width: item.width, display: item.layout }}
      key={index}
    >
      <InputLabel htmlFor={`${name}-helper`}>{item.label}</InputLabel>
      <Select
        value={details[item.name]}
        onChange={e => {
          const ext = e.target.value.split("/")[1];
          const newValue =
            item.name === "imageType" ? { imageExtension: ext } : null;
          setItem({
            ...details,
            [item.name]: e.target.value,
            ...newValue
          });
        }}
        input={
          <Input name={name} style={{ width: "100%" }} id={`${name}-helper`} />
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {item.values.map((val, index) => {
          return (
            <MenuItem value={val.type} key={index}>
              {val.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default withStyles(imageStyles)(UploadSelect);
