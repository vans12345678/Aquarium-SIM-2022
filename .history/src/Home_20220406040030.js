import { useState } from "react";

import { useEffect } from "react";
import betta from "./images/betta.png";
import arrow from "./images/arrow.jpg";
import swordtail from "./images/swordtail-border.png";
import zebraDanio from "./images/zebra-danio.png";
import commonPleco from "./images/common-pleco.png";
import guppy from "./images/guppy.png";
import pearlGourami from "./images/pearl-gourami.png";
import carousel1 from "./images/carousel1.png";
import carousel3 from "./images/carousel3.png";
import carousel2 from "./images/carousel2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./BackToTop";
import Carousel from "react-bootstrap/Carousel";

import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <section className="home">
        <br />
        <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022 </h1>

        <br/>
        <div id="sword" className="fishanim">
          <img width="200px" height="100px" src={swordtail} alt="" />
        </div>
        <div className="sizeCarou">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height={"550px"}
                src={carousel1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="orangeTextSmall">AQUARIUM FISH PICKER</h3>
                <p className="customA">
                  Try out our <a href="/aquarium">aquarium fish picker</a> to check for compatibility and more.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height={"550px"}
                src={carousel2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="orangeTextSmall">FISH COMPENDIUM</h3>
                <p className="customA">Find out information about aquarium fish species in our <a href="/compendium">fish compendium.</a></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height={"550px"}
                src={carousel3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="orangeTextSmall">SHOP FOR THE BEST PRICES</h3>
                <p className="customA">
                  Use our <a href="/listings">listings page</a> to find the best prices for the fish you want.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
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
            Many people may have childhood memories of keeping goldfish as a
            pet. According to the US Census Bureau in 1993, over 10% of
            households have kept ornamental fish. With the fishkeeping hobby
            being a multibillion-dollar industry with huge markets in the US,
            Europe and Asia. In 2012, the value ornamental fish imports into the
            US was approximately 60 million USD. The value imported into the EU
            was triple this number at almost 140 million USD. Fish keeping is an
            extremely popular hobby worldwide.
          </p>
          <p className="text-center boldText">
            However, newcomers to this hobby face many pitfalls and mistakes
            that can cost them money and resulting in inhuman living conditions
            for the fish or invasive species that gets release into the
            environment. Our goal is for this application to help enthusiasts
            and beginners alike avoid making such mistakes and to help ensure
            the fish can live healthy lives.
          </p>
          <p className="text-center boldText">
            For this capstone project, we utilized our all our programming
            skills to work in a language we have never developed in, ReactJS.
            The application will provide users with the ability to check fish
            compatibility, look up fish profiles and check fish prices on the
            web.
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

        <h1 className="darkBlueText">ABOUT US</h1>
        <div className="container">
          <p className="text-center darkBlueText boldText">
            We are currently final year students of the Durham College's
            Computer Programming and Analysis program. Having gained experience
            from the college in many areas of programming, ranging from working
            in mainframes to creating web applications, this project is a
            culmination of some of the knowledge and skills we have learned from
            the college.
          </p>
          <br />
          <br />
          <figure>
            <div id="avatarAshok"></div>
            <figcaption className="boldText">Ashok Sasitharan</figcaption>
            <figcaption>Front-end Developer</figcaption>
            <figcaption>Lead Animator</figcaption>
          </figure>
          <figure>
            <div id="avatarJacky"></div>
            <figcaption className="boldText">Jacky Yuan</figcaption>
            <figcaption>Back-end Developer</figcaption>
            <figcaption>Graphic Designer</figcaption>
          </figure>
          <figure>
            <div id="avatarAndre"></div>
            <figcaption className="boldText">Andre Agrippa</figcaption>
            <figcaption>Back-end Developer</figcaption>
            <figcaption>Database Admin</figcaption>
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
      {/* <section className="darkBlueSection">
        <footer className="footer">
          <p>Some footer nonsense!</p>
        </footer>
      </section> */}
      {/* {showButton && (
        <button onClick={scrollToTop} className="back-to-top ">
          <img className="arrowimg" src={arrow} alt="submit" />
        </button>
      )} */}

      <BackToTop />
    </div>
  );
};

export default Home;
