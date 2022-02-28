import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Homes</Link>
        <Link to="/aquarium">Aquarium</Link>
        <Link to="/listings">
          Listings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
