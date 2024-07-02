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
import Organisation from "../../homepages/Organisation/Organisation";
import { Parallax } from "react-parallax";
import ProductCategaries from "../../homepages/ProductCategaries/ProductCategaries";
import organisationBG from "../../images/organisation/Designer4.png";
import TsParticle from "../Tsparticle/TsParticle";
import ServiceType from "../Career/Career";
import Organization2 from "../../homepages/Organisation/Organization2";
import Section1 from "../../homepages/Section1/Section1";
import itrackBG from "../../images/itrack/itrackBG.png";

function Home() {
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
    <div className="font-poppins">
      <Section1 />

      {/* section2 */}
      <Section2 />
      {/* section3 */}
      <Section3 />

      <ProductCategaries />

      {/* <Parallax
        // blur={}
        // bgImage={organisationBG}
        bgImageAlt="the cat"
        strength={200}
      > */}
      <Organisation />
      {/* </Parallax> */}
      {/* <Organization2 /> */}

      {/* section5 */}
      <div style={{ marginBottom: "10vh" }}>
        <ZoomEffect />
      </div>

      <TestimonialSlider />

      {/* featured Products */}
      <FeaturedProducts />
      <Blog />
      <ContactUs />
      <Footer />
      {/* <ServiceType /> */}
    </div>
  );
}

export default Transition(Home);
