import React, { useEffect, useState } from "react";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";
import "./organisation.css";
import Heading from "./Heading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import TsParticle from "../../component/Tsparticle/TsParticle";

const Organisation = () => {
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

    gsap.fromTo(
      ".bg",
      {
        width: 0,
        opacity: 0,
      },
      {
        scrollTrigger: ".bg",
        width: "100%",
        opacity: 1,
      }
    );

    AOS.init();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="bg-black">
      {/* <TsParticle /> */}

      <>
        <Heading />

        <div className="h-[300vh] flex bg">
          <div className="w-[50vw] flex justify-center items-center flex-col">
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
          <div className="w-[50vw] flex justify-end items-center font-poppins pr-10">
            {/* Content 1 */}
            <div
              className="rightside"
              style={{
                top: scrollY > 3900 && scrollY < 5480 ? "10vh" : "initial",
                left: "50vw",
                position:
                  scrollY > 3900 && scrollY < 5480 ? "absolute" : "relative",
                transition: "position 1s ease-in-out, opacity 1s ease-in-out",
                display: scrollY >= 5480 ? "none" : "block",
              }}
            >
              <div className="flex gap-2 text-2xl text-custom-green">
                <p className="bg-transparent border-2 border-solid border-custom-green h-10 w-10 text-center rounded-full flex items-center justify-center">
                  1
                </p>
                <img
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
                  src={organisation1}
                  width="70wv"
                  alt=""
                />
              </div>
              <div className="flex justify-end items-center mt-2 text-lg pr-10">
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
              <div
                style={
                  scrollY > 4360
                    ? {
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "opacity 1s ease-in-out",
                      }
                }
                className="w-[2px] h-[25vh] bg-custom-green relative -top-[20vh] left-[3vh]"
              ></div>
            </div>
            {/* Content 2 */}
            <div
              className="rightside"
              style={{
                top: scrollY > 3850 && scrollY < 5330 ? "43vh" : "initial",
                left: "50vw",
                position:
                  scrollY > 3850 && scrollY < 5330 ? "absolute" : "relative",
                transition: "top 2s ease-in-out",
                display: scrollY >= 5330 ? "none" : "block",
              }}
            >
              <div className="flex gap-2 text-2xl text-custom-green">
                <p
                  style={scrollY > 4360 ? { opacity: 1 } : { opacity: 0.2 }}
                  className="bg-transparent border-2 border-solid border-custom-green h-10 w-10 text-center rounded-full flex items-center justify-center"
                >
                  2
                </p>
                <img
                  src={organisation2}
                  width="70wv"
                  alt=""
                  style={scrollY > 4360 ? { opacity: 1 } : { opacity: 0.2 }}
                />
              </div>
              <div className="flex justify-end items-center mt-2 text-lg pr-10">
                <p
                  className="max-w-lg min-w-xs text-justify pl-12"
                  style={scrollY > 4360 ? { opacity: 1 } : { opacity: 0.2 }}
                >
                  Awareness Technology is a market leader in semi-automated
                  systems for Clinical Diagnostics, offering comprehensive
                  laboratory instrumentation and immunoassay test kits to over
                  100 countries worldwide.
                </p>
              </div>
              <div
                style={
                  scrollY > 4780
                    ? {
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transition: "opacity 1s ease-in-out",
                      }
                }
                className="w-[2px] h-[25vh] bg-custom-green relative -top-[20vh] left-[3vh]"
              ></div>
            </div>
            {/* Content 3 */}
            <div
              className="rightside"
              style={{
                top: scrollY > 5280 && scrollY < 5480 ? "75vh" : "initial",
                left: "50vw",
                position:
                  scrollY > 5280 && scrollY < 5480 ? "absolute" : "relative",
                transition: "top 1.5s ease-in-out",
                display: scrollY >= 5480 ? "none" : "block",
              }}
            >
              <div className="flex gap-2 text-2xl text-custom-green">
                <p
                  style={scrollY > 4780 ? { opacity: 1 } : { opacity: 0.2 }}
                  className="bg-transparent border-2 border-solid border-custom-green h-10 w-10 text-center rounded-full flex items-center justify-center"
                >
                  3
                </p>
                <img
                  src={organisation3}
                  width="70wv"
                  alt=""
                  style={scrollY > 4780 ? { opacity: 1 } : { opacity: 0.2 }}
                />
              </div>
              <div className="flex justify-end items-center mt-2 text-lg pr-10">
                <p
                  className="max-w-lg min-w-xs text-justify pl-12"
                  style={scrollY > 4780 ? { opacity: 1 } : { opacity: 0.2 }}
                >
                  CPC Diagnostics, a leading provider of In-Vitro Diagnostics
                  solutions in India, collaborates with renowned international
                  manufacturers to offer a comprehensive range of diagnostic
                  products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Organisation;
