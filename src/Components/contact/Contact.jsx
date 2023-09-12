import React, { Component } from "react";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <h2 className="fw-bold h1">CONATCT SECTION</h2>
          <i className="fa-solid fa-star"></i>
        </div>
        <form className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched ng-submitted">
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched my-3"
          />

          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className=" my-3 form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />

          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className=" my-3 form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />

          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className=" my-3 form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"
          />
          <button className="p-2 mt-4 text-white">send Message</button>
        </form>
      </>
    );
  }
}

export default Contact;
