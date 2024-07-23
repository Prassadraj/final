import React, { useContext, useEffect, useRef, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import frame1 from "../../images/products/frame1.png";
import Footer from "../../homepages/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelopesBulk,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Transition from "../Transition/Transition";
import { ProductDataContext } from "../Context/ProductData";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import "./product.css";
import { CategoryContext } from "../Context/CategoryContext";

function Product() {
  const { data } = useContext(ProductDataContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data[0].category);
  const [openDropdown, setOpenDropdown] = useState(null);
  const topRef = useRef(null);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const toggleDropdown = (index) => {
    // Scroll to top of container
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setOpenDropdown(openDropdown === index ? null : index);
    setSelectedCategory(data[index].category);
  };

  const selectedCategoryItems =
    data.find((category) => category.category === selectedCategory)?.items ||
    [];

  useEffect(() => {
    // Ensure that when selectedCategoryItems change, we scroll to the top
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategoryItems]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins bg-gray-100" ref={topRef}>
      <header className="hidden sm:block mb-4">
        <SimpleImageSlider
          width="100%"
          height={200}
          images={[
            { url: frame1 },
            { url: frame1 },
            { url: frame1 },
            { url: frame1 },
          ]}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={2.0}
        />
      </header>
      <section className="px-4 py-2 text-base text-black">
        <div className="mb-2">
          <p>
            <Link to="/" className="no-underline">
              Home
            </Link>
            <span> / </span>
            <span className="font-semibold">{selectedCategory}</span>
          </p>
        </div>
        <div
          className="flex items-center gap-2 text-xl justify-end sm:hidden"
          onClick={() => setOpen((open) => !open)}
        >
          <p>Select Equipment</p>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div
            className={`sm:w-[25%] bg-white py-2 px-4 sticky top-20 h-[90vh] overflow-y-auto ${
              open ? "fixed w-full h-screen" : ""
            }`}
          >
            <div className="w-full mx-auto">
              {data.map((dropdown, index) => (
                <div key={index} className="rounded mb-2">
                  <button
                    className="flex justify-between items-center py-3 w-full cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p className="text-base font-semibold">
                      {dropdown.category}
                    </p>
                    {openDropdown === index ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </button>
                  {openDropdown === index && (
                    <div className="border-t border-gray-300">
                      {dropdown.items.map((item, itemIndex) => (
                        <Link
                          to={`/productinfo/${selectedCategory}/${item.id}`}
                          key={item.id}
                          className="no-underline"
                        >
                          <p
                            className="px-4 py-2 text-sm uppercase hover:bg-custom-green hover:text-light-green cursor-pointer"
                            key={itemIndex}
                          >
                            {item.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-[75%] bg-white p-4 text-center overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4 text-left text-black">
              {selectedCategory}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {selectedCategoryItems.map((item, index) => (
                <Link
                  to={`/productinfo/${selectedCategory}/${item.id}`}
                  key={item.id}
                  className="no-underline"
                >
                  <div
                    key={index}
                    className="bg-white border rounded-lg overflow-hidden relative group h-[300px]"
                  >
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="px-2 py-2 text-gray-600">
                      <h2 className="text-base font-semibold text-gray-600 text-left">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 text-left line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden absolute inset-0 bg-custom-green/80 justify-center items-center text-white text-xl group-hover:flex">
                      View Product
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="p-4 bg-gray-200 rounded-md">
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

      <div className="flex justify-center items-center gap-5 p-5">
        <div className="p-4 bg-[#D9D7F1] text-gray-500 rounded-md flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMessage}
                className="text-2xl text-[#533E85]"
              />
            </div>
            <div className="text-lg">Need Help?</div>
          </div>
          <div>Get concise assistance here</div>
        </div>
        <div className="p-4 bg-[#D9D7F1] text-gray-500 rounded-md flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelopesBulk}
                className="text-2xl text-[#533E85]"
              />
            </div>
            <div className="text-lg">Enquiry mail us?</div>
          </div>
          <div>Mail us today for Enquires</div>
        </div>
        <div className="p-4 bg-[#D9D7F1] text-gray-500 rounded-md flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBloggerB}
                className="text-2xl text-[#533E85]"
              />
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
