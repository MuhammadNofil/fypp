import React from "react";
import "../../styles/Home.css";
import Logo from "../../assets/images/logo.png";
// import FlatButton from '../../components/shared/button/button'
import "../../styles/Button.css";
const Home = () => {
  return (
    <>
      <div className="body_home">
        <div className="container-fluid header_border">
          <img src={Logo} alt="Logo" className="  d-block" />
        </div>
        <div className="container pt-5 ">
          <h1 className="d-flex justify-content-start pt-3">Welcome</h1>
          <p className="d-flex justify-content-start pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="pt-5">
            <a href="/">
              <span> GET STARTED</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
