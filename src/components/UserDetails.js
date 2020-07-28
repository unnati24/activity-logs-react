import "date-fns";
import React, { useState } from "react";
import { Modal, makeStyles } from "@material-ui/core";
import HandleError from "./HandleError";
import ModalTable from "./ModalTable";
import DatePickerInput from "./DatePickerInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 450,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "10vh auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const UserDetails = (props) => {
  const classes = useStyles();
  const { modalInfo, show, handleClose } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterData, setFilterData] = useState(
    modalInfo.activity_periods && modalInfo.activity_periods.length !== 0
      ? modalInfo.activity_periods.filter((activity) => {
          const formatDate = `${
            selectedDate.getMonth() + 1
          }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
          return activity.start_time.split(" ")[0].toString() == formatDate;
        })
      : []
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFilterData(
      modalInfo.activity_periods && modalInfo.activity_periods.length !== 0
        ? modalInfo.activity_periods.filter((activity) => {
            const formatDate = `${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
            console.log(
              activity.start_time.split(" ")[0].toString() == formatDate,
              activity.start_time.split(" ")[0].toString(),
              formatDate
            );
            return activity.start_time.split(" ")[0].toString() == formatDate;
          })
        : []
    );
  };

  const body = (
    <div className={classes.paper}>
      <h2 align="center" id="simple-modal-title">
        {modalInfo.real_name}
      </h2>
      <DatePickerInput
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <div id="simple-modal-description">
        {modalInfo.activity_periods && filterData.length !== 0 ? (
          <ModalTable filterData={filterData} />
        ) : (
          <HandleError />
        )}
      </div>
    </div>
  );

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default UserDetails;
