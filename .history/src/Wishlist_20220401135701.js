import React, { useState, props } from "react";

import { Offcanvas } from "react-bootstrap";
import arrow from "./images/arrow.jpg";

const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

const Wishlist = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  // const [visible, setVisible] = useState(false);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // window.addEventListener("scroll", toggleVisible);

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

export default Wishlist;
