import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Investments from './pages/Investments';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/Investments" element={<Investments />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
