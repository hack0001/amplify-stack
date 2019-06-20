import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import EnhancedTableHead from "./tableHead";
import { dataStyles } from "../styles/taskStyles";
import { withStyles } from "@material-ui/core/styles";
import WhiteBoardDrawer from "../taskContent/whiteboardDrawer";

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => desc(a, b, "name")
    : (a, b) => -desc(a, b, "name");
};

const EnhancedTable = props => {
  const [drawer, setDrawer] = useState(false);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("createdAt");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [taskId, setTaskId] = useState("");
  const {
    classes,
    data,
    setTaskValues,
    taskValues,
    handleSubmit,
    handleChange,
    setDelete,
    setSelected,
    selected
  } = props;

  const handleRequestSort = (event, property) => {
    const orderByNew = property;
    let orderNew = "desc";

    if (orderBy === property && order === "desc") {
      orderNew = "asc";
    }
    setOrder(orderNew);
    setOrderBy(orderByNew);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const handleDrawClose = event => {
    setDrawer(false);
  };

  const status = status => {
    switch (status) {
      case "APPROVED":
        return { backColorStatus: "#15CD72", colorStatus: "white" };
      case "COMPLETED":
        return { backColorStatus: "#15CD72", colorStatus: "white" };
      case "OPEN-APPROVED":
        return { backColorStatus: "#15CD72", colorStatus: "white" };
      case "REJECTED":
        return { backColorStatus: "#ED4F32", colorStatus: "white" };
      case "HELP":
        return { backColorStatus: "#EDE04D", colorStatus: "white" };
      case "PENDING-APPROVAL":
        return { backColorStatus: "#EDE04D", colorStatus: "white" };
      default:
        return;
    }
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const color = status(n.status);

                return (
                  <TableRow hover key={n.id}>
                    <TableCell component="th" scope="row" padding="default">
                      {n.id}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="default">
                      {n.title}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="default">
                      {n.category}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        backgroundColor: color.backColorStatus,
                        padding: 5,
                        textAlign: "center",
                        color: color.colorStatus,
                        fontSize: 18
                      }}
                    >
                      {n.status}
                    </TableCell>
                    <TableCell align="right" padding="none">
                      {n.createdAt}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="medium"
                        color="primary"
                        className={classes.button}
                        onClick={e => {
                          setTaskId(n.id);
                          setDrawer(true);
                        }}
                      >
                        <EditIcon className={classes.icon} />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <WhiteBoardDrawer
        drawer={drawer}
        drawFunc={handleDrawClose}
        setTaskValues={setTaskValues}
        taskValues={taskValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setDelete={setDelete}
        selected={taskId}
        setSelected={setSelected}
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dataStyles)(EnhancedTable);
