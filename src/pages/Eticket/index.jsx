import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import DetailCheckoutCard from "../../components/DetailCheckoutCard";
import "./style.css";
import CompEticket from "../../components/CompEticket";
const Eticket = () => {
  return (
    <div>
    <Navbar />
    <div className="container-fluid blank-container-payment">xxx</div>
    <div className="container">
      <HeaderPayment />
        <CompEticket />
    </div>
    <Footer />
  </div>
  )
}

export default Eticket