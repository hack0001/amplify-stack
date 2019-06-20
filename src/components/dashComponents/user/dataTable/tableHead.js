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
    label: "Name",
    id: "alias",
    numeric: false,
    disablePadding: false
  },
  {
    label: "Username",
    id: "username",
    numeric: false,
    disablePadding: false
  },
  {
    label: "Website",
    id: "website",
    numeric: false,
    disablePadding: false
  },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Created At"
  }

  //   {
  //     label: "Name",
  //     id: "name",
  //     numeric: false,
  //     disablePadding: false
  //   },

  //   {
  //     label: "Phone Number",
  //     id: "phone",
  //     numeric: false,
  //     disablePadding: false
  //   },
  //   {
  //     label: "Last Logged In",
  //     id: "lastLogged",
  //     numeric: false,
  //     disablePadding: false
  //   },
  //   {
  //     label: "Facebook Profile Link",
  //     id: "facebookLink",
  //     numeric: false,
  //     disablePadding: false
  //   },
  //   {
  //     label: "Twitter Profile Link",
  //     id: "twitterLink",
  //     numeric: false,
  //     disablePadding: false
  //   },
  //   {
  //     label: "Instagram Profile Link",
  //     id: "instagramLink",
  //     numeric: false,
  //     disablePadding: false
  //   },
  //   {
  //     label: "Image Link",
  //     id: "imageLink",
  //     numeric: false,
  //     disablePadding: false
  //   },
  //   {
  //     label: "Number of Posts",
  //     id: "numberPosts",
  //     numeric: false,
  //     disablePadding: false
  //   },
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
