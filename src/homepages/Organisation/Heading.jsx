import React from "react";

function Heading() {
  return (
    <div className="flex flex-col justify-center items-center h-[30vh] gap-2">
      <h1 className="font-poppins text-3xl text-black font-semibold">
        Our Sister Organizations
      </h1>
      <p className=" font-poppins text-lg max-w-xl text-center">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
    </div>
  );
}

export default Heading;
