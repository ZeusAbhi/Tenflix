import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Services } from "./components/services";
import autoAnimate from "@formkit/auto-animate";
import { Navbar } from "./components/navbar";
import { Contact } from "./components/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
const RouteComponent = () => {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  return (
    <div ref={parent}>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
