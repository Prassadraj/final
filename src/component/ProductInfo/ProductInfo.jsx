import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductData";
import Transition from "../Transition/Transition";
import image1 from "../../images/image1.jpg";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductInfo() {
  const { data } = useContext(ProductDataContext);
  const { category, id } = useParams();

  const productCategory = data.find((cat) => cat.category === category);
  const product = productCategory?.items.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [expanded, setExpanded] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const toggleExpand = (section) => {
    setExpanded((prevExpanded) => (prevExpanded === section ? null : section));
  };

  const sectionData = {
    Features: [
      "TURBOCHEM MAGNA",
      "Feature 1: High precision in chemical analysis.",
      "Feature 2: User-friendly interface for easy operation.",
    ],
    Technology: [
      "Advanced sensor technology for accurate readings.",
      "Seamless integration with laboratory information systems (LIS).",
    ],
    Assay: [
      "Wide range of assays for various applications.",
      "High sensitivity and specificity in results.",
    ],
    FAQ: [
      "Q: How to use TURBOCHEM MAGNA?",
      "A: Follow the user manual for step-by-step instructions.",
      "Q: What is the warranty period?",
      "A: The warranty period is one year from the date of purchase.",
    ],
    Enquiry: [
      "For more information, contact our sales team at sales@example.com.",
      "For technical support, email support@example.com or call 123-456-7890.",
    ],
    Resource: [
      { name: "Warranty services", content: "Content for Warranty services" },
      {
        name: "Product Brochure PDF",
        content: "Content for Product Brochure PDF",
      },
      {
        name: "Detailed specifications (blog link)",
        content: "Content for Detailed specifications",
      },
      {
        name: "Offers or discounts",
        content: "Content for Offers or discounts",
      },
    ],
  };

  const tabs = [
    { name: "Product overview", content: product.description },
    {
      name: "Technical specification",
      content: "Technical specification content",
    },
    { name: "Resource", content: sectionData.Resource },
    { name: "Product Video", content: "Product Video content" },
    { name: "Product Testimonials", content: "Product Testimonials content" },
  ];

  const sideMenuItems = tabs.map((tab) => ({ name: tab.name }));

  return (
    <div className="product-info text-black overflow-hidden px-5">
      <div className="flex flex-col md:flex-row items-center justify-start gap-2 px-2 mb-2">
        <div className="hidden md:block w-1/4">
          <img
            src={image1}
            alt="Descriptive text"
            className="border-1 border-black"
          />
          <img src={image1} alt="Descriptive text" />
          <img src={image1} alt="Descriptive text" />
        </div>
        <div className="w-full flex justify-center">
          <img src={image1} alt="Descriptive text" />
        </div>
        <div className="w-full flex flex-col text-xl text-justify">
          <p>{product.title}</p>
          <p className="font-semibold">Overview:</p>
          <p className="sm:max-w-xl">{product.description}</p>
          <div className="items-center gap-2 text-xl hidden md:flex mt-4">
            <p>Share:</p>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
      </div>
      <div>
        {/* for mobile */}
        <div className="flex items-center gap-2 text-xl px-2 sm:hidden">
          <p>Share:</p>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="sm:hidden">
          <div className="w-full">
            {Object.keys(sectionData).map((section, index) => (
              <div key={index} className="border-b border-gray-300">
                <div
                  className="flex text-xl justify-between px-2 py-4 cursor-pointer"
                  onClick={() => toggleExpand(section)}
                >
                  <p>{section}</p>
                  <p className="">{expanded === section ? "-" : "+"}</p>
                </div>
                {expanded === section && (
                  <div className="py-1 px-4">
                    <table className="table-auto w-full">
                      <tbody>
                        {sectionData[section].map((item, idx) => (
                          <tr key={idx}>
                            <td className="p-2 text-lg">{item}</td>
                            {/* Render the extra item here */}
                            {section === "Features" && idx === 2 ? (
                              <td className="p-2">{sectionData[section][3]}</td>
                            ) : null}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* for laptop */}
        <div className="px-2 md:px-5">
          <div className="flex flex-col w-full h-[500px] text-lg">
            <div className="flex w-full border-b">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 px-4 text-center ${
                    selectedTab === index
                      ? "border-b-2 border-green-600 text-green-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => {
                    setSelectedTab(index);
                    // Reset selectedMenuItem when changing tabs
                    setSelectedMenuItem(0);
                  }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="flex flex-1">
              <div className="w-1/4 p-4 ">
                {/* Render side menu items based on selected tab */}
                {tabs[selectedTab].name === "Resource"
                  ? tabs[selectedTab].content.map((item, index) => (
                      <button
                        key={index}
                        className={`w-full p-2 mb-2 text-left ${
                          selectedMenuItem === index
                            ? "bg-green-600 text-white"
                            : "bg-white text-gray-600"
                        }`}
                        onClick={() => setSelectedMenuItem(index)}
                      >
                        {item.name}
                      </button>
                    ))
                  : sideMenuItems.map((item, index) => (
                      <button
                        key={index}
                        className={`w-full p-2 mb-2 text-left ${
                          selectedMenuItem === index
                            ? "bg-green-600 text-white"
                            : "bg-white text-gray-600"
                        }`}
                        onClick={() => setSelectedMenuItem(index)}
                      >
                        {item.name}
                      </button>
                    ))}
              </div>
              <div className="w-3/4 p-4">
                {/* Render content based on selected tab and menu item */}
                {selectedTab === 0 && <p>{tabs[selectedTab].content}</p>}
                {selectedTab === 1 && <p>{tabs[selectedTab].content}</p>}
                {selectedTab === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {tabs[selectedTab].content[selectedMenuItem].name}
                    </h3>
                    <p>{tabs[selectedTab].content[selectedMenuItem].content}</p>
                  </div>
                )}
                {selectedTab === 3 && <p>{tabs[selectedTab].content}</p>}
                {selectedTab === 4 && <p>{tabs[selectedTab].content}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-4">
        <p className="text-left text-xl mb-2">Related Products</p>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4">
            {Array(4)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[200px] p-4 flex flex-col items-center border border-gray-300 rounded-md"
                >
                  <img src={image1} alt="" className="w-full rounded-md" />
                  <p className="text-center mt-2">
                    Seamless integration with laboratory information systems
                    (LIS).
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <button className="text-xl py-2 px-4 bg-custom-green text-white rounded-lg">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transition(ProductInfo);
