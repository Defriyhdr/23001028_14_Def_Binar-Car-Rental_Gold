import React from "react";
import "./style.css";

const ButtonPayment = ({ isDisabled }) => {
  return (
    <div>
      <button disabled={isDisabled} className="btn-payment">
        Bayar
      </button>
    </div>
  );
};

export default ButtonPayment;
