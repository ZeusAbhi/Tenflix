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


const Card = ({ imgsrc, videosrc }) => {
  const [mouseEffect, triggerMouseEffect] = useState(false);
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
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
        triggerMouseEffect(false);
        setShowImg(true);
        
      }}
     
    >
      {showImg ? (
        <img className="tile" 
        onMouseEnter={() => {
          triggerMouseEffect(true);
      
       
        }}
         src={imgsrc} id="t1"></img>
      ) : (
        <div id="va">
          <video className="t" id="vis" src={videosrc} autoPlay loop muted />
          <div className="vidbtn">
            <div className="ral">
              <button id="play">
                <p id="f">▶</p>
                </button>
              <button id="pause" className="bold"><p id='f'>|  |</p></button>
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

export const Pop = ({Data,Text="Popular on Netflix",special=false}) => {
  return (
    <> 
    <div className="wrapper">
      <div className="main">
        <div className={`pop ${special?"specialPop":""}`}>{Text}</div>

        {
          window.innerWidth<1000?(
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
