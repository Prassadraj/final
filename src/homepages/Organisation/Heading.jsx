import React from "react";

function Heading() {
  return (
    <div className="flex flex-col justify-center items-center h-[30vh] gap-2">
      <h1 className="font-poppins text-3xl text-black font-semibold">
        Our Sister Organizations
      </h1>
      <p className=" font-poppins text-lg max-w-xl text-center">
        Explore our network of affiliated companies that enhance healthcare
        globally.
      </p>
    </div>
  );
}

export default Heading;
