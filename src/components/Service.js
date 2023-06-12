import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import "../App.css";
const Service = () => {
  return (
    <div className="servicecontainer" id="service">
      <div className="container">
        <div className="row">
          <div className="svtitle">
            <p>Our Services</p>
          </div>
          <div className="svcontent">
            <p>
              We offer comprehensive solutions tailored to your unique business
              needs, including web design, development, and optimization to
              create stunning, user-friendly websites that drive results.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-10 col-md-6 col-lg-3 card-container mx-auto mb-xs-4 mb-sm-5 mb-md-3">
            <div
              className="card w-80 h-100 pricingcards2"
              style={{
                backgroundColor: "rgba(35, 34, 34, 0.67)",
                border: "1px solid rgba(235, 171, 97, 0.81)",
              }}
            >
              <img src={card1} alt="card1" className="serviceimg" />
              <div className="card-body">
                <h2
                  className="title1"
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                >
                  Website Design and Development
                </h2>
                <p className="cardtext">
                  We create custom websites tailored to your specific needs and
                  goals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-lg-3 mx-auto card-container mb-xs-4 mb-sm-4 mb-md-3">
            <div
              className="card w-80 h-100 pricingcards2"
              style={{
                backgroundColor: "rgba(35, 34, 34, 0.67)",
                border: "1px solid rgba(235, 171, 97, 0.81)",
              }}
            >
              <img
                src={card2}
                alt="card2"
                className="serviceimg"
                style={{ paddingTop: "30px" }}
              />
              <div className="card-body">
                <h2 className=" title1" style={{ marginBottom: "10px" }}>
                  Website Maintenance and Support
                </h2>
                <p className="cardtext">
                  We provide ongoing website maintence and support to ensure
                  your website stays up-to-date and secured
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-lg-3 mx-auto card-container mb-xs-4 mb-sm-4 mb-md-3">
            <div
              className="card w-80 h-100 pricingcards2"
              style={{
                backgroundColor: "rgba(35, 34, 34, 0.67)",
                border: "1px solid rgba(235, 171, 97, 0.81)",
              }}
            >
              <img
                src={card3}
                alt="card3"
                className="serviceimgseo"
                style={{ paddingTop: "30px" }}
              />
              <div className="card-body">
                <h2
                  className="title1"
                  style={{
                    marginTop: "12px",
                    marginBottom: "20px",
                  }}
                >
                  Search Engine Optimization (SEO)
                </h2>
                <p className="cardtext">
                  We use proven SEO strategies to improve your search engine
                  rankings and drive more traffic to your website.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-lg-3 mx-auto card-container mb-xs-4 mb-sm-4 mb-md-3">
            <div
              className="card w-80 h-100 pricingcards2"
              style={{
                backgroundColor: "rgba(35, 34, 34, 0.67)",
                border: "1px solid rgba(235, 171, 97, 0.81)",
              }}
            >
              <img
                src={card4}
                alt="card4"
                style={{ paddingTop: "30px" }}
                className="serviceimg"
              />
              <div className="card-body">
                <h2
                  className="title1"
                  style={{ marginTop: "10px", marginBottom: "15px" }}
                >
                  Website Hosting and Domain Registration
                </h2>
                <p className="cardtext">
                  We offer reliable website hosting and domain registration
                  services to ensure your website stays online and accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
