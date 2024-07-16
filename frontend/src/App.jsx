import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Pages/LandingPage';
import HomePage from './components/Pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
