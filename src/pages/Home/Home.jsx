import React from "react";
import { Parallax } from "react-parallax";

import parallaxImage from "../../assets/paralax_background.webp";
import homepageInfoImage from '../../assets/homepage_info.png';

import Kontakt from "../Kontakt/Kontakt";
import Uslugi from "../Uslugi/Uslugi";

import "./home.css";

const Home = () => {
  return (
    <div className="bestpomp-homepage-container">
      <Parallax
        className="bestpomp-react-parallax-container"
        bgClassName="bestpomp-react-parallax-background"
        contentClassName="bestpomp-homepage-parallax"
        bgImage={parallaxImage}
        strength={450}
      >
        <div className="bestpomp-homepage-parallax-title">
          <p>BESTPOMP</p>
          <button>Kontakt</button>
        </div>
      </Parallax>
      <div className="bestpomp-homepage-info">
        <div className="">
          <p>KIM JESTEŚMY?</p>
          <span>
            Od swoich początków w branży w 2000 roku BestPomp uchodzi za Firma
            budowlana o najlepszej reputacji w miejscowości Warszawa. Świadczymy
            różnorodne usługi dostosowane do wszelkich potrzeb naszych klientów.
            Cokolwiek planujesz, nasi specjaliści pomogą urzeczywistnić Twoje
            marzenia. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę już
            dziś.
          </span>
        </div>
        <img src={homepageInfoImage} className="bestpomp-homepage-info-image" alt="BESTPOMP" />
      </div>
      <div className="bestpomp-homepage-services">
        <Uslugi />
      </div>
      <Kontakt />
    </div>
  );
};

export default Home;
