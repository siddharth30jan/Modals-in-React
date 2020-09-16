import React from "react";

const divStyle = {
  width: "20%",
  margin: "5px",
  padding: "2px",
  border: "1px solid black",
};
const Nav = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={divStyle}>$100K-200K</div>
      <div style={divStyle}>$200K-300K</div>
      <div style={divStyle}>$300K-400K</div>
      <div style={divStyle}>$400K-500K</div>
      <div style={divStyle}>$500K+</div>
    </div>
  );
};

export default Nav;
