import React from "react";
import "../NotFound/style.css";

const NotFound = () => {
  return (
    <div>
      <div className="container m-auto text-center mt-5 ">
        <div className="wrap-not-found">
          <span className="not-found-header-text">404</span>
          <span className="not-found-text">Ooops!...Page not found.</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
