import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GraduationCountdown from './Pages/GraduationCountdown';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GraduationCountdown />} />
      </Routes>
    </Router>
  );
};

export default App;