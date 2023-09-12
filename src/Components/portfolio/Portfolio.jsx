import React, { Component } from "react";
import "./portfolio.css";
import img1 from "./poert1.png";
import img2 from "./port2.png";
import img3 from "./port3.png";
class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="portfolio ">
          <div className="text-center color-theme">
            <h2 className="fw-bolder">PORTFOLIO COMPONENT</h2>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-2 position-relative ">
                <img className="w-100" src={img1} alt="" />
                <div className="overlay position-absolute d-flex align-items-center justify-content-center">
                  <div className="content position-absolute ">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 position-relative">
                <img className="w-100" src={img2} alt="" />
                <div className="overlay position-absolute d-flex align-items-center justify-content-center">
                  <div className="content position-absolute ">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 position-relative">
                <img className="w-100" src={img3} alt="" />
                <div className="overlay position-absolute d-flex align-items-center justify-content-center">
                  <div className="content position-absolute ">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 position-relative">
                <img className="w-100" src={img1} alt="" />
                <div className="overlay position-absolute d-flex align-items-center justify-content-center">
                  <div className="content position-absolute ">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 position-relative">
                <img className="w-100" src={img2} alt="" />
                <div className="overlay position-absolute d-flex align-items-center justify-content-center">
                  <div className="content position-absolute ">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 position-relative">
                <img className="w-100" src={img3} alt="" />
                <div className="overlay position-absolute d-flex align-items-center justify-content-center">
                  <div className="content position-absolute ">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
