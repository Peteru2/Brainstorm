import useFetch from "../data/usefetch";
import { useState } from "react";
import Pagination from "./Pagination";

const DataGrid = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [preview, setPreview] = useState(false)
    const {data, loading } = useFetch('https://api.spacexdata.com/v3/capsules')
    // console.log(data[1].status)
    const handlePreview = (itemIndex) =>{
        
        setSelectedItemIndex(itemIndex);
        setPreview(true);
    }
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
        <div className="flex justify-center flex-wrap mt-10">
            {paginatedData.map((item, index)=>(
                            <div className="my-3 mx-8 bg-white shadow-lg rounded-md ">
                                <div className="p-8">
                                <p className="text-center mb-3">{item.capsule_serial}</p>
                                {/* <p>{item.details === ""?"No details":item.details}</p> */}
                                <h4>{item.type}</h4>

                                <h2>{item.status}</h2>
                                </div>
                                <button className="bg_color rounded text-white w-full" onClick={() => handlePreview(index)}>Check details</button>
                            </div>
            )

            )}
             <div className={`modal ${preview ? "modal-show":""}`}> 
                    
             </div>
        </div>
                {totalPages > 1 && (
                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                             )}
                </section>
        </>
     );
}
 
export default DataGrid;