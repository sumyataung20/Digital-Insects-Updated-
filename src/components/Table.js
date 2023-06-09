import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import "../App.css";
const Table = () => {
  return (
    <div className="tablecontainer">
      <div className="container-xl">
        <div className="row">
          <h5 className="tabletitle">
            Take your business to the next level with our meticulously crafted
            website packages.
          </h5>
        </div>

        <div className="table-container">
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid rgba(164, 157, 157, 0.24)",
                  }}
                >
                  <th
                    style={{
                      width: "25%",
                      color: "var(--text-color1)",
                      backgroundColor: "rgba(1,1,1,0.50)",

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
                      backgroundColor: "rgba(1,1,1,0.50)",

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
                      backgroundColor: "rgba(1,1,1,0.50)",

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
                      backgroundColor: "rgba(1,1,1,0.50)",

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
  );
};

export default Table;
