import React from "react";
import Transition from "../Transition/Transition";
import logo from "../../images/logo.png";
import "./home.css";
import Slider from "../Slider/Slider";
import Scroll from "../Scroll/Scroll";
import ZoomEffect from "../ZoomEffect/ZoomEffect";
import ScrollParallex from "../../pages/ScrollParallex/ScrollParallex";
import Section2 from "../../homepages/Section2/Section2";

function Home() {
  return (
    <div className="">
      <div className="section1 flex h-full overflow-hidden">
        <div className="left " style={{ flex: 1, marginLeft: "70px" }}>
          <p
            id="headline"
            style={{
              fontSize: "45px",
              color: "#56575D",
              lineHeight: "1.2",
            }}
            className="font-sans"
          >
            Medical Laboratory <br />
            Equipment Supplier in India
          </p>
          <div
            className="description "
            style={{ width: "490px", fontFamily: "Poppins" }}
          >
            <p className="">
              Discover our top-quality medical laboratory equipment, tailored
              for hospitals and diagnostic labs across India.
            </p>
          </div>
          <div className="buttons flex gap-5">
            <button
              className="btn1 pt-3 pb-3 pl-7 pr-7 w-56"
              style={{ background: "#00A786", color: "white" }}
            >
              Explore product
            </button>
            <button
              className="btn1 pt-3 pb-3 pl-7 pr-7 w-52 text-[#00A786] hover:bg-[#00a986] hover:text-white"
              style={{
                border: "2px solid #00A786",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className=" overflow-hidden" style={{ flex: 1 }}>
          <div className="">
            <Slider />
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="section2">
        <Section2 />
      </div>
      {/* section3 */}
      <div className="section3"></div>
      <div>
        {/* section5 */}
        <div style={{ marginBottom: "10vh" }}>
          <ZoomEffect />
        </div>
      </div>
      <div>
        <ScrollParallex />
      </div>
    </div>
  );
}

export default Transition(Home);
