import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail.png";
import commonPleco from "./images/common-pleco.png";
import { ListGroup, Button, Card } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Fish, } from "./classes/Fish";
import { FishBasic } from "./classes/FishBasic";
import Toast from 'react-bootstrap/Toast'

const Aquarium = () => {
  const [fishList, setFishList] = useState([]);
  const getFish = () => {
    Axios.get("http://localhost:3001/fishGet").then((response) => {
      setFishList(response.data);
    });
  };

  useEffect(() => {
    getFish();
  }, []);

  var [userList, setUserList] = useState([]);
  let fish = new FishBasic("Name", "commonName");
  let test = "";
  const addFish = (value) => {
    //console.log(value.fishMatchID);
    let fish = new Fish
    (value.fishID, value.fishCommonName, value.fishScientificName, value.fishAverageSize, value.fishLowerPH, value.fishUpperPH, value.fishLowerTemp, 
      value.fishUpperTemp, value.fishAggrSameSpecies, value.fishAggrOtherSpecies, value.fishLocationTank, value.fishImage);

    userList.push(fish);
    setUserList(userList);

    window.sessionStorage.setItem("fishNames", JSON.stringify(fish));
    test = JSON.parse(sessionStorage.getItem("fishNames"));

    test = test.commonName;
    console.log(test);
    toggleShowA();
    alert("Added " + test);
    
  };
  function getName()
  {
    let x = "";
    if(sessionStorage.length != 0)
    {
      x = JSON.parse(sessionStorage.getItem("fishNames"))
      x = x.commonName.toString();
    }

    return x;
    
  }

  function fishNameChange(commonName, ScientificName) {
    if (commonName != "N/A") {
      var pageTitleName = commonName;
    } else {
      var pageTitleName = ScientificName;
    }

    return pageTitleName;
  }

  function clearSession() {
    userList = [];
    sessionStorage.clear();
  }

  function getObjectValues()
  {
    let arrFishID = [];
    arrFishID = sessionStorage.getItem("fishNames").split(":");

    return arrFishID[1];
  }

  const [showA, setShowA] = useState(false);
  
  const toggleShowA = () => setShowA(!showA);

  let x = [];
  return (
    <div>
      <section className="home">
        <br />
        <br />

        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>
        <br />
        <br />
      </section>
      <section className="homeMiddle">

      </section>
    </div>
  );
};

export default Aquarium;
