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


  const [userList, setUserList] = useState([]);
  let fish = new FishBasic("Name", "commonName");
  let test = "";
  const addFish = (value) => {
    //console.log(value.fishMatchID);
    let fish = new Fish
    (value.fishID, value.fishScientificName, value.fishCommonName,value.fishAverageSize, value.fishLowerPH, value.fishUpperPH, value.fishLowerTemp, 
      value.fishUpperTemp, value.fishAggrSameSpecies, value.fishAggrOtherSpecies, value.fishLocationTank, value.fishImage);

    userList.push(fish);
    setUserList(userList);

    toggleShowA();
    
  };
  const removeFish = (value) => {

    const index = userList.indexOf(value);
    console.log(index);
    
    userList.splice(index, 1);
    setUserList(userList);

    toggleShowA();
    
  };
  function getName()
  {
    localStorage.setItem("fishNames", JSON.stringify(userList));
    test = JSON.parse(localStorage.getItem("fishNames"));
      
    let names = [];
    for (var i=0;i<test.length;i++) 
    {
      names[i] = i+1 + ". " + test[i].commonName + " ";
      console.log(test[i].commonName);
    }

    return names;
    
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
    localStorage.clear();
  }

  function getObjectValues()
  {
    let arrFishID = [];
    arrFishID = localStorage.getItem("fishNames").split(":");

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
          
          <Toast.Body>{ getName() }</Toast.Body>
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
            <Card className="list" style={{ width: "40rem" }}>
              <ListGroup variant="flush">
                {userList.map((item) => {
                  return (
                    <ListGroup.Item key={item.id}>
                      <img
                        className="listImg"
                        src={require("./images/" + item.image)}
                        width="100px"
                        height="50px"
                        alt=""
                      />

                      {
                        (fishNameChange(
                          item.commonName,
                          item.scientificName
                        ))
                      }

                      <Button
                        className="listBtn"
                        variant="warning"
                        onClick={function () {
                          removeFish(item);
                        }}
                      >
                        Remove
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