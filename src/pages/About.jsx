import React from "react";
import aboutimg from "../images/about/about-img.jpg";
import freshone from "../images/about/about-icons-1.svg";

const About = () => {
  return (
    <>
      <section className="about-sec sec-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content lp">
                <h2>The Future of Grocery Delivery:</h2>
                <p>
                  By powering the future of grocery with our retail partners, we
                  give everyone access to the food they love and more time to
                  enjoy it together.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img rp">
                <img src={aboutimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-padding cp-l cp-r">
        <div className="container">
          <div className="lp rp">
            <h2 class="title">Ready to get started?</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="h-100 py-3">
                  <div className="fresh-card">
                    <div className="fresh-box">
                      <div className="fresh-img">
                        <img src={freshone} alt="" />
                      </div>
                      <h4>Grow my business with Freshcart</h4>
                      <p>
                        Duis placerat, urna ut dictum lobortis, erat libero
                        feugiat nulla, ullamcorper fermentum lectus dolor ut
                        tortor.
                      </p>
                      <button type="button" className="btn btn-dark">
                        FreshCart Platform
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="h-100 py-3">
                  <div className="fresh-card">
                    <div className="fresh-box">
                      <div className="fresh-img">
                        <img src={freshone} alt="" />
                      </div>
                      <h4>Advertise my brand on Freshcart</h4>
                      <p>
                        Duis placerat, urna ut dictum lobortis, erat libero
                        feugiat nulla, ullamcorper fermentum lectus dolor ut
                        tortor.
                      </p>
                      <button type="button" className="btn btn-dark">
                        FreshCart ads
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="h-100 py-3">
                  <div className="fresh-card">
                    <div className="fresh-box">
                      <div className="fresh-img">
                        <img src={freshone} alt="" />
                      </div>
                      <h4>Learn more about Freshcart</h4>
                      <p>
                        Duis placerat, urna ut dictum lobortis, erat libero
                        feugiat nulla, ullamcorper fermentum lectus dolor ut
                        tortor.
                      </p>
                      <button type="button" className="btn btn-dark">
                        Learn More
                      </button>
                    </div>
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

export default About;
