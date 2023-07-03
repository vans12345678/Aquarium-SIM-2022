import { useState } from "react";
import { Table } from "react-bootstrap";
import Axios from 'axios';
import {Fish, FishBasic} from './classes/FishBasic';



const Listings = () => {
  const [fishList, setFishList] = useState([]);
  const [userList, setUserList] = useState([]);
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
  const addFish = (value) =>{
    //console.log(value.fishMatchID);
    let fish = new FishBasic(value.fishMatchID, value.fishMatchCommonName, value.fishMatchScientificName, 'placeholder.png');  
    userList.push(fish);
    setUserList(userList);
    //console.log(userList[0].commonName);

    window.sessionStorage.setItem("fishName",JSON.stringify(userList));
    
  }
  const wrapperFunction = (value) => {

    addFish(value);
    alert("Added fish to list");

    let listValues  = JSON.parse(sessionStorage.fishList);

  }

  useEffect(()=>{
    addFish();
  },[]);


  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Listings</h1>
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
        <ul>
      {userList.map((item) => {
        return (
        <li key={item.id}>
            {item.commonName}
        </li>
        )
        })}
    </ul>
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
                <td><button onClick={function(){wrapperFunction(val)}} type="button" className="btn btn-primary">Add</button></td>
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

        <div className="container">

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
