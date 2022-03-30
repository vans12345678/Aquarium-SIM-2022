import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Stage,
//   Sprite,
//   Container,
//   useTick,
//   Text,
//   render,
// } from "@inlet/react-pixi";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail-border-right.png";
import commonPleco from "./images/common-pleco.png";
import { ListGroup, Button } from "react-bootstrap";
import Axios from 'axios';
import {FishBasic} from './classes/FishBasic';
import {Fish} from './classes/Fish';
import { useState } from "react";
// import { Application } from "pixi.js";
// import { useIteration } from "./useIteration.js";

// const { useState } = React;

// const BasicText = () => {
//   const [app, setApp] = React.useState();
//   return (
//     <Text
//       x={30}
//       y={90}
//       text="Basic text in pixi"
//       interactive={true}
//       buttonMode={true}
//       pointertap={() => {
//         console.log("Click1");
//       }}
//     />
//   );
// };

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

// const SwordtailSprite = () => {
//   const i = useIteration(0.1);
//   return (
//     <Sprite
//       image={swordtail}
//       scale={{ x: 0.15, y: 0.15 }}
//       anchor={[-(2 + Math.sin(i / 5) * 2), 0.5]}
//       position={150}
//       x={-600}
//       y={-200}
//       name={"Swordtail"}
//       ph={7}
//       temperatureMin={21}
//       temperatureMax={28}
//       aggressionOwn={"peaceful"}
//       aggressionOthers={"peaceful"}
//       tankPlacement={"top"}
//     />
//   );
// };
// var sprite = (
//   <Sprite
//     image={commonPleco}
//     scale={{ x: 0.15, y: 0.15 }}
//     anchor={0.5}
//     position={150}
//     x={0}
//     y={0}
//     name={"Swordtail"}
//     ph={7}
//     temperatureMin={21}
//     temperatureMax={28}
//     aggressionOwn={"peaceful"}
//     aggressionOthers={"peaceful"}
//     tankPlacement={"top"}
//   />
// );

// const RotatingBunny = () => {
//   const [rotation, setRotation] = useState(0);
//   let scale = { x: 0.15, y: 0.15 };
//   useTick((delta) => delta && setRotation(rotation + 0.1 * delta));

//   return (
//     <Sprite
//       scale={{ x: 0.15, y: 0.15 }}
//       anchor={[-(2 + Math.sin(i / 5) * 2), 0.5]}
//       position={150}
//       x={-600}
//       y={-200}
//       name={"Swordtail"}
//       ph={7}
//       temperatureMin={21}
//       temperatureMax={28}
//       aggressionOwn={"peaceful"}
//       aggressionOthers={"peaceful"}
//       tankPlacement={"top"}
//       interactive={true}
//       buttonMode={true}
//       pointerdown={() => {
//         console.log("click");
//       }}
//       // rotation={rotation}
//     />
//   );
// };

// function Check() {
//   return <BasicText />;
//   // if (swordtailSprite.props.tankPlacement == "top") {
//   //   console.log("CKCKCKCKC");
//   //   return <BasicText />;
//   // } else {
//   //   return null;
//   // }
// }

const Aquarium = () => {
   var arrFish = [];
  arrFish[0] = fish.commonName;
  arrFish[1] = fish2.commonName;
  let arrCommonName = new Array(2);
  arrCommonName.push(fish);
  arrCommonName.push(fish2);

  const commonName = [ fish.commonName ];
  const scientificName = fish.scientificName;
  const averageSize = fish.averageSize;
  const lowerPH = fish.lowerPH;
  const upperPH = fish.upperPH;
  const aggressiveSameSpecies = fish.aggressiveSameSpecies;
  const aggressiveOtherSpecies = fish.aggressiveOtherSpecies;
  const fishLocationTank = fish.fishLocationTank;
  const fishImage = fish.image;

  const [fishList, setFishList] = useState([]);

  const getAllRainbow = () =>{
    Axios.get("http://localhost:3001/fishAll2").then((response) => {
      setFishList(response.data);
    });
  }

  


  // sessionStorage.setItem("fish", JSON.stringify(fish));
  var fishObj = sessionStorage.getItem("fishName");
  return (
    <div>
      <section className="home" onLoad={getAllRainbow}>
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>
        {<button onClick={getAllRainbow} type="button" className="btn btn-primary">Get All Rainbow</button>}
        {fishObj}

        <br />
        <br />
        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <br />
        <br />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 mt-1">
          <img
            className=""
            src={aquarium}
            width="1200px"
            height="700px"
            alt=""
          />
          <div className="list">
            <ListGroup>
              <ListGroup.Item action variant="secondary">
                <img
                  className="listImg"
                  src={swordtail}
                  width="100px"
                  height="50px"
                  alt=""
                />
                Swordtail
                <Button className="listBtn" variant="success">
                  Add
                </Button>
              </ListGroup.Item>
              <ListGroup.Item action variant="success">
                Success
              </ListGroup.Item>
              <ListGroup.Item action variant="danger">
                Danger
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
                Warning
                <button>Click</button>
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Info
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                Light
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>

              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Dark
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        {/* <Stage
          width={3000}
          height={1500}
          raf={false}
          renderOnComponentChange={true}
          options={{ backgroundAlpha: 0 }}
        >
          {background}
          {/* {console.log(swordtailSprite.props.name)} */}
        {/* <Container position={[background.props.x, background.props.y]}>
            <SwordtailSprite />
            <BasicText />
          </Container>
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
