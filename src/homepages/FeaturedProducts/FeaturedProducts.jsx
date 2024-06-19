import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import image1 from "../../images/featured/product1.png";
import image2 from "../../images/featured/product2.png";
import image3 from "../../images/featured/product3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
const FeaturedProducts = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: "10px" },
      {
        opacity: 1,

        y: "0px",
        duration: 0.2,
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
        delay: 1.5,
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
      style={{
        clipPath:
          " polygon(50% 0%, 100% 3%, 100% 92%, 51% 100%, 0 100%, 0% 60%, 0 3%);",
      }}
    >
      <div className="flex h-10 items-center pl-24 flex-col gap-4 heading">
        <span
          className="font-semibold text-3xl uppercase heading"
          style={{ fontFamily: "Poppins" }}
        >
          Featured Products
        </span>

        <p style={{ fontFamily: "Poppins" }} className="text-xl heading">
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
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
        <motion.div style={{ x }} className="flex gap-8">
          {cards.slice(0, 7).map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <AllProductsCard />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="relative h-[400px] w-[350px] overflow-hidden bg-light-green rounded-2xl ">
      <div className="flex justify-center items-center w-full mt-10">
        <Tilt scale={1.2} transitionSpeed={2500}>
          <img width="150px" src={card.url} alt="" />
        </Tilt>
      </div>
      <div
        className="absolute top-60 left-10 right-10 "
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex justify-start">
          <h1 className="text-xl text-gray-700 font-poppins">{card.title}</h1>
        </div>
        <p>{card.content}</p>
      </div>
      <div className=" absolute bottom-6 w-full">
        <div className="flex justify-center items-center ">
          <button className="w-72 bg-custom-green pt-2 pb-2 pl-3 pr-3 rounded-lg text-white">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
};

const AllProductsCard = () => {
  return (
    <div className=" group relative h-[400px] w-[200px] overflow-hidden  flex items-center justify-center">
      <div className="absolute inset-0 z-0 "></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <p
          className="text-xl font-black text-custom-green p-2 rounded-xl cursor-pointer"
          style={{ fontFamily: "Poppins" }}
        >
          All Products <FontAwesomeIcon icon={faArrowRight} />
        </p>
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
