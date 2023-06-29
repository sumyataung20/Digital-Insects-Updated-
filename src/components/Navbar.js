import React from "react";
import { useEffect } from "react";
import "../App.css";

import logo from "../images/Logo.png";

function Navbar() {
  useEffect(() => {
    const myNav = document.getElementById("navbaranimation");

    window.onscroll = function () {
      if (
        document.body.scrollTop >= 300 ||
        document.documentElement.scrollTop >= 300
      ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
      } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
    };
    const links = document.querySelectorAll(".navbar-nav,.nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    const handleLinkClick = () => {
      navbarCollapse.classList.remove("show");
    };

    const handleClickOutside = (event) => {
      if (
        !navbarCollapse.contains(event.target) &&
        navbarCollapse.classList.contains("show")
      ) {
        navbarCollapse.classList.remove("show");
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    document.addEventListener("click", handleClickOutside);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });

      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="navposition" style={{ position: "fixed" }}>
      <div>
        <nav
          className="navbar navbar-expand-xl navbar-light "
          id="navbaranimation"
        >
          <div className="container">
            <a className="navbar-brand logo-container" href="/">
              <img
                src={logo}
                alt="logo"
                className="logo"
                style={{ marginTop: "auto", marginBottom: "auto" }}
              />
            </a>
            <button
              className="navbar-toggler ml-auto custom-toggler navbutton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span
                className="navbar-toggler-icon"
                style={{
                  width: "30px",

                  outline: "none",
                }}
              ></span> */}

              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li
                  className="nav-item"
                  style={{
                    padding: "5px 20px",
                  }}
                >
                  <a
                    className="item"
                    href="#home"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    padding: "5px 20px",
                  }}
                >
                  <a
                    className="item"
                    href="#service"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    Service
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    padding: "5px 20px",
                  }}
                >
                  <a
                    className="item"
                    href="#packages"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    Packages
                  </a>
                </li>

                <li
                  className="nav-item"
                  style={{
                    padding: "5px 20px",
                  }}
                >
                  <a
                    className="item"
                    href="#aboutus"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    About Us
                  </a>
                </li>

                <li
                  className="nav-item navitemlast"
                  style={{
                    padding: "5px 20px",
                  }}
                >
                  <a
                    className="item"
                    href="#contactus"
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
