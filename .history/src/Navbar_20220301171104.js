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
  );
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
};

export default NavBar;
