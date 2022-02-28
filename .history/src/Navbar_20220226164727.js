import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "./images/aquarium_logo.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar links">
      <a className="navbar-brand" href="/">
        <img className="img-responsive imageLogo" src={logo} alt="logo" />
      </a>
      <div className="links">
        <NavLink to="/" activeClassName="active" exact={true}>
          Homes
        </NavLink>
        <NavLink to="/aquarium" activeClassName="active" exact={true}>
          Aquarium
        </NavLink>
        <NavLink to="/listings" activeClassName="active" exact={true}>
          Listings
        </NavLink>
      </div>
    </nav>

    // <Navbar bg="#758BFD" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={logo}
    //         className="imageLogo d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
