import React from "react";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" fixed="bottom">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
};
export default Footer;
