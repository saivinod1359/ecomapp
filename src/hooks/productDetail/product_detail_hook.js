import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("../responses/productdetails.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setDetails(response);
            }).catch((err) => console.log(err))
    }, [])

    return [details];
}

export default useProductDetails;