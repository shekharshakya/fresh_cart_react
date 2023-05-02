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
      let categories = action.payload.map((curEle) => {
        return curEle.category;
      });
      categories = [...new Set(categories)];

      return {
        isLoading: false,
        isError: false,
        category: categories,
        productData: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductReducer;
