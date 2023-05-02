import React from "react";
import productimg from "../images/products/product-img-1.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="h-100 py-3">
        <div className="product-card" id={product.id}>
          <div className="product-box">
            <div className="product-img">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <div className="product-name">
                <Link to={`/products-details/${product.id}`}>
                  {product.title}
                </Link>
              </div>
              <div className="price-add">
                <p>
                  ₹{product.price}
                  <span className="cut-price">₹{product.price * 2}</span>
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
