import { Link } from "react-router-dom";
import logo from "./images/aquarium_logo.png";

const Navbar = () => {
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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
