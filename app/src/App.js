import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
