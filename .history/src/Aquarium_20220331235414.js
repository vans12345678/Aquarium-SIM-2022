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

    window.sessionStorage.setItem("fishNames", JSON.stringify(userList));
    test = JSON.parse(sessionStorage.getItem("fishNames"));

    test = test.commonName;
    console.log(test);
    toggleShowA();
    alert("Added " + test);
    
  };
  function getName()
  {
    let name = "";
    if(sessionStorage.length != 0)
    {
      name = JSON.parse(sessionStorage.getItem("fishNames"));
      name = name.toString();
    }

    return name;
    
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
          <Toast show={showA} onClose={toggleShowA} >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
          </Toast.Header>
          
          <Toast.Body>Added { getName() }</Toast.Body>
        </Toast>
        <br />
        <br />
      </section>
      <section className="homeMiddle">
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
          <div className="">
            <Card className="list" style={{ width: "40rem" }}>
              <ListGroup variant="flush">
                {fishList.map((item) => {
                  return (
                    <ListGroup.Item key={item.fishID}>
                      <img
                        className="listImg"
                        src={require("./images/" + item.fishImage)}
                        width="100px"
                        height="50px"
                        alt=""
                      />

                      {
                        (fishNameChange(
                          item.fishCommonName,
                          item.fishScientificName
                        ))
                      }

                      <Button
                        className="listBtn"
                        variant="success"
                        onClick={function () {
                          addFish(item);
                        }}
                      >
                        Add
                      </Button>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
            <Button
              className="listBtn"
              variant="danger"
              onClick={function () {
                clearSession(); 
              }}
            >
              Clear
            </Button>
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
