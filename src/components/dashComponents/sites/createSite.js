import React, { Fragment } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { createStyles } from "./styles/siteStyles";
import useFormValidation from "./form/useFormValidation";
import validateAuth from "./form/validateForm";
import { createSite } from "./graphql/siteGraphql";
import { TabContainer } from "../../tabs/tabContainer";

const INITIAL_STATE = {
  name: "",
  type: "",
  description: ""
};

const textFieldTypes = [
  {
    label: "Name",
    type: "name"
  },
  {
    label: "Type",
    type: "type"
  },
  {
    label: "Description",
    type: "description"
  }
];

const CreateSite = props => {
  const { classes, theme, push } = props;
  const { handleChange, values } = useFormValidation(
    INITIAL_STATE,
    validateAuth
  );

  const handleAddProject = async event => {
    event.preventDefault();
    try {
      await API.graphql(graphqlOperation(createSite, { input: values }));
      push("/sites");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const textFields = ({ label, type }, index) => {
    return (
      <TextField
        key={index}
        label={`${label}`}
        className={classes.textField}
        value={values[type]}
        onChange={handleChange}
        margin="normal"
        name={`${type}`}
      />
    );
  };

  return (
    <Fragment>
      <TabContainer dir={theme.direction}>
        <form onSubmit={handleAddProject}>
          {textFieldTypes.map((field, index) => {
            return textFields(field, index);
          })}
          <div style={{ padding: 8 * 3, margin: "10px 1px 5px 1px" }}>
            <Button
              variant="contained"
              color="primary"
              align="right"
              className={classes.button}
              type="submit"
            >
              <SaveIcon className={classes.rightIcon} />
              Create
            </Button>
          </div>
        </form>
      </TabContainer>
    </Fragment>
  );
};

export default withStyles(createStyles, { withTheme: true })(CreateSite);
