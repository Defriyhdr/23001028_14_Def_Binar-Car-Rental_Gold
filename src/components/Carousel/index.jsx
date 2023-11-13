import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/style.css";
import React, { Component } from "react";
import Slider from "react-slick";
import avatarImgOne from "../../assets/img/avatar-1.png";
import avatarImgTwo from "../../assets/img/avatar-2.png";
import iconRate from "../../assets/icon/Rate.png";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    const carouselData = [
      {
        id: 1,
        name: "John Dee 32, Bromo",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: avatarImgOne,
        icon: iconRate,
      },
      {
        id: 2,
        name: "Jane Doe 28, Bali",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: avatarImgTwo,
        icon: iconRate,
      },
      {
        id: 3,
        name: "Jane Doe 28, Bali",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: avatarImgOne,
        icon: iconRate,
      },
      {
        id: 4,
        name: "Jane Doe 28, Bali",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: avatarImgTwo,
        icon: iconRate,
      },
      {
        id: 5,
        name: "Jane Doe 28, Bali",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: avatarImgOne,
        icon: iconRate,
      },
      {
        id: 6,
        name: "Jane Doe 28, Bali",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: avatarImgTwo,
        icon: iconRate,
      },
    ];

    return (
      <div>
        <Slider {...settings}>
          {carouselData.map((data) => (
            <div className="wrap-slider">
              <div className="wrap-card-carousel">
                <div className="card-carousel" key={data.id}>
                  <div className="me-4 mt-5 pt-2">
                    <img src={data.image} />
                  </div>
                  <div className="mt-3">
                    <img className="mb-2" src={data.icon} />
                    <p className="carousel-text">{data.review}</p>
                    <p className="avatar-name">{data.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
