import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { Field, Form } from "react-final-form";
import { IAuthFormProps, IErrors, IValues} from "./interface";



export const AuthForm: FC<IAuthFormProps> = ({logIn,bedReq,toggleShowModal,setBedReqAC}) => {
  const [passwordInputType, setPasswordInputType] = useState<string>("password");
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

  const [disableButtonThenSubmit, setDisableButtonThenSubmit] = useState<boolean>(false);
  const onSubmit = async (e: any) => {
    setDisableButtonThenSubmit(true);
    await logIn(e.email, e.password);
    setDisableButtonThenSubmit(false);
    if (bedReq !== null) toggleShowModal();
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values:IValues) => {
        const errors:IErrors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (bedReq) {
          errors.email = bedReq;
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email">
            {({ input, meta }) => {
              if (meta.modifiedSinceLastSubmit) {
                setBedReqAC(null)
              }
              return (
                <div>
                  <input {...input} type="text" placeholder="Enter ur e-mail" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              );
            }}
          </Field>
          <Field name="password">
            {({ input, meta }) => {
              if (meta.modifiedSinceLastSubmit) {
                setBedReqAC(null)
              }
              return (
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
              );
            }}
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
