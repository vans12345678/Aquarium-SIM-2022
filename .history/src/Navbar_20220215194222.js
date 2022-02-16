import { Link } from "react-router-dom";
import logo from 'public/assets/image/aquarium_logo.png';
<img className="img-responsive" src={logo} alt="logo"/>

const Navbar = () => {
  return (
    <nav className="navbar links">
      <div className="links">
      <img className="img-responsive" src={logo} alt="logo"/>
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
