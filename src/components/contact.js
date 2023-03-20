import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [form, setForm] = useState({}); // state to hold form data
  const [error, setError] = useState(false); // state to hold error status

  // handle form input changes
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // handle form submission
  const handlesubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/demo`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        // handle error responses
        if (response.status === 400 || response.status === 500) {
          const data = await response.json();
          if (data.message) {
            setError(data.message);
          } else {
            setError("Something went wrong!");
          }
        } else {
          setError("Something went wrong!");
        }
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };
  // render contact form component
  return (
    <div className="contactContainer">
      <div className="helphead">
        <h1 className="helph1">Contact Us</h1>
      </div>

      <div className="form">
        <form onSubmit={handlesubmit} class="forms">
          <input
            type="text"
            name="name"
            className="contactinput"
            id="contactz"
            placeholder="Enter your name"
            onChange={handleForm}
          />
          <input
            type="email"
            name="email"
            className="contactinput"
            id="contactz"
            placeholder="Enter your email"
            onChange={handleForm}
          />
          <textarea
            className="contactarea"
            name="query"
            id="query"
            cols="30"
            rows="10"
            placeholder="Your Query"
            onChange={handleForm}
          ></textarea>
          <button className="contactbtn">Submit</button>
          {error && <div style={{ color: "white" }}>ERROR</div>}
        </form>
      </div>
    </div>
  );
};
