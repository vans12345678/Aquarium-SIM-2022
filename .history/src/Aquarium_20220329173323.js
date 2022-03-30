import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";

var stage = (
  <Stage width={1500} height={800} options={{ backgroundAlpha: 0 }}></Stage>
);
console.log(stage.props.width);
var background = (
  <Sprite
    image={aquarium}
    scale={{ x: 0.15, y: 0.15 }}
    anchor={0.5}
    x={window.innerWidth / 2}
    y={window.innerHeight / 2}
    width={stage.props.width}
    height={stage.props.height}
  />
);
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

        {stage}
        {/* <Stage width={3000} height={1500} options={{ backgroundAlpha: 0 }}>
          {background}
          {console.log(background.props.x)}
          <Sprite
            image={swordtail}
            scale={{ x: 0.2, y: 0.2 }}
            anchor={0.5}
            x={1000}
            y={500}
          />
        </Stage> */}

        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
