import { useState } from "react";
import { Table } from "react-bootstrap";
import Axios from 'axios';
import {Fish, FishBasic} from './classes/FishBasic';



const Listings = () => {
  const [fishList, setFishList] = useState([]);
  const userList = [];
  const [search, setSearch] = useState("");
  const getAllFish = () =>{
    Axios.post("http://localhost:3001/fishAll").then((response) => {
      setFishList(response.data);
    });
  }
  const searchFish = () =>{
    Axios.post("http://localhost:3001/fish", {search: search}).then((response) => {
      setFishList(response.data);
    });
    //console.log(search);
  }
  function addFish(commonName, scientificName){
    console.log(commonName)
  }


  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Listings</h1>
        <p className="text-center ">Check out fish prices here!</p>
        <button onClick={getAllFish}>Get All</button>
        <button onClick={searchFish}>Search Common Names</button>
        <input
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
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
                <th>Fish Common Name</th>
                <th>Fish Scientific Name</th>
                <th>Fish Price</th>
                <th>Store URL</th>
                <th>Add to list</th>
              </tr>
            </thead>
            <tbody>
          {fishList.map((val, key) => {
          return (
              <tr key={val.fishMatchID}>
                <td>{val.fishMatchCommonName}</td>
                <td>{val.fishMatchScientificName}</td>
                <td>${val.fishMatchPrice}</td>
                <td><a href={val.fishMatchURL}>{val.fishMatchStoreName}</a></td>
                <td><button onClick={() => { this.addFish(key) }} type="button" className="btn btn-primary">Add</button></td>
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
