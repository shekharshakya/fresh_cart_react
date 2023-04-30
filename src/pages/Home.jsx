import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <section className="feature-sec sec-padding">
        <div className="container">
          <h2 className="title">Featured Categories</h2>
        </div>
      </section>

      <section className="feature-sec sec-padding">
        <div className="container">
          <ProductList title="Popular Products" />
        </div>
      </section>
    </>
  );
};

export default Home;
