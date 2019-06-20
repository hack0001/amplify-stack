import React, { Component } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";

const rows = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID"
  },
  { id: "name", numeric: false, disablePadding: false, label: "Site Name" },
  {
    id: "descripion",
    numeric: false,
    disablePadding: false,
    label: "Description"
  },
  { id: "type", numeric: false, disablePadding: false, label: "Type" },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Created At"
  }
];

class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
