import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="contact-sec sec-padding">
        <div className="container">
          <div className="lp rp">
            <div className="contact-form lp rp">
              <h1>Retailer Inquiries</h1>
              <p>
                This form is for retailer inquiries only. For all other customer
                or shopper support requests, please visit the links below this
                form.
              </p>
              <form action="">
                <div className="row">
                  <div class=" col-lg-6 mb-3">
                    <label for="" class="form-label">
                      First Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      name=""
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div class=" col-lg-6 mb-3">
                    <label for="" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      name=""
                      placeholder="Enter Your Last name"
                    />
                  </div>
                  <div class=" col-lg-12 mb-3">
                    <label for="" class="form-label">
                      Company
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      name=""
                      placeholder="Your Company"
                    />
                  </div>
                  <div class=" col-lg-12 mb-3">
                    <label for="" class="form-label">
                      Title
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      name=""
                      placeholder="Your Title"
                    />
                  </div>
                  <div class=" col-lg-6 mb-3">
                    <label for="" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      name=""
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div class=" col-lg-6 mb-3">
                    <label for="" class="form-label">
                      Phone
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      name=""
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label for="" class="form-label">
                      Comments
                    </label>
                    <textarea
                      class="form-control"
                      id=""
                      rows="3"
                      placeholder="Additional Comments"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
