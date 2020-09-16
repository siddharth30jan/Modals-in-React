import React from "react";
const divStyle = {
  width: "20%",
  margin: "5px",
  padding: "2px",
  border: "1px solid black",
};
const Enterprice = ({ data, setForm }) => {
  return (
    <div style={{ width: "20%" }}>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "blue",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        Enterprice
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>Want more than 80 qualified leads each month?</h2>
        <div
          style={{
            width: "100%",
            height: "50px",
            border: "solid 1px orange",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={(e) => setForm(true)}
        >
          Get In Touch
        </div>
      </div>
    </div>
  );
};

export default Enterprice;
