import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
const Aquarium = () => {
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

        <Stage
          width={3000}
          height={1500}
          options={{ image: { aquarium }, backgroundAlpha: 0 }}
        >
          <Sprite
            image={aquarium}
            scale={{ x: 0.15, y: 0.15 }}
            anchor={0.5}
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
          />
        </Stage>
        {/* <img
          className="aquarium"
          width="1200px"
          height="800px"
          src={aquarium}
          alt=""
        /> */}
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
