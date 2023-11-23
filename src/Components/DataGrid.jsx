import useFetch from "../data/usefetch";
import { useState } from "react";
import Pagination from "./Pagination";

const DataGrid = () => {
    const {data, loading } = useFetch('https://api.spacexdata.com/v3/capsules')
    // console.log(data[1].status)

   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data && data ? Object.values(data).slice(startIndex, endIndex) : [];
  console.log(paginatedData)

  const totalPages = data && data ? Math.ceil(Object.values(data).length / itemsPerPage) : 0;
  const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
    return ( 
        <>
                <section>
{paginatedData.map((item, index)=>(
                <div>{item.status}</div>
)

)}

                {totalPages > 1 && (
                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                             )}
                </section>
        </>
     );
}
 
export default DataGrid;