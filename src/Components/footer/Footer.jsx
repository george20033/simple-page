import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container text-white py-5">
            <div className="row">
              <div className="col-md-4 text-center">
                <div>
                  <h4>LOCATION</h4>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <h4>AROUND THE WEB</h4>
                  <div className="d-flex align-items-center justify-content-between">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <h4>ABOUT FREELANCER</h4>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-rights text-center text-white p-2">
          <p>Copyright © Your Website 2021</p>
        </div>
      </>
    );
  }
}

export default Footer;
