import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";
import Axios from "axios";
import aquarium from "./images/fishtank.png";

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
          <Table striped
            bordered
            hover
            variant="dark"
            className="w-50 text-center">
            <tr/>
            <td>{val.fishScientificName}</td>
          </table>
          var size = val.fishAverageSize
          var lowerTemp = val.fishLowerTemp
          var upperTemp = val.fishUpperTemp
          var lowerPH = val.fishLowerPH
          var upperPH = val.fishUpperPH
          var aggToOther = val.fishAggrOtherSpecies
          var aggToSame = val.fishAggrSameSpecies
          var fishLocation = val.fishLocationTank
          var image = val.fishImage
          </div>
        )
              })}
      </section>
    </div>
  );
};

export default FishProfile;
