import useFetch from "../data/usefetch";

const DataGrid = () => {
    const {data, loading } = useFetch('https://api.spacexdata.com/v3/capsules')
    console.log(data[1].status)

    const paginatedData = data && data.data ? Object.values(data.data).slice(startIndex, endIndex) : [];

  const totalPages = data && data.data ? Math.ceil(Object.values(data.data).length / itemsPerPage) : 0;
  const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
    return ( 
        <>
                <section>
                
                </section>
        </>
     );
}
 
export default DataGrid;