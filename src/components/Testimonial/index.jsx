import "../Testimonial/style.css";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import ButtonRentalCar from "../ButtonRentalCar";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h2 className="header-text-sec-4">Testimonial</h2>
            <p className="sub-text-sec-4">Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className="col-12 px-4">
            <Carousel />
          </div>

          {/* sewa mobil */}
          <div className="col-12 mt-5">
            <div className="card text-center py-5 px-5 rounded-4 card-blue">
              <div className="card-body">
                <h2 className="card-title mb-4 card-blue-header-text">Sewa Mobil di Yogyakarta Sekarang</h2>
                <p className="card-text mb-5 card-blue-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua
                </p>
                <Link to={"/car"}>
                  <ButtonRentalCar />
                </Link>
              </div>
            </div>
          </div>
          {/* sewa mobil*/}
        </div>
      </section>
    </>
  );
};
export default Testimonial;
