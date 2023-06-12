import React from "react";
import aboutusimg from "../images/aboutus.png";
import { useEffect } from "react";
const Aboutus = () => {
  useEffect(() => {
    const handleScroll = () => {
      const getScrollPoint = window.scrollY;

      if (getScrollPoint >= 2900 || getScrollPoint >= 4600) {
        document.querySelector(".aboutusimg").classList.add("abtimg");
        document.querySelector(".abtcontent").classList.add("abttext");
      } else {
        document.querySelector(".aboutusimg").classList.remove("abtimg");
        document.querySelector(".abtcontent").classList.remove("abttext");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="aboutuscontainer" id="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={aboutusimg} alt="aboutus" className="aboutusimg" />
          </div>

          <div className="col-12 col-sm-12 col-md-6 ">
            <div className="abtcontent">
              <p className="aboutustitle">About Us</p>
              <p className="abtcnt">
                {" "}
                At <span className="aboutus">Digital Insects</span>, we are
                passionate about creating outstanding digital experiences that
                elevate brands and drive business growth. <br /> <br />
                With a team of talented designers, developers, and strategists,
                we specialize in crafting customized websites that effectively
                communicate your brand story and captivate your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
