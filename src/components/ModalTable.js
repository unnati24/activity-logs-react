import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    fontSize: "15px",
    fontWeight: 500,
    fontFamily: "Rowdies, cursive",
  },
}));

const ModalTable = (props) => {
  const { filterData } = props;
  const classes = useStyles();

  return filterData.map((data) => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableHead}>
              Start Time
            </TableCell>
            <TableCell align="center" className={classes.tableHead}>
              End Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={data.id}>
            <TableCell component="th" scope="row" align="center">
              {data.start_time.split(" ")[1]}
            </TableCell>
            <TableCell align="center">{data.end_time.split(" ")[1]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ));
};

export default ModalTable;
