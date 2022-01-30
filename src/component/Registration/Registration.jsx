import { RegistrationForm } from "./RegistrationForm";
import style from "./Registration.module.css";
export const Registration = (props) => {
  return (
    <div className={style.wrapper}>
      <h2>Registration</h2>
      <div>
        <RegistrationForm
          regUser={props.regUser}
          bedReq={props.bedReq}
          setBedReqAC={props.setBedReqAC}
        />
      </div>
    </div>
  );
};
