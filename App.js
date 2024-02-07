import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Polling from './Components/Polling/Polling';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/polling" element={<Polling />} />
      </Routes>
    </Router>
  );
}

export default App;