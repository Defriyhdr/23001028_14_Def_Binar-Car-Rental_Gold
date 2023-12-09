import React, { useState } from "react";
import "./style.css";
import FormLogin from "../../components/FormLogin";
import LandingPageImage from "../../assets/img/LandingPageDesktop.png";
const Login = () => {
  return (
    <div className="container-login row">
      <div className="container-left-login">
        <FormLogin />
      </div>
      <div className="container-right-login">
        <h1>Binar Car Rental</h1>
        <img className="image-formlogin" src={LandingPageImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
