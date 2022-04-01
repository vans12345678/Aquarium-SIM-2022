import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ReactPaginate from "react-paginate";

const perPage = 10;

const Compendium = () => {
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

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
    resetPage();
  };

  useEffect(() => {
    getFish();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    console.log("selected page", selectedPage);
    setCurrentPage(selectedPage);
  }

  function resetPage() {
    setCurrentPage(0);
    const offset = currentPage * perPage;
  }

  // Get the input field
  var input = document.getElementById("search");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchFishAll();
    }
  });

  const offset = currentPage * perPage;
  console.log(offset);

  const currentPageData = fishList.slice(offset, offset + perPage);

  const pageCount = Math.ceil(fishList.length / perPage);

  //sets the route URLs
  const { path, url } = useRouteMatch();

  return (
    <div>
      <section className="home">
        <br />
        <br />

        <h1 className="orangeText">Fish Data</h1>
        <div className="searchCenter">
          <Button
            className=" "
            variant="primary"
            size="md"
            onClick={(event) => {
              searchFishAll();
            }}
          >
            Search Fish Names
          </Button>
          <input
            id="search"
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                // event.preventDefault();
                console.log("Click");
                searchFishAll();
              }
            }}
          />
        </div>

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
                      <NavLink to={`/Fishprofile/${val.fishScientificName}`}>
                        Details
                      </NavLink>
                    </td>
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
        forcePage={currentPage}
      />
    </div>
  );
};

export default Compendium;
