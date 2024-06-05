import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollParallax() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    gsap.to("#panel2", {
      scale: 1.3,
      scrollTrigger: {
        trigger: "#panel2",
        start: "50px 90%",

        markers: true,

        scrub: 1,
      },
    });
  }, []);

  return (
    <div>
      <div className="panel h-screen bg-red-400 flex justify-center items-center text-3xl">
        <div>page1</div>
      </div>
      <div
        id="panel2"
        className="panel h-screen bg-yellow-300 flex justify-center items-center text-3xl scale-75"
      >
        page2
      </div>
    </div>
  );
}

export default ScrollParallax;
