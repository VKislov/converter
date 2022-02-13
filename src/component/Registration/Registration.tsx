import { RegistrationForm } from "./RegistrationForm";
import style from "./Registration.module.css";
import { FC } from "react";
import { IRegistrationProps } from "./interfaces";

export const Registration: FC<IRegistrationProps> = ({bedReq, regUser, setBedReqAC}) => {
  return (
    <div className={style.wrapper}>
      <h2>Registration</h2>
      <div>
        <RegistrationForm
          regUser={regUser}
          bedReq={bedReq}
          setBedReqAC={setBedReqAC}
        />
      </div>
    </div>
  );
};
