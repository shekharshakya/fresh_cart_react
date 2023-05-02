import React, { useState } from "react";

const FilterTabs = () => {
  const { filterBtns, setfilterBtn } = useState(1);

  const toggletab = (index) => {
    setfilterBtn(index);
  };

  return (
    <section className="filter-tab sec-padding">
      <div className="container">
        <div className="filter-area">
          <div className="filter-btns">
            <button
              type="button"
              data-filter-btn="Product Details"
              onClick={() => toggletab(1)}
              className={filterBtns === 1 ? "active" : ""}
            >
              Product Details
            </button>
            <button
              type="button"
              data-filter-btn="Information"
              onClick={() => toggletab(2)}
              className={filterBtns === 2 ? "active" : ""}
            >
              Information
            </button>
            <button
              type="button"
              data-filter-btn="Reviews"
              onClick={() => toggletab(3)}
              className={filterBtns === 3 ? "active" : ""}
            >
              Reviews
            </button>
            <button
              type="button"
              data-filter-btn="Seller Info"
              onClick={() => toggletab(4)}
              className={filterBtns === 4 ? "active" : ""}
            >
              Seller Info
            </button>
          </div>
          <div className="filter-box">
            <div
              className="filter-items active"
              data-target-filter="Product Details"
            >
              Product Details
            </div>
            <div className="filter-items" data-target-filter="Information">
              Information
            </div>
            <div className="filter-items" data-target-filter="Reviews">
              Reviews
            </div>
            <div className="filter-items" data-target-filter="Seller Info">
              Seller Info
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;
