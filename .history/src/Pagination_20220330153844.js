import React from 'react'

const Pagination = ({ entriesPerPage, totalEntries })=>{
const pageNumbers = [];

for(let i =1; i<=Math.ceil(totalEntries / entriesPerPage); i++)
{
    pageNumbers.push(i);
}


return(
<div>
<ul className="pagination">
    {pageNumbers.map(number=>(
        <li key={number} className="page-item">
            <a href="!#" className="page-link">
                {number}
            </a>
        </li>
    ))}
    </ul> 
</div>

)
}

export default Pagination