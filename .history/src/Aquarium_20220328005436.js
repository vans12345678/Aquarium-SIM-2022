import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
const Aquarium = () => {
  <Stage>
    <Sprite image="./bunny.png" x={100} y={100} />
  </Stage>;

  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>

        <br />
        <br />

        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <br />
        <br />

        <img
          className="aquarium"
          width="1200px"
          height="800px"
          src={aquarium}
          alt=""
        />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
