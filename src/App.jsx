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
import ContactPage from './pages/ContactPage.jsx';
import IndustriesPage from './pages/IndustriesPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import VoiceAgentsPage from './pages/VoiceAgentsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';

import { MessageSquare } from 'lucide-react';

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
          <Route path="/blog/:slug" element={<BlogPage onOpenContact={() => setContactModalOpen(true)} />} />
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

      {/* ── Consultation Modal ── */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

      {/* ── Floating Consultation Quick Action Button ── */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 999
        }}
      >
        <button
          onClick={() => setContactModalOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #00bba7, #0d9488)',
            color: '#040811',
            border: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
            boxShadow: '0 8px 24px rgba(0, 187, 167, 0.45)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          title="Schedule Discovery Session"
        >
          <MessageSquare size={16} />
          <span>Book Consultation</span>
        </button>
      </div>

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
