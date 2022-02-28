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
    <div>
      <section className="home">
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
      <section>
        <h1 className="pt-9">ABOUT US</h1>
      </section>
    </div>
  );
};

export default Home;
