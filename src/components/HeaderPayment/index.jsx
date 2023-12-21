import React from "react";
import iconArrowLeft from "../../assets/icon/fi_arrow-left.png";
import "./style.css";

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
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
]

const HeaderPayment = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })
  return (
    <div className="container header-payment px-5">
      <div className="d-flex justify-content-between">
        <div className="d-inline-flex align-items-center gap-3">
          <img className="icon-arrow-left" src={iconArrowLeft}></img>
          <h1 className="m-auto text-header-payment">Pembayaran</h1> 
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
