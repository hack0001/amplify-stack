import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "../../styles/slideStyles";

const SlideCards = props => {
  const {
    selectValues,
    value,
    handleValueChange,
    text,
    helperText,
    name
  } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} style={{ width: "100%" }}>
      <InputLabel htmlFor={`${name}-helper`}>{text}</InputLabel>
      <Select
        value={value}
        onChange={e =>
          handleValueChange({
            [e.target.name]: e.target.value
          })
        }
        input={<Input name={name} id={`${name}-helper`} />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {selectValues.map((val, index) => {
          return (
            <MenuItem value={val.name} key={index}>
              {val.name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SlideCards;
