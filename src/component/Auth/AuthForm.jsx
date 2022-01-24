import { useState } from "react";
import { Button } from "react-bootstrap";
import { Field, Form } from "react-final-form";

export const AuthForm = (props) => {
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
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <input {...input} type="text" placeholder="Enter ur e-mail" />
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
  );
};