import { Link } from "react-router-dom";
import logo from "./images/aquarium_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar links">
      <div className="links">
        <a href="">
          <img className="img-responsive imageLogo" src={logo} alt="logo" />
        </a>
        <Link to="/">Homes</Link>
        <Link to="/aquarium">Aquarium</Link>
        <Link to="/listings" className="importantLink">
          Listings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
