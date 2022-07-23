import React, { useRef } from "react";

function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef();
  function closeModal(e) {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }
  return (
    showModal && (
      <div className="Modal">
        <div className="container" ref={modalRef} onClick={closeModal}>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
