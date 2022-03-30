import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
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

function formatFishNameForLink(nameForFormatting, altName) {
if (nameForFormatting != "N/A")
{
  var naviName = nameForFormatting.toLowerCase();
  var apostrophe = new RegExp(/’/);

    if (apostrophe.test(naviName))
    {
        const nameSplit = naviName.split(apostrophe);
        naviName = nameSplit[0] + nameSplit[1];

    }
    if (space.test(navigationName[i]))
    {
        const nameSplit2 = navigationName[i].split(" ");
        navigationName[i] = nameSplit2[0];
        if(nameSplit2.length > 1)
        {
            for(let j = 1; j < nameSplit2.length; j++)
            {
                navigationName[i] += "-" + nameSplit2[j];
            }
        }
    }
    console.log(naviName);
}
else
{
  var naviName = altName;
}
return naviName;
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
          <div key = {val.fishID}>
          <h1>{val.fishCommonName}</h1>
          <img className="aquarium"
          width="20%"
          height="20%"
          src={require("./images/"+val.fishImage)} 
          alt=""/>
          <Table           
          striped
            bordered
            hover
            variant="dark"
            className="w-50 text-center">
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
          </Table>
          </div>
        )
              })}
      </section>
      <hr/>
      <h1>External Links</h1>
      {fishInfo.map((val, key) => {
        return(
          <div key = {val.fishID}>
            <Table 
            bordered
            hover
            striped
            className="w-50 text-center">
              <tr> 
                <td>
                <NavLink to={{pathname:"https://en.wikipedia.org/wiki/"+val.fishScientificName}} target="_blank">Wikipedia Page</NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink to={{pathname:"https://en.aqua-fish.net/fish/"+formatFishNameForLink(val.fishCommonName, val.fishScientificName)}} target="_blank">{formatFishNameForLink(val.fishCommonName, val.fishScientificName)}</NavLink>
                </td>
              </tr>
            </Table>
      </div>
        )
    })}
    <br/>
    <br/>
    </div>

  );
};

export default FishProfile;
