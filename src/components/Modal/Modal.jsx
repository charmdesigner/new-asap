import React, { useEffect } from "react";
import Register from "../Form/Register";
import "./Modal.scss";

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show]);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={onClose}>
      <section className="card modal-main" onClick={(e) => e.stopPropagation()}>
        <Register onClose={onClose} />
        {children}
      </section>
    </div>
  );
};

export default Modal;
