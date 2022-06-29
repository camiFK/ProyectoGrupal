import React from "react";
import Pagination from '@mui/material/Pagination';


export default function PaginationHome({value,pagination,items,pages}){

    const handle = (event, value) => {pagination(value)}


    return  <div>
            <Pagination variant="outlined" shape="rounded" count={pages} defaultPage={1} size="large" onChange={handle}/>
            </div>

};