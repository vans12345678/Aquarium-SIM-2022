import React from 'react'

const Pagination = ({ entriesPerPage, totalEntries, paginate, maxPageNumberLimit, minPageNumberLimit})=>{
const pageNumbers = [];

for(let i =1; i<=Math.ceil(totalEntries / entriesPerPage); i++)
{
    pageNumbers.push(i);
}

return(
<div>
<ul className="pagination">
    {pageNumbers.map((number)=>{

            <li key={number} 
            id={number}
            className="page-item">
            <a onClick={() => paginate(number)} href="/compendium/!#" className="page-link">
                {number}
            </a>
        </li>

})}
    </ul> 
</div>

)
}

export default Pagination