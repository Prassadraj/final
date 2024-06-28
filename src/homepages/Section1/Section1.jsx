import React from "react";
import Slider from "../../component/Slider/Slider";
import TsParticle from "../../component/Tsparticle/TsParticle";

function Section1() {
  return (
    <div className="section1 md:flex md:flex-row grid grid-cols-1 justify-center items-center h-full w-full overflow-hidden">
      <div className="flex-1 md:w-1/2 w-full mt-0 sm:mt-24 sm:ml-4 lg:ml-14 px-4 sm:px-0">
        {/* <TsParticle /> */}
        <p
          id="headline"
          style={{
            color: "#56575D",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="font-poppins text-2xl md:text-5xl"
          data-splitting="chars"
        >
          Medical Laboratory
        </p>
        <p
          id="headline"
          style={{
            color: "#56575D",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="font-poppins text-2xl md:text-4xl w-full md:w-[50vw]"
          data-splitting="chars"
        >
          Equipment Supplier in India
        </p>
        <div className="description" style={{ fontFamily: "Poppins" }}>
          <p
            className="subTitle text-sm md:text-xl w-full md:w-[40vw]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            Discover our top-quality medical laboratory equipment, tailored for
            hospitals and diagnostic labs across India.
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
      <div
        className="flex-1 md:w-1/2 w-full overflow-hidden mt-0 md:mt-0"
        style={{ marginTop: "-20px" }}
      >
        <div className="animate-bouncing">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Section1;
