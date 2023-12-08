import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import * as requestAPI from "../Login/helpers/Api";
const Login = () => {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmailUser(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordUser(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const bodyPayLoad = {
        email: emailUser,
        password: passwordUser,
      };
      setLoading(true);
      const res = await requestAPI.handleLogin(bodyPayLoad);
      localStorage.setItem("accesToken", res.data.access_token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Succes",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.log(err);
      if (emailUser === "" || passwordUser === "") {
        Swal.fire({
          title: "Email And Password ",
          text: "Cannot Be Empety!",
          icon: "warning",
        });
        setLoading(false);
      } else {
        Swal.fire({
          title: "Email And Password ",
          text: "Not Found!",
          icon: "error",
        });
        setLoading(false);
        return;
      }
    }
  };

  return (
    <div>
      <div className="head-formlogin">
        <div className="form-login">
          <Link to={"/"}>
            <div className="logo-formlogin">p</div>
          </Link>
          <div className="header-login">Welcome Back!</div>
          <form>
            <label className="label-loginemail">
              Email
              <input
                onChange={onChangeEmail}
                className="input-login"
                type="text"
                placeholder="Contoh: johndee@gmail.com"
              />
            </label>
          </form>
          <form>
            <label className="label-loginpassword">
              Password
              <input
                onChange={onChangePassword}
                className="input-login"
                type="text"
                placeholder="6+ karakter"
              />
            </label>
          </form>
          <button
            onClick={handleLogin}
            className="btn-signup"
            disabled={loading ? true : false}
          >
            {loading ? "...loading" : "Sign in"}
          </button>
          <div className="have-account">
            <p>Don’t have an account?</p>
            <Link to={"/register"}>
              <h1>Sign Up Hare</h1>
            </Link>
          </div>
        </div>
        <div className="heading-formlogin">
          <h1>Binar Car Rental</h1>
          <img
            className="image-formlogin"
            src="../src/assets/img/Background_Login.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
