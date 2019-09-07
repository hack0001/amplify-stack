import React, { Component } from "react";
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
import { dataStyles } from "../styles/homeStyles";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
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

class EnhancedTable extends Component {
	state = {
		order: "asc",
		orderBy: "createdAt",
		selected: [],
		page: 0,
		rowsPerPage: 10,
	};

	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = "desc";

		if (this.state.orderBy === property && this.state.order === "desc") {
			order = "asc";
		}

		this.setState({ order, orderBy });
	};

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};

	status = status => {
		return status ? "#15CD72" : "#ED4F32";
	};

	render() {
		const { classes, data, type } = this.props;
		const { order, orderBy, selected, rowsPerPage, page } = this.state;
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
							onRequestSort={this.handleRequestSort}
							rowCount={data.length}
						/>
						<TableBody>
							{stableSort(data, getSorting(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map(n => {
									const devColor = this.status(n.development);
									const prodColor = this.status(n.production);
									return (
										<TableRow hover key={n.id}>
											<TableCell component="th" scope="row" padding="default">
												{n.name}
											</TableCell>
											<TableCell component="th" scope="row" padding="default">
												{n.description}
											</TableCell>
											<TableCell component="th" scope="row" padding="default">
												{n.category}
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													backgroundColor: devColor,
													padding: 5,
													textAlign: "center",
													color: "white",
													fontSize: 18,
												}}
												padding="default"
											>
												{n.development ? "True" : "False"}
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													backgroundColor: prodColor,
													padding: 5,
													textAlign: "center",
													color: "white",
													fontSize: 18,
												}}
												padding="default"
											>
												{n.production ? "True" : "False"}
											</TableCell>
											<TableCell align="right" style={{ paddingRight: 15 }}>
												{moment(n.createdAt).fromNow()}
											</TableCell>
											<TableCell>
												<Link
													style={{ textDecoration: "none" }}
													to={`home/development/${type}/${n.id}`}
												>
													<Button
														variant="outlined"
														size="medium"
														color="primary"
														className={classes.button}
													>
														<EditIcon className={classes.icon} />
														Dev
													</Button>
												</Link>
											</TableCell>
											{!n.production && (
												<TableCell>
													<Link
														style={{ textDecoration: "none" }}
														to={`home/production/${type}/${n.id}`}
													>
														<Button
															variant="outlined"
															size="medium"
															color="secondary"
															className={classes.button}
														>
															<EditIcon className={classes.icon} />
															Prod
														</Button>
													</Link>
												</TableCell>
											)}
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
				<TablePagination
					rowsPerPageOptions={[5, 10, 15, 20, 25]}
					component="div"
					count={data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						"aria-label": "Previous Page",
					}}
					nextIconButtonProps={{
						"aria-label": "Next Page",
					}}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</Paper>
		);
	}
}

EnhancedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(dataStyles)(EnhancedTable);
