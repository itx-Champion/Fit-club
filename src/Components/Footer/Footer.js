import React from "react";
import "./Footer.css";
import gitHub from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={gitHub} alt="gitHub" />
          <img src={instagram} alt="instagram" />
          <img src={linkedIn} alt="linkedin" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
