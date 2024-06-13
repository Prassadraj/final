import React, { useEffect, useState } from "react";
import organisation1 from "../../images/organisation/organisation1.png";
import organisation2 from "../../images/organisation/organisation2.png";
import organisation3 from "../../images/organisation/organisation3.png";

function Organisation() {
  const [screen, setScreen] = useState(0);

  const scroll = () => {
    setScreen(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  console.log(screen);

  return (
    <div className="h-[300vh] flex">
      <div className="flex-1 flex justify-center items-center flex-col">
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <img src={organisation1} alt="" />
          <p className="text-2xl font-poppins">Jeev</p>
        </div>
        <div className="h-[100vh] flex  flex-col justify-center items-center">
          <img src={organisation2} alt="" />
          <p className="text-2xl font-poppins">Sachika</p>
        </div>
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <img src={organisation3} alt="" />
          <p className="text-2xl font-poppins">Jeev</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-sky-100">
        <div className="fixed top-52">
          <p>dfdf</p>
        </div>
        <div className="fixed top-64">
          <p>jhfjhfj</p>
        </div>
        <div className="fixed top-80">
          <p>jhfjhfj</p>
        </div>
      </div>
    </div>
  );
}

export default Organisation;
