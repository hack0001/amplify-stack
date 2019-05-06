import React, { Component, Fragment } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
class Thumbnail extends Component {
  render() {
    return (
      <Fragment>
        <h2>Hello Headlines</h2>
      </Fragment>
    );
  }
}

//   {value === 0 && (
//     <TabContainer>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="age-helper">Age</InputLabel>
//         <Select
//           value={this.state.age}
//           onChange={this.handleChange}
//           required
//           input={<Input name="age" id="age-helper" />}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//         <FormHelperText>Number of Questions</FormHelperText>
//       </FormControl>
//     </TabContainer>
//   )}

export default Thumbnail;
