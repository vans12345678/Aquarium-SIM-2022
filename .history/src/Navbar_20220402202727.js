import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "./images/aquarium_logo2.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div class="container-fluid">
    <div class="navbar-collapse" id="navbarSupportedContent">
    <nav id="navbar" className="navbar links ">
      <a className="navbar-brand" href="/">
        <img className="imageLogo" src={logo} alt="logo" />
      </a>
      <div className="links">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/aquarium" activeClassName="active" exact={true}>
          Aquarium
        </NavLink>
        <NavLink to="/compendium" activeClassName="active" exact={true}>
          Compendium
        </NavLink>
        <NavLink to="/listings" activeClassName="active" exact={true}>
          Listings
        </NavLink>
      </div>
      </nav>
      </div>
      </div>
    
  );
};

export default NavBar;
