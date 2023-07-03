/*
Name: Ashok Sasitharan 
Student ID: 10075484
Purpose: This component is a back to top button that takes the user back to the top of the page when clicked
*/
import React, { useState } from "react";

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

  //set the scroll properties
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //create an event listener to toggle the visibility of the button
  window.addEventListener("scroll", toggleVisible);

  return (
    <button onClick={scrollToTop} className="back-to-top ">
      <img className="arrowimg" src={arrow} alt="submit" />
    </button>
  );
};

export default BackToTop;
