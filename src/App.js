import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./Data.js";
import Modal from "./components/Modal.js";

function App() {
  const [priceRange, setPriceRange] = useState(3);
  const [items, setItems] = useState([]);
  const [isForm, setForm] = useState(false);
  const [planName, setPlanName] = useState("");
  const extractRequired = () => {
    let temp;
    if (priceRange === 1) temp = "$100K-$200K";
    else if (priceRange === 2) temp = "$200K-$300K";
    else if (priceRange === 3) temp = "$300K-$400K";
    else if (priceRange === 4) temp = "$400K-$500K";
    else temp = "$500K+";

    //filter out necessary elements
    const requiredItems = data.filter(
      (ele) => ele.AverageHomePricePoint === temp
    );
    setItems(requiredItems);
  };

  useEffect(() => {
    extractRequired();
  }, []);

  useEffect(() => {
    extractRequired();
  }, [priceRange]);

  //console.log(items);
  return (
    <div className="App">
      <Navbar priceRange={priceRange} setPriceRange={setPriceRange} />
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
          height: "300px",
        }}
      >
        <div
          onClick={(e) => {
            setForm(false);
          }}
        >
          <Modal data={planName} setForm={setForm} isForm={isForm} />
        </div>

        {items.map((ele) => (
          <Card
            key={ele.id}
            data={ele}
            isForm={isForm}
            setForm={setForm}
            setPlanName={setPlanName}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
