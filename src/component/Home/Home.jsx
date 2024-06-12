import React, { useEffect } from "react";
import Transition from "../Transition/Transition";
import logo from "../../images/logo.png";
import "./home.css";
import Slider from "../Slider/Slider";
import Scroll from "../Scroll/Scroll";
import ZoomEffect from "../ZoomEffect/ZoomEffect";
import ScrollParallax from "../../pages/ScrollParallex/ScrollParallex";
import Section2 from "../../homepages/Section2/Section2";
import Section3 from "../../homepages/Section3/Section3";
import { gsap } from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProducts from "../../homepages/FeaturedProducts/FeaturedProducts";
import TestimonialSlider from "../../homepages/TestimonialSlider/TestimonialSlider";
import NewOne from "../../newone/NewOne";
import Tilt from "react-parallax-tilt";
import Footer from "../../homepages/Footer/Footer";
import Blog from "../../homepages/Blog/Blog";
import ContactUs from "../../homepages/ContactUs/ContactUs";

function Home() {
  useEffect(() => {
    Splitting();
    gsap.registerPlugin(ScrollTrigger);
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
        scrollTrigger: ".btn1",

        stagger: {
          amount: 1,
        },
      }
    );
    gsap.from(".subTitle", {
      duration: 1,
      opacity: 0,
      y: 120,
      scrollTrigger: ".subTitle",
      stagger: 1,
    });

    // GSAP animation for splitting effect
    gsap.from(".char", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power4.out",
      stagger: 0.05,
    });
  }, []);
  return (
    <div className="">
      <div className="section1 flex h-full overflow-hidden">
        <div
          className="left mt-12"
          style={{ flex: 1, marginLeft: "70px", lineHeight: "1.2" }}
        >
          <p
            id="headline"
            style={{
              fontSize: "45px",
              color: "#56575D",

              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            className="font-sans"
            data-splitting="chars"
          >
            Medical Laboratory
          </p>
          <p
            id="headline"
            style={{
              fontSize: "45px",
              color: "#56575D",

              clippath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            className="font-sans"
            data-splitting="chars"
          >
            Equipment Supplier in India
          </p>
          <div
            className="description "
            style={{ width: "490px", fontFamily: "Poppins" }}
          >
            <p
              className="subTitle"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              Discover our top-quality medical laboratory equipment, tailored
              for hospitals and diagnostic labs across India.
            </p>
          </div>
          <div className="buttons flex gap-5">
            <button
              className="btn1 pt-3 pb-3 pl-7 pr-7 w-56"
              style={{ background: "#00A786", color: "white" }}
            >
              Explore product
            </button>
            <button
              className="btn1 pt-3 pb-3 pl-7 pr-7 w-52 text-[#00A786] hover:bg-[#00a986] hover:text-white"
              style={{
                border: "2px solid #00A786",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div
          className=" overflow-hidden"
          style={{ flex: 1, marginTop: "-20px" }}
        >
          <div className="">
            <Slider />
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="section2">
        <Section2 />
      </div>
      {/* section3 */}
      <div className="section3">
        <Section3 />
      </div>
      {/* featured Products */}
      <div>
        <FeaturedProducts />
      </div>

      {/* section5 */}
      <div style={{ marginBottom: "10vh" }}>
        <ZoomEffect />
      </div>
      <ScrollParallax />
      <ContactUs />
    </div>
  );
}

export default Transition(Home);
