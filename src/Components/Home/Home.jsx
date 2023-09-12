import React, { Component } from "react";
import "./home.css";
import MySVG from "./avataaars.svg";
import Navbar from "./../Navbar/Navbar";
class Home extends Component {
  render() {
    return (
      <>
        <div className="home d-flex align-items-center justify-content-center py-3 ">
          <div className="w-25 text-center text-white">
            <img className=" w-100 rounded" src={MySVG} alt="My SVG" />
            <h2>Start framework</h2>
            <i className="fa-solid w-100 fa-star"></i>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
