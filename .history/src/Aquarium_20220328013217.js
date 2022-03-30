import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
const Aquarium = () => {
  let sprite = <Sprite image={"./pixi-test/sample.png"} />;
  return (
    <Stage width={1200} height={800} options={{ backgroundColor: 0xffffff }}>
      <Sprite
        image={aquarium}
        scale={{ x: 0.1, y: 0.1 }}
        anchor={0.5}
        x={(Window.width - Stage.width) / 2}
        y={(Window.height - Stage.height) / 2}
      />
    </Stage>
  );
  // return (
  //   <div>
  //     <section className="home">
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <h1 className="orangeText">Aquarium</h1>
  //       <p className="text-center ">Check out fish prices here!</p>

  //       <br />
  //       <br />

  //       <br />
  //     </section>
  //     <section className="homeMiddle">
  //       <br />
  //       <br />
  //       <br />
  //       <br />

  //       <img
  //         className="aquarium"
  //         width="1200px"
  //         height="800px"
  //         src={aquarium}
  //         alt=""
  //       />
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //     </section>
  //   </div>
  // );
};

export default Aquarium;
