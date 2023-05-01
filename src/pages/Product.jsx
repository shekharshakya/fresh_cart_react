import React from "react";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <>
      <section className="product-sec sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">filter section</div>
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
                    <select className="form-select">
                      <option selected>Sort by: Featured</option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low"> Price: High to Low</option>
                      <option value="Release Date"> Release Date</option>
                      <option value="Avg. Rating"> Avg. Rating</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6 col-6">
                  <ProductCard />
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <ProductCard />
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <ProductCard />
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
