import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import aquarium from "./images/fishtank.png";

function getFishName () {
  const currentFishURL = window.location.pathname;
  const temp = currentFishURL.split("/", 3);
  const temp2 = temp[2].split("%20");
 // const currentFish = "";
 {console.log(temp2[2])}
}



const FishProfile = () => {
  return (
    <div>
      {getFishName()}
      <section className="homeMiddle">
      <h1>ABOUT THIS PROJECT</h1>
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
