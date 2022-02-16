import { RegistrationForm } from "./RegistrationForm";
import style from "./Registration.module.css";
import { FC } from "react";

export const Registration: FC = () => {
  return (
    <div className={style.wrapper}>
      <h2>Registration</h2>
      <div>
        <RegistrationForm/>
      </div>
    </div>
  );
};
