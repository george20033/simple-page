import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Layout from "./Components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: (
          <div className="d-flex align-items-center justify-content-center vh-100">
            <h2>Page not found</h2>
          </div>
        ),
      },
    ],
  },
]);

class App extends Component {
  render() {
    return (
      <>
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Portfolio /> */}
        {/* <Contact /> */}
        {/* <Navbar /> */}
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
