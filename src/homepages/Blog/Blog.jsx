import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

function Blog() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".blogBox",
      {
        opacity: "0",
        scale: 0.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: { amount: 1 },

        scrollTrigger: ".blogBox",
      }
    );
  }, []);

  const data = [
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
  ];
  return (
    <div className="h-[100vh] bg-white px-2 ">
      <div className=" flex justify-between gap-3 md:px-10">
        <div>
          <h1 className="text-left text-black md:text-3xl font-poppins font-bold uppercase">
            Blog Snippets
          </h1>
          <p className="w-[300px] md:w-fit md:text-lg font-poppins mt-3">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>
        <div className="flex">
          <p className="bg-custom-green md:px-4 md:py-3 min-w-16 md:w-[10vw] h-fit text-center text-white rounded-lg text-xs md:text-md md:font-semibold font-poppins">
            View All
          </p>
        </div>
      </div>
      <div className="p-2 md:mx-10 md:my-4 grid md:grid-cols-4 gap-4 grid-cols-2">
        {data.map((datas, index) => (
          <div
            key={index}
            className="h-[200px] p-4 md:p-4 bg-light-green w-full max-w-[300px] rounded-lg md:h-[370px] blogBox"
          >
            <div>
              <img className="rounded-lg w-full" src={datas.img} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start md:gap-2 md:mt-3 mt-2 gap-1">
              <p className="bg-black p-1 text-white rounded-md text-xs">
                {datas.care}
              </p>
              <p className="text-black font-poppins font-semibold text-xs">
                {datas.title}
              </p>
              <p className="md:text-lg text-gray-600 w-full text-xs">
                {datas.desc}
              </p>
            </div>
            <div className="flex justify-end mt-3">
              <p className="text-lg">~{datas.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
