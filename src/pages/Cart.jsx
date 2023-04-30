import React from "react";
import listimg from "../images/products/product-img-1.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="cart-sec sec-padding">
        <div className="container">
          <h1 className="sec-title">Shop Cart</h1>
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-box">
                <ul className="cart-items">
                  <li className="cart-list">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <div className="list-img">
                          <img src={listimg} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="list-name">
                          <Link to="">Haldiram's Sev Bhujia</Link>
                          <div class="remove-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Remove
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div class="qty">
                          <button type="button" class="qty-btn">
                            -
                          </button>
                          <span class="qty-number">3</span>
                          <button type="button" class="qty-btn">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="item-price">$5.00</div>
                      </div>
                    </div>
                  </li>
                  <li className="cart-list">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <div className="list-img">
                          <img src={listimg} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="list-name">
                          <Link to="">Haldiram's Sev Bhujia</Link>
                          <div class="remove-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Remove
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div class="qty">
                          <button type="button" class="qty-btn">
                            -
                          </button>
                          <span class="qty-number">3</span>
                          <button type="button" class="qty-btn">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="item-price">$5.00</div>
                      </div>
                    </div>
                  </li>
                  <li className="cart-list">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <div className="list-img">
                          <img src={listimg} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="list-name">
                          <Link to="">Haldiram's Sev Bhujia</Link>
                          <div class="remove-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Remove
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div class="qty">
                          <button type="button" class="qty-btn">
                            -
                          </button>
                          <span class="qty-number">3</span>
                          <button type="button" class="qty-btn">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="item-price">$5.00</div>
                      </div>
                    </div>
                  </li>
                  <li className="cart-list">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <div className="list-img">
                          <img src={listimg} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="list-name">
                          <Link to="">Haldiram's Sev Bhujia</Link>
                          <div class="remove-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Remove
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div class="qty">
                          <button type="button" class="qty-btn">
                            -
                          </button>
                          <span class="qty-number">3</span>
                          <button type="button" class="qty-btn">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="item-price">$5.00</div>
                      </div>
                    </div>
                  </li>
                  <li className="cart-list">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <div className="list-img">
                          <img src={listimg} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="list-name">
                          <Link to="">Haldiram's Sev Bhujia</Link>
                          <div class="remove-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Remove
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div class="qty">
                          <button type="button" class="qty-btn">
                            -
                          </button>
                          <span class="qty-number">3</span>
                          <button type="button" class="qty-btn">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="item-price">$5.00</div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="continue">
                  <Link to="/products" className="btn btn-success">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="summary-box">
                <h2>Summary</h2>
                <ul className="summary-list">
                  <li>
                    <div className="fee">Item Subtotal</div>
                    <div className="fee-price">$70.00</div>
                  </li>
                  <li>
                    <div className="fee">Service Fee</div>
                    <div className="fee-price">$3.00</div>
                  </li>
                  <li>
                    <div className="fee">
                      <strong>Subtotal</strong>
                    </div>
                    <div className="fee-price">
                      <strong>$73.00</strong>
                    </div>
                  </li>
                </ul>
                <div>
                  <button className="btn btn-success w-100 my-3 d-flex justify-content-between">
                    Go to Checkout <span class="fw-bold">$67.00</span>
                  </button>
                </div>
                <p>
                  By placing your order, you agree to be bound by the Freshcart
                  Terms of Service and Privacy Policy.
                </p>
                <h2>Add Promo or Gift Card</h2>
                <form action="">
                  <label for="" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id=""
                    name=""
                    placeholder="Promo or Gift Card"
                  ></input>
                  <button
                    type="submit"
                    class="btn btn-outline-dark w-100 my-2 font-weight-normal"
                  >
                    Redeem
                  </button>
                </form>
                <p className="mb-0">Terms & Conditions apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
