import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import aquarium from "./images/fishtank.png";
import swordtail from "./images/swordtail.png";
import commonPleco from "./images/common-pleco.png";
import { ListGroup, Button, Card } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Fish } from "./classes/Fish";
import { FishBasic } from "./classes/FishBasic";
import Toast from "react-bootstrap/Toast";
// var React = require("react");

//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

let fish = new Fish(
  "value.fishID",
  "value.fishScientificName",
  "value.fishCommonName",
  "value.fishAverageSize",
  "value.fishLowerPH",
  "value.fishUpperPH",
  "value.fishLowerTemp",
  "value.fishUpperTemp",
  "value.fishAggrSameSpecies",
  "value.fishAggrOtherSpecies",
  "value.fishLocationTank",
  "value.fishImage"
);

// Create your functional component:
function Example(props) {

  const [fishList, setFishList] = useState([]);
  var [userList, setUserList] = useState([]);
    const getFish = () => {
      Axios.get("http://localhost:3001/fishGet").then((response) => {
        setFishList(response.data);
      });
    };
    useEffect(() => {
      getFish();
    }, []);

    const [showA, setShowA] = useState(false);
  
    const toggleShowA = () => setShowA(!showA);

  function fishNameChange(commonName, ScientificName) {
    if (commonName != "N/A") {
      var pageTitleName = commonName;
    } else {
      var pageTitleName = ScientificName;
    }

    return pageTitleName;
  }
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

  //console.log(fishList);


  return <Card className="list" style={{ width: "40rem" }}><ListGroup variant="flush">    {fishList.map((item) => {
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
  </ListGroup></Card>;


}
  


var Aquarium = createReactClass({
  
  getInitialState: function () {
    return {
      fishes: {
        "fruit-1": fish.id,
      },
    };
  },
  addFruit: function (fish) {
    //create a unike key for each new fruit item
    var timestamp = new Date().getTime();
    // update the state object
    this.state.fishes["fish-" + timestamp] = fish;
    // set the state
    this.setState({ fishes: this.state.fishes });
  },
  removeFruit: function (fishKey) {
    // update the state object
    delete this.state.fishes[fishKey];
    // set the state
    this.setState({ fishes: this.state.fishes });
    //alert(fruitKey);
  },
  render: function () {
    const [fishList, setFishList];
    return (
      <div className="component-wrapper">
        <FishList fishes={this.state.fishes} />
        <AddFishForm addFish={this.addFish} />
        <RemoveFishForm
          removeFish={this.removeFish}
          fishes={this.state.fishes}
        />
        {/* <Example/> */}
      </div>
    );
  },
});

var FishList = createReactClass({
  render: function () {
    return (
      <div className="container">
        <ul className="list-group text-center">
          {Object.keys(this.props.fishes).map(
            function (key) {
              return (
                <li className="list-group-item list-group-item-info">
                  {this.props.fishes[key]}
                </li>
              );
            }.bind(this)
          )}
        </ul>
      </div>
    );
  },
});

var AddFishForm = createReactClass({
  createFish: function (e) {
    e.preventDefault();
    //get the fruit object name from the form
    var fish = this.refs.fishName.value;
    //call the addFruit method of the App component
    //to change the state of the fruit list by adding an new item
    if (fish.length > 0) {
      this.props.addFruit(fish);
    }
    //reset the form
    this.refs.fishForm.reset();
  },
  render: function () {
    return (
      <Card className="list" style={{ width: "40rem" }}>
        <ListGroup variant="flush">
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
        </ListGroup>
      </Card>

    );
  },
});

var RemoveFishForm = createReactClass({
  selectFishtoRemove: function (e) {
    var fish = e.target.value;
    //get the fruit object name from the form
    //var fruit = this.refs.removeFruitSelect.value;
    //call the addFruit method of the App component
    //to change the state of the fruit list by adding an new item
    this.props.removeFish(fish);
    //reset the form
    this.refs.removeFishForm.reset();
  },
  render: function () {
    return (
      <form
        className="form-inline"
        ref="removeFishForm"
        onChange={this.selectFishtoRemove}
      >
        <div className="form-group">
          <label for="selectFish">
            List of Fishes
            <select id="selectFish" className="form-control">
              <option value="">Remove a fish</option>
              {Object.keys(this.props.fishes).map(
                function (key) {
                  return <option value={key}>{this.props.fishes[key]}</option>;
                }.bind(this)
              )}
            </select>
          </label>
        </div>
      </form>
    );
  },
});

export default Aquarium;
