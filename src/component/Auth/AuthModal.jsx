import { useState } from "react";
import { CloseButton, Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Link } from "react-router-dom";
import { AuthForm } from "./AuthForm";

export const AuthModal = (props) => {
  const [isAuthModalShow, setAuthModalShow] = useState(true);
  return (
    <Modal
      show={isAuthModalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader id="contained-modal-title-vcenter">
        <ModalTitle>
          <h2>Auth</h2>
        </ModalTitle>
        <CloseButton
          onClick={() => {
            setAuthModalShow(false);
            props.showAuthModal();
          }}
        ></CloseButton>
      </ModalHeader>
      <ModalBody>
        <AuthForm logIn={props.logIn} />
        <Link to={"Registration"}>
          <p>Registration</p>
        </Link>
      </ModalBody>
    </Modal>
  );
};
