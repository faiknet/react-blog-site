import React from "react"
import "./footer.css"
import gpt4Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>

      <div className="gpt4__footer-btn">
        <a href="#home">
          <p>Request Early Access</p>
        </a>
      </div>

      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={gpt4Logo} alt="logo" />
          <p>
            Newmarket, ON L3Y 2A3 <br />
            All Rights Reserved
          </p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>Newmarket, ON L3Y 2A3</p>
          <p>905-853-0100</p>
          <p>info@wgpt4.net</p>
        </div>
      </div>
      <div className="gpt4__footer-copyright">
        <p>© 2023 GPT-4. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
