import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Mail, Globe, Shield, FileText } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3500);
    }
  };

  return (
    <footer 
      className="footer" 
      role="contentinfo" 
      style={{ 
        background: '#080607', 
        borderTop: '1px solid #1a1e24', 
        color: '#ffffff', 
        padding: '5rem 0 2.5rem' 
      }}
    >
      <div className="container">
        
        {/* Top Newsletter / Executive Briefing Strip */}
        <div 
          style={{ 
            paddingBottom: '3rem', 
            marginBottom: '3.5rem', 
            borderBottom: '1px solid #1a1e24', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '2rem' 
          }}
        >
          <div style={{ maxWidth: '520px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#54CFB0' }}>
              EXECUTIVE BRIEFING
            </span>
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 700, marginTop: '0.35rem', letterSpacing: '-0.02em' }}>
              Subscribe to MaxR Perspectives
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.925rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
              Periodic analysis on enterprise technology, digital architecture, process automation, and business scalability.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.65rem', width: '100%', maxWidth: '440px' }}>
            {subscribed ? (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  background: 'rgba(84, 207, 176, 0.12)', 
                  border: '1px solid #54CFB0', 
                  color: '#54CFB0', 
                  padding: '0.75rem 1.25rem', 
                  borderRadius: '6px', 
                  fontSize: '0.875rem', 
                  width: '100%', 
                  fontWeight: 600 
                }}
              >
                <Check size={16} /> Subscribed to MaxR Perspectives
              </div>
            ) : (
              <>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1.15rem', 
                      borderRadius: '6px', 
                      background: '#121417', 
                      border: '1px solid #282d34', 
                      color: '#ffffff', 
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#54CFB0'}
                    onBlur={(e) => e.target.style.borderColor = '#282d34'}
                  />
                </div>
                <button
                  type="submit"
                  style={{ 
                    background: '#54CFB0', 
                    color: '#080607', 
                    padding: '0.75rem 1.4rem', 
                    borderRadius: '6px', 
                    border: 'none', 
                    fontWeight: 700, 
                    fontSize: '0.875rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    cursor: 'pointer', 
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* MNC Directory Grid (Organized into: Brand | What We Do | Industries | Company | Contact) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem', 
            marginBottom: '4rem' 
          }}
        >
          {/* Column 1: Brand & International Overview */}
          <div style={{ maxWidth: '320px' }}>
            <Link 
              to="/" 
              style={{ display: 'inline-block', marginBottom: '1.25rem', textDecoration: 'none' }}
              title="MaxR Technologies"
            >
              <img 
                src="/assets/maxr-logo-white.png" 
                alt="MaxR Technologies" 
                style={{ height: '34px', width: 'auto' }} 
              />
            </Link>

            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              International technology and business solutions company. Delivering strategic consulting, digital platforms, intelligent automation, and sustainable commercial growth.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#54CFB0" />
                <a href="mailto:contact@maxr.ae" style={{ color: '#cbd5e1', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                  contact@maxr.ae
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={15} color="#54CFB0" />
                <span>Global Solutions & Technology Consulting</span>
              </div>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '1.25rem' }}>
              What We Do
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Business Consulting</Link>
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Digital Solutions & Web</Link>
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Mobile Applications</Link>
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Automation & Integrations</Link>
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>AI & Process Automation</Link>
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Digital Growth & Performance</Link>
            </div>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Industries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <Link to="/industries" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Healthcare & Life Sciences</Link>
              <Link to="/industries" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Real Estate & Property</Link>
              <Link to="/industries" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Retail & E-Commerce</Link>
              <Link to="/industries" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Finance & Banking</Link>
              <Link to="/industries" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Logistics & Supply Chain</Link>
              <Link to="/industries" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Professional Services</Link>
            </div>
          </div>

          {/* Column 4: Company & Insights */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Who We Are</Link>
              <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Leadership & Team</Link>
              <Link to="/case-studies" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Client Case Studies</Link>
              <Link to="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Insights & Articles</Link>
              <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div 
          style={{ 
            borderTop: '1px solid #1a1e24', 
            paddingTop: '2rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '1.25rem', 
            fontSize: '0.825rem', 
            color: '#64748b' 
          }}
        >
          <div>
            <p>© 2025 MaxR Technology. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Terms of Use</Link>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Security & Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
