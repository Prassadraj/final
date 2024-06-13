import React, { useEffect, useState } from "react";
import organisation1 from "../../images/organisation/organisation1.png";
import organisation2 from "../../images/organisation/organisation2.png";
import organisation3 from "../../images/organisation/organisation3.png";

function Organisation() {
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  //   useEffect(() => {
  // Optionally, you can log or do something with scrollY here
  //     console.log(scrollY);
  //     // Example of how you might conditionally use scrollY value
  //     if (scrollY > 100) {
  //       // Do something when scrollY is greater than 100
  //     }
  //   }, [scrollY]);

  return (
    <div className="h-[300vh] flex">
      <div className="flex-1 flex justify-center items-center flex-col">
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <img src={organisation1} alt="" />
          <p className="text-2xl font-poppins">Jeev</p>
        </div>
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <img src={organisation2} alt="" />
          <p className="text-2xl font-poppins">Sachika</p>
        </div>
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <img src={organisation3} alt="" />
          <p className="text-2xl font-poppins">Jeev</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-sky-100">
        <div
          className=""
          style={
            scrollY > 7000
              ? {
                  top: "100px",
                  position: "fixed",
                  transition: "top 1s ease-in-out",
                }
              : {}
          }
        >
          <div className="flex gap-2 text-2xl">
            <p className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center">
              1
            </p>
            <p>Jeev</p>
          </div>
          <div className="flex justify-center items-center mt-2 ml-12 text-xl">
            <p className="max-w-sm text-justify">
              Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
              Ltd, is a centre for learning life sciences. Sachika empowers
              clinicians by ...
            </p>
          </div>
        </div>

        <div
          className={`my-class-name ${scrollY > 7100 ? "fixed" : ""}`}
          style={
            scrollY > 7000
              ? {
                  top: "250px",
                  position: "fixed",
                  transition: "top 2s ease-in-out",
                }
              : {}
          }
        >
          <div className="flex gap-2 text-2xl">
            <p className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center">
              2
            </p>
            <p>Jeev</p>
          </div>
          <div className="flex justify-center items-center mt-2 ml-12 text-xl">
            <p className="max-w-sm text-justify">
              Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
              Ltd, is a centre for learning life sciences. Sachika empowers
              clinicians by ...
            </p>
          </div>
        </div>
        <div
          className={`my-class-name ${scrollY > 7100 ? "fixed" : ""}`}
          style={
            scrollY > 7000
              ? {
                  top: "400px",
                  position: "fixed",
                  transition: "top 2s ease-in-out",
                }
              : {}
          }
        >
          <div className="flex gap-2 text-2xl">
            <p className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center">
              3
            </p>
            <p>Jeev</p>
          </div>
          <div className="flex justify-center items-center mt-2 ml-12 text-xl">
            <p className="max-w-sm text-justify">
              Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
              Ltd, is a centre for learning life sciences. Sachika empowers
              clinicians by ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organisation;
