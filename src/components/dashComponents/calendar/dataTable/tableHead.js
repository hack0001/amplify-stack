import React, { Component } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";

const rows = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID"
  },
  {
    label: "Event Name",
    id: "eventName",
    numeric: false,
    disablePadding: false
  },
  {
    label: "Year",
    id: "year",
    numeric: true,
    disablePadding: false
  },
  {
    label: "Month",
    id: "month",
    numeric: true,
    disablePadding: false
  },
  {
    label: "Day",
    id: "day",
    numeric: true,
    disablePadding: false
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
