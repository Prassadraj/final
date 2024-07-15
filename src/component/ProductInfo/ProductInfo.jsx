import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductData";
import Transition from "../Transition/Transition";

function ProductInfo() {
  const { data } = useContext(ProductDataContext);
  const { category, id } = useParams();
  console.log(category);
  const productCategory = data.find((cat) => cat.category === category);
  const product = productCategory?.items.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-info text-black">
      <img src={product.image} alt={product.title} />
      <h1 className="text-black">{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default Transition(ProductInfo);
