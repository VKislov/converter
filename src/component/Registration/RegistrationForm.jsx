import { useState } from "react";
import { Button } from "react-bootstrap";
import { Field, Form } from "react-final-form";
import { Navigate } from "react-router-dom";

export const RegistrationForm = (props) => {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [navigate, setNavigate] = useState(false);
  const nav = () => {
    if (navigate) {
      return <Navigate to={"/"} />;
    }
  };
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
    await props.regUser(e.email, e.password);
    setDisableButtonThenSubmit(false);
    setNavigate(props.bedReq !== null);
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        if (props.bedReq) {
          errors.email = props.bedReq;
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        }
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password Is Not Match";
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          <Field name="email">
            {({ input, meta }) => {
              if (meta.modifiedSinceLastSubmit) {
                props.setBedReqAC(null);
              }
              return (
                <div>
                  <input
                    {...input}
                    type={"text"}
                    placeholder="Enter e-mail"
                  ></input>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <Field name="password">
            {({ input, meta }) => {
              return (
                <div>
                  <input
                    {...input}
                    type={passwordInputType}
                    placeholder="Enter password"
                  ></input>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <Field name="confirmPassword">
            {({ input, meta }) => {
              return (
                <div>
                  <input
                    {...input}
                    type={passwordInputType}
                    placeholder="Confirm password"
                  ></input>
                  <button
                    type="button"
                    onClick={switchTypeOfInputPasswordField}
                  >
                    {showOrHidePassword()}
                  </button>

                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <div className="buttons">
            <Button type="submit" disabled={disableButtonThenSubmit}>
              Registration
            </Button>
            {nav()}
          </div>
        </form>
      )}
    />
  );
};
