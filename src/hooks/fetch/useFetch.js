/**
 * Custom Hook
 */
import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);

    const fetchData = (url) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data);
        })
    }

    const setUri = (url) => {
        fetchData(url)
    }

    return [data, setUri]
}

export default useFetch;