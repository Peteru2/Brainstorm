import { useState,useEffect } from "react";
import axios from 'axios'
// import a



const useFetch = (url) => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make a GET request to the API
        axios.get(url)
      
        .then((response) => {

            // Handle the successful response
            setData(response.data);
            setLoading(false)
                    })
        .catch((error) => {
            // Handle errors
            console.log(error.message)
            console.error('Error fetching data:', error);
        });
    }, [url]);
    return {data, loading}
}
export default useFetch