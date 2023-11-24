import useFetch from "../data/usefetch";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import CapsuleSearch from "./CapsuleSearch";
import X from "../assets/images/X.svg"

const DataGrid = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [preview, setPreview] = useState(false)
    const {data, loading } = useFetch('https://api.spacexdata.com/v3/capsules')
    const [paginatedData, setPaginatedData] = useState(null)
    // console.log(data[1].status)
    const handlePreview = (itemIndex) =>{
        
        setSelectedItemIndex(itemIndex);
        setPreview(true);
    }
    const handleClosePreview = () =>{
        setSelectedItemIndex(null);
        setPreview(false);
    }
    const handleSearch = (searchTerm) => {
        if (!data) return; // Ensure data is available
      
        const searchTermLower = searchTerm.toLowerCase();
        const filteredData = Object.values(data).filter(item =>
          item.capsule_serial.toLowerCase().includes(searchTermLower)
        );
      
        setPaginatedData(filteredData.slice(startIndex, endIndex));
      };
            const [currentPage, setCurrentPage] = useState(1);
            const itemsPerPage = 10; 

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            useEffect(() => {
                // Ensure data is available before updating paginatedData
                if (data) {
                  setPaginatedData(Object.values(data).slice(startIndex, endIndex));
                }
              }, [data, startIndex, endIndex]);
            

            const totalPages = data && data ? Math.ceil(Object.values(data).length / itemsPerPage) : 0;
            // const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
    return ( 
        <>
                <section className="mt-14">\
                <CapsuleSearch onSearch={handleSearch} />
                    <div>
                        <h3 className="text-center text_color text-4xl mb-4">DATA GRID</h3>
                    </div>
        <div className="flex justify-center flex-wrap ">
            
            {loading ? ( 
            <div className="text-center text_color">
                Loading...
            </div>):( paginatedData.map((item, index)=>(
                            <div className="my-3 md:w-44 w-52 mx-8 bg-white shadow-lg rounded-md ">
                                <div className="p-8">
                                <p className="text-center mb-3">{item.capsule_serial}</p>
                                {/* <p>{item.details === ""?"No details":item.details}</p> */}
                                <h4>{item.type}</h4>

                                <h2>{item.status}</h2>
                                </div>
                                <button className="bg_color rounded text-white w-full" onClick={() => handlePreview(index)}>Check details</button>
                            </div>
            )

            ))
        }
             <div className={`modal ${preview ? "modal-show":""}`}> 
                        {
                            selectedItemIndex !== null && (
                                <div className="">
                                    <div className="flex w-full mb-4">
                                        <h2 className="text-gray-500 text-sm">{paginatedData[selectedItemIndex].capsule_serial} Details</h2>
                                        <p className="ml-auto cursor-pointer"><img src={X} alt="closeButton" onClick={handleClosePreview} /></p>
                                        </div>
                                   <h2 className="text-sm my-2"><span className="text_color">Description:</span> {paginatedData[selectedItemIndex].details}</h2>
                                   <h2 className="text-sm"><span className="text_color">Status: </span>{paginatedData[selectedItemIndex].status}</h2>
                                   <h2 className="text-sm"><span className="text_color">Original launch:</span> {new Date(paginatedData[selectedItemIndex].original_launch).toDateString('en-US')}</h2>

                                </div>
                            )
                        }
             </div>
        </div>
                {totalPages > 1 && (
                     <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
                             )}
                </section>
                <div className={preview?"overlay":""}></div>

        </>
     );
}
 
export default DataGrid;