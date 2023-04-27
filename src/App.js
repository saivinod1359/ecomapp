import React from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { routes } from './configs/routes/routes_config';

import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/offers"> Offers </Link>

        <Routes>
          {
            routes && routes.map((item) => {
              return <Route path={item.path} element={<item.component />} />
            })
          }
        </Routes>
      </BrowserRouter>

      {/* <DashboardPage /> */}
      {/* { myNumber() } */}
    </div>
  );
}

export default App;
