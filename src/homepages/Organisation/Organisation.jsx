import React, { useEffect, useState } from "react";
import organisation1 from "../../images/organisation/organisation1.png";
import organisation2 from "../../images/organisation/organisation2.png";
import organisation3 from "../../images/organisation/organisation3.png";
import "./organisation.css";
import Heading from "./Heading";
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
  console.log(scrollY);
  //   useEffect(() => {
  // Optionally, you can log or do something with scrollY here

  //     // Example of how you might conditionally use scrollY value
  //     if (scrollY > 100) {
  //       // Do something when scrollY is greater than 100
  //     }
  //   }, [scrollY]);

  return (
    <>
      <Heading />
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
        {/* rightSide */}
        <div className="flex-1 flex justify-center items-center  font-poppins">
          <div
            className=""
            style={
              scrollY > 3900 && scrollY < 5520
                ? {
                    top: "100px",
                    position: "fixed",
                    transition:
                      "position 1s ease-in-out, opacity 1s ease-in-out",
                  }
                : scrollY >= 5520
                ? {
                    display: "none",
                    transition: "display 1s ease-in-out",
                  }
                : {
                    transition: "position 1s ease-in-out",
                  }
            }
          >
            <div className="flex gap-2 text-2xl text-black ">
              <p className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center">
                1
              </p>
              <p
                style={
                  scrollY > 3900 && scrollY < 4360
                    ? {
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "opacity 1s ease-in-out",
                      }
                }
              >
                Jeev
              </p>
            </div>
            <div className="flex justify-center items-center mt-2 ml-12 text-lg">
              <p
                className="h-32 w-[2px]  relative right-7 bottom-2 border-dotted border-3"
                style={
                  scrollY > 3900
                    ? {
                        background: "black",
                        transition: "background 1s ease-in-out",
                      }
                    : {
                        background: "gray",
                        opacity: 0.2,
                        transition: "background 1s ease-in-out",
                      }
                }
              ></p>
              <p
                className="max-w-sm text-justify"
                style={
                  scrollY > 3900 && scrollY < 4360
                    ? {
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "opacity 1s ease-in-out",
                      }
                }
              >
                Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
                Ltd, is a centre for learning life sciences. Sachika empowers
                clinicians by ...
              </p>
            </div>
          </div>

          <div
            className={`my-class-name ${
              scrollY > 3850 && scrollY < 5370 ? "fixed" : ""
            }`}
            style={
              scrollY > 3850 && scrollY < 5370
                ? {
                    top: "270px",
                    position: "fixed",
                    transition: "top 2s ease-in-out",
                  }
                : scrollY >= 5370
                ? {
                    display: "none",
                  }
                : {}
            }
          >
            <div className="flex gap-2 text-2xl text-black">
              <p
                style={scrollY > 4360 ? { opacity: 1 } : { opacity: 0.2 }}
                className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center"
              >
                2
              </p>
              <p
                style={
                  scrollY > 4360 && scrollY < 4940
                    ? {
                        opacity: 1,
                        transition: "background 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "background 1s ease-in-out",
                      }
                }
              >
                Jeev2
              </p>
            </div>
            <div className="flex justify-center items-center mt-1 ml-12 text-lg">
              <p
                className="h-28 w-[2px]  relative right-7 bottom-2 border-dotted border-3"
                style={
                  scrollY > 4360
                    ? {
                        background: "black",
                        transition: "background 1s ease-in-out",
                      }
                    : {
                        background: "gray",
                        opacity: 0.2,
                        transition: "background 1s ease-in-out",
                      }
                  // scrollY > 5367
                  //   ? {
                  //       opacity: 0,
                  //       transition: "opacity 0.5s ease-in-out",
                  //     }
                  //   : {}
                }
              ></p>
              <p
                className="max-w-sm text-justify"
                style={
                  scrollY > 4360 && scrollY < 4940
                    ? {
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "opacity 1s ease-in-out",
                      }
                  // ,
                  // scrollY > 5367
                  //   ? {
                  //       opacity: 0,
                  //       transition: "opacity 0.5s ease-in-out",
                  //     }
                  //   : {}
                }
              >
                Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
                Ltd, is a centre for learning life sciences. Sachika empowers
                clinicians by ...
              </p>
            </div>
          </div>
          <div
            className={`my-class-name ${
              scrollY > 3700 && scrollY < 5220 ? "fixed" : ""
            }`}
            style={
              scrollY > 3700 && scrollY < 5220
                ? {
                    top: "420px",
                    position: "fixed",
                    transition: "position 2s ease-in-out",
                  }
                : scrollY >= 5220
                ? {
                    display: "none",
                    transition: "display 2s ease-in-out",
                  }
                : {}
            }
          >
            <div
              className="flex gap-2 text-2xl text-black"
              style={
                scrollY > 4940
                  ? {
                      opacity: 1,
                      transition: "opacity 0.5s ease-in-out",
                    }
                  : {
                      opacity: 0.2,
                      transition: "opacity 0.5s ease-in-out",
                    }
                // scrollY > 5326
                //   ? {
                //       opacity: 0,
                //       transition: "opacity 0.5s ease-in-out",
                //     }
                //   : {}
              }
            >
              <p className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center">
                3
              </p>
              <p>Jeev3</p>
            </div>
            <div
              className="flex justify-center items-center mt-0 ml-12 text-lg"
              style={
                scrollY > 4940
                  ? {
                      opacity: 1,
                      transition: "opacity 0.5s ease-in-out",
                    }
                  : {
                      opacity: 0.2,
                      transition: "opacity 0.5s ease-in-out",
                    }
                // scrollY > 5220
                //   ? {
                //       opacity: 0,
                //       transition: "opacity 0.5s ease-in-out",
                //     }
                //   : {}
              }
            >
              <p className="max-w-sm text-justify">
                Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
                Ltd, is a centre for learning life sciences. Sachika empowers
                clinicians by ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organisation;
