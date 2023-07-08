import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/BQ_black.png";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
export function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-bottom"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} width={"100px"} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#section__home">HOME</Nav.Link>
            <Nav.Link href="#section__about">ABOUT ME</Nav.Link>
            <Nav.Link href="#section__projects">PROJECTS</Nav.Link>
            <Nav.Link href="#section__contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
