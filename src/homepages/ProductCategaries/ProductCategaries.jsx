import React from "react";
import Marquee from "react-fast-marquee";
import chemistry from "../ProductCategaries/GIF/chemistry.gif";
import pieChart from "../ProductCategaries/GIF/pie-chart.gif";
import medicine from "../ProductCategaries/GIF/medicine.gif";
import mask from "../ProductCategaries/GIF/surgical-mask.gif";
import microbiology from "../ProductCategaries/GIF/Clinical microbiology.gif";
import covid from "../ProductCategaries/GIF/covid 19.gif";
import electrolyte from "../ProductCategaries/GIF/electrolyte.gif";
import heamatology from "../ProductCategaries/GIF/heamatology.gif";
import care from "../ProductCategaries/GIF/Point of care.gif";
import Immunology from "../ProductCategaries/GIF/Immunology.gif";
import PreAnalytical from "../ProductCategaries/GIF/Pre-analytical-automation.gif";
import BioChemistry from "../ProductCategaries/GIF/Bio Chemistry.gif";

const categoryItems = [
  { name: "Biochemistry", image: chemistry },
  { name: "Haematology", image: pieChart },
  { name: "Point of Care", image: medicine },
  { name: "COVID 19", image: mask },
  { name: "Immunology", image: microbiology },
  { name: "Electrolyte", image: covid },
  { name: "Clinical Microbiology", image: electrolyte },
  { name: "Pre-Analytical Automation", image: heamatology },

  // Add other category items here
];
const categoryItems2 = [
  { name: "COVID 19", image: covid },
  { name: "Immunology", image: Immunology },
  { name: "Point of Care", image: care },
  { name: "Electrolyte", image: covid },
  { name: "Clinical Microbiology", image: electrolyte },
  { name: "Biochemistry", image: BioChemistry },
  { name: "Pre-Analytical Automation", image: PreAnalytical },

  // Add other category items here
];

function ProductCategaries() {
  return (
    <div className="bg-[#0082c7] h-[100vh] flex justify-center items-center">
      {/* Container */}
      <div className="flex w-full">
        {/* Left Section */}
        <div className="flex flex-col flex-[1.5] gap-3 pl-24 pt-12 mt-32">
          {/* <h1 className="text-4xl max-w-lg text-start font-poppins font-semibold"></h1> */}
          <div className="text-white" style={{ lineHeight: "3px" }}>
            <p
              className="text-6xl max-w-lg text-start font-poppins font-semibold"
              // style={{
              //   background: "linear-gradient(to right, white, black)",
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
            >
              Product
            </p>
            <p className="text-6xl max-w-lg text-start font-poppins font-semibold">
              Categories
            </p>
          </div>
          <h2 className="text-xl max-w-lg text-start font-poppins">
            Explore our diverse range of laboratory equipment for all your
            medical and diagnostic needs.
          </h2>
          <button
            className="text-left text-[#0082c7] text-xl bg-white font-poppins w-fit pl-3 pr-3 pt-2 pb-2 rounded-md
          font-medium hover:scale-90 transition-all"
          >
            Explore Products
          </button>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex relative text-2xl w-full h-screen">
          <div className="w-[15vw] h-screen flex justify-center">
            <div className="flex items-center">
              <Marquee
                direction="up"
                pauseOnHover
                className="flex gap-3"
                speed={30}
              >
                {categoryItems2.map((item) => (
                  <div
                    style={{ margin: "10px 10px" }}
                    key={item.name}
                    className="flex flex-col-reverse items-center justify-center pt-4 pb-4 pr-8 pl-8 text-center bg-white rounded-xl gap-2 w-[11vw]"
                  >
                    <img width="70px" src={item.image} alt={item.name} />
                    <p className="text-sm font-semibold font-poppins truncate max-w-[9vw]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <div className="w-[15vw] h-screen flex justify-center">
            <div className="flex items-center">
              <Marquee
                direction="down"
                pauseOnHover
                className="flex gap-3"
                speed={30}
              >
                {categoryItems.map((item) => (
                  <div
                    style={{ margin: "10px 10px" }}
                    key={item.name}
                    className="flex flex-col items-center justify-center pt-4 pb-4 pr-8 pl-8 text-center bg-white rounded-xl gap-2 w-[11vw]"
                  >
                    <img width="70px" src={item.image} alt={item.name} />
                    <p className="text-sm font-semibold font-poppins truncate max-w-[9vw]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategaries;
