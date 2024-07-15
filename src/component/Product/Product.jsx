import React, { useContext, useState } from "react";
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

function Product() {
  const { data } = useContext(ProductDataContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data[0].category);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setTitle(data[index].category);
  };

  const selectedCategoryItems =
    data.find((category) => category.category === title)?.items || [];

  return (
    <div className="font-poppins bg-gray-100">
      <header className="hidden sm:block">
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
            <span className="font-semibold">{title}</span>
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
            className={`sm:w-[25%] bg-white py-2 px-4 sticky top-0 h-[90vh] overflow-y-auto ${
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
                          to={`productinfo/${title}/${item.id}`}
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
              {title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {selectedCategoryItems.map((item, index) => (
                <Link
                  to={`productinfo/${title}/${item.id}`}
                  key={item.id}
                  className="no-underline"
                >
                  <div className="bg-white border rounded-lg overflow-hidden relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4 text-gray-600">
                      <h2 className="text-lg font-semibold text-gray-600 text-left">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 text-left">
                        {item.description.substring(0, 100)}
                        {item.description.length > 100 && "..."}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export default Transition(Product);
