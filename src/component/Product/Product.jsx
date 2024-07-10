import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import frame1 from "../../images/products/frame1.png";
import Footer from "../../homepages/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function Product() {
  const images = [
    { url: frame1 },
    { url: frame1 },
    { url: frame1 },
    { url: frame1 },
  ];
  const dropdownData = [
    {
      title: "Biochemistry Analyzer",
      items: ["Product1", "Product2", "Product3"],
    },
    {
      title: "Covid 19",
      items: ["Product1", "Product2", "Product3"],
    },
    {
      title: "Hematology Analyzer",
      items: ["Product1", "Product2", "Product3"],
    },
    {
      title: "Point of Care",
      items: ["Product1", "Product2", "Product3"],
    },
    {
      title: "Immunoassay Analyzer",
      items: ["Product1", "Product2", "Product3"],
    },
    {
      title: "Electrolyte Analyzer",
      items: ["Product1", "Product2", "Product3"],
    },
    {
      title: "Clinical Microbiology",
      items: ["Product1", "Product2", "Product3"],
    },
  ];
  const [title, setTitle] = useState(dropdownData[0].title);
  const [openDropdown, setOpenDropdown] = useState(0);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setTitle(dropdownData[index].title);
  };

  const products = [
    {
      image: frame1,
      title: "Product 1",
      description: "Description of Product 1",
    },
    {
      image: frame1,
      title: "Product 2",
      description: "Description of Product 2",
    },
    {
      image: frame1,
      title: "Product 3",
      description: "Description of Product 3",
    },
    {
      image: frame1,
      title: "Product 4",
      description: "Description of Product 4",
    },
    {
      image: frame1,
      title: "Product 5",
      description: "Description of Product 5",
    },
    {
      image: frame1,
      title: "Product 6",
      description: "Description of Product 6",
    },
  ];

  return (
    <div className="font-poppins bg-gray-100">
      <header>
        <SimpleImageSlider
          width="100%"
          height={200}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={2.0}
        />
      </header>
      <section className="px-16 py-2 text-base text-black">
        <div className="mb-2">
          <p>
            <Link to="/">Home</Link>
            <span> / </span>
            <Link className="font-semibold">Bio Chemistry</Link>
          </p>
        </div>
        <div className="flex">
          <div className="flex-[25%] bg-white p-4 sticky top-0 h-[80vh] overflow-y-auto">
            <div className="w-full mx-auto">
              {dropdownData.map((dropdown, index) => (
                <div key={index} className="rounded mb-2">
                  <div
                    className="flex justify-between items-center py-3 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p className="text-base font-semibold">{dropdown.title}</p>
                    {openDropdown === index ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openDropdown === index && (
                    <div className="border-t border-gray-300">
                      {dropdown.items.map((item, itemIndex) => (
                        <p className="px-4 py-2" key={itemIndex}>
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-[75%] bg-white p-4 text-center h-fit overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4 text-left text-black">
              {title}
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg overflow-hidden relative group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 text-gray-600">
                    <h2 className="text-lg font-semibold text-gray-600">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Product
                  </div>
                </div>
              ))}
            </div>
            <div className=" p-4 bg-gray-200 rounded-md">
              <p className="text-left text-2xl mb-2">Short note of {title}</p>
              <p className="text-left mb-2">
                Introducing our state-of-the-art biochemistry analyzer!.
                Designed with the latest advancements in biochemistry
                technology, our analyzer boasts a user-friendly interface,
                making it easy for healthcare professionals to operate and
                interpret results swiftly. Whether you're in a small clinic or a
                large hospital, our analyzer is adaptable to various settings,
                catering to your specific needs.
              </p>
              <p className="px-4 py-2 bg-custom-green text-left w-fit text-white rounded-md">
                Read More
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center gap-5 p-5 ">
        <div className="p-4 bg-gray-500 text-white rounded-md flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMessage} className="text-2xl" />
            </div>
            <div className="text-lg">Need Help?</div>
          </div>
          <div>Get concise assistance here</div>
        </div>
        <div className="p-4 bg-gray-500 text-white rounded-md flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMessage} className="text-2xl" />
            </div>
            <div className="text-lg">Enquiry mail us?</div>
          </div>
          <div>Mail us today for Enquires</div>
        </div>
        <div className="p-4 bg-gray-500 text-white rounded-md flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMessage} className="text-2xl" />
            </div>
            <div className="text-lg">Our blogs</div>
          </div>
          <div>Get our latest blogs</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
