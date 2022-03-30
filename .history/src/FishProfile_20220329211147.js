import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import aquarium from "./images/fishtank.png";
const FishProfile = () => {
  return (

    <h1>ABOUT THIS PROJECT</h1>
        <div className="container">
          <p className="text-center boldText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div id="fish1" className="fishanim">
          <img width="150px" height="100px" src={betta} alt="" />
        </div>
  );
};

export default FishProfile;
