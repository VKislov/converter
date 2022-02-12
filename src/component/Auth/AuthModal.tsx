import { FC, useState } from "react";
import { CloseButton, Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Link } from "react-router-dom";
import { AuthForm } from "./AuthForm";
import { AuthModalProps } from "./interface";

export const AuthModal:FC<AuthModalProps> = ({bedReq,logIn,showAuthModal,setBedReqAC}) => {
  const [isAuthModalShow, setAuthModalShow] = useState<boolean>(true);
  const toggleShowModal = () => {
    setAuthModalShow(false);
    showAuthModal();
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
            showAuthModal();
          }}
        ></CloseButton>
      </ModalHeader>
      <ModalBody>
        <AuthForm
          logIn={logIn}
          toggleShowModal={toggleShowModal}
          setBedReqAC={setBedReqAC}
          bedReq={bedReq}
        />
        <Link to={"Registration"}>
          <p onClick={toggleShowModal}>Registration</p>
        </Link>
      </ModalBody>
    </Modal>
  );
};
