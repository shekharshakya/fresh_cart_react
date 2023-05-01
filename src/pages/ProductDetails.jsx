import React from "react";
import productmainimg from "../images/products/product-single-img-1.jpg";
import productsubimgone from "../images/products/product-single-img-2.jpg";
import productsubimgtwo from "../images/products/product-single-img-3.jpg";
import productsubimgthree from "../images/products/product-single-img-4.jpg";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import FilterTabs from "../components/FilterTabs";

const ProductDetails = () => {
  return (
    <>
      <section className="product-details-sec sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-img">
                <div className="product-main-img">
                  <img src={productmainimg} alt="" />
                </div>
                <div className="product-sub-img">
                  <div className="sub-img">
                    <img src={productmainimg} alt="" />
                  </div>
                  <div className="sub-img">
                    <img src={productsubimgone} alt="" />
                  </div>
                  <div className="sub-img">
                    <img src={productsubimgtwo} alt="" />
                  </div>
                  <div className="sub-img">
                    <img src={productsubimgthree} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details">
                <Link href="">Bakery Biscuits</Link>
                <h2 className="pro-name">Napolitanke Ljesnjak</h2>
                <div className="rating">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <div className="review">(30 reviews)</div>
                </div>
                <div className="price">
                  <span>$32</span>
                  <span className="cut-price"> $35</span>
                  <span className="offer"> 26% off</span>
                </div>
                <hr />
                <p className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque necessitatibus excepturi id in assumenda architecto
                  dolorem ut quos nemo suscipit quo fugiat nobis, hic odit
                  laudantium, quaerat recusandae, quam dignissimos.
                </p>
                <div className="product-colors">
                  <button className="button active"></button>
                  <button className="button"></button>
                  <button className="button"></button>
                </div>
                <div className="qty">
                  <button type="button" className="qty-btn">
                    -
                  </button>
                  <span className="qty-number">3</span>
                  <button type="button" className="qty-btn">
                    +
                  </button>
                </div>
                <button type="button" className="add-to-cart btn btn-success">
                  <i className="fa-solid fa-bag-shopping"></i> Add to cart
                </button>
                <hr />
                <div className="product-sub-info">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>Product Code:</td>
                        <td>FBB00255</td>
                      </tr>
                      <tr>
                        <td>Availability:</td>
                        <td>In Stock</td>
                      </tr>
                      <tr>
                        <td>Type:</td>
                        <td>Fruits</td>
                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td>
                          <small>
                            01 day shipping.
                            <span className="text-muted">( Free pickup today)</span>
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FilterTabs />
      <section className="products-sec">
        <div className="container">
          <ProductList title="Related Products" />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
