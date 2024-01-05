import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderPayment from "../../components/HeaderPayment";
import "./style.css";
import CompEticket from "../../components/CompEticket";
import { useNavigate, useParams } from "react-router-dom";
import {validationOrder} from "../../validation/validation";
const Eticket = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    handleValidationOrder()
  }, [])

  const handleValidationOrder = async () => {
    const response = await validationOrder(orderId)
    if (response.data?.slip === null || response.data === null) {
      navigate('/*')
    }
  }
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