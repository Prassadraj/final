import React from "react";
import image1 from "../../images/section2&3/image1.png";
import image2 from "../../images/section2&3/image2.png";
function Section3() {
  return (
    <div>
      <div className="section3 flex justify-around h-[100vh] items-center">
        <div className="left">
          <h1>Who We Are</h1>
        </div>
        <div className="right">
          <div className="relative">
            <img src={image1} alt="" />
            <div className="absolute top-0 right-96 bg-slate-400 w-52 h-52"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
