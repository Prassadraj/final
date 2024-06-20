import React, { useEffect, useState } from "react";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";
import "./organisation.css";
import Heading from "./Heading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import organisationBG from "./OrganisationBG.png";

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animations
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start animation when top of element reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of element reaches 20% of viewport height
          scrub: true, // Smooth animation scrubbing
        },
      });
    });

    // Image animations
    gsap.utils.toArray(".image").forEach((image) => {
      gsap.from(image, {
        scale: 0,
        duration: 1,
        delay: 0.5,
        clipPath: "polygon (0% 100%,100% 100%,100% 0%,0% 0%)",
        opacity: 0,
        ease: "power3.out",
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: image,
          start: "top 100%", // Start animation when top of image reaches 100% of viewport height
          end: "center center", // End animation when image is at the center of viewport
          scrub: true,
        },
      });
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Heading />
      <div className="h-[300vh] flex">
        <div className="w-[50vw] bg-black flex justify-center items-center flex-col">
          <div className="h-[100vh] flex flex-col justify-center items-center">
            <img src={organisation1} alt="" width="200px" className="image" />
          </div>
          <div className="h-[100vh] flex flex-col justify-center items-center">
            <img src={organisation2} alt="" width="200px" className="image" />
          </div>
          <div className="h-[100vh] flex flex-col justify-center items-center">
            <img src={organisation3} alt="" width="200px" className="image" />
          </div>
        </div>
        {/* rightSide */}
        <div className="w-[50vw] flex justify-end items-center font-poppins pr-10">
          <div
            className=""
            style={
              scrollY > 3900 && scrollY < 5480
                ? {
                    top: "10vh",
                    left: "50vw",
                    position: "fixed",
                    transition:
                      "position 1s ease-in-out, opacity 1s ease-in-out",
                  }
                : scrollY >= 5480
                ? {
                    display: "none",
                    transition: "display 1s ease-in-out",
                  }
                : {
                    transition: "position 1s ease-in-out",
                  }
            }
          >
            <div className="flex gap-2 text-2xl text-black">
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
            <div className="flex justify-end items-center mt-2 text-lg pr-10">
              {/* <p
                className="h-36 w-[2px] relative right-7 bottom-1 border-dotted border-3"
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
                }
              ></p> */}
              <p
                className="max-w-lg min-w-xs text-justify pl-12"
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
                Jeev Diagnostics Pvt. Ltd. is a collaborative venture between
                Awareness Technology Inc. (USA) and CPC Diagnostics Pvt. Ltd.
                (India), focusing on cutting-edge in vitro clinical chemistry
                reagents.
              </p>
            </div>
          </div>

          <div
            style={
              scrollY > 3850 && scrollY < 5330
                ? {
                    top: "43vh",
                    left: "50vw",
                    position: "fixed",
                    transition: "top 2s ease-in-out",
                  }
                : scrollY >= 5330
                ? {
                    display: "none",
                    transition: "display 1s ease-in-out",
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
                        transition: "opacity 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "opacity 1s ease-in-out",
                      }
                }
              >
                Sachika
              </p>
            </div>
            <div className="flex justify-end items-center mt-1 text-lg pr-10">
              {/* <p
                className="h-28 w-[2px] relative right-7 bottom-2 border-dotted border-3"
                style={
                  scrollY > 4940
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
              ></p> */}
              <p
                className="max-w-lg min-w-xs text-justify pl-12"
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
                }
              >
                Sachika, an initiative by CPC Diagnostics Pvt. Ltd., focuses on
                life sciences education, empowering clinicians with contemporary
                bioscience skills.
              </p>
            </div>
          </div>
          <div
            style={
              scrollY > 3700 && scrollY < 5240
                ? {
                    top: "70vh",
                    left: "50vw",
                    position: "fixed",
                    transition: "position 2s ease-in-out",
                  }
                : scrollY >= 5240
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
              }
            >
              <p className="bg-transparent border-2 border-solid border-gray-500 h-10 w-10 text-center rounded-full flex items-center justify-center">
                3
              </p>
              <p>CPC Med Sys</p>
            </div>
            <div
              className="flex justify-end items-center mt-0 text-lg pr-10"
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
              }
            >
              <p
                className="max-w-lg min-w-xs text-justify mt-2 pl-12"
                style={
                  scrollY > 4940
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
                CPC Med Sys specializes in medical systems, offering advanced
                healthcare solutions and equipment to improve patient care
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organisation;
