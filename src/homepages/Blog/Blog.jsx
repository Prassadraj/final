import React from "react";

function Blog() {
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
    <div className="h-[100vh] bg-white p-10 pl-20 pr-20 rounded-lg">
      <div className=" flex justify-between gap-3">
        <div>
          <h1 className="text-left text-black text-3xl font-poppnis font-bold">
            Blog Snippets
          </h1>
          <p className="max-w-xl text-lg font-poppnis mt-3">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>
        <div className="flex">
          <p className="bg-custom-green pt-3 pb-3 pr-4 pl-4 w-[10vw] h-fit text-center text-white rounded-lg text-md font-semibold font-poppnis">
            View All
          </p>
        </div>
      </div>
      <div className="p-4 flex gap-5">
        {data.map((datas, index) => (
          <div className="p-4 bg-light-green w-[20vw] rounded-lg h-[60vh]">
            <div>
              <img
                style={{ objectFit: "cover", width: "20vw" }}
                className="rounded-lg"
                src={datas.img}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 mt-3">
              <p className="bg-black p-1 text-white rounded-md">{datas.care}</p>
              <p className="text-black font-poppnis font-semibold">
                {datas.title}
              </p>
              <p className="text-lg text-gray-600 max-w-md"> {datas.desc}</p>
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
