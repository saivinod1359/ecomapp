import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {counterReducer} from "../reducers/counterReducer";

const ecomStore = createStore(counterReducer, applyMiddleware(thunk));
export default ecomStore;