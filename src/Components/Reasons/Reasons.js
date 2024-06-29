import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
const Reasons = () => {
  return (
    <div className="reasons" id="reason">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="tick-image" />
            <span>over 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="tick-image" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick-image" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="tick-image" />
            <span>reliable partner</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          our partners
        </span>
        <div className="partners">
          <img src={nb} alt="partner-images" />
          <img src={adidas} alt="partner-images" />
          <img src={nike} alt="partner-images" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
