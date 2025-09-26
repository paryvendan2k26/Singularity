import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrajnaKritrimaLab from './pages/labs/PrajnaKritrimaLab';
import AanuTattvaLab from './pages/labs/AanuTattvaLab';
import ChitraDarshanLab from './pages/labs/ChitraDarshanLab';
import VarahamihiraLab from './pages/labs/VarahamihiraLab';
import BhaskaracharyaLab from './pages/labs/BhaskaracharyaLab';
import AgastyaLab from './pages/labs/AgastyaLab';
import NavyaVigyanLab from './pages/labs/NavyaVigyanLab';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prajna-kritrima-lab" element={<PrajnaKritrimaLab />} />
            <Route path="/aanu-tattva-lab" element={<AanuTattvaLab />} />
            <Route path="/chitra-darshan-lab" element={<ChitraDarshanLab />} />
            <Route path="/varahamihira-lab" element={<VarahamihiraLab />} />
            <Route path="/bhaskaracharya-lab" element={<BhaskaracharyaLab />} />
            <Route path="/agastya-lab" element={<AgastyaLab />} />
            <Route path="/navya-vigyan-lab" element={<NavyaVigyanLab />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
