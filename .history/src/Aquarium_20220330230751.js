import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail.png";
import commonPleco from "./images/common-pleco.png";
import { ListGroup, Button, Card } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Fish, FishBasic } from "./classes/Fish";

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

  const addFish = (value) => {
    //console.log(value.fishMatchID);
    let fish = new Fish
    (value.fishID, value.fishCommonName, value.fishScientificName, value.fishAverageSize, value.fishLowerPH, value.fishUpperPH, value.fishLowerTemp, value.fishUpperTemp, value.fishAggrSameSpecies, value.fishAggrOtherSpecies, value.fishLocationTank, value.fishImage);
    userList.push(fish);
    setUserList(userList);

    window.sessionStorage.setItem("fishNames", JSON.stringify(userList));
    //var test = JSON.parse(sessionStorage.getItem("fishNames"));

    alert("Added fish to list");
  };

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

  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);


  return (
    <div>
      <section className="home">
        <br />
        <br />

        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>
        {
          <button
            type="button"
            className="btn btn-primary"
          >
            Get All Rainbow
          </button>
        }
          <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
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
                        (name = fishNameChange(
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