import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import aquarium from "./images/fishtank.png";
import {Fish} from './classes/Fish';
import Axios from 'axios';
import { useState } from "react";

const Aquarium = () => {
  const fish = new Fish("commonName", "scientificName", 13, 14, 15, "aggressiveSameSpecies", "aggressiveOtherSpecies", "locationTank", 14.99);
  const fish2 = new Fish("commonName2", "scientificName2", 13, 14, 15, "aggressiveSameSpecie2", "aggressiveOtherSpecies", "locationTank", 14.99);

  var arrFish = [];
  arrFish[0] = fish.commonName;
  arrFish[1] = fish2.commonName;
  let arrCommonName = new Array(2);
  arrCommonName.push(fish);
  arrCommonName.push(fish2);

  const commonName = [ fish.commonName ];
  const scientificName = fish.scientificName;
  const averageSize = fish.averageSize;
  const lowerPH = fish.lowerPH;
  const upperPH = fish.upperPH;
  const aggressiveSameSpecies = fish.aggressiveSameSpecies;
  const aggressiveOtherSpecies = fish.aggressiveOtherSpecies;
  const fishLocationTank = fish.fishLocationTank;
  const fishImage = fish.image;

  const [fishList, setFishList] = useState([]);

  const getAllRainbow = () =>{
    Axios.post("http://localhost:3001/rainbowAll").then((response) => {
      setFishList(response.data);
    });
  }


  // sessionStorage.setItem("fish", JSON.stringify(fish));
  // var fishObj = sessionStorage.getItem("fish");
  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>
        <button onClick={getAllRainbow} type="button" className="btn btn-primary">Get All Rainbow</button>
        {/* <p className="text-center ">{fish.toString()}</p> */}
        <p className="text-center ">{arrFish[1]}</p>
        <br />
        <br />
        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <br />
        <br />
        <img
          className="aquarium"
          width="1200px"
          height="800px"
          src={aquarium}
          alt=""
        />

        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Aquarium;
