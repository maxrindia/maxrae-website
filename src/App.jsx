import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';

// Dedicated Pages matching maxr.io
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import IndustriesPage from './pages/IndustriesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import { MessageSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync with URL Hash on load and change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (['home', 'services', 'industries', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <ServicesPage 
            onOpenContact={() => setContactModalOpen(true)} 
            onNavigate={navigateTo} 
          />
        );
      case 'industries':
        return (
          <IndustriesPage 
            onOpenContact={() => setContactModalOpen(true)} 
          />
        );
      case 'about':
        return (
          <AboutPage 
            onOpenContact={() => setContactModalOpen(true)} 
          />
        );
      case 'contact':
        return (
          <ContactPage />
        );
      case 'home':
      default:
        return (
          <HomePage 
            onNavigate={navigateTo} 
            onOpenContact={() => setContactModalOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* ── Main Sticky Header with Official Logo & Nav ── */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* ── Main Page Content ── */}
      <main id="main" style={{ flex: 1 }}>
        {renderCurrentPage()}
      </main>

      {/* ── Global Footer ── */}
      <Footer onNavigate={navigateTo} />

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
