import { AuthContainer } from "../Auth/AuthContainer";
import style from "./Header.module.css";
export const Header = () => {
  return (
    <div className={style.header}>
      This is Header
      <div style={{ textAlign: "right" }}>
        <AuthContainer />
      </div>
    </div>
  );
};
