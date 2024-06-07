import React, { useEffect } from "react";
import image1 from "../../images/section2&3/image1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "../../images/section2&3/image2.png";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  useEffect(() => {
    // Background animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#bg1",
          start: "top 70%",
          end: "center",
          scrub: 3,
        },
      })
      .from("#bg1", {
        x: "20px",
      })
      .to("#bg1", {
        x: "0px",
      });

    // Text animations
    const texts = document.querySelectorAll(".text1");
    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0.5, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 80%",
            scrub: true,
          },
          delay: index * 0.5,
        }
      );
    });
    gsap.fromTo(
      ".header1",
      {
        opacity: 0,
        skewX: 45,
        x: -100,
      },
      {
        opacity: 1,
        skewX: 0,
        x: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: ".header1",
        stagger: {
          amount: 1,
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="section3 flex justify-around h-[100vh] pt-20 pl-20 pr-20 ">
        <div className="flex flex-col pt-20">
          <div className="mb-5">
            <p
              className="font-bold text-gray-900 text-3xl header1"
              style={{
                fontFamily: "Poppins",
              }}
            >
              Who We Are?
            </p>
          </div>
          <div className="w-[50vw] textbox">
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Everlife CPC Diagnostics is a premier medical
              </p>
            </div>
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                laboratory equipment supplier in India,
              </p>
            </div>
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                providing a comprehensive range of in vitro
              </p>
            </div>
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                diagnostic (IVD) solutions.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="btn1 pt-2 pb-2 pl-7 pr-7 w-52 text-[#00A786] hover:bg-[#00a986] hover:text-white"
              style={{
                border: "2px solid #00A786",
              }}
            >
              View Our Products
            </button>
          </div>
        </div>
        <div className="right">
          <div
            id="image1"
            className="relative w-[30vw] h-[50vh] top-0 right-10 rounded-2xl z-10"
          >
            <img
              src={image1}
              alt="Description of image1"
              className="animate-leftRight"
            />
          </div>
          <div
            style={{ marginRight: "50px", marginTop: "-330px" }}
            id="bg1"
            className="animate-rightUp relative w-[30vw] h-[60vh] rounded-2xl bg-gradient-to-t from-custom-green to-gray-200"
          ></div>
        </div>
      </div>

      {/* section4 */}
      <div className="section4 flex justify-around h-[100vh] pt-20 pl-20 pr-20">
        <div className="left mr-10">
          <div
            id="image1"
            className=" relative w-[30vw] h-[50vh] top-10 left-10 rounded-2xl z-10"
          >
            <img
              src={image2}
              alt="Description of image1"
              className="animate-rightDown rounded-lg"
            />
          </div>
          <div
            style={{ marginRight: "90px", marginTop: "-310px" }}
            id="bg1"
            className="animate-leftUp relative w-[30vw] h-[60vh] rounded-2xl bg-gradient-to-t from-custom-green to-gray-200"
          ></div>
        </div>
        <div className="flex flex-col pt-20 ml-10">
          <div className="mb-5">
            <p
              className="font-bold text-gray-900 text-3xl header1"
              style={{
                fontFamily: "Poppins",
              }}
            >
              Who We Are?
            </p>
          </div>
          <div className="w-[50vw] textbox">
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Everlife CPC Diagnostics is a premier medical
              </p>
            </div>
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                laboratory equipment supplier in India,
              </p>
            </div>
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                providing a comprehensive range of in vitro
              </p>
            </div>
            <div className="text1 overflow-hidden">
              <p
                className="text-2xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                diagnostic (IVD) solutions.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="btn1 pt-2 pb-2 pl-7 pr-7 w-52 text-[#00A786] hover:bg-[#00a986] hover:text-white"
              style={{
                border: "2px solid #00A786",
              }}
            >
              View Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;