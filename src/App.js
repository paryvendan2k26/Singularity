import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrajnaKritrimaLab from './pages/labs/PrajnaKritrimaLab';
// ... other lab imports
import NavyaVigyanLab from './pages/labs/NavyaVigyanLab';

// --- ADD THESE IMPORTS ---
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

// --- ADD THESE IMPORTS ---
import BlogListPage from './pages/BlogListPage';
import CreateBlogPage from './pages/CreateBlogPage';
import EditBlogPage from './pages/EditBlogPage';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ... other lab routes */}
            <Route path="/navya-vigyan-lab" element={<NavyaVigyanLab />} />

            {/* --- ADD THESE ROUTES --- */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* --- ADD THESE ROUTES --- */}
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/create-blog" element={<CreateBlogPage />} />
            <Route path="/edit-blog/:id" element={<EditBlogPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;