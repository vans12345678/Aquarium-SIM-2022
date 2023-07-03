import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";
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

        <Stage width={3000} height={1500} options={{ backgroundAlpha: 0 }}>
          <Sprite
            id="background"
            image={aquarium}
            scale={{ x: 0.15, y: 0.15 }}
            anchor={0.5}
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
          />
          {console.log(document.getElementById("background").width)}
          <Sprite
            image={swordtail}
            scale={{ x: 0.2, y: 0.2 }}
            anchor={0.5}
            x={1000}
            y={500}
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
