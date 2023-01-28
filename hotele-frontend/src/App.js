import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HotelList from './components/pages/HotelList';

function App() {

  const navigation = useNavigate();

    return (
      <>
        <Routes>
          <Route path='/' element={HotelList}/>
        </Routes>
      </>
    );
}

export default App;