import React from "react";
import Modal from "../../components/shared/Modal";
import "../../styles/Option.css";
const Options = () => {
  return (
    <>
      <Modal />
      <div className="px-4 py-5 px-md-5 text-center text-lg-start main body">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ">
                The best PlatForm <br />
                <span className="text-primary">To Learn</span>
              </h1>
              <p className="para_color">
                Looking for the answers of your solutions? Join Us
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 pt-5">
              <div className="card ">
                <div className="card-body py-5 px-md-5">
                  <h2>CHOOSE A CATEGORY </h2>
                  <h3>1. PROGRAMMING</h3>
                  <h3>2. PHYSICS</h3>
                  <h3>3. MATHS</h3>
                  <h3>4. DRAWING</h3>
                  <h3>5. CHART</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
