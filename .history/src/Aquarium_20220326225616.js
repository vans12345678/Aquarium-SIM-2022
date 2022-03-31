import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import aquarium from "./images/fishtank.png";
import {Fish} from './classes/Fish'
const Aquarium = () => {
  const fish = new Fish("commonName", "scientificName", 13, 14, 15, "aggressiveSameSpecies", "aggressiveOtherSpecies", "locationTank", 14.99);
  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>
        <p className="text-center ">{fish.toString()}</p>
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
