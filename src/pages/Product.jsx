import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { GlobalProuctContext } from "../context/ProductContext";
import { GlobalProuctFilter } from "../context/ProductFilterContext";

const Product = () => {
  const { isLoading, category } = GlobalProuctContext();
  const { filterData, allFilterData, SelectValue } = GlobalProuctFilter();

  const getUniqueData = (data, properties) => {
    let newData = data?.map((curEle) => {
      return curEle[properties]
    })
    return (newData = [...new Set(newData)])
  }
  const categoryOnlyData = getUniqueData(allFilterData, "category")

  const brandOnlyData = getUniqueData(allFilterData, "brand")

  if (isLoading) {
    return <div className="text-center mt-5">Api Is Loading</div>;
  }
  return (
    <>
      <section className="product-sec sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="filter-sec">
                <div className="filter-box">
                  <h4 className="filter-title">Categories</h4>
                  <div className="filter-list">
                    {
                      categoryOnlyData.map((curELe, index) => {
                        return <button type="button" name="category" className="filter-item" value={curELe} key={index}>{curELe}</button>
                      })
                    }
                  </div>
                </div>
                <div className="filter-box">
                  <h4 className="filter-title">Brands</h4>
                  <div className="filter-list">
                    {
                      brandOnlyData.map((curELe, index) => {
                        return <button type="button" name="category" className="filter-item" value={curELe} key={index}>{curELe}</button>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="product-top-header">
                <div className="total-products">
                  <p className="mb-0">
                    <span className="text-dark">24 </span> Products found
                  </p>
                </div>
                <div className="right-box">
                  <div className="product-grid-list">
                    <i className="fa-solid fa-list"></i>
                    <i className="fa-sharp fa-regular fa-grid-round-4"></i>
                  </div>
                  <div className="sort-product">
                    <select
                      className="form-select"
                      id="sort-Product-select"
                      onChange={SelectValue}
                    >
                      <option selected hidden>
                        Sort by: Featured
                      </option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low"> Price: High to Low</option>
                      <option value="A - Z"> Sort: A - Z</option>
                      <option value="Z - A"> Sort: Z - A</option>
                      <option value="Avg. Rating"> Avg. Rating</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {filterData &&
                  filterData.map((curEle, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-6">
                        <ProductCard product={curEle} key={index} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
