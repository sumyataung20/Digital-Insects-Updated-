import React from "react";
import { useEffect } from "react";
import "../App.css";
import heroimage from "../images/9 2.png";
const HeroSection = () => {
  useEffect(() => {
    const banner1 = document.getElementById("banner1");
    const banner2 = document.getElementById("banner2");

    // banner1.classList.add("mybottom");
    // banner2.classList.add("mytopimg");

    // window.onscroll = function () {
    //   if (
    //     document.body.scrollTop >= 1 ||
    //     document.documentElement.scrollTop >= 1
    //   ) {
    //     banner1.classList.add("mybottom");
    //     banner2.classList.add("mytopimg");
    //   } else {
    //     banner1.classList.remove("mybottom");
    //     banner2.classList.remove("mytopimg");
    //   }
    // };
  }, []);
  return (
    <div className="container1" id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mybottom" id="banner1">
            <h1 className="title">
              GROW YOUR BUSINESS <br /> WITH OUR TEAM
            </h1>
            <p className="subtitle">
              Contact for a free consultation now and <br /> see how our web
              service can help <br />
              your business thrive
            </p>
            <button className="abtus">
              <a href="#aboutus" className="abtus1">
                About us
              </a>
            </button>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center align-items-center mytopimg"
            id="banner2"
          >
            <img src={heroimage} alt="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
