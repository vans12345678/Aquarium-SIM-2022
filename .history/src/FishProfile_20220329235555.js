import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

function getFishName () {
  const currentFishURL = window.location.pathname;
  const temp = currentFishURL.split("/", 3);
  const temp2 = temp[2].split("%20");
  var currentFishName = "";
  if(temp2.length > 1)
  {
      for(let j = 0; j < temp2.length; j++)
      {
          currentFishName += " " + temp2[j];
      }
  }

 return currentFishName;
}

const FishProfile = () => {

  var [fishInfo, setFishInfo] = useState([]);

  const getCurrentFish = () => {
    if (fishInfo.length === 0){
    Axios.post("http://localhost:3001/currentFishGet", { currentFishName: getFishName() }).then((response) => {
      setFishInfo(response.data);
    });
  }
  }

  return (
    <div>
      
      <section className="homeMiddle" onLoad={getCurrentFish()}>
      {fishInfo.map((val, key) => {
        return(
          <div className="table" key = {val.fishID}>
          <h1>{val.fishCommonName}</h1>
          <img width="200px" height="100px" src="./images/swordtail-border-right.png" alt=""/>
          <table>
            <tbody>
          <tr>
            <td>Common Name: </td>
            <td>{val.fishCommonName}</td>
            </tr>
            <tr>
            <td>Scientific Name: </td>
            <td>{val.fishScientificName}</td>
            </tr>
            <tr>
              <td>Average Size: </td>
              <td>{val.fishAverageSize} cm</td>
            </tr>
            <tr>
              <td>Recommended PH: </td>
              <td>{val.fishLowerPH} - {val.fishUpperPH}</td>
            </tr>
            <tr>
              <td>Recommended Temperature: </td>
              <td>{val.fishLowerTemp} - {val.fishUpperTemp} °C</td>
            </tr>
            <tr>
              <td>Aggression to its own species: </td>
              <td>{val.fishAggrSameSpecies}</td>
            </tr>
            <tr>
              <td>Aggression to its other species: </td>
              <td>{val.fishAggrOtherSpecies}</td>
            </tr>
            <tr>
              <td>Location in the tank: </td>
              <td>{val.fishLocationTank}</td>
            </tr>
            </tbody>
          </table>
          </div>
        )
              })}
      </section>
    </div>
  );
};

export default FishProfile;
