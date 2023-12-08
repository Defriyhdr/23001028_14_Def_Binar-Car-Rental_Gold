import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import DetailCheckoutCard from "../../components/DetailCheckoutCard";
import "./style.css";

const Payment = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid blank-container-payment">xxx</div>
      <div className="container">
        <HeaderPayment />
        <DetailCheckoutCard />
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
