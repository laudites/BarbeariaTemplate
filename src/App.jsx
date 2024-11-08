// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';  // Agora existe o arquivo AboutPage
import ContactPage from './page/ContactPage'; // Agora existe o arquivo ContactPage

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
