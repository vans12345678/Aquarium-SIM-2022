import React from 'react'

const Pagination = ({ entriesPerPage, totalEntries, paginate})=>{
const pageNumbers = [];

for(let i =1; i<=Math.ceil(totalEntries / entriesPerPage); i++)
{
    pageNumbers.push(i);
}


}

export default Pagination