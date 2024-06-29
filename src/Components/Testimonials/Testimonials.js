import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
   const transition={duration:3,type:"spring"};
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const leftArrowFC = () => {
    return selected === 0
      ? setSelected(tLength - 1)
      : setSelected((pre) => {
        console.log(pre)
        return pre-1
        });
  };
  const rightArrowFC = () => {
    return selected === tLength-1?setSelected(0):setSelected(pre=>pre+1)
  };
  return (
    <div className="testimonials" id="testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <motion.span
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{...transition,duration:2}}
        key={selected}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{...transition,duration:2}}
        ></motion.div>

        <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{...transition,duration:2}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        // animate={{opacity:1,x:0}}
        whileInView={{opacity:1,x:0}}

        src={testimonialsData[selected].image} alt="testimonial image" />
        <div className="arrow">
          <img onClick={leftArrowFC} src={leftArrow} alt="{leftArrow}" />
          <img onClick={rightArrowFC} src={rightArrow} alt="rightArrow" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
