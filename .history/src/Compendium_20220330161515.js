import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import setPageNumber from 'react-paginate';

const Compendium = () => {
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  //function for retrieving all fish entries
    const getFish = () => {
      Axios.get("http://localhost:3001/fishGet").then((response) => {
        setFishList(response.data);
      });
  };

  //function for retrieving specific fish entries using search
  const searchFishAll = () => {
    Axios.post("http://localhost:3001/fishComp", { search: search }).then(
      (response) => {
        setFishList(response.data);
      }
    );
  };

  //sets the route URLs
  const { path, url } = useRouteMatch()

  var indexOfLastEntry = pageNumber * entriesPerPage;
  var indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  var currentEntry = fishList.slice(indexOfFirstEntry, indexOfLastEntry);
  var pageCount = Math.ceil(fishList.length / entriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const changePage = ({selected}) =>{
    setPageNumber(selected);
  };
  

  return (
    <div>
      <section className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="orangeText">Fish Data</h1>
        <button onClick={searchFishAll}>Search Common Names</button>
        <input
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onLoad={getFish()}
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
              {currentEntry.map((val, key) => {
                return (
                  <tr key={val.fishID}>
                    <td>{val.fishCommonName}</td>
                    <td>{val.fishScientificName}</td>
                    <td>
                      <NavLink to={`/fishprofile/${val.fishScientificName}`}>Here</NavLink>
                    </td>

                  </tr>
                  
                );

              })}
            </tbody>
          </Table>
          <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          />
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
