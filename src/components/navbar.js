// Import necessary modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define a functional component named Navbar
export const Navbar = () => {
  // Define two state variables using the useState hook
  const [hovered, setHovered] = useState(false); // tracks whether the user is hovering over the Browse button
  const [scrollY, setScrollY] = useState(window.scrollY); // tracks the vertical scroll position of the window

  // Define an effect using the useEffect hook
  useEffect(() => {
    // Attach a scroll event listener to the window, and update scrollY state whenever the user scrolls
    const t = window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    // Remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", t);
    };
  }, []);
  return (
    <>
      {/* The Desktop navigation bar */}
      <nav className={`navD ${scrollY < 200 ? "transparentNav" : "blackNav"}`}>
        <ul className="list">
          <img className="im" src="./mainlogo.png" alt="" />
          <li>
            <Link id="home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {/* The Mobile navigation bar */}
      <div className="net">
        <img className="imd" src="./mainlogo.png" alt="" />
        <button
          className="btn"
          id="bt"
          onMouseOver={() => {
            if (!hovered) setHovered(true);
          }}
          onMouseLeave={() => {
            if (hovered) setHovered(false);
          }}
        >
          Browse
          {hovered && (
            // The dropdown menu that appears when the Browse button is hovered over
            <nav className="drop" id="dr">
              <ul className="listD" id="li">
                <li>
                  <Link id="a" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link id="a" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link id="a" to="/service">
                    Services
                  </Link>
                </li>
                <li>
                  <Link id="a" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </button>
      </div>
    </>
  );
};
