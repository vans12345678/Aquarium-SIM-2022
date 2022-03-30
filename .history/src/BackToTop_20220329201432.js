import React, { useState } from "react";

import { Button } from "./Styles";
import arrow from "./images/arrow.jpg";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <img className="arrowimg" src={arrow} alt="submit" />
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    </Button>
  );
};

export default BackToTop;
