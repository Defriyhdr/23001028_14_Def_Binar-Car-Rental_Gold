import React from "react";
import imgCar from "../../assets/img/img_car.png";
import "../../components/Hero/style.css";
import { Link, useLocation } from "react-router-dom";
import ButtonRentalCar from "../ButtonRentalCar";

const Hero = () => {
  const location = useLocation();
  const isCarPage = location.pathname === "/";

  return (
    <>
      <section id="hero" className="container-fluid bg-blue-light pt-2 my-2">
        <div className="container mt-xxl-3 mt-xl-3 mt-lg-3 mt-md-3 mt-sm-5 pt-xxl-3 pt-xl-3 pt-lg-3 pt-md-3 bg-blue-light">
          <div className="row">
            <div className="col-sm-12 col-lg-6 pt-lg-2 mt-xxl-3 pt-xl-0 mt-xl-3 align-self-center">
              <h1 className="header-hero-text mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5">
                Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
              </h1>
              <p className="sub-text-hero mt-xxl-4 mt-xl-4 mt-lg-2 mt-md-4 mt-sm-4">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap
                melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>

              {isCarPage && (
                <Link to={"/car"}>
                  <ButtonRentalCar className="mt-xxl-3 mt-xl-2 mt-lg-2 mt-md-3 mt-sm-4" />
                </Link>
              )}
            </div>
            <div className="col-sm-12 col-lg-6 pt-lg-5 mt-lg-5 pe-0 wrap-car">
              <img className="img-fluid" src={imgCar} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
