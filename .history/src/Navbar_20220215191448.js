import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Aquarium SIM 2022</h2>
      <div className="links">
        <Link to="/">Homes</Link>
        <Link to="/aquarium">Aquarium</Link>
        <Link
          to="/listings"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Listings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
