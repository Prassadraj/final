import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import image1 from "../../images/featured/product1.png";
import image2 from "../../images/featured/product2.png";
import image3 from "../../images/featured/product3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import bgImg from "../../images/BgImages/slider-bg.webp";
import Magnetic from "../../component/magneticButton/Magnetic";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: "10px" },
      {
        opacity: 1,
        y: "0px",
        duration: 0.4,
        delay: 0.2,
        scrollTrigger: ".heading",
        stagger: {
          amount: 1,
        },
      }
    );
    gsap.fromTo(
      ".products",
      {
        opacity: 0,
        width: "0%",
      },
      {
        opacity: 1,
        width: "100%",
        duration: 1,
        delay: 1,
        scrollTrigger: ".products",
        stagger: {
          amount: 1,
        },
      }
    );
  }, []);

  return (
    <div
      className="pt-10"
      // style={{
      //   backgroundImage: `url(${bgImg})`,
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex h-10 items-center md:pl-24 flex-col md:gap-4 heading p-2 text-center">
        <span
          className="font-semibold text-xl md:text-4xl uppercase heading font-lato text-custom-green"
          // style={{
          //   background: "linear-gradient(to right, #10b981, black)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
        >
          Featured Products
        </span>
        <p className="md:text-xl heading font-poppins text-gray-500">
          We use only the{" "}
          <span className="font-poppins">best quality materials</span> on the
          market in order to provide the{" "}
          <span className="">best products </span> to our patients.
        </p>
      </div>
      <HorizontalScrollCarousel cards={featuredCards} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.6], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] products">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 md:gap-8">
          {cards.slice(0, 7).map((card) => (
            <Card card={card} key={card.id} />
          ))}
          <AllProductsCard />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="relative h-[300px] w-[200px] md:h-[400px] md:w-[350px] overflow-hidden bg-light-green rounded-2xl">
      <div className="flex justify-center items-center w-full md:mt-10">
        {/* <Tilt scale={1.2} transitionSpeed={2500}> */}
        <img width="150px" src={card.url} alt="" />
        {/* </Tilt> */}
      </div>
      <div
        className="absolute md:top-60 md:left-10 md:right-10 p-0"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex justify-center md:justify-start">
          <p className="md:text-xl font-poppins font-bold ">{card.title}</p>
        </div>
        <p className="text-sm md:text-base line-clamp-2 md:line-clamp-none">
          {card.content}
        </p>
      </div>
      <div className="absolute bottom-1 md:bottom-6 w-full">
        <div className="flex justify-center items-center">
          <Magnetic>
            <button className="w-fit md:w-72 bg-custom-green p-1 md:px-3 md:py-2 rounded-lg text-white">
              View Product
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

const AllProductsCard = () => {
  return (
    <div className="group relative h-[400px] w-[200px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Magnetic>
          <div
            className="text-xl font-black text-custom-green p-2 rounded-xl cursor-pointer"
            style={{ fontFamily: "Poppins" }}
          >
            <Link to="/product">
              All Products <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default FeaturedProducts;

const featuredCards = [
  {
    url: image1,
    title: "Title 1",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 1,
  },
  {
    url: image2,
    title: "Title 2",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 2,
  },
  {
    url: image3,
    title: "Title 3",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 3,
  },
  {
    url: image1,
    title: "Title 4",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 4,
  },
  {
    url: image3,
    title: "Title 5",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa non placeat vitae distinctio ",
    id: 5,
  },
];
