import React from "react";
import "./uslugi.css";

import uslugi1 from "../../assets/uslugi1.webp";
import uslugi2 from "../../assets/uslugi2.webp";
import uslugi3 from "../../assets/uslugi3.webp";

const Uslugi = () => {
  return (
    <div className="bestpomp-services-container">
      <div className="services-title">
        <p>USŁUGI</p>
        <span>Nasza oferta</span>
      </div>
      <div className="services-photos">
        <div className="service-container service-black">
          <img src={uslugi1} alt="BESTPOMP" />
          <p>KIEROWNICTWO BUDOWY</p>
          <span>Dostosowane do Twoich potrzeb</span>
        </div>
        <div className="service-container service-navy">
          <img src={uslugi2} alt="BESTPOMP" />
          <p>PLANOWANIE BUDOWY</p>
          <span>Skutecznie. Rzetelnie. Najlepiej.</span>
        </div>
        <div className="service-container service-yellow">
          <img src={uslugi3} alt="BESTPOMP" />
          <p>KONSERWACJA BUDYNKÓW</p>
          <span>Chodzi o szczegóły</span>
        </div>
      </div>
    </div>
  );
};

export default Uslugi;
