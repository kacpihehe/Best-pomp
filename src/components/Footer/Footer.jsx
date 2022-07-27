import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from '@icons-pack/react-simple-icons';

const Footer = () => {
  return (
    <div className="bestpomp-footer-container">
      <div className="bestpomp-footer-socialmedia">
        <a href="https://www.facebook.com/"><Facebook /></a>
         <a href="https://twitter.com/"><Twitter /></a>
         <a href="https://www.linkedin.com/"><Linkedin /></a>
         <a href="https://www.instagram.com/"><Instagram /></a>
      </div>
      <span className="bestpomp-footer-credentials">©2022 by BestPomp. Wykonano na zlecenie przez <b>Kacper Siewiaszczyk</b></span>
    </div>
  );
};

export default Footer;
