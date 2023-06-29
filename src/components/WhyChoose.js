import React from "react";
import { useEffect } from "react";
import whychooseimg from "../images/Lovepik_com-450103092-Illustration of software development in modern glyph style 1.png";
const WhyChoose = () => {
  useEffect(() => {
    const handleScroll = () => {
      const getScrollPoint = window.scrollY;
      // console.log(getScrollPoint);

      if (getScrollPoint >= 5200 || getScrollPoint >= 3500) {
        document.querySelector(".infotexts1").classList.add("myright");
        document.querySelector(".infopics1").classList.add("myright");
        document.querySelector(".infotitle1").classList.add("myright1");
        // } else if (getScrollPoint >= 5000) {
        //   document.querySelector(".infotexts1").classList.add("myright");
        //   document.querySelector(".infopics1").classList.add("myright");
        //   document.querySelector(".infotitle1").classList.add("myright1");
      } else {
        document.querySelector(".infotexts1").classList.remove("myright");
        document.querySelector(".infopics1").classList.remove("myright");
        document.querySelector(".infotitle1").classList.remove("myright1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="whychoose">
      <div className="container">
        <div className="row">
          <div className="whychoosetitle infotitle1">
            Why Choose <span className="name">"DIGITAL INSECTS"</span>
          </div>
          <div className="whychoosecontent">
            <div className="row">
              <div className="whychooseimg col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center infopics1">
                <img
                  src={whychooseimg}
                  alt="whychoose"
                  className="whychooseimg"
                />
              </div>

              {/* <div className="mt-lg-2"> */}
              <ul className="whychoosecnt col-12 col-sm-12 col-md-12 col-lg-6 mx-auto mt-lg-5 infotexts1">
                <li>
                  <span className="whychoose1">Unmatched Expertise</span>: Our
                  team consists of experienced professionals who possess a deep
                  understanding of web development trends, technologies, and
                  best practices. We stay ahead of the curve, ensuring that our
                  clients benefit from the latest advancements in the industry.
                </li>
                <br />
                <li>
                  <span className="whychoose1">Client-Centric Approach</span>:
                  We prioritize our clients' satisfaction above all else.
                  Through effective communication and a collaborative mindset,
                  we ensure that our clients' voices are heard and their goals
                  are achieved throughout the development process.
                </li>
                <br />
                <li>
                  <span className="whychoose1">Innovative Solutions</span>: We
                  thrive on creativity and innovation, constantly seeking new
                  ways to push boundaries and exceed expectations. We bring
                  fresh ideas to the table and strive to make every project
                  unique, captivating, and impactful.
                </li>
                <br />
                <li>
                  <span className="whychoose1">Quality and Reliability</span>:
                  We are committed to delivering high-quality web solutions that
                  not only meet but exceed industry standards. Our rigorous
                  quality assurance processes guarantee that our clients receive
                  a flawless end product that is built to perform and endure.
                </li>
                <br />
                <li>
                  <span className="whychoose1">Long-Term Partnerships</span>: We
                  value long-term relationships with our clients, and we strive
                  to become their trusted digital partners. We offer ongoing
                  support and maintenance services to ensure that their websites
                  remain secure, up-to-date, and optimized for success.
                </li>
                <br />
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
