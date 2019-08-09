import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { articleStyle } from "../../styles/articleStyles";
import FormHelperText from "@material-ui/core/FormHelperText";

const ArticleSelect = props => {
  const {
    item,
    classes,
    selectValues,
    value,
    handleValueChange,
    text,
    helperText,
    name,
    overview
  } = props;

  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  return (
    <FormControl
      className={classes.formControl}
      style={{
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 25,
        width: item.width,
        display: item.layout
      }}
    >
      <InputLabel htmlFor={`${name}-helper`}>{text}</InputLabel>
      <Select
        value={value}
        onChange={e => {
          // if (name === "bulletHeadlines"){
          if (overview[0]["bulletHeadlines"] > e.target.value) {
            let bulletObject = { ...overview[0]["bulletHeadlinesDetails"] };
            range(e.target.value + 1, overview[0][`bulletHeadlines`]).map(
              bullet => delete bulletObject[`bulletHeadline${bullet}`]
            );
            handleValueChange({
              bulletHeadlinesDetails: bulletObject,
              [e.target.name]: e.target.value
            });
          } else {
            handleValueChange({
              [e.target.name]: e.target.value
            });
          }
        }}
        input={
          <Input name={name} style={{ width: "100%" }} id={`${name}-helper`} />
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {selectValues.map((val, index) => {
          return (
            <MenuItem value={val.type} key={index}>
              {val.name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(articleStyle)(ArticleSelect);
