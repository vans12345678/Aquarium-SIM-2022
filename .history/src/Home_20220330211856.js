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

import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <section className="home">
        <br />
        <br />
        <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022 </h1>

        <p className="text-center ">
          maybe add a video here showing off the application portion
        </p>

        <div id="sword" className="fishanim">
          <img width="200px" height="100px" src={swordtail} alt="" />
        </div>

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
          Many people may have childhood memories of keeping goldfish as a pet. 
          According to the US Census Bureau in 1993, over 10% of households have kept ornamental fish. 
          With the fishkeeping hobby being a multibillion-dollar industry with huge markets in the US, Europe and Asia. 
          In 2012, the value ornamental fish imports into the US was approximately 60 million USD. 
          The value imported into the EU was triple this number at almost 140 million USD. 
          Fish keeping is an extremely popular hobby worldwide.
          </p>
          <p className="text-center boldText">
          However, newcomers to this hobby face many pitfalls and mistakes that can cost them money and resulting in inhuman living conditions for the fish or invasive species that gets release into the environment. 
          Our goal is for this application to help enthusiasts and beginners alike avoid making such mistakes and to help ensure the fish can live healthy lives. 
          </p>
          <p className="text-center boldText">
          For this capstone project, we utilized our all our programming skills to work in a  language we have never developed in, ReactJS. 
          The application will provide users with the ability to check fish compatibility, look up fish profiles and check fish prices on the web.
         </p>
        </div>
        <div id="fish1" className="fishanim">
          <img width="150px" height="100px" src={betta} alt="" />
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
        <div className="bubbles bubble-1"></div>
        <div className="bubbles bubble-5"></div>
        <div className="bubbles bubble-2"></div>
        <div className="bubbles bubble-6"></div>
        <div className="bubbles bubble-3"></div>
        <div className="bubbles bubble-7"></div>
        <div className="bubbles bubble-4"></div>
        <div className="bubbles bubble-8"></div>
      </section>
      <section className="darkBlueSection">
        <footer className="footer">
          <p>Some footer nonsense!</p>
        </footer>
      </section>
      {/* {showButton && (
        <button onClick={scrollToTop} className="back-to-top ">
          <img className="arrowimg" src={arrow} alt="submit" />
        </button>
      )} */}
    </div>
  );
};

export default Home;
