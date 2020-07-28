import React from "react";

const HandleError = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h3>Uh oh!</h3>
      <h4>No Activity Logged by user on Selected Date.</h4>
    </div>
  );
};

export default HandleError;
