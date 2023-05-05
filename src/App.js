import React, { useState, useContext, useReducer } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";

import { routes, navLinks } from './configs/routes/routes_config';

import { ShoppingCart } from './context/shopping_cart';
import Label from './components/common/label/label.component';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './actions/couterActions';

import './App.css';
var a = 1;

const initialState = {
   cart: [],
   email: "abc@abc.com",
   name: "Sai" 
}
const reducer = (state, action) => {
  switch(action.type) {
    case "UPDATENAME":
      return {
        ...state,
        name: "Will Smith"
      }
    case "UPDATEEMAIL":
        return {
          ...state,
          email: "test@gmail.com"
        }
    default:
      return state
  }
}

function App(props) {
  
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("Sai");
  const [list, dispatch] = useReducer(reducer, initialState)

  return (
    <ShoppingCart.Provider value={[cart, setCart]}>
      <button onClick={() => props.decrementCount()}>
        Decrement (-)
      </button>
      {props.count} 
      <button onClick={() => props.incrementCount()}>
        Incement (+)
      </button>
      <h1>{list.name}</h1>
      <h1>{list.email}</h1>
      <button onClick={() => {
        window.a = 29
        dispatch({ type: "UPDATENAME"})
        }}> Update Name </button>
      <button onClick={() => dispatch({ type: "UPDATEEMAIL"})}> Update EMAIL </button>

      <div className="container">


        <div className="sideName">
          <h1>
            ECOM LOGO
          </h1>
          <Label />
          <ul className="noList">
            {
              navLinks && navLinks.map((item) => (
                <li>
                  <NavLink
                    className={(params) => params.isActive ? "active" : ""} to={item.to}> {item.label} </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='cart_content'>
          <Routes>
            {
              routes && routes.map((item) => {

                return <Route
                  path={item.path} element={<item.component />} />
              })
            }
          </Routes>
        </div>
      </div>
    </ShoppingCart.Provider>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(incrementCount()),
  decrementCount: () => dispatch(decrementCount())
  // getAllProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
