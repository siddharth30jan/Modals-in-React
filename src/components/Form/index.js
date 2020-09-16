import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Get Started with SquadVoice</h1>
      <div>Plan Selected: {} </div>
      <div>
        <h2> Name </h2>
        <input type="text" value={} />
      </div>
      <div>
        <div>
          <h2>Email</h2>
          <input type="email" value={} />
        </div>
        <div>
          <h2>Phone No.</h2>
          <input type="email" value={} />
        </div>
      </div>
      <div>
        <div>
          <h2>Number of Leads you generate in a month</h2>
          <input type="number" />
        </div>
        <div>
          <h2>Total leads in your CRM</h2>
          <input type="number" />
        </div>
      </div>
      <div>
        <div>
          <h2>Which CRM do you use</h2>
          <input type="number" />
        </div>
        <div>
          <h2>No. of Agents</h2>
          <input type="number" />
        </div>
      </div>
      <div>
        <h2>What are your biggest lead sources?</h2>
        <div>
          <input type="checkbox" /> Zillow
          <input type="checkbox" /> Realtor
          <input type="checkbox" /> Ylopo
          <input type="checkbox" /> Others
        </div>
      </div>
      <div>
        <h2>Where did you hear about us?</h2>
        <div>
          <input type="checkbox" /> Google
          <input type="checkbox" /> Facebook
          <input type="checkbox" /> Email
          <input type="checkbox" /> Friends
          <input type="checkbox" /> Real Closures
        </div>
      </div>
    </div>
  );
};

export default Form;
