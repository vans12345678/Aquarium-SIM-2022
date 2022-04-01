import React, { useState, Component } from "react";

import { Offcanvas } from "react-bootstrap";
import arrow from "./images/arrow.jpg";

const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

const Wishlist = (name, ...props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button onClick={toggleShow} className="back-to-top ">
        <img className="arrowimg" src={arrow} alt="submit" />
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <Wishlist key={idx} {...props} />
      ))}
    </>
  );
}
export default <Example />;
