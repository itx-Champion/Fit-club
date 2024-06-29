import React, { useState } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
    const[hoveredPlan,setHoveredPlan]=useState(null)
    
  return (
    <div className="plans-container" id="plan">
    <div className="blur plan-blur-1"></div>
    <div className="blur plan-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => {
            const isHovered = hoveredPlan === i;
          const isDefault = hoveredPlan === null && i === 1;

          return (
            <div
              className={`plan ${isDefault ? "default-scale" : ""} ${isHovered ? "hovered" : ""}`}
              key={i}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt="feature-img" />
                      <span >{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See More Benefits -></span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
