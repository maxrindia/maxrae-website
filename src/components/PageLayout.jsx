import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ContactModal from './ContactModal.jsx';
import { MessageSquare } from 'lucide-react';
import '../index.css';

export default function PageLayout({ currentPage, children }) {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* ── Main Sticky Header with Official Logo & Nav ── */}
      <Header 
        currentPage={currentPage}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* ── Main Page Content ── */}
      <main id="main" style={{ flex: 1 }}>
        {typeof children === 'function' ? children({ onOpenContact: () => setContactModalOpen(true) }) : children}
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
