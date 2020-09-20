import React, { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
const Form = ({ data, setForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadsInMonth, setLeadsInMonth] = useState("");
  const [totalLeadsCRM, setTotalLeadsCRM] = useState("");
  const [CRM, setCRM] = useState();
  const [agents, setAgents] = useState();
  const [leadSources, setLeadSources] = useState("");
  const [hear, setHear] = useState();

  function Submit(e) {
    e.preventDefault();
    let info;
    if (
      !name ||
      !email ||
      !phone ||
      !leadsInMonth ||
      !totalLeadsCRM ||
      !CRM ||
      !agents ||
      !leadSources ||
      !hear
    )
      info = "Please enter the data properly!";
    else if (email.indexOf("@") === -1) info = "Please enter valid email";
    else
      info = ` ${name},${email},${phone},${leadsInMonth},${totalLeadsCRM},${CRM},${agents},${leadSources},${hear}`;
    alert(info);
    setName("");
    setEmail("");
    setPhone("");
    setLeadsInMonth("");
    setTotalLeadsCRM("");
    setCRM("");
    setAgents("");
    setLeadSources("");
    setHear("");
  }

  const funcLead = (checked, value) => {
    setLeadSources(value);
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ flex: 2 }}>Get Started with SquadVoice</h1>
        <button
          style={{
            flex: 1,
            height: "2px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={(e) => setForm(false)}
        >
          <BsArrowBarDown size="3rem" />
        </button>
      </div>
      <div style={{ margin: "10px", padding: "5px" }}>
        Plan Selected: {data}{" "}
      </div>
      <form onSubmit={Submit}>
        <div
          style={{
            width: "100%",
            padding: "5px",
            alignItems: "center",
          }}
        >
          <h2> Name </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "auto",
            padding: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2>Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h2>Phone No.</h2>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1", marginRight: "15px" }}>
            <h5>Number of Leads you generate in a month</h5>
            <input
              style={{ width: "100%" }}
              type="number"
              value={leadsInMonth}
              onChange={(e) => setLeadsInMonth(e.target.value)}
            />
          </div>
          <div style={{ flex: "1" }}>
            <h5>Total leads in your CRM</h5>
            <input
              style={{ width: "100%" }}
              type="number"
              value={totalLeadsCRM}
              onChange={(e) => setTotalLeadsCRM(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "auto",
            padding: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h5>Which CRM do you use</h5>
            <input
              type="number"
              value={CRM}
              onChange={(e) => setCRM(e.target.value)}
            />
          </div>
          <div>
            <h5>No. of Agents</h5>
            <input
              type="number"
              value={agents}
              onChange={(e) => setAgents(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "auto",
            padding: "5px",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <h5>What are your biggest lead sources?</h5>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="checkbox"
              checked={leadSources === "Zillow"}
              onChange={(e) => funcLead(e.target.checked, "Zillow")}
            />{" "}
            Zillow
            <input
              type="checkbox"
              checked={leadSources === "Realtor"}
              onChange={(e) => funcLead(e.target.checked, "Realtor")}
            />{" "}
            Realtor
            <input
              type="checkbox"
              checked={leadSources === "Ylopo"}
              onChange={(e) => funcLead(e.target.checked, "Ylopo")}
            />{" "}
            Ylopo
            <input
              type="checkbox"
              checked={leadSources === "Others"}
              onChange={(e) => funcLead(e.target.checked, "Others")}
            />{" "}
            Others
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "5px",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <h5>Where did you hear about us?</h5>
          <div
            style={{
              width: "100%",
              marginTop: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={hear === "Google"}
              onChange={(e) => setHear("Google")}
            />
            Google
            <input
              type="checkbox"
              checked={hear === "Facebook"}
              onChange={(e) => setHear("Facebook")}
            />{" "}
            Facebook
            <input
              type="checkbox"
              checked={hear === "Email"}
              onChange={(e) => setHear("Email")}
            />{" "}
            Email
            <input
              type="checkbox"
              checked={hear === "Friends"}
              onChange={(e) => setHear("Friends")}
            />{" "}
            Friends
            <input
              type="checkbox"
              checked={hear === "Real Closures"}
              onChange={(e) => setHear("Real Closures")}
            />{" "}
            Closures
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px 0px",
          }}
        >
          <button
            style={{
              width: "40%",
              margin: "auto",
              backgroundColor: "orange",
              cursor: "pointer",
              border: "1px solid black",
              padding: "5px",
              marginTop: "5px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
