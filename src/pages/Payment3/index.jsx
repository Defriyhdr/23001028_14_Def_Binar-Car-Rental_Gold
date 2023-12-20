import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import DetailConfirmPayment from "../../components/DetailConfirmPayment";
// import "./style.css";

const Payment3 = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid blank-container-payment">xxx</div>
      <div className="container">
        <HeaderPayment />
        <DetailConfirmPayment/>
      </div>
      <Footer />
    </div>
  );
};

export default Payment3;
