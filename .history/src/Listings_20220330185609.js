import { useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

const Listings = () => {
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");
  const getFish = () => {
    Axios.post("http://localhost:3001/fishAll").then((response) => {
      setFishList(response.data);
    });
  };
  const searchFish = () => {
    Axios.post("http://localhost:3001/fish", { search: search }).then(
      (response) => {
        setFishList(response.data);
      }
    );
    console.log(search);
  };

  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Listings</h1>
        <p className="text-center ">Check out fish prices here!</p>
        <button onClick={getFish}>Get All</button>
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
                <th>Common Name</th>
                <th>Scientific Name</th>
                <th>Current Price</th>
                <th>Store URL</th>
              </tr>
            </thead>
            <tbody>
              {fishList.map((val, key) => {
                return (
                  <tr key={val.fishMatchID}>
                    <td>{val.fishMatchCommonName}</td>
                    <td>{val.fishMatchScientificName}</td>
                    <td>${val.fishMatchPrice}</td>
                    <td>
                      <a href={val.fishMatchURL}>{val.fishMatchStoreName}</a>
                    </td>
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
