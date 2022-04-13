import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const { name, img, description, price, id } = service;
  return (
    <div className="service-container">
      <img className="img-fluid" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: ${price} </p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn-primary"
      >
        Book This Service
      </button>
    </div>
  );
};

export default Service;
