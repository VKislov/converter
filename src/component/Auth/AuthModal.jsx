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
import { Field, Form } from "react-final-form";

export const AuthModal = (props) => {
  // const [email, setEmail] = useState(null);
  // const onEmailChange = (e) => {
  //   setEmail(e.currentTarget.value);
  // };
  // const [password, setPassword] = useState(null);
  // const onPasswordChange = (e) => {
  //   setPassword(e.currentTarget.value);
  // };
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
  const [disableButtonThenSubmit, setDisableButtonThenSubmit] = useState(false);
  const onSubmit = async (e) => {
    setDisableButtonThenSubmit(true);
    await props.logIn(e.email, e.password);
    setDisableButtonThenSubmit(false); // хз пока что как это будет работать, но при выключеном серве не пашет)
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
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Enter ur e-mail"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type={passwordInputType}
                      placeholder="Enter ur password"
                    />
                    <span>
                      <button
                        type="button"
                        style={{ height: "30px" }}
                        onClick={switchTypeOfInputPasswordField}
                      >
                        {showOrHidePassword()}
                      </button>
                    </span>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <Button type="submit" disabled={disableButtonThenSubmit}>
                  LogIn
                </Button>
              </div>
            </form>
          )}
        />
        {/* <div>
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
        </div> */}
      </ModalBody>
    </Modal>
  );
};
