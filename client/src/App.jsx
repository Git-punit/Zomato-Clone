import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DiningOut from './pages/DiningOut';
import RestaurantDetail from './pages/RestaurantDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dining-out" replace />} /> {/* Redirect Home to Dining Out for now as it has content */}
        <Route path="/home" element={<Home />} />
        <Route path="/dining-out" element={<DiningOut />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
