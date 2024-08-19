import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Modal from "../Modal/Modal";
import "./Header.scss";

const Header = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `consultant`; 
    navigate(path);
  }
  const [modalState, setModalState] = useState(false);
  const [scrolltopdata, setscrolltopdata] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY < 100) {
              setscrolltopdata('');
          } else {
              setscrolltopdata('scrolled');
          }
      });
  }, [])
  const handleClose = () => {
    setModalState(false);
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <header className={`header ${scrolltopdata}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/">
                <img src={Logo} className="logo" alt="logo" />
              </Link>
              <div className={active ? "navbar active" : "navbar"}>
                <nav className="nav">
                  <NavLink to="/">Qui sommes-nous</NavLink>
                  <NavLink to="/">Notre mission</NavLink>
                  <NavLink to="/">Comment ça marche</NavLink>
                  <NavLink to="/">Boostez vos CV</NavLink>
                  <NavLink to="/">Nos formules</NavLink>
                </nav>
              </div>
              <div className="menu-icon" onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
              <button onClick={() => setModalState(true)}>Déposer un CV</button>
            </div>
          </div>
        </div>
      </header>
      <div className="modal-main" onClick={handleClose}>
        <Modal show={modalState} close={handleClose}>   
        </Modal>
      </div>
    </>
  );
};
export default Header;
