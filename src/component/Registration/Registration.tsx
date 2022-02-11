import { RegistrationForm } from "./RegistrationForm";
import style from "./Registration.module.css";
import { FC } from "react";
interface registrationProps {
  bedReq:string|null,
  regUser:void,
  setBedReqAC:void,
}
export const Registration: FC<registrationProps> = ({bedReq, regUser, setBedReqAC}) => {
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
