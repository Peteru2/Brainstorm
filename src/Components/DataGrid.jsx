import useFetch from "../data/usefetch";

const DataGrid = () => {
    const {data, loading } = useFetch('https://api.spacexdata.com/v3/capsules')
    console.log(data)
    
    return ( 
        <>
                <section>

                </section>
        </>
     );
}
 
export default DataGrid;