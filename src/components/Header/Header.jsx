import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Modal from "../Modal/Modal";
import "./Header.scss";

const Header = () => {
  const [scrolltopdata, setscrolltopdata] = useState('');
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("scrolled");
      }
    });
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <header className={`header ${scrolltopdata}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/asap">
                <img src={Logo} className="logo" alt="logo" />
              </Link>
              <div className={active ? "navbar active" : "navbar"}>
                <nav className="nav">
                  <NavLink to="/asap">Qui sommes-nous</NavLink>
                  <NavLink to="/asap">Notre mission</NavLink>
                  <NavLink to="/asap">Comment ça marche</NavLink>
                  <NavLink to="/asap">Boostez vos CV</NavLink>
                  <NavLink to="/asap">Nos formules</NavLink>
                </nav>
              </div>
              <div className="menu-icon" onClick={handleClick}>
                <i className={active ? "fa-solid fa-xmark" :  "fa-solid fa-bars"}></i>
              </div>
              <button onClick={() => setIsModalOpen(true)}>Déposer un CV</button>
            </div>
          </div>
        </div>
      </header>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
