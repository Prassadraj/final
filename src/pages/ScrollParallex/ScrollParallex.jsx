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

          scrub: 1,
        },
      }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#panel2",
          start: "top 50%", // Animation starts when the top of #panel2 hits 80% of the viewport height
          end: "top top", // Animation ends when the top of #panel2 hits the top of the viewport
          scrub: 3, // Smoothly ties animation progress to the scroll position
        },
      })
      .fromTo(
        "#page",
        { x: "-200px", rotate: "20deg", opacity: 0, y: "-100px" },
        { x: "0px", rotate: "10deg", opacity: 0.5 }
      )
      .to("#page", { x: "300px", rotate: "0deg", opacity: 1, y: "0px" });
  }, []);

  return (
    <div>
      <div className="panel h-[100vh] bg-red-400 flex justify-center items-center text-3xl">
        <div>page1</div>
      </div>
      <div
        id="panel2"
        className="panel h-[100vh] bg-yellow-300 flex justify-center items-center text-3xl"
      >
        <p id="page" className="font-sans text-4xl font-bold">
          page2
        </p>
      </div>
    </div>
  );
}

export default ScrollParallax;
