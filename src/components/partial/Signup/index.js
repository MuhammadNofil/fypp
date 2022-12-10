import React from "react";
import "../../../styles/Signup.css";
const SignupForm = () => {
  return (
    <>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start main body_login">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ">
                Welcome To The <br />
                <span className="text-primary">Best Learning Platform</span>
              </h1>
              <p className="para_color">
                Looking for the answers of your solutions? Join Us
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card mt-5">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1">
                            First name
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example2">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4 btn-dark btn-lg w-75"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
