import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whatWeDo from "../../images/section2&3/what-we-do 1.png";
import whoWeAre from "../../images/section2&3/who we are 1.png";
import Aos from "aos";

function Section3() {
  gsap.registerPlugin(ScrollTrigger);

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
      .from("#bg1", { x: "20px" })
      .to("#bg1", { x: "0px" });

    // Text animations

    gsap.utils.toArray(".imagebox").forEach((imgBox) => {
      gsap.fromTo(
        imgBox,
        { opacity: 0, scale: 0.2, skewY: 30 },
        {
          opacity: 1,
          scale: 1,
          skewY: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: imgBox,
            toggleActions: "play none none none",
          },
        }
      );
    });
    Aos.init();
  }, []);

  return (
    <div className="">
      {/* Section 3 */}
      <div
        className="section3 flex justify-around md:h-[80vh] pt-28 pl-20 pr-20 h-screen"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #7de4c2 150%)",
        }}
      >
        <div className="flex flex-col pt-20 -mt-10">
          <div className="mb-5" data-aos="zoom-in-left">
            <p
              className="font-bold text-gray-900 md:text-3xl text-sm "
              style={{ fontFamily: "Poppins" }}
            >
              Who We Are?
            </p>
          </div>
          <div
            className="w-96 md:w-[50vw] textbox text-sm md:text-2xl "
            data-aos="zoom-in-left"
          >
            Everlife CPC Diagnostics is a premier medical laboratory equipment
            supplier in India, providing a comprehensive range of in vitro
            diagnostic (IVD) solutions.
          </div>
          <div className="mt-10">
            {/* <button
              className="btn1 pt-3 pb-3 pl-7 pr-7 max-w-md text-[#00A786] hover:bg-[#00a986] hover:text-white font-poppins text-md"
              style={{ border: "2px solid #00A786" }}
            >
              View Our Products
            </button> */}
          </div>
        </div>
        <div className="right imagebox">
          <div
            id="image1"
            className="relative w-[30vw] h-[50vh] top-0 right-10 rounded-2xl z-10"
          >
            <img
              src={whoWeAre}
              alt="Who We Are"
              className="animate-leftRight rounded-lg"
            />
          </div>
          <div
            style={{ marginRight: "50px", marginTop: "-330px" }}
            id="bg1"
            className="animate-rightUp relative w-[30vw] h-[60vh] rounded-2xl bg-gradient-to-t from-custom-green to-gray-200"
          ></div>
        </div>
      </div>
      {/* Section 4 */}
      <div
        className="section4 flex justify-around h-[90vh] pt-20 pl-20 pr-10"
        style={{
          background: "linear-gradient(0deg, #ffffff 0%, #7de4c2 150%)",
        }}
      >
        <div className="left mr-10 imagebox">
          <div
            id="image1"
            className="relative w-[30vw] h-[50vh] top-10 left-10 rounded-2xl z-10"
          >
            <img
              src={whatWeDo}
              alt="What We Do"
              className="animate-rightDown rounded-lg"
            />
          </div>
          <div
            style={{ marginTop: "-310px" }}
            id="bg1"
            className="animate-leftUp relative w-[30vw] h-[60vh] rounded-2xl bg-gradient-to-t from-custom-green to-gray-200"
          ></div>
        </div>
        <div className="flex flex-col pt-20 ml-10 -mt-10">
          <div className="mb-5">
            <p
              className="font-bold text-gray-900 text-3xl "
              data-aos="zoom-in-left"
              style={{ fontFamily: "Poppins" }}
            >
              What We Do?
            </p>
          </div>
          <div className="w-[49vw] ">
            <div className=" overflow-hidden " data-aos="zoom-in-left">
              <p className="text-2xl" style={{ fontFamily: "Poppins" }}>
                We manufacture and supply a variety of laboratory instruments,
                including biochemistry analyzers and hospital medical equipment,
                ensuring high performance and accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
