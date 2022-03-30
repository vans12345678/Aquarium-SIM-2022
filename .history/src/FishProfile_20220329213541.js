import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import aquarium from "./images/fishtank.png";

const currentFishURL = window.location.pathname;
const temp = currentFishURL.split("/", 3);
const temp2 = temp.split("%20");
const currentFish = "";
if(temp2.length > 1)
            {
                for(let j = 1; j < temp2.length; j++)
                {
                  currentFish += "-" + temp2[j];
                }
            }


const FishProfile = () => {
  return (
    <div>
{console.log(temp[2])}
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
