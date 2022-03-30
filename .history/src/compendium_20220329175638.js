import { useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

const Compendium = () => {
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");
  const getFish = () => {
    Axios.get("http://localhost:3001/fishAll").then((response) => {
      setFishList(response.data);
    });
  };
  const searchFish = () => {
    Axios.post("http://localhost:3001/fish", { search: search }).then(
      (response) => {
        setFishList(response.data);
      }
    );
  };
  return (
    <div onLoad={getFish}>
      

      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Fish Data</h1>
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
                <th>Common name</th>
                <th>Scientific name</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody> 
              {fishList.map((val, key) => {
                return (
                  <tr key={val.fishMatchID}>
                    <td>{val.fishMatchCommonName}</td>
                    <td>{val.fishMatchScientificName}</td>
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

export default Compendium;
