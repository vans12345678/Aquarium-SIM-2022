import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar links">
      <div className="links">
        <img src={"/public/images/aquarium_logo.png"} />
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
