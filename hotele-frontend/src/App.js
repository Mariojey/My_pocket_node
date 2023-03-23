import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HotelList from './components/pages/HotelList';

function App() {


    return (
      <Router>
        <Routes>
          <Route path='/' element={ <HotelList /> }/>
        </Routes>
      </Router>
    );
}

export default App;