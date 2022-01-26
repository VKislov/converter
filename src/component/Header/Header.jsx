import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { AuthContainer } from "../Auth/AuthContainer";
import style from "./Header.module.css";
export const Header = () => {
  return (
    <div className={style.header}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="/">GeyBoyConverter</NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <span style={{ textAlign: "right" }}>
            <AuthContainer />
          </span>
        </Container>
      </Navbar>
    </div>
  );
};
