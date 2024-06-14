import "./footer.css";
import img from "../../images/logo.png";

function Footer() {
  return (
    <div className="container-fluid main-footer text-center">
      {" "}
      {/* Added text-center class */}
      <div className="row">
        <div className="col-lg-3 image-widget mt-4">
          <img src={img} alt="" width={"180px"} height={"100px"} />
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint{" "}
          </p>
        </div>

        <div className="col-lg-3 widget px-5">
          <h5>Quick Links</h5> <br />
          <p>About</p>
          <p>Contact</p>
          <p>Career</p>
          <p>CSR Policy</p>
          <p>Our Brand</p>
        </div>
        <div className="col-lg-3 widget">
          <h5>Products</h5> <br />
          <p>Biochemistry</p>
          <p>Heamotology</p>
          <p>POC</p>
          <p>Electrolyte</p>
          <p>Clinical Micorbiology</p>
          <p>Pre Analytical Automation</p>
          <p>COVID 19</p>
        </div>
        <div className="col-lg-3 widget">
          <h5>Others</h5> <br />
          <p>Help and Support</p>
          <p>Resources</p>
          <p>Residential Address</p> {/* Corrected spelling of Residential */}
          <p>Cookie Preferences</p> {/* Corrected spelling of Preferences */}
          <p>Corporate Address</p>
        </div>
      </div>
      <hr style={{}} />
      <div className="row">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          {/* Center-align social media icons */}
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-youtube"></a>
          <a href="#" className="fa fa-instagram"></a>
        </div>
      </div>
      <p style={{ float: "right", position: "relative", top: "-50px" }}>
        Everlife CPC 2024 &#169; All rights reserved
      </p>
    </div>
  );
}

export default Footer;
