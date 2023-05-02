import React from "react";
import ProductList from "../components/ProductList";
import clock from "../images/icons/clock.svg";
import gift from "../images/icons/gift.svg";
import packahe from "../images/icons/package.svg";
import refresh from "../images/icons/refresh-cw.svg";
import { GlobalProuctContext } from "../context/ProductContext";
import Slider from "react-slick";

const Home = () => {
  const { category } = GlobalProuctContext();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="feature-sec sec-padding">
        <div className="container">
          <h2 className="title">Featured Categories</h2>
          <div className="row">
            <Slider {...settings}>
              {category &&
                category.map((curEle) => {
                  return (
                    <div className="col-lg-3">
                      <div className="category-box">
                        <h3 className="category-name">{curEle}</h3>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>

      <section className="offer-sec sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="h-100 py-3">
                <div className="offer-box">
                  <div className="offer-img">
                    <img src={clock} alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>10 minute grocery now</h3>
                    <p>
                      Get your order delivered to your doorstep at the earliest
                      from FreshCart pickup stores near you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="h-100 py-3">
                <div className="offer-box">
                  <div className="offer-img">
                    <img src={gift} alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>Best Prices & Offers</h3>
                    <p>
                      Cheaper prices than your local supermarket, great cashback
                      offers to top it off. Get best pricess & offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="h-100 py-3">
                <div className="offer-box">
                  <div className="offer-img">
                    <img src={packahe} alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>Wide Assortment</h3>
                    <p>
                      Choose from 5000+ products across food, personal care,
                      household, bakery, veg and non-veg & other categories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="h-100 py-3">
                <div className="offer-box">
                  <div className="offer-img">
                    <img src={refresh} alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>Easy Returns</h3>
                    <p>
                      Not satisfied with a product? Return it at the doorstep &
                      get a refund within hours. No questions asked policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
