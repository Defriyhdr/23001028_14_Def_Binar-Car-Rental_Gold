import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ButtonSetDate = ({ onClickFunction, isDisabled }) => {
  const location = useLocation()
  const token = localStorage.getItem("accesToken")
    if(!token){
      return   <Navigate to={'/login'} state={{prevUrl : location.pathname }} />
    }
  return (
    <div>
      <button onClick={onClickFunction} disabled={isDisabled} className="btn-set-date">
        Lanjutkan Pembayaran
      </button>
    </div>
  );
};

export default ButtonSetDate;
