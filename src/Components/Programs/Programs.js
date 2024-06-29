import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className="programs" id="program">
      {/* program-headers */}
      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span>Programs </span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-category">
        {programsData.map((program, i) => {
            return(
                <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
                <span>Join Now</span><img src={RightArrow} alt="" />
            </div>
          </div>
            )
        })}
      </div>
    </div>
  );
};

export default Programs;
