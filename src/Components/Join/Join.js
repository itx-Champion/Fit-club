import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
const Join = () => {
const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="join" id="join">
      <div className="left-j">
      <hr/>
        <div>
          <span className="stroke-text">Ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container" ref={form} onSubmit={sendEmail}>
        <input type="email" name="user-email" placeholder="Enter your Email address ...." />
        <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
