import { useState } from "react";

import { Button } from "react-bootstrap";
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
    <section className="home">
      <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022</h1>
      <p className="text-center">
        maybe add a video here showing off the application portion
      </p>
      <Button>TEST</Button>
      {/* <button onClick={handleClick}>Click me</button> */}
    </section>
  );
};

export default Home;
