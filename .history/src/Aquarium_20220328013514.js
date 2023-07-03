import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite, Graphics, Container } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
const Aquarium = () => {
  const draw = React.useCallback((g) => {
    g.clear();
    g.beginFill(0xff3300);
    g.lineStyle(4, 0xffd900, 1);
    g.moveTo(50, 50);
    g.lineTo(250, 50);
    g.lineTo(100, 100);
    g.lineTo(50, 50);
    g.endFill();
    g.lineStyle(2, 0x0000ff, 1);
    g.beginFill(0xff700b, 1);
    g.drawRect(50, 150, 120, 120);
    g.lineStyle(2, 0xff00ff, 1);
    g.beginFill(0xff00bb, 0.25);
    g.drawRoundedRect(150, 100, 300, 100, 15);
    g.endFill();
    g.lineStyle(0);
    g.beginFill(0xffff0b, 0.5);
    g.drawCircle(470, 90, 60);
    g.endFill();
  }, []);
  let sprite = <Sprite image={"./pixi-test/sample.png"} />;
  return (
    <Stage width={7000} height={4000} options={{ backgroundColor: 0xffffff }}>
      <Sprite
        image={aquarium}
        scale={{ x: 0.1, y: 0.1 }}
        anchor={0.5}
        x={700}
        y={500}
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
