import React from "react";
import "../../../styles/Login.css";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Login_form = () => {
  return (
    <>
      <button
        type="button"
        class="btn mr-md-2 mb-md-0 mb-2 btn-outline-twitter"
      >
        <FaGooglePlusG />
        Connect with Twitter
      </button>
    </>
  );
};

export default Login_form;
