import React from "react";
import NavBar from "./navBar";
import Products from "./products";

const Home = () => {
  return (
    <div>
      
      <div className="myproducts">
        <div className="card text-bg-dark border-0">
          <img src="/assets/bgcard.jpg" className="card-img" height='651px' alt="..." />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASONAL ARRIVALS</h5>
              <p className="card-text fs-2">
                Check out all the arrivals and new fashion
              </p>
            </div>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
