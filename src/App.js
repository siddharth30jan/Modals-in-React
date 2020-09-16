import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Enterprice from "./components/Enterprice";
import Form from "./components/Form";

const data = [
  {
    id: 1,
    AverageHomePricePoint: "100-200",
    PlanName: "Qualified 20",
    QualifiedLeadsPerMonth: 20,
    PricePerLiveTransfer: 69,
    TotalQualifiedLeadPrice: 1380,
    TotalPlatformPrice: 299,
    FinalPackagePrice: 1679,
  },
  {
    id: 2,
    AverageHomePricePoint: "100-200",
    PlanName: "Qualified 40",
    QualifiedLeadsPerMonth: 40,
    PricePerLiveTransfer: 67,
    TotalQualifiedLeadPrice: 2680,
    TotalPlatformPrice: 599,
    FinalPackagePrice: 3279,
  },
  {
    id: 3,
    AverageHomePricePoint: "100-200",
    PlanName: "Qualified 60",
    QualifiedLeadsPerMonth: 60,
    PricePerLiveTransfer: 65,
    TotalQualifiedLeadPrice: 3900,
    TotalPlatformPrice: 699,
    FinalPackagePrice: 4599,
  },
  {
    id: 4,
    AverageHomePricePoint: "100-200",
    PlanName: "Qualified 80",
    QualifiedLeadsPerMonth: 80,
    PricePerLiveTransfer: 63,
    TotalQualifiedLeadPrice: 5040,
    TotalPlatformPrice: 799,
    FinalPackagePrice: 5839,
  },
  {
    id: 5,
    AverageHomePricePoint: "200-300",
    PlanName: "Qualified 20",
    QualifiedLeadsPerMonth: 20,
    PricePerLiveTransfer: 79,
    TotalQualifiedLeadPrice: 1580,
    TotalPlatformPrice: 299,
    FinalPackagePrice: 1879,
  },
  {
    id: 6,
    AverageHomePricePoint: "200-300",
    PlanName: "Qualified 40",
    QualifiedLeadsPerMonth: 40,
    PricePerLiveTransfer: 77,
    TotalQualifiedLeadPrice: 3080,
    TotalPlatformPrice: 599,
    FinalPackagePrice: 3679,
  },
  {
    id: 7,
    AverageHomePricePoint: "200-300",
    PlanName: "Qualified 60",
    QualifiedLeadsPerMonth: 60,
    PricePerLiveTransfer: 74,
    TotalQualifiedLeadPrice: 4440,
    TotalPlatformPrice: 699,
    FinalPackagePrice: 5139,
  },
  {
    id: 8,
    AverageHomePricePoint: "200-300",
    PlanName: "Qualified 80",
    QualifiedLeadsPerMonth: 80,
    PricePerLiveTransfer: 72,
    TotalQualifiedLeadPrice: 5760,
    TotalPlatformPrice: 799,
    FinalPackagePrice: 6559,
  },
  {
    id: 9,
    AverageHomePricePoint: "300-400",
    PlanName: "Qualified 20",
    QualifiedLeadsPerMonth: 20,
    PricePerLiveTransfer: 99,
    TotalQualifiedLeadPrice: 1980,
    TotalPlatformPrice: 299,
    FinalPackagePrice: 2279,
  },
  {
    id: 10,
    AverageHomePricePoint: "300-400",
    PlanName: "Qualified 40",
    QualifiedLeadsPerMonth: 40,
    PricePerLiveTransfer: 96,
    TotalQualifiedLeadPrice: 3840,
    TotalPlatformPrice: 599,
    FinalPackagePrice: 4439,
  },
  {
    id: 11,
    AverageHomePricePoint: "300-400",
    PlanName: "Qualified 60",
    QualifiedLeadsPerMonth: 60,
    PricePerLiveTransfer: 93,
    TotalQualifiedLeadPrice: 5580,
    TotalPlatformPrice: 699,
    FinalPackagePrice: 6279,
  },
  {
    id: 12,
    AverageHomePricePoint: "300-400",
    PlanName: "Qualified 80",
    QualifiedLeadsPerMonth: 80,
    PricePerLiveTransfer: 90,
    TotalQualifiedLeadPrice: 7200,
    TotalPlatformPrice: 799,
    FinalPackagePrice: 7999,
  },
  {
    id: 13,
    AverageHomePricePoint: "400-500",
    PlanName: "Qualified 20",
    QualifiedLeadsPerMonth: 20,
    PricePerLiveTransfer: 109,
    TotalQualifiedLeadPrice: 2180,
    TotalPlatformPrice: 299,
    FinalPackagePrice: 2479,
  },
  {
    id: 14,
    AverageHomePricePoint: "400-500",
    PlanName: "Qualified 40",
    QualifiedLeadsPerMonth: 40,
    PricePerLiveTransfer: 106,
    TotalQualifiedLeadPrice: 4240,
    TotalPlatformPrice: 599,
    FinalPackagePrice: 4839,
  },
  {
    id: 15,
    AverageHomePricePoint: "400-500",
    PlanName: "Qualified 60",
    QualifiedLeadsPerMonth: 60,
    PricePerLiveTransfer: 102,
    TotalQualifiedLeadPrice: 6120,
    TotalPlatformPrice: 699,
    FinalPackagePrice: 6819,
  },
  {
    id: 16,
    AverageHomePricePoint: "400-500",
    PlanName: "Qualified 80",
    QualifiedLeadsPerMonth: 80,
    PricePerLiveTransfer: 99,
    TotalQualifiedLeadPrice: 7920,
    TotalPlatformPrice: 799,
    FinalPackagePrice: 8719,
  },
  {
    id: 17,
    AverageHomePricePoint: "500",
    PlanName: "Qualified 20",
    QualifiedLeadsPerMonth: 20,
    PricePerLiveTransfer: 129,
    TotalQualifiedLeadPrice: 2580,
    TotalPlatformPrice: 299,
    FinalPackagePrice: 2879,
  },
  {
    id: 18,
    AverageHomePricePoint: "500",
    PlanName: "Qualified 40",
    QualifiedLeadsPerMonth: 40,
    PricePerLiveTransfer: 125,
    TotalQualifiedLeadPrice: 5000,
    TotalPlatformPrice: 599,
    FinalPackagePrice: 5599,
  },
  {
    id: 19,
    AverageHomePricePoint: "500",
    PlanName: "Qualified 60",
    QualifiedLeadsPerMonth: 60,
    PricePerLiveTransfer: 121,
    TotalQualifiedLeadPrice: 7260,
    TotalPlatformPrice: 699,
    FinalPackagePrice: 7959,
  },
  {
    id: 20,
    AverageHomePricePoint: "500",
    PlanName: "Qualified 80",
    QualifiedLeadsPerMonth: 80,
    PricePerLiveTransfer: 117,
    TotalQualifiedLeadPrice: 9360,
    TotalPlatformPrice: 799,
    FinalPackagePrice: 10159,
  },
];
function App() {
  const [priceRange, setPriceRange] = useState(1);
  const [items, setItems] = useState([]);
  const [isForm, setForm] = useState(false);
  const [planName, setPlanName] = useState("");
  const extractRequired = () => {
    let temp;
    if (priceRange === 1) temp = "100-200";
    else if (priceRange === 2) temp = "200-300";
    else if (priceRange === 3) temp = "300-400";
    else if (priceRange === 4) temp = "400-500";
    else temp = "500";

    //filter out necessary elements
    const requiredItems = data.filter(
      (ele) => ele.AverageHomePricePoint === temp
    );
    setItems(requiredItems);
  };

  useEffect(() => {
    /*let temp;
    if (priceRange === 1) temp = "100-200";
    else if (priceRange === 2) temp = "200-300";
    else if (priceRange === 3) temp = "300-400";
    else if (priceRange === 4) temp = "400-500";
    else temp = "500";

    //filter out necessary elements
    const requiredItems = data.filter(
      (ele) => ele.AverageHomePricePoint === temp
    );
    setItems(requiredItems);**/
    extractRequired();
  }, []);

  useEffect(() => {
    extractRequired();
  }, [priceRange]);

  //console.log(items);
  return (
    <>
      <Navbar setPriceRange={setPriceRange} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        {isForm ? <Form data={planName} setForm={setForm} /> : null}
        {items.map((ele) => (
          <Card key={ele.id} data={ele} isForm={isForm} setForm={setForm} setPlanName={setPlanName}/>
        ))}
        {/*<Enterprice data={""} setForm={setForm} /> */}
      </div>
    </>
  );
}

export default App;
