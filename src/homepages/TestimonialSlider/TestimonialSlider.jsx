import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import qoute from "../../images/testimo/qoute.png";
import bgImage from "../../images/BgImages/testimonial-bg.webp";
function TestimonialSlider() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
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

  return (
    <div
      className="h-[100vh] p-10 "
      style={{
        objectFit: "cover",
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-lg md:text-4xl text-black font-bold headline font-lato uppercase">
          Testimonials
        </h1>
        <p
          className="text-xl text-gray-900 tracking-wide"
          style={{
            fontFamily: "Poppins",
            width: "120vh",
            textAlign: "center",
          }}
        >
          Our experience with CPC Diagnostics has been exceptional. Their
          products are reliable, and their{" "}
          <span className="font-semibold font-poppins">
            support is outstanding.
          </span>
        </p>
      </div>

      <div
        className="mt-10 mr-10
      "
      >
        <Slider {...settings} className="bg-transparent shadow-none">
          {data.map((datas, i) => (
            <div
              key={i}
              className="relative w-[40vw] h-[40vh] bg-white p-5 rounded-md gap-7 flex flex-col border  border-solid shadow-2xl container"
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
                <p className="text-md text-start font-poppins">{datas.desc}</p>
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
