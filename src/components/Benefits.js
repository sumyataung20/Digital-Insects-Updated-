import React from "react";
import image from "../images/pngegg 1.png";
import { useEffect } from "react";
const Benefits = () => {
  useEffect(() => {
    const handleScroll = () => {
      const getScrollPoint = window.scrollY;

      if (getScrollPoint >= 10) {
        document.querySelector(".infotexts").classList.add("myright");
        document.querySelector(".infopics").classList.add("myright");
        document.querySelector(".infotitle").classList.add("myright1");
      } else {
        document.querySelector(".infotexts").classList.remove("myright");
        document.querySelector(".infopics").classList.remove("myright");
        document.querySelector(".infotitle").classList.remove("myright1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="benecontainer " id="benefit">
      <div className="container">
        <div className="benetitle infotitle ">
          <p>Benefits of having a website for a business</p>
        </div>
        <div className="row ">
          <div className="col-md-12 col-lg-6 d-flex justify-content-lg-center align-items-center infopics">
            <img src={image} alt="beneimg" className="beneimg" />
          </div>

          <div className="col-md-12 col-lg-6 infotexts">
            <span className="benesubtitle1">Increased online presence</span>
            <span className="benesubtitle2">
              :A website provides a platform for your business to be visible to
              potential customers online, which can increase your reach and
              attract more customers.
            </span>
            <br />
            <br />
            <span className="benesubtitle1">Improved credibility</span>
            <span className="benesubtitle2">
              :Having a professional-looking website can enhance your business's
              credibility and help establish trust with potential customers.
            </span>
            <br />
            <br />
            <span className="benesubtitle1">Better customer engagement</span>
            <span className="benesubtitle2">
              :A website can offer a range of tools and features to engage with
              customers, such as contact forms, social media integration, live
              chat, and more.
            </span>
            <br />
            <br />
            <span className="benesubtitle1">
              Enhanced marketing opportunities
            </span>

            <span className="benesubtitle2">
              :A website can serve as powerful marketing tool, providing
              opportunities for SEO, email marketing, content marketing, and
              other digital marketing tactics.
            </span>
            <br />
            <br />
            <span className="benesubtitle1">Increased revenue potential</span>
            <span className="benesubtitle2">
              :A website can help you reach new markets and customers, leading
              to increased revenue and business growth.
            </span>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
