import React from "react";
import logo from "../images/Logo.png";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div
        className="d-flex justify-content-start"
        style={{ paddingLeft: "20px" }}
      >
        <img
          src={logo}
          alt="footerimg"
          className="footerimg"
          style={{
            width: "50px",
            height: "auto",
            objectFit: "contain",
            padding: "10px 0",
          }}
        />
        <div
          style={{
            color: "var(--text-color1)",
            marginTop: "auto",
            marginBottom: "auto",
            paddingLeft: "5px",
            fontSize: "12px",
            fontFamily: "Font3",
          }}
        >
          <div className="footercontent">©Copyright 2023</div>
          <div className="footercontent">
            All rights reserved. Powered by Digital Insects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
