import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';

// Dedicated Pages matching enterprise requirements
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import IndustriesPage from './pages/IndustriesPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import VoiceAgentsPage from './pages/VoiceAgentsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';


// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      
      {/* ── Main Sticky Header with React Router Navigation ── */}
      <Header onOpenContact={() => setContactModalOpen(true)} />

      {/* ── Main Routed Page Content ── */}
      <main id="main" style={{ flex: 1, paddingTop: 0 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/services" element={<ServicesPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/about" element={<AboutPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/blog" element={<BlogPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/industries" element={<IndustriesPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/voice-agents" element={<VoiceAgentsPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/careers" element={<CareersPage onOpenContact={() => setContactModalOpen(true)} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenContact={() => setContactModalOpen(true)} />} />
        </Routes>
      </main>

      {/* ── Global Footer ── */}
      <Footer />

      {/* ── Contact Modal ── */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
