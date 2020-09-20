import React, { useState } from "react";
import "./index.css";

const Card = ({ data, isForm, setForm, setPlanName }) => {
  // console.log(data);

  return (
    <div className="container1">
      <div className="A">{data.PlanName}</div>

      <div className="B">
        ${data.PricePerLiveTransfer}K Per Qualification Lead
      </div>
      <div className="C">
        Qualified Leads Per Month {data.QualifiedLeadsPerMonth}
      </div>
      <div className="D">
        Platform Fee Per Month ${data.TotalPlatformPrice}K
      </div>
      <div className="E">${data.FinalPackagePrice}/month</div>
      <div
        className="F"
        onClick={(e) => {
          setPlanName(data.PlanName);
          setForm(true);
        }}
      >
        Start your trial
      </div>
    </div>
  );
};

export default Card;
