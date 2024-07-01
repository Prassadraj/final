import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import qoute from "../../images/testimo/qoute.png";
function TestimonialSlider() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const data = [
    {
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
      name: "Julie",
      desc: "We use only the best quality materials on the market in order to provide the best products to our patients.We use only the best quality materials on the market in order to provide the best products to our patients.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Julie",
      desc: "We use only the best quality materials on the market in order to provide the best products to our patients.We use only the best quality materials on the market in order to provide the best products to our patients.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Julie",
      desc: "We use only the best quality materials on the market in order to provide the best products to our patients.We use only the best quality materials on the market in order to provide the best products to our patients.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Julie",
      desc: "We use only the best quality materials on the market in order to provide the best products to our patients.We use only the best quality materials on the market in order to provide the best products to our patients.",
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".headline", {
      skewX: 30,
      opacity: 0,
      rotateZ: "-3deg",
      rotateY: "90deg",
      duration: 1,
      delay: 0.5,
      stagger: 1,
      // rotateX: "30deg",
      scrollTrigger: ".headline",
    });
    gsap.utils.toArray(".container").forEach((container, i) => {
      gsap.fromTo(
        container,
        {
          opacity: 0,
          scaleX: 0.1,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scaleX: 1,
          stagger: { amount: 1 },
          scrollTrigger: {
            trigger: container, // Set the trigger to the container
            start: "top center", // Animation starts when the top of the container hits the center of the viewport
            end: "bottom top", // Animation ends when the bottom of the container hits the top of the viewport
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="h-[100vh] p-10 "
      style={{
        objectFit: "cover",
        width: "100%",

        // backgroundImage:
        //   "url('https://images.pexels.com/photos/9881353/pexels-photo-9881353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-5">
        <h1
          className="text-4xl text-black font-bold headline"
          style={{ fontFamily: "Poppins" }}
        >
          Testimonials
        </h1>
        <p
          className="text-xl text-custom-green"
          style={{
            fontFamily: "Poppins",
            width: "120vh",
            textAlign: "center",
          }}
        >
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </p>
      </div>

      <div
        className="mt-10
      "
      >
        <Slider {...settings} className="">
          {data.map((datas, i) => (
            <div
              key={i}
              className="relative w-[40vw] h-[40vh] bg-white p-5 rounded-md gap-7 flex flex-col border border-gray-500 border-solid shadow-2xl container"
            >
              <div className="flex justify-start items-center gap-3 ">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={datas.img}
                  alt=""
                />
                <p className="text-2xl font-poppins">{datas.name}</p>
              </div>
              <div>
                <p className="text-md" style={{ fontFamily: "Poppins" }}>
                  {datas.desc}
                </p>
              </div>
              <div
                className="text-2xl text-black absolute z-10"
                style={{ fontFamily: "Poppins", top: "-0px", left: "0px" }}
              >
                <img src={qoute} alt="" className="animate-leftRightQ" />
              </div>
              <div
                className="text-2xl text-black absolute z-10"
                style={{
                  fontFamily: "Poppins",
                  bottom: "-0px",
                  right: "0px",
                  transform: "rotate(180deg)",
                }}
              >
                <img src={qoute} alt="" className="animate-leftRightQ" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
