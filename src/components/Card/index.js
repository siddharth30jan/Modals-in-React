import React from "react";

const divStyle = {
  width: "20%",
  margin: "5px",
  padding: "2px",
  border: "1px solid black",
};
const Card = ({ data }) => {
  console.log(data);
  return (
    <div style={{ width: "200px", height: "100px" }}>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "blue",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        {data.PlanName}
      </div>

      <div
        style={{
          width: "100%",
          height: "50px",
          borderBottom: "2px dotted grey",
          alignItems: "center",
        }}
      >
        ${data.PricePerLiveTransfer}K Per Qualification Lead
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          borderBottom: "2px dotted grey",
          alignItems: "center",
        }}
      >
        Qualified Leads Per Month ${data.QualifiedLeadsPerMonth}K
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          borderBottom: "2px dotted grey",
          alignItems: "center",
        }}
      >
        Platform Fee Per Month ${data.TotalPlatformPrice}K
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "blue",
          alignItems: "center",
        }}
      >
        ${data.FinalPackagePrice}/month
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          border: "solid 1px orange",
          alignItems: "center",
        }}
      >
        Start your trial
      </div>
    </div>
  );
};

export default Card;
