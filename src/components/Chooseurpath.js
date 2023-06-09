import React from "react";
import "../App.css";
const ChooseYourPath = () => {
  return (
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
                  fontWeight: 600,
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
                  fontFamily: "NumFont",
                  color: "#FFFFFF",
                  textAlign: "center",
                  letterSpacing: "1px",
                  fontSize: "25px",
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
                  fontWeight: 700,
                  textAlign: "center",

                  flexWrap: "nowrap",
                  paddingBottom: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                // className="choosetitle"
              >
                Looking for an affordable yet perfect web solution? Our Initial
                Package is suitable for you!
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
                  fontWeight: 600,
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
                  fontFamily: "NumFont",
                  color: "#FFFFFF",
                  textAlign: "center",
                  letterSpacing: "1px",
                  fontSize: "25px",
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
                  fontWeight: 700,
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
                  fontWeight: 600,
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
                  fontFamily: "NumFont",
                  color: "#FFFFFF",
                  textAlign: "center",
                  letterSpacing: "1px",
                  fontSize: "25px",
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
                  fontWeight: 700,
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
    </div>
  );
};

export default ChooseYourPath;
