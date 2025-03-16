import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Leaderboard } from './pages/Leaderboard';
import { Bonuses } from './pages/Bonuses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/bonuses" element={<Bonuses />} />
      </Routes>
    </Router>
  );
}

export default App;