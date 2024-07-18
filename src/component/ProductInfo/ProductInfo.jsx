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

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const sectionData = {
    Features: [
      "TURBOCHEM MAGNA",
      "Feature 1: High precision in chemical analysis.",
      "Feature 2: User-friendly interface for easy operation.",
      // "Feature 3: Fast and reliable results.",
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
  };

  return (
    <div className="product-info text-black overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-2 mb-2">
        <div className="w-full flex justify-center">
          <img src={image1} alt="Descriptive text" />
        </div>
        <div className="w-full flex flex-col text-xl text-justify">
          <p>TURBOCHEM MAGNA</p>
          <p className="font-semibold">Overview:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque
            assumenda iste ex explicabo totam dolor id doloremque! Omnis
            perferendis consequatur temporibus ullam in facilis asperiores
            perspiciatis dolorum voluptatem ipsum.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-xl px-2">
          <p>Share:</p>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="">
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
