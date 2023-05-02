import React from "react";

const ProductFilterReducer = (state, action) => {
  switch (action.type) {
    case "load Filter Data":
      return {
        ...state,
        filterData: action.payload,
        allFilterData: action.payload,
      };
    case "select value":
      let selectFilter = document.getElementById("sort-Product-select");
      let selectFilterValue =
        selectFilter.options[selectFilter.selectedIndex].value;
      return {
        ...state,
        selectFilterValue: selectFilterValue,
      };

    case "Selected Value Filter Data":
      let newSortingData;
      let tempareData = [...action.payload];

      if (state.selectFilterValue === "A - Z") {
        newSortingData = tempareData.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }

      if (state.selectFilterValue === "Z - A") {
        newSortingData = tempareData.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }

      if (state.selectFilterValue === "Low to High") {
        newSortingData = tempareData.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (state.selectFilterValue === "High to Low") {
        newSortingData = tempareData.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (state.selectFilterValue === "Avg. Rating") {
        newSortingData = tempareData.sort((a, b) => {
          return b.rating - a.rating;
        });
      }

      return {
        ...state,
        filterData: newSortingData,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductFilterReducer;
