import React from "react";
import TextEditor from "../../../components/partial/TextEditor";
import Input from "../../../components/shared/input/input";
import "../../../styles/CreateTextPost.css";
const CreateTextPost = () => {
  const option = ["programming", "Maths", "english", "history", "computer"];
  return (
    <>
      <div className="body">
        <div className="container mt-5 form-body">
          <div className="d-flex justify-content-center">
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6">
                  <h3>TItle</h3>
                  <Input placeholder="enter a Title" />
                </div>
                <div className="col-lg-6">
                  <h3 className="">Select a category</h3>
                  <select name="slect" id="">
                    {option.map((item) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                </div>
              </div>
              <h2 className="mt-5">Description</h2>
              <TextEditor />
              <h2 className="mt-5">OUTPUT</h2>
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTextPost;
