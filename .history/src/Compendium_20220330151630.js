import { useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ReactPaginate from 'react-paginate';

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
	
    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }
     
    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};


const Compendium = () => {
  const [fishList, setFishList] = useState([]);
  const [search, setSearch] = useState("");


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
              {fishList.map((val, key) => {
                return (
                  <tr key={val.fishID}>
                    <td>{val.fishCommonName}</td>
                    <td>{val.fishScientificName}</td>
                    <td>
                      <NavLink to={`${url}/${val.fishScientificName}`}>Here</NavLink>
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
