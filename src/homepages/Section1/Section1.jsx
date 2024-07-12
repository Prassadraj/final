import React, { useEffect } from "react";
import Slider from "../../component/Slider/Slider";
import TsParticle from "../../component/Tsparticle/TsParticle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

function Section1() {
  useEffect(() => {
    Splitting();
    gsap.registerPlugin(ScrollTrigger);

    // Button animation
    gsap.fromTo(
      ".btn1",
      {
        skewX: 65,
        opacity: 0,
      },
      {
        opacity: 1,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".btn1",
          once: true, // Play animation only once
          stagger: {
            amount: 1,
          },
        },
      }
    );

    // Subtitle animation
    gsap.from(".subTitle", {
      duration: 1,
      opacity: 0,
      y: 120,
      scrollTrigger: {
        trigger: ".subTitle",
        once: true, // Play animation only once
        stagger: 1,
      },
    });

    // Character animation
    gsap.from(".char", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".char",
        once: true, // Play animation only once
      },
    });
  }, []);

  return (
    <div className="section1 md:flex md:flex-row grid grid-cols-1 justify-center items-center h-full w-full overflow-hidden">
      <div className="flex-1 md:w-1/2 w-full mt-0 sm:mt-24 sm:ml-4 lg:ml-14 px-4 sm:px-0">
        {/* <TsParticle /> */}
        <p
          id="headline"
          style={{
            color: "#56575D",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="font-poppins text-2xl md:text-3xl"
          data-splitting="chars"
        >
          Medical Laboratory
        </p>
        <p
          id="headline"
          style={{
            color: "#56575D",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="font-poppins text-2xl md:text-3xl w-full md:w-[50vw]"
          data-splitting="chars"
        >
          Equipment Supplier in India
        </p>
        <div className="description" style={{ fontFamily: "Poppins" }}>
          <p
            className="subTitle text-sm md:text-xl w-full md:w-[40vw]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            Discover our top-quality medical laboratory equipment, tailored for
            hospitals and diagnostic labs across India.
          </p>
        </div>
        <div className="buttons flex gap-1 justify-start">
          <button
            className="btn1 w-auto h-auto px-4 py-2 text-sm lg:text-lg whitespace-nowrap"
            style={{ background: "#00A786", color: "white" }}
          >
            Explore product
          </button>
          <button
            className="btn1 w-auto h-auto px-4 py-2 text-sm whitespace-nowrap text-[#00A786] hover:bg-[#00a986] hover:text-white lg:text-lg"
            style={{
              border: "2px solid #00A786",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex-1 md:w-1/2 w-full overflow-hidden mt-0 md:mt-0">
        <div className="animate-bouncing">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Section1;
