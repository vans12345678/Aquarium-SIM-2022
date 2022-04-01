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
  
       var FruitList = React.createClass({
        render : function() {
          return (
            <div className="container">
              <ul className="list-group text-center">
                {
                  Object.keys(this.props.fruits).map(function(key) {
                    return <li className="list-group-item list-group-item-info">{this.props.fruits[key]}</li>
                  }.bind(this))
                }
              </ul>
             </div>
            );
          }
        });
  
        var AddFruitForm = React.createClass({
          createFruit : function(e) {
            e.preventDefault();
            //get the fruit object name from the form
            var fruit = this.refs.fruitName.value;
            //call the addFruit method of the App component
            //to change the state of the fruit list by adding an new item
            if(fruit.length > 0) {
              this.props.addFruit(fruit);
            }
            //reset the form
            this.refs.fruitForm.reset();
          },
          render : function() {
            return(
              <form className="form-inline" ref="fruitForm" onSubmit={this.createFruit}>
                <div className="form-group">
                  <label for="fruitItem">
                    Fruit Name
                    <input type="text" id="fruitItem" className="form-control" placeholder="e.x.lemmon" ref="fruitName" />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Add Fruit</button>
              </form>
            )
  
          }
        });
  
        var RemoveFruitForm = React.createClass({
          selectFruittoRemove : function(e) {
            var fruit = e.target.value;
            //get the fruit object name from the form
            //var fruit = this.refs.removeFruitSelect.value;
            //call the addFruit method of the App component
            //to change the state of the fruit list by adding an new item
            this.props.removeFruit(fruit);
            //reset the form
            this.refs.removeFruitForm.reset();
          },
          render : function() {
            return(
              <form className="form-inline" ref="removeFruitForm" onChange={this.selectFruittoRemove}>
               <div className="form-group">
                <label for="selectFruit">
                  List of Fruits
                  <select id="selectFruit" className="form-control">
                    <option value="">Remove a fruit</option>
                    {
                      Object.keys(this.props.fruits).map(function(key) {
                        return <option value={key}>{this.props.fruits[key]}</option>
                      }.bind(this))
                    }
                  </select>
                </label>
                </div>
              </form>
            )
          }
        });
  
        React.render(
          <App />,
          document.getElementById('app')
        );

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
