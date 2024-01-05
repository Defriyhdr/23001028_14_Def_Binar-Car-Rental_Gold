import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import DetailConfirmPayment from "../../components/DetailConfirmPayment";

import { useSelector } from "react-redux";
// import "./style.css";

const Payment3 = () => {
  const {order} = useSelector((state) => state)

  return (
    <div>
      <Navbar />
      <div className="container-fluid blank-container-payment">xxx</div>
      <div className="container">
        <HeaderPayment useStepIndex={1} orderID={order.list_date.id}/>
        <DetailConfirmPayment/>
      </div>
      <Footer />
    </div>
  );
};

export default Payment3;
