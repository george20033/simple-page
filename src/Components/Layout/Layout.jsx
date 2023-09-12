import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
