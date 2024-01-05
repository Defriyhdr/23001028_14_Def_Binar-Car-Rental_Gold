import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import "./style.css";
import CompEticket from "../../components/CompEticket";
import { useParams } from "react-router-dom";
const Eticket = () => {
  const { orderId } = useParams()
  return (
    <div>
    <Navbar />
    <div className="container-fluid blank-container-payment">xxx</div>
    <div className="container">
      <HeaderPayment useStepIndex={3} orderID={orderId}/>
        <CompEticket />
    </div>
    <Footer />
  </div>
  )
}

export default Eticket