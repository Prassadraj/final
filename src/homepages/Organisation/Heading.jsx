import gsap from "gsap";
import React, { useEffect } from "react";
import AOS from "aos";

function Heading() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // GSAP animations
    // gsap.from(".title1", { opacity: 0, y: -50, duration: 1 });
    // gsap.from(".title2", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[30vh] gap-2">
      <p
        data-aos="zoom-in-right"
        className="text-lg md:text-3xl text-custom-green font-semibold title1 font-lato uppercase"
      >
        Our Sister Organizations
      </p>
      <p
        data-aos="zoom-in-left"
        className="font-poppins text-sm md:text-xl max-w-xl text-center title2"
      >
        Explore our network of affiliated companies that enhance healthcare
        globally.
      </p>
    </div>
  );
}

export default Heading;
