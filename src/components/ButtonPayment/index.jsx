import React from "react";
import "./style.css";

const ButtonPayment = ({ onClickFunction, isDisabled }) => {
  
  return (
    <div>
      <button onClick={onClickFunction} disabled={isDisabled} className="btn-payment">
        Bayar
      </button>
    </div>
  );
};

export default ButtonPayment;
