import React from "react";
import PrimaryNavbar from "../../../components/partial/Navbar/primaryNavbar/primaryNavbar";
import Card from "../../../components/shared/Cards/index";
import question from "../../../questions";

const Feed = () => {
  return (
    <div>
      <PrimaryNavbar></PrimaryNavbar>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 pt-5 ">
            <div className="ms-5 mt-3">
              <h2>Whats in Your Mind?</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                molestiae velit illum quos explicabo officia ipsam beatae
                similique laboriosam sint.
              </span>
            </div>
          </div>
          <div className="col-lg-6  pt-3">
            <div className="container ">
              {question.map((questions) => {
                return (
                  <div className=" mt-4 " key={questions.id}>
                    <Card questions={questions} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-2 mt-2">
            <div className=" mt-5 " style={{ border: "1px solid black" }}>
              <h4 className="ms-3">Create a post...</h4>
              <button className="btn btn-dark btn-md mt-3 ms-3 mb-3">
                Create a post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
