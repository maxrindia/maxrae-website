import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import BackToTop from './components/BackToTop.jsx';

// Dedicated Pages matching enterprise requirements
import HomePage from './pages/HomePage.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import IndustryDetailPage from './pages/IndustryDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
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
          
          {/* Individual Service Pages */}
          <Route path="/services/voice-agents" element={<VoiceAgentsPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/services" element={<Navigate to="/services/web-development" replace />} />
          
          {/* Individual Industry Pages */}
          <Route path="/industries/:slug" element={<IndustryDetailPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/industries" element={<Navigate to="/industries/healthcare" replace />} />

          <Route path="/about" element={<AboutPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/blog" element={<BlogPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenContact={() => setContactModalOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/voice-agents" element={<Navigate to="/services/voice-agents" replace />} />
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
      <BackToTop />
      {/* ChatBot disabled as requested */}
    </BrowserRouter>
  );
}

