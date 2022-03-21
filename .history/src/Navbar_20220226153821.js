import { Link } from "react-router-dom";
import logo from "./images/aquarium_logo.png";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    // <nav className="navbar links">
    //   <div className="links">
    //     <a href="">
    //       <img className="img-responsive imageLogo" src={logo} alt="logo" />
    //     </a>
    //     <Link to="/">Homes</Link>
    //     <Link to="/aquarium">Aquarium</Link>
    //     <Link to="/listings" className="importantLink">
    //       Listings
    //     </Link>
    //   </div>
    // </nav>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
