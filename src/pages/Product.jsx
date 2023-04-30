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
                  <p class="mb-0">
                    <span class="text-dark">24 </span> Products found
                  </p>
                </div>
                <div className="right-box">
                  <div className="sort-product">
                    <select class="form-select">
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
