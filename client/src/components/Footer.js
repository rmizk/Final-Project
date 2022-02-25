import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="body">
      <section className="footer">
        <div className="social">
          <a href="https://www.instagram.com/sfax_elmezyena/?hl=fr">
            {" "}
            <i className="fab fa-instagram"></i>{" "}
          </a>
          <a href="https://www.facebook.com/Sfax.El.Mezyena">
            {" "}
            <i className="fab fa-facebook-f"></i>{" "}
          </a>
          <a href="https://www.youtube.com/c/SfaxElMezyena">
            {" "}
            <i className="fab fa-youtube"></i>{" "}
          </a>
        </div>

        <ul className="list">
          <li>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Accueil
            </Link>

            {/* <a href="#"> Accueil </a> */}
          </li>
          <li>
            <Link to="/AboutUs" onClick={() => window.scrollTo(0, 0)}>
              A propos
            </Link>

            {/* <a href="#"> A propos </a> */}
          </li>
          <li>
            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>

            {/* <a href="#"> Contact </a> */}
          </li>
        </ul>

        <p className="copyright">
          Copyright @2022 Sfax Mezyena - Designed by Hammami Ramzi
        </p>
      </section>
    </div>
  );
};

export default Footer;
