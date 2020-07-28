import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import UserDetails from "./UserDetails";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "Rowdies, cursive",
  },
}));

const UserTable = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://my-json-server.typicode.com/unnati24/mock-api/db`
      );
      setItems(result.data.members);
    };

    fetchItems();
  }, []);

  const handleClick = (event, userId) => {
    const user = items.filter((item) => item.id == userId);
    setModalInfo(user[0]);
    toggleTrueFalse();
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.tableHead}>
                User Id
              </TableCell>
              <TableCell align="center" className={classes.tableHead}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHead}>
                Location
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow
                key={row.id}
                onClick={(event) => handleClick(event, row.id)}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.real_name}</TableCell>
                <TableCell align="center">{row.tz}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserDetails
        modalInfo={modalInfo}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export default UserTable;
