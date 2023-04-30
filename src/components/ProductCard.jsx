import React from "react";
import productimg from "../images/products/product-img-1.jpg";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="h-100 py-3">
        <div className="product-card">
          <div className="product-box">
            <div className="product-img">
              <img src={productimg} alt="" />
            </div>
            <div className="product-info">
              <div className="product-category">Bakery & Biscuits</div>
              <div className="product-name">
                <Link to="/products-details">Cadbury 5 Star Chocolate</Link>
              </div>
              <div className="price-add">
                <p>
                  $32 <span className="cut-price">$35</span>
                </p>
                <button type="button" className="btn btn-success">
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
