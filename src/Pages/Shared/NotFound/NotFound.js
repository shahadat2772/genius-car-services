import React from "react";
import notfound from "../../../images/notfound.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
