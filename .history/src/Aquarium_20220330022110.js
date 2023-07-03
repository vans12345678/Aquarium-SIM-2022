import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stage,
  Sprite,
  Container,
  useTick,
  Text,
  render,
} from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";

const { useState } = React;
const BasicText = () => <Text x={30} y={90} text="Basic text in pixi" />;

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

let swordtailSprite = (
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
    aggressionOwn={"peaceful"}
    aggressionOthers={"peaceful"}
    tankPlacement={"top"}
  />
);

const RotatingBunny = () => {
  const [rotation, setRotation] = useState(0);
  let scale = { x: 0.15, y: 0.15 };
  useTick((delta) => delta && setRotation(rotation + 0.1 * delta));

  return (
    <Sprite
      image={swordtail}
      scale={scale}
      anchor={0.5}
      x={-600}
      y={-200}
      name={"Swordtail"}
      ph={7}
      temperatureMin={21}
      temperatureMax={28}
      aggressionOwn={"peaceful"}
      aggressionOthers={"peaceful"}
      tankPlacement={"top"}
      interactive={true}
      buttonMode={true}
      pointerdown={() => {
        console.log("click");
      }}
      // rotation={rotation}
    />
  );
};

function Check() {
  if (swordtailSprite.props.tankPlacement == "top") {
    return <BasicText />;
  } else {
    return null;
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
          {console.log(swordtailSprite.props.name)}
          <Container position={[background.props.x, background.props.y]}>
            <RotatingBunny />
            <Check />
          </Container>
        </Stage>

        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
