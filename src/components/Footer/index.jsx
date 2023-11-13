import imgLogo from "../../assets/img/logo_car.png";
import "../../components/Footer/style.css";
import React from "react";
import { useState } from "react";
import iconFacebook from "../../assets/icon/icon_facebook.png";
import iconInstagram from "../../assets/icon/icon_instagram.png";
import iconTwitter from "../../assets/icon/icon_twitter.png";
import iconMail from "../../assets/icon/icon_mail.png";
import iconTwitch from "../../assets/icon/icon_twitch.png";

const Footer = () => {
  const [list] = useState([
    {
      icon: iconFacebook,
    },
    {
      icon: iconInstagram,
    },
    {
      icon: iconTwitter,
    },
    {
      icon: iconMail,
    },
    {
      icon: iconTwitch,
    },
  ]);

  return (
    <>
      <section id="footer" className="container my-5">
        <div className="row">
          {/* addres */}
          <div className="col-sm-12 col-lg-3">
            <div className="d-flex flex-column gap-4 gap-lg-3 mb-md-4 mb-sm-3">
              <span className="footer-text">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</span>
              <span className="footer-text">binarcarrental@gmail.com</span>
              <span className="footer-text">081-233-334-808</span>
            </div>
          </div>
          {/* addres */}

          {/* navbar content */}
          <div className="col-sm-12 col-lg-2 ps-lg-5">
            <ul className="navbar-nav ms-auto wrap-nav">
              <li className="nav-item wrap-nav-li">
                <a className="nav-link p-0 mb-3 me-lg-0" href="#our-services">
                  Our Services
                </a>
              </li>
              <li className="nav-item wrap-nav-li">
                <a className="nav-link p-0 mb-3 me-lg-0" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item wrap-nav-li">
                <a className="nav-link p-0 mb-3 me-lg-0" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item wrap-nav-li">
                <a className="nav-link p-0 mb-3 me-lg-0" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* navbar content */}

          {/* sosmed */}
          <div className="col-sm-12 col-lg-4">
            <div className="row">
              <div className="col-12">
                <span className="footer-text">Connect with us</span>
              </div>
              <div className="col-12 gap-2">
                {list.map((item) => (
                  <div key={item} className="wrap-icon">
                    <img src={item.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* sosmed */}

          {/* logo */}
          <div className="col-sm-12 col-lg-3">
            <div className="row">
              <div className="col-12">
                <span className="footer-text">Copyright Binar 2022</span>
              </div>
              <div className="col-12 mt-3">
                <a className="navbar-brand" href="#">
                  <img className="img-fluid" src={imgLogo} />
                </a>
              </div>
            </div>
          </div>
          {/* logo */}
        </div>
      </section>
    </>
  );
};
export default Footer;
