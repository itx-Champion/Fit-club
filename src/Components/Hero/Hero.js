import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import CountUp from "react-countup";
const Hero = () => {
  const transition={type:"spring",duration:3}
  const mobile=window.innerWidth<=768?true:false
  return (
    <div className="hero" id="home">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?"178px":"238px"}}
          whileInView={{left:"8px"}}
          transition={{...transition,type:"tween"}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero-heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figure */}
        <div className="figures">
          <div>
            <span><CountUp start={100} end={140} prefix="+" delay={1}/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><CountUp start={800} end={978} prefix="+" delay={1}/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><CountUp start={0} end={50} prefix="+" delay={1}/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*hero- buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div 
        initial={{right:"-1rem"}}
        transition={transition}
        whileInView={{right:"4rem"}}
        className="heart-rate">
          <img src={heart} alt="heart-rate img" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img
         src={hero_image} alt="hero-image" className="hero-image" />
        <motion.img
        transition={transition}
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
          src={hero_image_back}
          alt="hero-image-back"
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div 
        initial={{right:"37rem"}}
        whileInView={{right:"28rem"}}
        transition={transition}
         className="calories">
          <img src={calories} alt="calories-img" />
          <div>
          <span>Calories burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
