import { FC } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { Auth } from "../Auth/Auth";
import { AuthContainer } from "../Auth/AuthContainer";
import { LogOut } from "../Auth/LogOut/LogOut";
import style from "./Header.module.css";

export const Header: FC = () => {
  const {isAuth} = useAppSelector(state=>state.authReducer)
  const AuthRender = () => {
    if (isAuth !== null) {
      return <LogOut />;
    } else {
      return <AuthContainer />;
    }
  };

  return (
    <div className={style.header}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="/">
            <img
              alt="billy"
              src={
                "https://c.tenor.com/BSnn_D2LLbsAAAAd/billy-herrington-billy-herrington-drinks-beer.gif"
              }
              style={{
                borderRadius: "15%",
                height: "100px",
                paddingRight: "5px",
              }}
            ></img>
            GachiBoyConverter
          </NavbarBrand>
          <Nav className="me-auto">
            <Link to={"/"} className={style.navLink}>
              Home
            </Link>
            <Link to={"History"} className={style.navLink}>
              History
            </Link>
          </Nav>

          <span style={{ textAlign: "right" }}>{AuthRender()}</span>
        </Container>
      </Navbar>
    </div>
  );
};
