import {
    PRODUCTS,
    OFFERS,
    SHOPPINGCART
} from "../actions/ecomActions";

const initialState = {
    count: 0,
    products: [],
    offers: [],
    shoppingCart: []
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count+1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count+1
            };
        case PRODUCTS:
            return {
                ...state,
                products: action.data
            };
        case OFFERS:
            return {
                ...state,
                offers: action.data
            }
        case SHOPPINGCART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.data]
            }
    
        default:
            return state;
    }
}

export { counterReducer }