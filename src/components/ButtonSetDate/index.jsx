import React from "react";
import "./style.css";

const ButtonSetDate = ({ onClickFunction, isDisabled }) => {

  return (
    <div>
      <button onClick={onClickFunction} disabled={isDisabled} className="btn-set-date">
        Lanjutkan Pembayaran
      </button>
    </div>
  );
};

export default ButtonSetDate;
