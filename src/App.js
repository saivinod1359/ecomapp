import React, { useEffect, useState } from 'react';
import './App.css';
import DashboardPage from './pages/dashboard/dashboard_page';
import Header from './components/common/header';
import Menu from './components/common/menu';
import Image from './components/common/image';
import FnHoc from './hoc/fnHoc';

function App() {
  const myNumber =  FnHoc(Menu, Header, Image);
  // console.log('myNumber: ', myNumber())

  return (
    <div className="container">
      <DashboardPage />
      { myNumber() }
    </div>
  );
}

export default App;
