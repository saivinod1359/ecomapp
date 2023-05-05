import axios from "axios";

export const PRODUCTS = "PRODUCTS";
export const OFFERS = "OFFERS";
export const SHOPPINGCART = "SHOPPINGCART";

export const getProducts = () => {
    return (dispatch) => {     //nameless functions
        // Initial action dispatched
        // Return promise with success and failure actions
        return axios.get("http://localhost:9090/products").then(
            (response) => {
                console.log('response: ', response)
                return dispatch({
                    type: PRODUCTS,
                    data: response.data
                });

            });
    };
};


export const getAllOffers = () => {
    return (dispatch) => {
        return fetch("http://localhost:9090/products")
            .then((res) => res.json())
            .then((response) => {
                return dispatch({
                    type: OFFERS,
                    data: response
                })
            })
    }
}

export const getShoppingCart = (request) => {
    console.log(request);
    return (dispatch) => {
        dispatch({
            type: SHOPPINGCART,
            data: request
        })
    }
}