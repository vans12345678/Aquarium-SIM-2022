import React from 'react'

const Pagination = ({ entriesPerPage, totalEntries, paginate, maxPageNumberLimit, minPageNumberLimit})=>{
const pageNumbers = [];

for(let i =1; i<=Math.ceil(totalEntries / entriesPerPage); i++)
{
    pageNumbers.push(i);
}

const handleClick = ()=>{
    setCurrentPage(event.target.id);
}

return(
<div>
<ul className="pagination">
    {pageNumbers.map((number)=>{

        if (number < maxPageNumberLimit+1 && number > minPageNumberLimit){
            <li key={number} 
            id={number}
            onClick={handleClickl}
            className="page-item">
            <a onClick={() => paginate(number)} href="/compendium/!#" className="page-link">
                {number}
            </a>
        </li>
        }
})}
    </ul> 
</div>

)
}

export default Pagination