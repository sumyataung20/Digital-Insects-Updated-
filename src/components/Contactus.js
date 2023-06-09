import React from "react";
import email from "../images/noun-email-5767311 1.png";
import phone from "../images/noun-phone-5767444 1.png";
import facebook from "../images/vecteezy_facebook-logo-png-facebook-icon-transparent-png_18930481_433 2.png";
const Contact = () => {
  return (
    <div className="contactcontainer" id="contactus">
      <div className="container">
        <div className="contact">Get In Touch With Us</div>
        <p className="contactcnt">
          We would love to hear from you! Feel free to reach out to us through
          the provided contact form or email address, and our team will get back
          to you as soon as possible.
        </p>
        <div className="custom-container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4  mb-sm-4 mb-md-3 mb-3">
              <div
                className="card w-100 h-100"
                style={{ backgroundColor: "#030303" }}
              >
                <div className="cardimg">
                  <img src={phone} alt="phone" className="contactimg" />
                </div>
                <div className="cardcontent">
                  {/* <div>Phone: 09 691 501 020</div> */}
                  <div>
                    <a
                      href="tel:09691501020"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "var(--text-color4)",
                      }}
                    >
                      Phone: 09 691 501 020
                    </a>
                  </div>
                  <div>Monday - Friday ( 9am to 5pm)</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4  mb-sm-4 mb-md-3 mb-3">
              <div
                className="card w-100 h-100"
                style={{ backgroundColor: "#030303" }}
              >
                <div className="cardimg">
                  <img
                    src={email}
                    alt="phone"
                    className="contactimg"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="cardcontent">
                  <div style={{ paddingBottom: "18px" }}>
                    {/* Email: info@digitalinsects.com{" "} */}
                    <a
                      href="mailto:info@digitalinsects.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "var(--text-color4)",
                      }}
                    >
                      Email: info@digitalinsects.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4  mb-sm-4 mb-md-3 mb-3">
              <div
                className="card w-100 h-100"
                style={{ backgroundColor: "#030303" }}
              >
                <div className="cardimg">
                  <img src={facebook} alt="facebook" className="contactimg" />
                </div>
                <div className="cardcontent">
                  <div style={{ paddingTop: "10px", paddingBottom: "15px" }}>
                    <a
                      href="https://www.facebook.com/digitalinsects"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "var(--text-color4)",
                      }}
                    >
                      Facebook: Digital Insects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
