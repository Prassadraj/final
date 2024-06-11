import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".headline", {
      skewX: 65,
      opacity: 0.5,
      rotateZ: "-3deg",
      rotateY: "30deg",
      duration: 1,
      delay: 0.5,
      stagger: 1,
      // rotateX: "30deg",
      scrollTrigger: ".headline",
    });
  }, []);

  return (
    <div className="h-screen p-10 ">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1
          className="text-4xl text-black font-bold headline"
          style={{ fontFamily: "Poppins" }}
        >
          Testimonials
        </h1>
        <p
          className="text-xl"
          style={{
            fontFamily: "Poppins",
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
          <div className="w-[40vw] h-[40vh] bg-yellow-300 p-5 rounded-md gap-7 flex flex-col border border-gray-500 border-solid ">
            <div className="flex justify-start items-center gap-3 ">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg"
                alt=""
              />
              <p className="text-2xl">Julie</p>
            </div>
            <div>
              <p className="text-md" style={{ fontFamily: "Poppins" }}>
                We use only the best quality materials on the market in order to
                provide the best products to our patients.We use only the best
                quality materials on the market in order to provide the best
                products to our patients.
              </p>
            </div>
          </div>

          <div className="w-[40vw] h-[40vh] bg-yellow-300 p-5 rounded-md gap-7 flex flex-col border border-gray-500 border-solid ">
            <div className="flex justify-start items-center gap-3 ">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src="https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg"
                alt=""
              />
              <p className="text-2xl">Julie</p>
            </div>
            <div>
              <p className="text-md" style={{ fontFamily: "Poppins" }}>
                We use only the best quality materials on the market in order to
                provide the best products to our patients.We use only the best
                quality materials on the market in order to provide the best
                products to our patients.
              </p>
            </div>
          </div>
          <div className="w-[40vw] h-[40vh] bg-yellow-300 p-5 rounded-md gap-7 flex flex-col border border-gray-500 border-solid ">
            <div className="flex justify-start items-center gap-3">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src="https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"
                alt=""
              />
              <p className="text-2xl">Julie</p>
            </div>
            <div>
              <p className="text-md" style={{ fontFamily: "Poppins" }}>
                We use only the best quality materials on the market in order to
                provide the best products to our patients.We use only the best
                quality materials on the market in order to provide the best
                products to our patients.
              </p>
            </div>
          </div>
          <div className="w-[40vw] h-[40vh] bg-yellow-300 p-5 rounded-md gap-7 flex flex-col border border-gray-500 border-solid ">
            <div className="flex justify-start items-center gap-3 ">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src="https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg"
                alt=""
              />
              <p className="text-2xl">Julie</p>
            </div>
            <div>
              <p className="text-md" style={{ fontFamily: "Poppins" }}>
                We use only the best quality materials on the market in order to
                provide the best products to our patients.We use only the best
                quality materials on the market in order to provide the best
                products to our patients.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
