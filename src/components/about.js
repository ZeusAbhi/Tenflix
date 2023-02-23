import React from "react";
import "./about.css";
import { Fade, Slide } from "react-awesome-reveal";
import { Navbar } from "./navbar";
import "./navbar.css"
export const About = () => {
  return (
    <>
      <div className="gr">
        <img
          className="aboutnet"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <p className="textz">
        <Slide>
          <h1>I'm a web developer with a focus on the MERN stack,</h1><h3>but still
          exploring other technologies and frameworks that catch my interest! if
          you're looking for a developer to add to your team, I'd love to hear
          from you! I designed this website using :</h3>
        </Slide>
        <div className="frame">
          <Fade delay={1e3} cascade damping={1e-1}>
            <img
              id="hm"
              src="https://img.freepik.com/free-icon/html_318-155621.jpg?w=2000"
              alt=""
            />
            <img
              id="hm"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
            <img id="hms" src="./My project.png" alt="" />
            <img src="./css.png" alt="" id="hm" />
            <img src="./nextjs.png" alt="" id="hm" />
          </Fade>
        </div>
      </p>
    </>
  );
};
