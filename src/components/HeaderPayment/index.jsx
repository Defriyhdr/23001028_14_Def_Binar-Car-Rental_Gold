import React from "react";
import iconArrowLeft from "../../assets/icon/fi_arrow-left.png";
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  StepDescription,
  useSteps,
  Box,
} from '@chakra-ui/react'

const steps = [
  { title: 'Pilih Metode' },
  { title: 'Bayar'},
  { title: 'Tiket'},
]

const HeaderPayment = ({useStepIndex, orderID}) => {
  const {order} = useSelector((state) => state)
  const { activeStep } = useSteps({
    index: useStepIndex,
    count: steps.length,
  })
  return (
    <div className="container header-payment px-5">
      <div className="d-flex justify-content-between">
        <div className="d-inline-flex align-items-center gap-3">
          <Link to={`/car/${order.list_date.CarId}`}>
            <img className="icon-arrow-left" src={iconArrowLeft}></img>
          </Link>
          <div className="">
            <h1 className="m-auto text-header-payment">Pembayaran</h1>
            {
              orderID && <p className="m-0">Order ID : {orderID}</p>
            }
          </div>
        </div>
        <div className="stepper col-5">
          <Stepper index={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box>
                    <StepTitle>{step.title}</StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
        </div>
      </div>
    </div>
  );
};

export default HeaderPayment;
