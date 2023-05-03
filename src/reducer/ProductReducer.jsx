import React from "react";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "is Loading":
      return {
        isLoading: true,
        isError: false,
      };

    case "is Error":
      return {
        isLoading: false,
        isError: true,
      };

    case "is Product data Load":
  

      return {
        isLoading: false,
        isError: false,
        productData: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductReducer;
