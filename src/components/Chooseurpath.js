import React from "react";
import "../App.css";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ChooseYourPath = () => {
  return (
    <div>
      <div className="choosecontainer" id="packages">
        <div className="container">
          <div>
            <h2 className="successtitle">Choose Your Path To Success</h2>
            <p className="successcontent">
              We offer a range of customizable packages to cater to the specific
              needs and goals of businesses.
            </p>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-10 col-lg-4 mx-auto card-container2">
              <div
                className="card w-100 h-100"
                style={{
                  backgroundColor: "#1D1D1D",
                  border: " 1px solid var(--text-color4)",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontFamily: "Font3",
                    fontWeight: 200,
                    letterSpacing: "1px",
                    fontSize: "18px",
                    color: "var(--text-color1)",
                    padding: "20px 0",
                  }}
                >
                  Initial Package
                </div>
                <div
                  style={{
                    fontFamily: "Font3",
                    color: "#FFFFFF",
                    textAlign: "center",
                    letterSpacing: "1px",
                    fontSize: "22px",
                    marginBottom: "5px",
                  }}
                >
                  85,000
                </div>
                <p
                  style={{
                    fontFamily: "Font4",

                    fontSize: "14px",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  MMK/mo
                </p>
                <div
                  style={{
                    fontFamily: "Font2",
                    color: "var(--text-color3)",
                    fontWeight: 300,
                    textAlign: "center",

                    flexWrap: "nowrap",
                    paddingBottom: "30px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                  // className="choosetitle"
                >
                  Looking for an affordable yet perfect web solution? Our
                  Initial Package is suitable for you!
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-10 col-lg-4 mx-auto mb-xs-4 mb-sm-5 mb-md-5 card-container2">
              <div
                className="card w-100 h-100"
                style={{
                  backgroundColor: "#1D1D1D",
                  border: " 1px solid var(--text-color4)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontFamily: "Font3",
                    fontWeight: 200,
                    letterSpacing: "1px",
                    fontSize: "18px",
                    color: "var(--text-color1)",
                    padding: "20px 0",
                  }}
                >
                  Recommended Package
                </div>
                <span
                  className="text-uppercase text-black"
                  style={{
                    fontFamily: "Font1",
                    fontWeight: 900,
                    fontSize: "15px",
                    backgroundColor: "#9E763C",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",

                    top: -22,
                    padding: "5px 20px",
                  }}
                >
                  popular
                </span>
                <div
                  style={{
                    fontFamily: "Font3",
                    color: "#FFFFFF",
                    textAlign: "center",
                    letterSpacing: "1px",
                    fontSize: "22px",
                    marginBottom: "5px",
                  }}
                >
                  180,000
                </div>
                <p
                  style={{
                    fontFamily: "Font4",

                    fontSize: "14px",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  MMK/mo
                </p>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: "Font2",
                    color: "var(--text-color3)",
                    fontWeight: 300,
                    textAlign: "center",

                    flexWrap: "nowrap",
                    paddingBottom: "30px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Ready to take your online presence to the next level? Our
                  Recommended Package is perfect for you!
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-10 col-lg-4 mx-auto mb-xs-4 mb-sm-5 mb-md-5 card-container2">
              <div
                className="card w-100 h-100"
                style={{
                  backgroundColor: "#1D1D1D",
                  border: " 1px solid var(--text-color4)",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontFamily: "Font3",
                    fontWeight: 200,
                    letterSpacing: "1px",
                    fontSize: "18px",
                    color: "var(--text-color1)",
                    padding: "20px 0",
                  }}
                >
                  Premium Package
                </div>
                <div
                  style={{
                    fontFamily: "Font3",
                    color: "#FFFFFF",
                    textAlign: "center",
                    letterSpacing: "1px",
                    fontSize: "22px",
                    marginBottom: "5px",
                  }}
                >
                  300,000
                </div>
                <p
                  style={{
                    fontFamily: "Font4",

                    fontSize: "14px",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  MMK/mo
                </p>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: "Font2",
                    color: "var(--text-color3)",
                    fontWeight: 300,
                    textAlign: "center",

                    flexWrap: "nowrap",
                    paddingBottom: "30px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Looking for the ultimate online solution? Our Premium Package
                  offers everything you need!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ marginTop: "150px" }}>
          <div className="container-xl">
            <div className="row">
              <h5 className="tabletitle">
                Take your business to the next level with our meticulously
                crafted website packages.
              </h5>
            </div>

            <div className="table-container">
              <div className="table-scroll">
                <table className="table">
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                        borderTop: "1px solid rgba(164, 157, 157, 0.24)",
                        borderLeft: "1px solid rgba(164, 157, 157, 0.24)",
                        borderRight: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <th
                        style={{
                          width: "25%",
                          color: "var(--text-color1)",
                          backgroundColor: "#080707",

                          paddingTop: "18px",
                          paddingBottom: "18px",
                          paddingLeft: "30px",
                        }}
                        className="coltitle"
                      >
                        Features
                        <span className="custom-badge1">popular</span>
                      </th>

                      <th
                        style={{
                          width: "25%",
                          backgroundColor: "#080707",

                          paddingTop: "18px",
                          paddingBottom: "18px",
                          color: "var(--text-color1)",
                        }}
                        className="coltitle"
                      >
                        Initial Package
                        <span className="custom-badge1">popular</span>
                      </th>
                      <th
                        style={{
                          width: "28%",
                          backgroundColor: "#080707",

                          paddingTop: "18px",
                          paddingBottom: "18px",
                          color: "var(--text-color1)",

                          marginRight: "20px",
                        }}
                        className="coltitle"
                      >
                        Recommended Package
                        <FaStar
                          style={{ margin: "5px 10px", paddingBottom: "3px" }}
                        />
                      </th>
                      <th
                        style={{
                          width: "25%",
                          backgroundColor: "#080707",

                          paddingTop: "18px",
                          paddingBottom: "18px",
                          color: "var(--text-color1)",
                        }}
                        className="coltitle"
                      >
                        Premium Package
                        <span className="custom-badge1">popular</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Web pages
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Up to 10 pages
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 900,

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Up to 50 pages
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Unlimited pages
                      </td>
                    </tr>

                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Responsiveness
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>

                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Design
                      </td>

                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Standard
                      </td>

                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 900,

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Innovative
                      </td>

                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Tailored
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Social Media Integration
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>{" "}
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>{" "}
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Messenger Integration
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>{" "}
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>{" "}
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Content Management System
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        User Registration
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Team Management System
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Admin Portal
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Push notification
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaTimes style={{ color: "red" }} />
                      </td>
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",

                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        <FaCheck style={{ color: "green" }} />
                      </td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                      }}
                    >
                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          fontFamily: "Font2",
                          fontWeight: 500,
                          paddingLeft: "30px",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        Customer Support
                      </td>

                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          fontFamily: "Font2",
                          fontWeight: 500,
                        }}
                      >
                        Normal
                      </td>

                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          fontFamily: "Font2",
                          fontWeight: 900,
                        }}
                      >
                        Prioritized
                      </td>

                      <td
                        style={{
                          backgroundColor: "rgba(29,29,29,9)",
                          color: "var(--text-color1)",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          fontFamily: "Font2",
                          fontWeight: 500,
                        }}
                      >
                        24/7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPath;
