import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import InstallationGuide from './pages/InstallationGuide/InstallationGuide';
import PrivacyPage from './pages/Privacy/Privacy';
import TermsPage from './pages/Terms/Terms';
import DiscordSupportPage from './pages/Support/Support';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <style>{GlobalStyles}</style>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/installation" element={<InstallationGuide />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/support" element={<DiscordSupportPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;