import { useState } from "react";

import { Button } from "react-bootstrap";
import logo from "./images/aquarium_logo.png";
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
    <a className="navbar-brand" href="">
        <img className="img-responsive imageLogo" src={logo} alt="logo" />
      </a>
    <section className="home">
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022</h1>
      <p className="text-center">
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
  );
};

export default Home;
