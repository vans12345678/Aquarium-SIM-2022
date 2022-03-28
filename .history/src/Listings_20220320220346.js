import { useState } from "react";
import { Table } from "react-bootstrap";
import Axios from 'axios';



const Listings = () => {
  const [fishList, setFishList] = useState([]);
  const getFish = () =>{
    Axios.get("http://localhost:3001/fish").then((response) => {
      setFishList(response.data);
    });
  }
  const searchFish = () =>{
    Axios.get("http://localhost:3001/fish").then((response) => {
      setFishList(response.data);
    });
  }
  const getInputValue = (event)=>{
    // show the user input value to console
    const userValue = event.target.value;

    console.log(userValue);
};
const [search, setSearch] = useState("");
  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Listings</h1>
        <p className="text-center ">Check out fish prices here!</p>
        <button onClick={getFish}>Get Tetras</button>
        <button onClick={searchFish}>Search Tetras</button>

        <br />
        <br />
        
        <br />
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <div className="table">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="w-50 text-center"
          >
            <thead>
              <tr>
                <th>Fish Image</th>
                <th>Fish Name</th>
                <th>Fish Family</th>
                <th>Store URL</th>
              </tr>
            </thead>
            <tbody>
          {fishList.map((val, key) => {
          return (
              <tr>
                <td key="{val.tetraCommonName}">{val.tetraCommonName}</td>
                {/* <td key="{val.tetraScientificName}">{val.tetraScientificName}</td>
                <td key="{val.tetraPrice}">${val.tetraPrice}</td>
                <td key="{val.tetraID + val.tetraStoreName}"><a href={val.tetraURL}>{val.tetraStoreName}</a></td> */}
              </tr>
          );
        })}
          </tbody>
          </Table>
          </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="darkSection">
        <br />
        <br />
        <br />
        <br />

        <h1 className="darkBlueText">ABOUT US</h1>
        <div className="container">
          <p className="text-center darkBlueText boldText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <br />
        </div>

        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Listings;
