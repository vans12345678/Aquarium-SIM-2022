import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import { ListGroup, Button, Card } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect, useLayoutEffect } from "react";
import { Fish } from "./classes/Fish";
import { FishBasic } from "./classes/FishBasic";
import Toast from "react-bootstrap/Toast";
import { ProgressBar } from "react-bootstrap";
import ToastContainer from "react-bootstrap/ToastContainer";
import Alert from "react-bootstrap/Alert";
import {
  testTankSize,
  testTemperature,
  testPH,
  testFishSize,
  testCapacity,
} from "./AquariumFunc";
import { Tank } from "./classes/Tank";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import pearlGourami from "./images/pearl-gourami.png";
// import { json } from "body-parser";
var key1;
const Aquarium = () => {
  //fish tank obj
  // let fishTank = new Tank(0, 0, 0, 0, 0, 0, 0);
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  let [inputLength, setLength] = useState(0);
  let [inputWidth, setWidth] = useState(0);
  let [inputHeight, setHeight] = useState(0);
  let [tankCapacity, setTankCapacity] = useState(0);
  let [message, setMessage] = useState("");

  const getFish = () => {
    Axios.get("http://localhost:3001/fishGet").then((response) => {
      setFishList(response.data);
    });
  }; //function for retrieving specific fish entries using search
  const searchFishAll = () => {
    Axios.post("http://localhost:3001/fishComp", { search: search }).then(
      (response) => {
        setFishList(response.data);
      }
    );
  };

  useEffect(() => {
    getFish();
    getUserList();
    getFishTank();
    renderFish();
  }, []);

  let [userList, setUserList] = useState([]);
  let [fishTank, setFishTank] = useState(
    new Tank(inputLength, inputWidth, inputHeight, 0, 0, 0, 0, 0, 0, 0)
  );

  let arrFish = [];
  let tempTank = new Tank(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  const setTankDimensions = () => {
    if (testTankSize(inputLength, inputWidth, inputHeight) == true) {
      fishTank.length = parseInt(inputLength);
      fishTank.width = parseInt(inputWidth);
      fishTank.height = parseInt(inputHeight);
      fishTank.size = Math.round(
        (parseInt(inputLength) * parseInt(inputWidth) * parseInt(inputHeight)) /
          1000
      );
      sessionStorage.setItem("tank", JSON.stringify(fishTank));
    }
  };

  const renderFish = () => {
    //add fish image to tank
    let aquariumImg = document.getElementById("aquarium");
    console.log(userList);
    arrFish.forEach((fish) => {
      // console.log(fish);
      var $img = $("<img />", {
        src: require("./images/" + fish.image),
        id: fish.fishKey,
      });

      //check the fish's location in the tank and add the appropriate class
      if (fish.locationTank == "Top levels") {
        $img.addClass("aquariumFish");
      } else if (fish.locationTank == "Middle levels") {
        $img.addClass("aquariumFishMiddle");
      } else if (fish.locationTank == "Bottom levels") {
        $img.addClass("aquariumFishBottom");
      }

      $img.addClass("fishAnimAquarium");

      $($img).insertAfter(aquariumImg);
    });
  };

  
  

  //sessionStorage.setItem("tank", JSON.stringify(fishTank));
  const addFish = (value) => {
    if (testTankSize(inputLength, inputWidth, inputHeight) == true) {
      setTimeout(getKey(value.fishID), 1).toString();
      let fish = new Fish(
        value.fishID,
        value.fishScientificName,
        value.fishCommonName,
        value.fishAverageSize,
        value.fishLowerPH,
        value.fishUpperPH,
        value.fishLowerTemp,
        value.fishUpperTemp,
        value.fishAggrSameSpecies,
        value.fishAggrOtherSpecies,
        value.fishLocationTank,
        value.fishImage,
        key1
      );
      if (testCapacity(fishTank, fish) == true) {
        if (testTemperature(fishTank, fish) == true) {
          if (testPH(fishTank, fish) == true) {
            if (testFishSize(userList, fish, fishTank) == true) {
              //calculates tank capacity occupied
              fishTank.capacity =
                fishTank.capacity +
                (1 - (fishTank.size - fish.averageSize) / fishTank.size) * 100;
              setTankCapacity(Math.round(fishTank.capacity));

              userList.push(fish);

              setUserList(userList);
              setFishTank(fishTank);
              sessionStorage.setItem("tank", JSON.stringify(fishTank));

              sessionStorage.setItem("fishNames", JSON.stringify(userList));
              arrFish = JSON.parse(sessionStorage.getItem("fishNames"));

              setMessage(
                "Added: " + fishNameChange(fish.commonName, fish.scientificName)
              );
              //add fish image to tank
              let aquariumImg = document.getElementById("aquarium");
              var $img = $("<img />", {
                src: require("./images/" + fish.image),
                id: fish.fishKey,
              });

              //check the fish's location in the tank and add the appropriate class
              if (fish.locationTank == "Top levels") {
                $img.addClass("aquariumFish");
              } else if (fish.locationTank == "Middle levels") {
                $img.addClass("aquariumFishMiddle");
              } else if (fish.locationTank == "Bottom levels") {
                $img.addClass("aquariumFishBottom");
              }

              $img.addClass("fishAnimAquarium");

              $($img).insertAfter(aquariumImg);
                           
              var maxDimension = Math.max(fishTank.length, fishTank.width);
              document.getElementById(fish.fishKey).style.width=((fish.averageSize/maxDimension)*40).toString()+"%";
              // document.getElementById(fish.fishKey).style.width="100%";
              console.log(((fish.averageSize/maxDimension)*100).toString()+"%");
              console.log(document.getElementById(fish.fishKey).style.width);

              toggleShowA();
            } else {
              setMessage("Fish size is invalid");
              toggleShowA();
            }
          } else {
            setMessage(
              "Invalid fish PH on: " +
                fishNameChange(fish.commonName, fish.scientificName) +
                " | upperPH: " +
                fish.upperPH +
                " | lowerPH: " +
                fish.lowerPH
            );
            toggleShowA();
          }
        } else {
          setMessage(
            "Invalid fish temperature on fish: " +
              fishNameChange(fish.commonName, fish.scientificName) +
              " | upperTemp: " +
              fish.upperTemp +
              " | lowerTemp: " +
              fish.lowerTemp
          );
          toggleShowA();
        }
      } else {
        setMessage("Exceeds tank capacity");
        toggleShowA();
      }
    } else {
      setMessage("Please set a valid tank size");
      toggleShowA();
    }
  };

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const getUserList = () => {
    if (sessionStorage.length > 0) {
      arrFish = JSON.parse(sessionStorage.getItem("fishNames"));
      setUserList(arrFish);
    }
  };

  const getFishTank = () => {
    let temp = JSON.parse(sessionStorage.getItem("tank"));

    //If tank session variable has stuff in it
    if (temp != null) {
      tempTank = JSON.parse(sessionStorage.getItem("tank"));
      setFishTank(tempTank);
      setLength(tempTank.length);
      setWidth(tempTank.width);
      setHeight(tempTank.height);
      setTankCapacity(Math.round(tempTank.capacity));
      console.log("Fish tank present");
    }
  };

  const removeFish = (value) => {
    const index = userList.indexOf(value);

    userList.splice(index, 1);
    console.log(document.getElementById(value.fishKey));
    $("#" + value.fishKey).remove();
    setUserList(userList);
    fishTank = new Tank(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    setFishTank(fishTank);
    sessionStorage.setItem("tank", JSON.stringify(fishTank));
    setTankDimensions();
    userList.forEach((element) => {
      if (
        testTemperature(fishTank, element) == true &&
        testPH(fishTank, element) == true
      ) {
        sessionStorage.setItem("tank", JSON.stringify(fishTank));
        setFishTank(fishTank);
      }
      fishTank.capacity =
        fishTank.capacity +
        (1 - (fishTank.size - element.averageSize) / fishTank.size) * 100;
      setFishTank(fishTank);
      sessionStorage.setItem("tank", JSON.stringify(fishTank));
      setTankCapacity(Math.round(fishTank.capacity));
    });

    sessionStorage.setItem("fishNames", JSON.stringify(userList));

    if (userList.length <= 0) {
      sessionStorage.setItem(
        "tank",
        JSON.stringify(new Tank(0, 0, 0, 0, 0, 0, 0, 0, 0, 0))
      );
      setFishTank(new Tank(0, 0, 0, 0, 0, 0, 0, 0, 0, 0));

      fishTank.capacity = 0;
      setTankCapacity(Math.round(fishTank.capacity));
    }

    setMessage(
      "Removed: " + fishNameChange(value.commonName, value.scientificName)
    );
    toggleShowA();
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

    userList.forEach(element => {
      $("#" + element.fishKey).remove();
    });

    userList = [];
    fishTank = new Tank(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


    setUserList(userList);
    setFishTank(fishTank);

    sessionStorage.setItem("fishNames", JSON.stringify(userList));
    sessionStorage.setItem("tank", JSON.stringify(fishTank));

    setTankCapacity(Math.round(fishTank.capacity));

  }

  function getKey(id) {
    const d = new Date();
    let ms = d.getMilliseconds();

    key1 = id.toString() + "_" + ms;
    // console.log(id);
    // key1 = id;
    console.log(key1);

    // return id;
  }

  function AlertDismissible() {
    return (
      <>
        <ToastContainer position="top-center">
          <Toast
            onClose={() => setShowA(false)}
            show={showA}
            delay={2000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Aquarium SIM</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </>
    );
  }

  return (
    <div>
      <section className="home">
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <br />
        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <AlertDismissible />
        <div className="aquariumCols">
          <form
            action={setTankDimensions(inputLength, inputWidth, inputHeight, userList)}
          >
            <div className="inlineblock">
              <label htmlFor="lengthInput">length (cm)</label>
              <br />
              <input
                type="number"
                id="lengthInput"
                placeholder="Length"
                required
                value={inputLength}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="inlineblock">
              <label htmlFor="widthInput">Width (cm)</label>
              <br />
              <input
                type="number"
                id="widthInput"
                placeholder="Width"
                required
                value={inputWidth}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <div className="inlineblock">
              <label htmlFor="inputHeight">Height (cm)</label>
              <br />
              <input
                type="number"
                id="inputHeight"
                placeholder="Height"
                required
                value={inputHeight}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </form>
          <br />
          <div className="capacityBar">
            <ProgressBar
              variant="primary"
              now={tankCapacity}
              label={`${tankCapacity}%`}
            />
          </div>
          <br />
          <div className="aquaDiv">
            <img
              id="aquarium"
              className="aquarium"
              src={aquarium}
              width="100%"
              alt=""
            />
            <div className="aquariumBubbles aquariumBubble-1"></div>
            <div className="aquariumBubbles aquariumBubble-5"></div>
            <div className="aquariumBubbles aquariumBubble-2"></div>
            <div className="aquariumBubbles aquariumBubble-6"></div>
            <div className="aquariumBubbles aquariumBubble-3"></div>
          </div>

          <div className="">
            <div className="searchAquarium ">
              <button
                onClick={(event) => {
                  searchFishAll();
                }}
              >
                Search Fish Names
              </button>
              <input
                id="search"
                type="search"
                placeholder="Ex. Betta splendens"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    //event.preventDefault();
                    console.log("Click");
                    searchFishAll();
                  }
                }}
              />
              <br />
              <br />
              <br />
            </div>
            <div className="listStyle">
              <Card className="list" style={{ width: useWindowSize(0) }}>
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
                        {fishNameChange(
                          item.fishCommonName,
                          item.fishScientificName
                        )}
                        <Button
                          className="listBtn addBtn"
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

              <Card
                className="list"
                style={{ width: useWindowSize(0), height: "40rem" }}
              >
                <ListGroup variant="flush">
                  {userList.map((item) => {
                    return (
                      <ListGroup.Item key={item.fishKey}>
                        {/* key={setTimeout(getKey(item.id), 1)} */}
                        <img
                          // id={key}
                          className="listImg"
                          src={require("./images/" + item.image)}
                          width="100px"
                          height="50px"
                          alt=""
                        />
                        {fishNameChange(item.commonName, item.scientificName)}
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
                variant="danger"
                onClick={function () {
                  clearSession();
                }}
              >
                Clear
              </Button>
            </div>
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
