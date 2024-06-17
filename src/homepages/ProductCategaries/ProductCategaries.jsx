import React from "react";
import Marquee from "react-fast-marquee";
import chemistry from "../ProductCategaries/GIF/chemistry.gif";

function ProductCategaries() {
  return (
    <div className="bg-[#0082c7] h-[100vh] flex justify-center items-center">
      {/* container */}
      <div className="flex w-full">
        {/* left */}
        <div className="flex flex-col flex-[1.5] gap-10 pl-16 pt-12 mt-36">
          <h1 className="text-4xl max-w-lg text-start font-poppins font-semibold">
            Product Categories
          </h1>
          <h2 className="text-xl max-w-lg text-start font-poppins">
            Our Area Of Expertise Research-based innovative and quality
            products.
          </h2>
          <button className="text-left text-xl bg-white font-poppins w-fit pl-3 pr-3 pt-2 pb-2 rounded-md">
            Explore Products
          </button>
        </div>
        {/* right */}
        <div className="flex-1 flex relative text-2xl bg-slate-300 w-full h-screen">
          <div className=" w-[15vw] h-screen flex items-center">
            <Marquee direction="up" pauseOnHover={true}>
              {" "}
              {/* Adjust the velocity as needed */}
              <div>
                <p>prassad</p>
                <p>prassad</p>
                <p>prassad</p>
              </div>
            </Marquee>
          </div>
          <div className="w-[15vw] h-screen flex items-center">
            <Marquee direction="down" velocity={10}>
              {" "}
              {/* Adjust the velocity as needed */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-center justify-center p-2 text-center bg-white rounded-md">
                  <img src={chemistry} width="50px" alt="" />
                  <p>Bio-Chemistry</p>
                </div>
                <div className="flex flex-col items-center justify-center p-2 text-center bg-white rounded-md">
                  <img src={chemistry} width="50px" alt="" />
                  <p>Bio-Chemistry</p>
                </div>
                <div className="flex flex-col items-center justify-center p-2 text-center bg-white rounded-md">
                  <img src={chemistry} width="50px" alt="" />
                  <p>Bio-Chemistry</p>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategaries;
