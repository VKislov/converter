import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { AuthContainer } from "../Auth/AuthContainer";
import { LogOutContainer } from "../Auth/LogOut/LogOutContainer";
import style from "./Header.module.css";
export const Header = (props) => {
  const Auth = () => {
    if (localStorage.getItem("token") !== null) {
      return <LogOutContainer />;
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
            GeyBoyConverter
          </NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="History">History</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <span style={{ textAlign: "right" }}>{Auth()}</span>
        </Container>
      </Navbar>
    </div>
  );
};
