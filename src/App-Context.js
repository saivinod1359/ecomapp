import React, { useState, useContext } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from './configs/routes/routes_config';
import AComponenet from './components/others/a.component';
import './App.css';
import { UserContext } from './context/user';
import { EmployeeContext } from './context/employee';


function App() {
  const [userName, setUserName] = useState("Sai");

  const name = useContext(UserContext);

  return (
      <div className="container">
        {/* <NavLink className={(params) => params.isActive ? "active" : ""} to="/"> Home </NavLink>
        <NavLink className={(params) => params.isActive ? "active" : ""} to="/products"> Products </NavLink>
        <NavLink className={(params) => params.isActive ? "active" : ""} to="/offers"> Offers </NavLink>

        <Routes>
          {
            routes && routes.map((item) => {
              return <Route
                path={item.path} element={<item.component />} />
            })
          }
        </Routes> */}
        {/* { myNumber() } */}
        App - {userName}
        <UserContext.Provider value={[userName, setUserName]}>
          <EmployeeContext.Provider value="John">
            <AComponenet />
          </EmployeeContext.Provider>
        </UserContext.Provider>
      </div>
  );
}

export default App;
