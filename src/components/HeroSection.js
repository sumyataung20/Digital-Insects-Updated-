import React from "react";
import "../App.css";
import heroimage from "../images/9 2.png";
const HeroSection = () => {
  return (
    <div className="container1" id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="title">
              GROW YOUR BUSINESS <br /> WITH OUR TEAM
            </h1>
            <p className="subtitle">
              Contact for a free consultation now and <br /> see how our web
              service can help <br />
              your business thrive
            </p>
            <button className="abtus">
              <a href="/aboutus" className="abtus1">
                About us
              </a>
            </button>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={heroimage} alt="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
