import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const perPage = 10;


const Compendium = () => {
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  //function for retrieving all fish entries
    const getFish = () => {
      if (fishList.length === 0){
      Axios.get("http://localhost:3001/fishGet").then((response) => {
        setFishList(response.data);
      });
    }
  };

  //function for retrieving specific fish entries using search
  const searchFishAll = () => {
    Axios.post("http://localhost:3001/fishComp", { search: search }).then(
      (response) => {
        setFishList(response.data);
      }
    );
  };

  useEffect(()=>{
    getFish();
  },[]);

function handlePageClick({selected: selectedPage}){
  console.log("selected page", selectedPage)
  setCurrentPage(selectedPage);
}

const offset = currentPage * perPage;

const currentPageData = fishList.slice(offset, offset + perPage);

const pageCount = Math.ceil(fishList.length / perPage);

  //sets the route URLs
  const { path, url } = useRouteMatch()


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
              {currentPageData.map((val, key) => {
                return (
                  <tr key={val.fishID}>
                    <td>{val.fishCommonName}</td>
                    <td>{val.fishScientificName}</td>
                    <td>
                      <NavLink to={`/Fishprofile/${val.fishScientificName}`}>Here</NavLink>
                    </td>

                  </tr>
                  
                );

              })}
            </tbody>
          </Table>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
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

export default Compendium