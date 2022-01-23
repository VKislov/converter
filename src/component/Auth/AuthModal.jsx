import { useState } from "react";
import {
  Button,
  CloseButton,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

export const AuthModal = (props) => {
  const [email, setEmail] = useState(null);
  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const [password, setPassword] = useState(null);
  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };
  const [isAuthModalShow, setAuthModalShow] = useState(true);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const switchTypeOfInputPasswordField = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
  };
  const showOrHidePassword = () => {
    if (passwordInputType === "password") {
      return (
        <img
          alt="showOrHidePassword"
          src="https://icon-library.com/images/show-icon-png/show-icon-png-21.jpg"
          style={{ height: "20px" }}
        ></img>
      );
    } else {
      return (
        <img
          alt="showOrHidePassword"
          src="https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-07-512.png"
          style={{ height: "20px" }}
        ></img>
      );
    }
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
        <div>
          <input
            type={"text"}
            placeholder="Enter ur e-mail"
            onChange={onEmailChange}
            value={email}
          ></input>
        </div>
        <div>
          <input
            type={passwordInputType}
            placeholder="Enter ur password"
            onChange={onPasswordChange}
            value={password}
          ></input>
          <button
            style={{ height: "30px" }}
            onClick={switchTypeOfInputPasswordField}
          >
            {showOrHidePassword()}
          </button>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            props.logIn(email, password);
          }}
        >
          LogIn
        </Button>
      </ModalFooter>
    </Modal>
  );
};
