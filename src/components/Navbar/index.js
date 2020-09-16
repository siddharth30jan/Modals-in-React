import React from "react";
const divStyle = {
  width: "20%",
  margin: "5px",
  padding: "2px",
  border: "1px solid black",
  cursor: "pointer",
};
const Nav = ({ priceRange, setPriceRange }) => {
  let divStyle1 = { ...divStyle },
    divStyle2 = { ...divStyle },
    divStyle3 = { ...divStyle },
    divStyle4 = { ...divStyle },
    divStyle5 = { ...divStyle };

  if (priceRange === 1) divStyle1 = { ...divStyle1, backgroundColor: "blue" };
  if (priceRange === 2) divStyle2 = { ...divStyle2, backgroundColor: "blue" };
  if (priceRange === 3) divStyle3 = { ...divStyle3, backgroundColor: "blue" };
  if (priceRange === 4) divStyle4 = { ...divStyle4, backgroundColor: "blue" };
  if (priceRange === 5) divStyle5 = { ...divStyle5, backgroundColor: "blue" };

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={divStyle1} onClick={(e) => setPriceRange(1)}>
        $100K-$200K
      </div>
      <div style={divStyle2} onClick={(e) => setPriceRange(2)}>
        $200K-$300K
      </div>
      <div style={divStyle3} onClick={(e) => setPriceRange(3)}>
        $300K-$400K
      </div>
      <div style={divStyle4} onClick={(e) => setPriceRange(4)}>
        $400K-$500K
      </div>
      <div style={divStyle5} onClick={(e) => setPriceRange(5)}>
        $500K+
      </div>
    </div>
  );
};

export default Nav;
