import { useState } from "react";

import { Button } from "react-bootstrap";
import fish from "./images/fish1.png";
import swordtail from "./images/swordtail-border-right.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
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
        <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022</h1>
        <p className="text-center ">
          maybe add a video here showing off the application portion
        </p>

        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <button onClick={handleClick}>Click me</button> */}
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <h1>ABOUT THIS PROJECT</h1>
        <div className="fishanim fishpos">
          <img width="150px" height="100px" src={fish} alt="" />
        </div>

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
            <figcaption className="boldText">
              Lead Front-End Developer
            </figcaption>
          </figure>
          <figure>
            <div id="avatarJacky"></div>
            <figcaption className="boldText">Ashok Sasitharan</figcaption>
            <figcaption className="boldText">
              Lead Front-End Developer
            </figcaption>
          </figure>
          <figure>
            <div id="avatarAndre"></div>
            <figcaption className="boldText">Ashok Sasitharan</figcaption>
            <figcaption className="boldText">
              Lead Front-End Developer
            </figcaption>
          </figure>
        </div>
        <div id="sword" className="fishanim fishpos">
          <img width="150px" height="100px" src={swordtail} alt="" />
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Home;