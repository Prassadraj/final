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
import Magnetic from "../magneticButton/Magnetic";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-poppins">
      <Section1 />
      <Section2 />
      <Section3 />
      <ProductCategaries />
      <Organisation />
      <TestimonialSlider />
      <FeaturedProducts />
      <Blog />
      <ContactUs />
      <ZoomEffect />
      <Footer />
    </div>
  );
}

export default Transition(Home);
