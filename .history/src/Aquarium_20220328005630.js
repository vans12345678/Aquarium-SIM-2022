import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Sprite } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
const Aquarium = () => {
  const reducer = (_, { data }) => data;
  const Bunny = () => {
    const [motion, update] = useReducer(reducer);
    const iter = useRef(0);
    useTick((delta) => {
      const i = (iter.current += 0.05 * delta);
      update({
        type: "update",
        data: {
          x: Math.sin(i) * 100,
          y: Math.sin(i / 1.5) * 100,
          rotation: Math.sin(i) * Math.PI,
          anchor: Math.sin(i / 2),
        },
      });
    });
    return (
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        {...motion}
      />
    );
  };
  return (
    <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
      <Container x={150} y={150}>
        <Bunny />
      </Container>
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
