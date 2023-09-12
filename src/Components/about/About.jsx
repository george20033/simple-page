import React, { Component } from "react";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div className="about text-white d-flex justify-content-center align-items-center">
        <div className="container  m-5">
          <div className="row">
            <div className="col-md-12  text-center  mb-4 ">
              <h2 className="fw-bold">ABOUT COMPONENT</h2>
              <i className="fa-solid  fa-star"></i>
            </div>

            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
