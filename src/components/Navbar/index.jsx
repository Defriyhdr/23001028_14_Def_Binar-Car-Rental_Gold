import React from "react";
import imgLogo from "../../assets/img/logo_car.png";
import "../../components/Navbar/style.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const accesToken = localStorage.getItem("accesToken");

  const handleLogOut = () => {
    localStorage.removeItem("accesToken");
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-blue-light fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img src={imgLogo} />
            </Link>
          </div>
          <button
            className="navbar-toggler border-0 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header pt-4">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                <li className="nav-item">
                  {pathname == "/" ? (
                    <a className="nav-link" href="#our-services">
                      Our Services
                    </a>
                  ) : (
                    <Link className="nav-link" to="/#our-services">
                      Our Services
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {pathname == "/" ? (
                    <a className="nav-link" href="#why-us">
                      Why Us
                    </a>
                  ) : (
                    <Link className="nav-link" to="/#why-us">
                      Why Us
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {pathname == "/" ? (
                    <a className="nav-link" href="#testimonial">
                      Testimonial
                    </a>
                  ) : (
                    <Link className="nav-link" to="/#testimonial">
                      Testimonial
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {pathname == "/" ? (
                    <a className="nav-link" href="#faq">
                      FAQ
                    </a>
                  ) : (
                    <Link className="nav-link" to="/#faq">
                      FAQ
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {accesToken ? (
                    <Button onClick={handleLogOut} variant="danger" className="rounded">
                      <b>Logout</b>
                    </Button>
                  ) : (
                    <Link to={"/register"}>
                      <Button variant="success" className="rounded">
                        <b>Register</b>
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
