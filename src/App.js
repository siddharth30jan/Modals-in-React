import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
const XA = {
  id: 1,
  AverageHomePricePoint: "",
  PlanName: "",
  QualifiedLeadsPerMonth: "",
  PricePerLiveTransfer: "",
  TotalQualifiedLeadPrice: "",
  TotalPlatformPrice: "",
  FinalPackagePrice: "",
};
const data = [];

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            First
          </Route>
          <Route exact path="/a">
            First A
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
