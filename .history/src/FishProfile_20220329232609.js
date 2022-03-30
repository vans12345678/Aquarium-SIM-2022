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
          <p key = {val.fishMatchID}>
          <h1>{val.fishMatchCommonName}</h1>
          {/* var name2 = val.fishMatchScientificName
          var size = val.fishAverageSize
          var lowerTemp = val.fishLowerTemp
          var upperTemp = val.fishUpperTemp
          var lowerPH = val.fishLowerPH
          var upperPH = val.fishUpperPH
          var aggToOther = val.fishAggrOtherSpecies
          var aggToSame = val.fishAggrSameSpecies
          var fishLocation = val.fishLocationTank
          var image = val.fishImage */}
          </p>
        )
              })}
      <h1>{}</h1>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FishProfile;
