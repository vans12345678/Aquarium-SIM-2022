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
import ToastContainer from "react-bootstrap/ToastContainer";
import Alert from "react-bootstrap/Alert";
import { testTankSize, testTemperature } from "./AquariumFunc";
import { Tank } from "./classes/Tank";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
// import { json } from "body-parser";

const Aquarium = () => {
  //fish tank obj
  // let fishTank = new Tank(0, 0, 0, 0, 0, 0, 0);
  const [fishList, setFishList] = useState([]);
  const [showA, setShowA] = useState(false);
  const [search, setSearch] = useState("");
  const toggleShowA = () => setShowA(!showA);
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  let [inputLength, setLength] = useState(0);
  let [inputWidth, setWidth] = useState(0);
  let [inputHeight, setHeight] = useState(0);

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
    
  }, []);

  let [userList, setUserList] = useState([]);
  let [fishTank, setFishTank] = useState(new Tank(inputLength, inputWidth, inputHeight, 0, 0, 0, 0));

  let arrFish = "";
  let tempTank = new Tank(0, 0, 0, 0, 0, 0, 0);

  const setTankDimensions = () =>
  {

    if(testTankSize(inputLength, inputWidth, inputHeight) == true)
    {
      fishTank.length = parseInt(inputLength);
      fishTank.width = parseInt(inputWidth);
      fishTank.height = parseInt(inputHeight);
      sessionStorage.setItem("tank", JSON.stringify(fishTank));
    } 

  }

  //sessionStorage.setItem("tank", JSON.stringify(fishTank));
  const addFish = (value) => {
 //console.log(value.fishMatchID);
 if (testTankSize(inputLength, inputWidth, inputHeight) == true)
 {
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
    value.fishImage
  );
  
  if(testTemperature(fishTank, userList, fish) == true)
  {
    sessionStorage.setItem("tank", JSON.stringify(fishTank));
  
    userList.push(fish);
  
    setUserList(userList);
    setFishTank(fishTank);
  
    sessionStorage.setItem("fishNames", JSON.stringify(userList));
    arrFish = JSON.parse(sessionStorage.getItem("fishNames"));
  
    toggleShowA();
  }
  
 }
 else
 {
  toggleShow();
  console.log(show);
 }

    console.log(fishTank);
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
      console.log("Fish tank present");     
    }
  }

  const removeFish = (value) => {

    const index = userList.indexOf(value);
    
    userList.splice(index, 1);

    setUserList(userList);
    fishTank = new Tank(0, 0, 0, 0, 0, 0, 0);
    setFishTank(fishTank);
    sessionStorage.setItem("tank", JSON.stringify(fishTank));

    userList.forEach(element => {
      if(testTemperature(fishTank, userList, element) == true)
      {
        sessionStorage.setItem("tank", JSON.stringify(fishTank));

        setFishTank(fishTank);
      }
    });

    sessionStorage.setItem("fishNames", JSON.stringify(userList));
  
    if(userList.length <= 0)
    {
      sessionStorage.setItem("tank", JSON.stringify(new Tank(0, 0, 0, 0, 0, 0, 0)));
      setFishTank(new Tank(0, 0, 0, 0, 0, 0, 0));
      
    }

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
    userList = [];
    fishTank = new Tank(0, 0, 0, 0, 0, 0, 0);

    
    setUserList(userList);
    setFishTank(fishTank);

    sessionStorage.setItem("fishNames", JSON.stringify(userList));
    sessionStorage.setItem("tank", JSON.stringify(fishTank));
  }

  function getKey(id) {
    const d = new Date();
    let ms = d.getMilliseconds();

    id = id.toString() + "_" + ms;
    //console.log(id);

    return id;
  }

  function AlertDismissible() {
    return (
      <>
        <ToastContainer position="top-center">
          <Toast
            onClose={() => setShowA(false)}
            show={showA}
            delay={1800}
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
            <Toast.Body>Updated List</Toast.Body>
          </Toast>
        </ToastContainer>
      </>
    );
  }

  function AlertDismissible2() {
    return (
      <>
        <ToastContainer position="top-center">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
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
            <Toast.Body>Please set a tank size before adding fish!</Toast.Body>
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
        <AlertDismissible2 />
        <div className="aquariumCols">
          <form action={ setTankDimensions(inputLength, inputWidth, inputHeight)}>
          <div style="display:inline-block;">
            <label for="lengthInput">length (inches)</label>
            <input
            type="number"
            id="lengthInput"
            placeholder="Length"
            required
            value={inputLength}
            onChange={e => setLength(e.target.value)}
          />
          </div>            
          <label>Width (inches)</label>
          <input
            type="number"
            placeholder="Width"
            required
            value={inputWidth}
            onChange={e => setWidth(e.target.value)}
          />
          <label>Height (inches)</label>
          <input
            type="number"
            placeholder="Height"
            required
            value={inputHeight}
            onChange={e => setHeight(e.target.value)
            }
          />           
            </form>
        
          <img
            className="aquarium"
            src={aquarium}
            width="100%"
            height="713px"
            alt=""
          />
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
                    event.preventDefault();
                    console.log("Click");
                    searchFishAll();
                  }
                }}
              />
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
                      <ListGroup.Item key={setTimeout(getKey(item.id), 1)}>
                        <img
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
