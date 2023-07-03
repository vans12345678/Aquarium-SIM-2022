import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";

var stage = (
  <Stage
    id="stage"
    width={1500}
    height={800}
    options={{ backgroundAlpha: 0 }}
  ></Stage>
);
var background = (
  <Sprite
    image={aquarium}
    scale={{ x: 0.15, y: 0.15 }}
    anchor={0.5}
    x={window.innerWidth / 2}
    y={window.innerHeight / 2}
    width={stage.props.width}
    height={stage.props.height}
    name="aquarium"
  />
);

var swordtailSprite = (
  <Sprite
    image={swordtail}
    scale={{ x: 0.15, y: 0.15 }}
    anchor={0.5}
    x={-600}
    y={-200}
    name={"Swordtail"}
    ph={7}
    temperatureMin={21}
    temperatureMax={28}
    aggressionOwn="peaceful"
    aggressionOthers="peaceful"
    tankPlacement={"top"}
  />
);

// Animate the button
function animate() {
  swordtailSprite.props.x = swordtailSprite.props.x + 5;
  if (
    swordtailSprite.props.x >
    stage.props.width + swordtailSprite.props.width
  ) {
    swordtailSprite.props.x = -swordtailSprite.props.width;
  }
}

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
          {background}
          {console.log(swordtailSprite.position.x)}
          <Container position={[background.props.x, background.props.y]}>
            {swordtailSprite}
          </Container>
        </Stage>
        {/* {requestAnimationFrame(animate)} */}
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
