import { useState } from "react";
import { CloseButton, Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Link } from "react-router-dom";
import { AuthForm } from "./AuthForm";

export const AuthModal = (props) => {
  const [isAuthModalShow, setAuthModalShow] = useState(true);
  const toggleShowModal = () => {
    setAuthModalShow(false);
    props.showAuthModal();
  };
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
        <AuthForm
          logIn={props.logIn}
          toggleShowModal={toggleShowModal}
          setBedReqAC={props.setBedReqAC}
          bedReq={props.bedReq}
        />
        <Link to={"Registration"}>
          <p onClick={toggleShowModal}>Registration</p>
        </Link>
      </ModalBody>
    </Modal>
  );
};
