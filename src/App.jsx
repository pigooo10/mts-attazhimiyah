import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Education from './pages/Education';
import Facilities from './pages/Facilities';
import Admissions from './pages/Admissions';

function App() {
  return (
    <Router>
      {/* Dynamic Animated Mesh Background */}
      <div className="mesh-bg-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<AboutUs />} />
            <Route path="/pendidikan" element={<Education />} />
            <Route path="/fasilitas" element={<Facilities />} />
            <Route path="/ppdb" element={<Admissions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
