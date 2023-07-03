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
import ToastContainer from 'react-bootstrap/ToastContainer'
import Alert from 'react-bootstrap/Alert';

const Aquarium = () => {

  const [fishList, setFishList] = useState([]);
  const [showA, setShowA] = useState(false);
  const [search, setSearch] = useState("");
  const toggleShowA = () => setShowA(!showA);

  const getFish = () => {
    Axios.get("http://localhost:3001/fishGet").then((response) => {
      setFishList(response.data);
    });

  };  //function for retrieving specific fish entries using search
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
  }, []);


  let [userList, setUserList] = useState([]);

  let arrFish = "";
  const addFish = (value) => {
    //console.log(value.fishMatchID);

    let fish = new Fish
    (value.fishID, value.fishScientificName, value.fishCommonName,value.fishAverageSize, value.fishLowerPH, value.fishUpperPH, value.fishLowerTemp, 
      value.fishUpperTemp, value.fishAggrSameSpecies, value.fishAggrOtherSpecies, value.fishLocationTank, value.fishImage);

    userList.push(fish);
    setUserList(userList);

    sessionStorage.setItem("fishNames", JSON.stringify(userList));
    arrFish = JSON.parse(sessionStorage.getItem("fishNames"));
    

    // let names = [];
    // for (var i=0;i<arrFish.length;i++) 
    // {
    //   names[i] = i+1 + ". " + arrFish[i].commonName + " ";
    //   console.log(arrFish[i].commonName);
    // }

    toggleShowA();
    
  };

  const getUserList = () =>{
    if (sessionStorage.length > 0)
    {
      arrFish = JSON.parse(sessionStorage.getItem("fishNames"));
      setUserList(arrFish);
    }
  }

  const removeFish = (value) => {

    const index = userList.indexOf(value);
    //console.log(index);
    
    userList.splice(index, 1);
    setUserList(userList);
    sessionStorage.setItem("fishNames", JSON.stringify(userList));
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
    sessionStorage.clear();
    setUserList(userList);
  }

  function getKey(id)
  {
    const d = new Date();
    let ms = d.getMilliseconds();

    id = id.toString() + "_" + ms;
    console.log(id);
    
    return id;
  }
  function AlertDismissible() {  
    return (
      <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer position="bottom-end">
          <Toast show={showA} delay={1500} autohide >
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Aquarium SIM</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>Updated List</Toast.Body>
          </Toast>
        </ToastContainer>
        </div>
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
        <AlertDismissible/>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 mt-1">
          <img
            className=""
            src={aquarium}
            width="1200px"
            height="700px"
            alt=""
          />
          
          <div className="">
          <div className="searchCenter">
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
          <br/>
          <br/>
        </div>
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
                        }}>
                        Add
                      </Button>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
            <Card className="list" style={{ width: "40rem", height: "40rem" }}>
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
                        }}>
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
