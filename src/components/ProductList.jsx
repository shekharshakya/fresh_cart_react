import React from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ title }) => {
  return (
    <>
      <div className="product-list">
        <h2 className="title">{title}</h2>
        <div className="row">
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
