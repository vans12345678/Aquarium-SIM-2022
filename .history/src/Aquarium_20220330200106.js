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
import { useState, useEffect } from "react";


const Aquarium = () => {

  const [fishList, setFishList] = useState([]);

  const getFish = () =>{
    Axios.get("http://localhost:3001/fishGet").then((response) => {
      setFishList(response.data);
    });
  }

  useEffect(()=>{
    getFish();
  },[]);


  // sessionStorage.setItem("fish", JSON.stringify(fish));
  var fishObj = sessionStorage.getItem("fishName");
  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>
        {/* {<button onClick={getAllRainbow} type="button" className="btn btn-primary">Get All Rainbow</button>} */}
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
          {/* <img
            className=""
            src={aquarium}
            width="1200px"
            height="700px"
            alt=""
          /> */}
          <div className="">
          <ul>
            <li>Hello</li>
            {fishList.map((item) => {
              return (
              <li key={item.id}>
                  {item.fishCommonName}
              </li>);
              })}
          </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
