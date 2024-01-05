import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import DetailCheckoutCard from "../../components/DetailCheckoutCard";
import "./style.css";
import {validationOrder} from "../../validation/validation";
import { useNavigate, useParams } from "react-router-dom";


const Payment = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    handleValidationOrder()
  }, [])

  const handleValidationOrder = async () => {
    const response = await validationOrder(orderId)
    if (response.data === null) {
      navigate('/*')
    }
  }
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
