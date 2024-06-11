import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <div className="container" id="footer-abs">
        <div className="row">
          <div className="col-lg-6">
            <h3>Send us a message</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              cupiditate dolore illo dignissimos a deleniti ex, quos
            </p>
          </div>
          <div className="col-lg-6">
            <input type="text" placeholder="email" id="email-foot" />
            <button id="email-btn">Send</button>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-4"
        style={{
          background: "aquamarine",
          padding: "40px",
          marginTop: "100px",
        }}
      >
        <div className="row">
          <div className="col-lg-3 mt-4">
            <img
              src="cpc-logo.png"
              alt="cpc-logo"
              style={{ width: "100px", height: "60px" }}
            />
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
          </div>
          <div className="col-lg-3 mt-4">
            <h4>Quick Links</h4>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                About us
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Contact us
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Career{" "}
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                CSR Policy
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Our Brands
              </a>
            </p>
          </div>
          <div className="col-lg-3 mt-4">
            <h4>Products</h4>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Biochemistry
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Haemotology
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                POC{" "}
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Electrolyte
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Clinical Microbiology
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Pre Analytical Automation
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                COVID 19
              </a>
            </p>
          </div>
          <div className="col-lg-3 mt-4">
            <h4>Others</h4>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Help and Support
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Resources
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Resdential address{" "}
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Cookie prefrences
              </a>
            </p>
            <p>
              <a href="" style={{ textDecoration: "none", color: "black" }}>
                Our Brands
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-youtube"></a>
            <a href="#" className="fa fa-instagram"></a>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            EverLife CPC 2024 &copy; All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
