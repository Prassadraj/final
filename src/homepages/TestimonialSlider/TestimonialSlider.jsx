import React, { useEffect, useRef } from "react";
import "./TestimonialSlider.css";
import bgImage from "../../images/BgImages/testimonial-bg.webp";

function TestimonialSlider() {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const data = [
    {
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
      name: "Julie",
      desc: "The quality of service and products we received from CPC Diagnostics is unmatched. Their attention to detail and customer care are exceptional.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Sophie",
      desc: "CPC Diagnostics consistently delivers reliable products that meet our needs. Their customer support team is always ready to assist us.",
    },
    {
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
      name: "Julie",
      desc: "We are extremely satisfied with the products from CPC Diagnostics. Their innovative solutions have greatly improved our workflow.",
    },
    {
      img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
      name: "Sophie",
      desc: "CPC Diagnostics offers top-notch products and exceptional customer service. Their dedication to quality is evident in everything they do.",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const cardWidth = slider.querySelector(".cardd").offsetWidth;
    const totalWidth = cardWidth * data.length;

    let scrollAmount = 0;
    const scrollStep = cardWidth + 20;
    const scrollSpeed = 3000; // 3 seconds

    scrollIntervalRef.current = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0; // Reset scroll to the start
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, scrollSpeed);

    // Cleanup on component unmount
    return () => clearInterval(scrollIntervalRef.current);
  }, [data.length]);

  return (
    <div
      className="md:h-[100vh] py-3"
      style={{
        objectFit: "cover",
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-2 md:p-5">
        <h1 className="text-lg md:text-4xl text-black font-bold headline font-lato uppercase">
          Testimonials
        </h1>
        <p
          className="md:text-xl w-full text-gray-900 tracking-wide"
          style={{
            fontFamily: "Poppins",
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
        ref={sliderRef}
        className="md:mt-10 md:mx-10 h-[150px] flex md:h-[250px] gap-6 overflow-hidden p-2 smooth-scroll"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="cardd bg-white gap-1 p-2 md:p-3 rounded-lg text-gray-500 flex-col flex md:gap-3 font-poppins"
          >
            <div className="flex items-center w-[125px] md:w-[550px] md:gap-2 gap-1 md:p-3">
              <img
                className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover"
                src={item.img}
                alt=""
              />
              <p className="md:text-xl text-base">{item.name}</p>
            </div>
            <div className="text-[9px] md:text-lg md:px-3">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
