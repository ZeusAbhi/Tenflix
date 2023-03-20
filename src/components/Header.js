import React, { useState, useEffect } from "react";
import "./h.css";
import { Play } from "./play";
import "./navbar.css";
import wednesdayVideo from "./Video/movie.mp4";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// Define Header component
export const Header = () => {
  // Define state variables
  const [play, setPlay] = useState("Pause"); //To check whether is video is paused or not
  const [count, setCount] = useState(false); //to pause and play video
  const [ImageEffect, triggerImageEffect] = useState(false); //to have a hover to play video feature like netflix
  const [show, setShow] = useState(false);

  //logic of hover to play video feature
  useEffect(() => {
    const t = setTimeout(() => {
      if (ImageEffect && window.screen.width > 1000) {
        setShow(true);
      }
    }, 2000);
    return () => {
      clearTimeout(t);
    };
  }, [ImageEffect]);
  const [animationParent] = useAutoAnimate();
  return (
    <>
      <div
        className="parent"
        onMouseLeave={() => {
          triggerImageEffect(false);
          setShow(false);
          setPlay("Pause");
          setCount(false);
        }}
      >
        <div className="wrapper">
          <div className="gradient h100">
            {
              // If show is true, render video and play/pause button else show image
              show ? (
                <div>
                  <video
                    id="myvideo"
                    className="h100"
                    src={wednesdayVideo}
                    autoPlay
                    loop
                    muted
                  />
                  <button
                    id="pl"
                    onClick={() => {
                      Play();
                      setCount(true);

                      if (count) {
                        setPlay("Pause");
                        setCount(false);
                      } else setPlay("Play");
                    }}
                  >
                    <div className="f">
                      <p id="p">
                        <span id="arrow">▶</span>{" "}
                        <span id="playorpause">{play}</span>
                      </p>
                    </div>
                  </button>
                </div>
              ) : (
                <div ref={animationParent}>
                  <img
                    className="frontimage h100"
                    onMouseEnter={() => {
                      triggerImageEffect(true);
                    }}
                    src="https://images7.alphacoders.com/128/1289555.png"
                    id="t1"
                  ></img>
                  <p id="text">
                    Smart, sarcastic and a little dead inside, Wednesday Addams
                    investigates a <br></br>murder spree while making new
                    friends — and foes — at Nevermore Academy.
                  </p>
                </div>
              )
            }
          </div>

          <div className="imagebox">
            <img
              class="wednesday"
              src="https://occ-0-3211-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdxlUl_M2h5ERjFfyvuhRn2v-Az7Pwe_KxG_M9HSWbURJYrAs9pvqDPa3B3UPTCn3K_xS17OhTYmOca-lM4XAN7y5RogX7xYSfhIkk21Sgt9wNuZlqUFsCVdSD-tT7udzadO5zDd2hkAMGYPQJV9kbYoTY6n6u5X4YgGHG6AStY-EUePkvpO6A.png?r=50a"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
