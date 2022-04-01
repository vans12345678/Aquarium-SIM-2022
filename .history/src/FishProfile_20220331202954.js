import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Table } from "react-bootstrap";
import Axios from "axios";

//Retrieves the fish name from the URL
function getFishName() {
  const currentFishURL = window.location.pathname;
  const temp = currentFishURL.split("/", 3);
  const temp2 = temp[2].split("%20");
  var currentFishName = "";
  if (temp2.length > 1) {
    for (let j = 0; j < temp2.length; j++) {
      currentFishName += " " + temp2[j];
    }
  }

  return currentFishName;
}

//Formats the fish names for use as the page title
function pageTitle(commonName, ScientificName) {
  if (commonName != "N/A") {
    var pageTitleName = commonName;
  } else {
    var pageTitleName = ScientificName;
  }

  return pageTitleName;
}

//formats the fish name for use in external weblinks
function formatFishNameForLink(nameForFormatting, altName) {
  if (nameForFormatting != "N/A") {
    var naviName = nameForFormatting.toLowerCase();
  } else {
    var naviName = altName.toLowerCase();
  }
  var apostrophe = new RegExp(/’/);

  if (apostrophe.test(naviName)) {
    const nameSplit = naviName.split(apostrophe);
    naviName = nameSplit[0] + nameSplit[1];
  }
  var space = new RegExp(/\s/);
  if (space.test(naviName)) {
    const nameSplit2 = naviName.split(" ");
    naviName = nameSplit2[0];
    if (nameSplit2.length > 1) {
      for (let j = 1; j < nameSplit2.length; j++) {
        naviName += "-" + nameSplit2[j];
      }
    }
  }
  return naviName;
}

const FishProfile = () => {
  //gets the info for the current fish
  var [fishInfo, setFishInfo] = useState([]);
  const getCurrentFish = () => {
    if (fishInfo.length === 0) {
      Axios.post("http://localhost:3001/currentFishGet", {
        currentFishName: getFishName(),
      }).then((response) => {
        setFishInfo(response.data);
      });
    }
  };

  return (
    <div>
      {/* Outputs the fish data */}
      <section className="homeMiddle" onLoad={getCurrentFish()}>
        {fishInfo.map((val, key) => {
          return (
            <div key={val.fishID}>
              <h1>{pageTitle(val.fishCommonName, val.fishScientificName)}</h1>
              <img
                className="aquarium"
                width="20%"
                height="20%"
                src={require("./images/" + val.fishImage)}
                alt=""
              />
              <Table
                striped
                bordered
                hover
                variant="dark"
                className="w-50 text-center"
              >
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
                    <td>
                      {val.fishLowerPH} - {val.fishUpperPH}
                    </td>
                  </tr>
                  <tr>
                    <td>Recommended Temperature: </td>
                    <td>
                      {val.fishLowerTemp} - {val.fishUpperTemp} °C
                    </td>
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
              </Table>
            </div>
          );
        })}
        <br />
      </section>
      <section className="darkSection">
        {/* outputs External Links */}
        <h1 className="darkBlueText">External Links</h1>
        {fishInfo.map((val, key) => {
          return (
            <div key={val.fishID}>
              <Table className="w-50 text-center">
                <tbody className="section">
                  <tr className="mb-4">
                    <td>
                      <b>
                        <NavLink
                          className="darkBlueText"
                          to={{
                            pathname:
                              "https://en.wikipedia.org/wiki/" +
                              val.fishScientificName,
                          }}
                          target="_blank"
                        >
                          Wikipedia Page
                        </NavLink>
                      </b>
                      <br />
                    </td>
                  </tr>
                  <tr className="mb-4">
                    <td>
                      <b>
                        <NavLink
                          className="darkBlueText"
                          to={{
                            pathname:
                              "https://en.aqua-fish.net/fish/" +
                              formatFishNameForLink(
                                val.fishCommonName,
                                val.fishScientificName
                              ),
                          }}
                          target="_blank"
                        >
                          aqua-fish.net
                        </NavLink>
                      </b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
        <br />
        <br />
        <b>
          &nbsp;
          <NavLink to="/Compendium">Return to Compendium Page</NavLink>
        </b>
        <br />
        <br />
      </section>
    </div>
  );
};

export default FishProfile;
