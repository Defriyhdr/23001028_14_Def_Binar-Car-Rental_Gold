import React from "react";
import iconArrowLeft from "../../assets/icon/fi_arrow-left.png";
import "./style.css";

const HeaderPayment = () => {
  return (
    <div className="d-flex gap-3 header-payment px-5">
      <div className="d-inline-flex align-items-center gap-3 ">
        <img className="icon-arrow-left" src={iconArrowLeft}></img>
        <h1 className="m-auto text-header-payment">Pembayaran</h1>
      </div>
      <div>{/* stepper */}</div>
    </div>
  );
};

export default HeaderPayment;
