import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from 'axios';
import {Fish, FishBasic} from './classes/FishBasic';
import ReactPaginate from 'react-paginate';

const perPage = 10;

const Listings = () => {
  const [fishList, setFishList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  
  const getAllFish = () =>{
    Axios.post("http://localhost:3001/fishAll").then((response) => {
      setFishList(response.data);
    });
    
  }
  const searchFish = () =>{
    Axios.post("http://localhost:3001/fish", {search: search}).then((response) => {
      setFishList(response.data);
    });
    resetPage();
  }

  //initially grabs all the entries
  useEffect(()=>{
    getAllFish();
  },[]);

  function handlePageClick({selected: selectedPage}){
    console.log("selected page", selectedPage)
    setCurrentPage(selectedPage);
  }
  
  function resetPage() {
      setCurrentPage(0);
      const offset = (currentPage) * perPage;
      forcePage(0);
  }

  const fish2 = new FishBasic("value.fishMatchID","value.fishMatchCommonName", "value.fishMatchScientificName", 'placeholder.png');  
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

  const offset = (currentPage) * perPage;
console.log(offset);

const currentPageData = fishList.slice(offset, offset + perPage);

const pageCount = Math.ceil(fishList.length / perPage);

  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <section className="home">
        <br />
        <br />
        <h1 className="orangeText">Listings</h1>
        <p className="text-center ">{userList}</p>
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
      {userList.map((item) => (
        <li key={item.id}>
            {item.commonName}
        </li>
      ))}
    </ul>
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
                <th>Fish Common Name</th>
                <th>Fish Scientific Name</th>
                <th>Fish Price</th>
                <th>Store URL</th>
                <th>Add to list</th>
              </tr>
            </thead>
            <tbody>
          {currentPageData.map((val, key) => {
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
      </section>
      <ReactPaginate
            containerClassName="pagination"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
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
