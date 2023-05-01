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
                  <div className=" col-lg-6 mb-3">
                    <label for="" className="form-label">
                      First Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      name=""
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div className=" col-lg-6 mb-3">
                    <label for="" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      name=""
                      placeholder="Enter Your Last name"
                    />
                  </div>
                  <div className=" col-lg-12 mb-3">
                    <label for="" className="form-label">
                      Company
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      name=""
                      placeholder="Your Company"
                    />
                  </div>
                  <div className=" col-lg-12 mb-3">
                    <label for="" className="form-label">
                      Title
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      name=""
                      placeholder="Your Title"
                    />
                  </div>
                  <div className=" col-lg-6 mb-3">
                    <label for="" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      name=""
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className=" col-lg-6 mb-3">
                    <label for="" className="form-label">
                      Phone
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      name=""
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label for="" className="form-label">
                      Comments
                    </label>
                    <textarea
                      className="form-control"
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
