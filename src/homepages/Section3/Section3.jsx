import React from "react";
import image1 from "../../images/section2&3/image1.png";
import image2 from "../../images/section2&3/image2.png";
function Section3() {
  return (
    <div>
      <div className="section3">
        <div className="left"></div>
        <div className="right">
          <div className="relative">
            <img src={image1} alt="" />
            <div className="absolute">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
