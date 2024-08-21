import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Mail from "../../assets/images/mail.svg";
import Pin from "../../assets/images/pin.svg";
import FooterLogo from "../../assets/images/footer-logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/asap" className="footer-logo">
                <img src={FooterLogo} alt="footer-logo" />
              </Link>
              <ul>
                <li>
                  <a href="mailto:hello@asap-cv.fr">
                    <img src={Mail} alt="mail" />
                    hello@asap-cv.fr
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66e2e1b65366d:0x5d0761d720ecba0c?sa=X&ved=1t:8290&ictx=111" target="_blank" className="loc-link">
                    <img src={Pin} alt="pin" />
                    231 Rue Saint-Honoré, 75001 Paris
                  </a>
                </li>
              </ul>
            </div>
            <div className="col menu">
              <Link to="/asap">Mentions légales</Link>
              <Link to="/asap">CGU & CGV</Link>
              <Link to="/asap">Politique de confidentialité</Link>
            </div>
            <div className="col">
              <button type="button">Déposer un CV</button>
            </div>
          </div>
          <div className="row">
             <p>© 2024 ASAP CV  Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
