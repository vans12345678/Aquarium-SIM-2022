import "bootstrap/dist/css/bootstrap.min.css";
import * as PIXI from "pixi.js";
import React from "react";
import aquarium from "./images/fishtank.png";
const Aquarium = () => {
  let app = new PIXI.Application({ width: 640, height: 360 });

  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Aquarium</h1>
        <p className="text-center ">Check out fish prices here!</p>

        <br />
        <br />

        <br />
      </section>
      <section className="homeMiddle">
        <br />
        <br />
        <br />
        <br />
        ReactDOM.render(
        {app}, document.body);
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
