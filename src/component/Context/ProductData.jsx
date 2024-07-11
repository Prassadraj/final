import React, { createContext } from "react";
import allProducts from "../../component/AllDatas/AllDatas";
export const ProductDataContext = createContext();
function ProductDataProvider(props) {
  const contextValue = { data: allProducts };
  return (
    <ProductDataContext.Provider value={contextValue}>
      {props.children}
    </ProductDataContext.Provider>
  );
}

export default ProductDataProvider;
