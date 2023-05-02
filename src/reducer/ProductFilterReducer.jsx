import React from "react";

const ProductFilterReducer = (state, action) => {
  switch (action.type) {
    case "load Filter Data":
      return {
        state,
        filterData: action.payload,
        allFilterData: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductFilterReducer;
