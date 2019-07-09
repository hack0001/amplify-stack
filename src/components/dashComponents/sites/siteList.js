import React, { Fragment, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listSites } from "../../../graphql/queries";
import { withStyles } from "@material-ui/core/styles";
import DataTable from "./dataTable/dataTable";
import { styles } from "./styles/siteStyles";

const header = ["Site Name", "Created At", "ID"];

const SiteList = props => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    handleSite();
  }, []);

  const handleSite = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(listSites));
      setSites(data.listSites.items);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return (
    <Fragment>
      <DataTable header={header} data={sites} />
    </Fragment>
  );
};

export default withStyles(styles)(SiteList);
