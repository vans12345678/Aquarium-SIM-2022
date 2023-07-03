import React from "react";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column footerColor fixed-bottom"
      fixed="bottom"
    >
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link>Link</Nav.Link>
      <Nav.Link>Link</Nav.Link>
      <Nav.Link>Disabled</Nav.Link>
    </Nav>
  );
};
export default Footer;
