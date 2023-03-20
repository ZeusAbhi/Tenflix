import React, { useEffect } from "react";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import wednesdayVideo from "./Video/movie.mp4"
import "./vidcard.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { PlayCard, PlayCardPause } from "./play";

// Define custom component Card to render individual movie card
const Card = ({ imgsrc, videosrc }) => {
  const [mouseEffect, triggerMouseEffect] = useState(false);
  const [showImg, setShowImg] = useState(true);
  
   // Implement a timeout to change display from image to video on mouse hover
  useEffect(() => {
    const t = setTimeout(() => {
       // Display video only if mouse is hovering and screen width is greater than 1000px
      if (mouseEffect && window.innerWidth>1000) {
        setShowImg(false);
      }
    }, 2000);
    return () => {
      clearTimeout(t);
    };
  }, [mouseEffect]);
  const [animationParent] = useAutoAnimate()
  return (
    <div ref={animationParent}
    onMouseLeave={() => {
      // Set mouse effect and image display back to initial values on mouse leave
      triggerMouseEffect(false);
      setShowImg(true);
      
    }}
     
    >
      {showImg ? (
         // Render image if mouse is not hovering or screen width is less than 1000px
        <img className="tile" 
        onMouseEnter={() => {
             // Set mouse effect to true on mouse enter
          triggerMouseEffect(true);
          
          
        }}
        src={imgsrc} id="t1"></img>
        ) : (
            // Render video if mouse is hovering and screen width is greater than 1000px
          <div id="va">
          <video className="t" id="vis" src={videosrc} autoPlay loop muted />
          <div className="vidbtn">
            <div className="ral">
              <button id="play" onClick={()=>PlayCard()}>
                <p id="f">▶</p>
                </button>
              <button id="pause" onClick={()=>PlayCardPause()} className="bold"><p id='f'>|  |</p></button>
            </div>
            <div className="vidtext">
              <p className="te" id="gr">96% Match</p>
              <p className="te">2022</p>
              <p className="te">30 min</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// Define custom component Pop to render popular movie section
export const Pop = ({Data,Text="Popular on Netflix",special=false}) => {
  const [width,setWidth] =useState(window.innerWidth);
  
  useEffect(()=>{
    const t = window.addEventListener('resize',()=>{
      setWidth(window.innerWidth)
    });
    return ()=>{
      window.removeEventListener('resize',t);
    }
  },[])
   // Conditional Rendering movie cards depending upon whether user is on Mobile or Desktop
  return (
    <> 
     
    <div className="wrapper">
      <div className="main">
        <div className={`pop ${special?"specialPop":""}`}>{Text}</div>
        
        {width<1000?(
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper" >
          <SwiperSlide>
            <div className="box">
              {Data.slice(0,2).map((d) => {
                return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;

              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              {Data.slice(2,4).map((d) => {
                return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;

              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
            {Data.slice(4,6).map((d) => {
                return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
            {Data.slice(6,8).map((d) => {
                return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
            {Data.slice(8,10).map((d) => {
                return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>):(

<Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
<SwiperSlide>
  <div className="box">
    {Data.slice(0,5).map((d) => {
      return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;

    })}
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="box">
  {Data.slice(5,10).map((d) => {
      return <Card imgsrc={d.imgUrl} videosrc={d.videosrc?d.videosrc:wednesdayVideo} />;
    })}
  </div>
</SwiperSlide>
</Swiper>

        )
}
      </div>
      </div>
    </>
  );
};
