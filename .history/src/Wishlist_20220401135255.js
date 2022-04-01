import React, { useState } from "react";

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
    <button onClick={scrollToTop} className="back-to-top ">
      <img className="arrowimg" src={arrow} alt="submit" />
    </button>
  );
};

export default Wishlist;
