import React from "react";
import "./index.css";
const Nav = ({ priceRange, setPriceRange }) => {
  return (
    <div className="container">
      <div className="box" onClick={(e) => setPriceRange(1)}>
        $100K-$200K
      </div>
      <div className="box" onClick={(e) => setPriceRange(2)}>
        $200K-$300K
      </div>
      <div className="box" onClick={(e) => setPriceRange(3)}>
        $300K-$400K
      </div>
      <div className="box" onClick={(e) => setPriceRange(4)}>
        $400K-$500K
      </div>
      <div className="box" onClick={(e) => setPriceRange(5)}>
        $500K+
      </div>
    </div>
  );
};

export default Nav;
