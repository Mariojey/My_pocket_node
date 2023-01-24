import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const navigation = useNavigate();

    return (
      <>
        <Routes>
          <Route path='/'/>
          <Route path='/clients'/>
          <Route path='/countries'/>
          <Route path='/cities'/>
          <Route path='/parkings'/>
          <Route path='/rooms'/>
          <Route path='/reservations'/>
        </Routes>
      </>
    );
}

export default App;