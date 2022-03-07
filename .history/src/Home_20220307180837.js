import { useState } from "react";

import { useEffect } from "react";
import betta from "./images/betta.png";
import arrow from "./images/arrow.jpg";
import swordtail from "./images/swordtail-border-right.png";
import zebraDanio from "./images/zebra-danio.png";
import commonPleco from "./images/common-pleco.png";
import guppy from "./images/guppy.png";
import pearlGourami from "./images/pearl-gourami.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import React from "react";
const element = <FontAwesomeIcon icon={faCoffee} />;
const Home = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  //let name = 'mario';
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(28);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022 </h1>

        <p className="text-center ">
          maybe add a video here showing off the application portion
        </p>
        <div className=""text-center "">
          <FontAwesomeIcon icon="fa-solid fa-check-square" />
          Your <FontAwesomeIcon icon="fa-regular fa-coffee" /> is hot!
        </div>
        <div id="sword" className="fishanim">
          <img width="200px" height="100px" src={swordtail} alt="" />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <br />
        <br />
        <h1>ABOUT THIS PROJECT</h1>
        <div className="container">
          <p className="text-center boldText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div id="fish1" className="fishanim">
          <img width="150px" height="100px" src={guppy} alt="" />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <section className="darkSection">
        <br />
        <br />
        <br />
        <br />

        <h1 className="darkBlueText">ABOUT US</h1>
        <div className="container">
          <p className="text-center darkBlueText boldText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <br />
          <figure>
            <div id="avatarAshok"></div>
            <figcaption className="boldText">Ashok Sasitharan</figcaption>
            <figcaption className="boldText">Lead Developer</figcaption>
          </figure>
          <figure>
            <div id="avatarJacky"></div>
            <figcaption className="boldText">Jacky Yuan</figcaption>
            <figcaption className="boldText">Project Analyst</figcaption>
          </figure>
          <figure>
            <div id="avatarAndre"></div>
            <figcaption className="boldText">Andre Agrippa</figcaption>
            <figcaption className="boldText">Project Manager</figcaption>
          </figure>
        </div>

        <br />
        <br />
        <br />
        <div class="bubbles bubble-1"></div>
        <div class="bubbles bubble-5"></div>
        <div class="bubbles bubble-2"></div>
        <div class="bubbles bubble-6"></div>
        <div class="bubbles bubble-3"></div>
        <div class="bubbles bubble-7"></div>
        <div class="bubbles bubble-4"></div>
        <div class="bubbles bubble-8"></div>
      </section>
      <section className="darkBlueSection"></section>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top ">
          <img className="arrowimg" src={arrow} alt="submit" />
        </button>
      )}
    </div>
  );
};

export default Home;
