import React from "react";
import Marquee from "react-fast-marquee";
import chemistry from "../ProductCategaries/GIF/chemistry.gif";
import medicine from "../ProductCategaries/GIF/medicine.gif";
import pieChart from "../ProductCategaries/GIF/pie-chart.gif";
import Mask from "../ProductCategaries/GIF/surgical-mask.gif";

function ProductCategaries() {
  const categoryItems = [
    { image: Mask, name: "Mask" },
    { image: medicine, name: "Medicine" },
    { image: chemistry, name: "Chemistry" },
    { image: pieChart, name: "Pie Chart" },
  ];

  return (
    <div className="bg-[#0082c7] h-[100vh] flex justify-center items-center">
      {/* container */}
      <div className="flex w-full">
        {/* left */}
        <div className="flex flex-col flex-[1.5] gap-10 pl-16 pt-12 mt-36">
          <h1 className="text-5xl max-w-lg text-start font-poppins font-semibold">
            Product Categories
          </h1>
          <h2 className="text-2xl max-w-2xl text-start font-poppins">
            Our Area Of Expertise Research-based innovative and quality
            products.
          </h2>
          <button className="text-left text-xl bg-white font-poppins w-fit pl-3 pr-3 pt-2 pb-2 rounded-md">
            Explore Products
          </button>
        </div>
        {/* right */}
        <div className="flex-1 flex relative text-2xl  w-full h-screen ">
          <div className="w-[15vw] h-screen flex justify-center">
            <div className="flex items-center">
              <Marquee direction="down" pauseOnHover >
                {categoryItems.map((item) => (
                  
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center p-2 text-center bg-white rounded-xl"
                  >
                    <img width="70px" src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="w-[15vw] h-screen flex justify-center">
            <div className="flex items-center ">
              <Marquee direction="up" pauseOnHover className="flex gap-3">
                {categoryItems.map((item) => (
                  <div
                  style={{margin:"0px 10px"}}
                    key={item.name}
                    className="flex flex-col items-center justify-center p-2 text-center bg-white rounded-xl"
                  >
                    <img width="70px" src={item.image} alt={item.name} />
                    <p>{item.name}</p>
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
