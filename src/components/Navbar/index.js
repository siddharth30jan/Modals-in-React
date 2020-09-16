import React from "react";

const divStyle = {
  width: "20%",
  margin: "5px",
  padding: "2px",
  border: "1px solid black",
  cursor: "pointer",
};
const Nav = ({ setPriceRange }) => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={divStyle} onClick={(e) => setPriceRange(1)}>
        $100K-200K
      </div>
      <div style={divStyle} onClick={(e) => setPriceRange(2)}>
        $200K-300K
      </div>
      <div style={divStyle} onClick={(e) => setPriceRange(3)}>
        $300K-400K
      </div>
      <div style={divStyle} onClick={(e) => setPriceRange(4)}>
        $400K-500K
      </div>
      <div style={divStyle} onClick={(e) => setPriceRange(5)}>
        $500K+
      </div>
    </div>
  );
};

export default Nav;
