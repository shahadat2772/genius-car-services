import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-4 text-center text-secondary">
      <p>
        <small>copyright koduCar ©{year}</small>
      </p>
    </footer>
  );
};

export default Footer;
