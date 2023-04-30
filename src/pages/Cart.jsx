import React from "react";

const Cart = () => {
  return (
    <>
      <section className="cart-sec sec-padding">
        <div className="container">
          <h1 className="sec-title">Shop Cart</h1>
          <div className="row">
            <div className="col-lg-8"></div>
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
