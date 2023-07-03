import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container, useTick } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";
import Phaser from "phaser";
const { useState } = React;

// var stage = (
//   <Stage
//     id="stage"
//     width={1500}
//     height={800}
//     options={{ backgroundAlpha: 0 }}
//   ></Stage>
// );
// var background = (
//   <Sprite
//     image={aquarium}
//     scale={{ x: 0.15, y: 0.15 }}
//     anchor={0.5}
//     x={window.innerWidth / 2}
//     y={window.innerHeight / 2}
//     width={stage.props.width}
//     height={stage.props.height}
//     name="aquarium"
//   />
// );

// let swordtailSprite = (
//   <Sprite
//     image={swordtail}
//     scale={{ x: 0.15, y: 0.15 }}
//     anchor={0.5}
//     x={-600}
//     y={-200}
//     name={"Swordtail"}
//     ph={7}
//     temperatureMin={21}
//     temperatureMax={28}
//     aggressionOwn="peaceful"
//     aggressionOthers="peaceful"
//     tankPlacement={"top"}
//   />
// );
// const RotatingBunny = () => {
//   const [rotation, setRotation] = useState(0);

//   useTick((delta) => delta && setRotation(rotation + 0.1 * delta));

//   return (
//     <Sprite
//       image={swordtail}
//       scale={{ x: 0.15, y: 0.15 }}
//       anchor={0.5}
//       x={-600}
//       y={-200}
//       name={"Swordtail"}
//       ph={7}
//       temperatureMin={21}
//       temperatureMax={28}
//       aggressionOwn="peaceful"
//       aggressionOthers="peaceful"
//       tankPlacement={"top"}
//       // rotation={rotation}
//     />
//   );
// };

//PHASER
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};
var game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL("http://labs.phaser.io");

  this.load.image("aquarium", { aquarium });
}

function create() {
  this.add.image(400, 300, "aquarium");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  var logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
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
        {game}

        {/* <Stage width={3000} height={1500} options={{ backgroundAlpha: 0 }}>
          {background}
          {console.log(swordtailSprite.props.name)}
          <Container position={[background.props.x, background.props.y]}>
            <RotatingBunny />
          </Container>
        </Stage> */}
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
