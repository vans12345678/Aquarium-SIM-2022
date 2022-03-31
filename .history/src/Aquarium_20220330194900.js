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


const Aquarium = () => {
   

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
