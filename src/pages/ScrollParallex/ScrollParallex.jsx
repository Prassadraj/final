import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollParallax() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create ScrollTriggers for each panel to pin them in place
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    // Animate the scaling of panel2
    gsap.fromTo(
      "#panel2",
      { scale: 0 },
      {
        scale: 1,

        scrollTrigger: {
          trigger: "#panel2",
          start: "top bottom", // Start animation when top of panel2 hits bottom of viewport
          end: "top top", // End animation when top of panel2 hits top of viewport
          markers: true,
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      "#page",
      { x: "-200px" },
      {
        x: "300px", // Adjust the value to the desired amount of movement
        scrollTrigger: {
          trigger: "#panel2",
          start: "top 20%", // Start animation when top of panel2 hits bottom of viewport
          end: "top top", // End animation when top of panel2 hits top of viewport
          scrub: 3,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="panel h-screen bg-red-400 flex justify-center items-center text-3xl">
        <div>page1</div>
      </div>
      <div
        id="panel2"
        className="panel h-screen bg-yellow-300 flex justify-center items-center text-3xl"
      >
        <p id="page">page2</p>
      </div>
    </div>
  );
}

export default ScrollParallax;
