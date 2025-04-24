import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SupportPage from './pages/Support';
import TermsPage from './pages/Terms';
import PrivacyPage from './pages/Privacy';
import InstallationGuide from './pages/InstallationGuide';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/installation" element={<InstallationGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
