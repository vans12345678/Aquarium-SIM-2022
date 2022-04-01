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

  var App = React.createClass({
    getInitialState : function() {
      return (
        {
          fruits : {
            'fruit-1' : 'orange',
            'fruit-2' : 'apple'
          }
        }
       )
      },
      addFruit : function(fruit) {
        //create a unike key for each new fruit item
        var timestamp = (new Date()).getTime();
        // update the state object
        this.state.fruits['fruit-' + timestamp ] = fruit;
        // set the state
        this.setState({ fruits : this.state.fruits });
       },
       removeFruit : function(fruitKey) {
        // update the state object
        delete this.state.fruits[fruitKey];
        // set the state
        this.setState({ fruits : this.state.fruits });
        //alert(fruitKey);
       },
       render: function() {
        return (
          <div className="component-wrapper">
            <FruitList fruits={this.state.fruits} />
            <AddFruitForm addFruit={this.addFruit} />
            <RemoveFruitForm removeFruit={this.removeFruit} fruits={this.state.fruits} />
          </div>
         );
        }
       });

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




      <div id="wrapper">
      <div class="container">
        <div class="row">
      <article class="col-md-12">
        <h1 class="text-center">Simple List in React</h1>
        <h2 class="text-center">Adding a dynamically generated list item and removing it</h2>
        <div id="app" class="app-container">=
        </div>
      </article>
    </div>
  </div>
</div>












      </section>
    </div>
  );
};

export default Aquarium;
