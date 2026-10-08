import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Mail, Globe } from 'lucide-react';

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
        background: '#FFFFFF', 
        borderTop: '1px solid #E1E8E5', 
        color: '#080607', 
        padding: '5rem 0 2.5rem' 
      }}
    >
      <div className="container">
        
        {/* Top Executive Briefing Bar (Clean White Styling) */}
        <div 
          style={{ 
            paddingBottom: '2.5rem', 
            marginBottom: '3.5rem', 
            borderBottom: '1px solid #E1E8E5', 
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
            <h3 style={{ color: '#080607', fontSize: '1.35rem', fontWeight: 800, marginTop: '0.35rem', letterSpacing: '-0.02em' }}>
              Subscribe to MaxR Perspectives
            </h3>
            <p style={{ color: '#3F5565', fontSize: '0.925rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
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
                  color: '#080607', 
                  padding: '0.75rem 1.25rem', 
                  borderRadius: '6px', 
                  fontSize: '0.875rem', 
                  width: '100%', 
                  fontWeight: 600 
                }}
              >
                <Check size={16} color="#54CFB0" /> Subscribed to MaxR Perspectives
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
                      background: '#F5F8F7', 
                      border: '1px solid #E1E8E5', 
                      color: '#080607', 
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#54CFB0'}
                    onBlur={(e) => e.target.style.borderColor = '#E1E8E5'}
                  />
                </div>
                <button
                  type="submit"
                  style={{ 
                    background: '#080607', 
                    color: '#FFFFFF', 
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
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#54CFB0';
                    e.currentTarget.style.color = '#080607';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#080607';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Clean Directory Columns */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem', 
            marginBottom: '4rem' 
          }}
        >
          {/* Column 1: Brand & Overview */}
          <div style={{ maxWidth: '320px' }}>
            <Link 
              to="/" 
              style={{ display: 'inline-block', marginBottom: '1.25rem', textDecoration: 'none' }}
              title="MaxR Technologies"
            >
              <img 
                src="/assets/maxr-logo.png" 
                alt="maxr." 
                style={{ height: '34px', width: 'auto' }} 
              />
            </Link>

            <p style={{ color: '#3F5565', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              International technology and business solutions company. Delivering strategic consulting, digital platforms, intelligent automation, and sustainable commercial growth.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#080607' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#54CFB0" />
                <a href="mailto:contact@maxr.ae" style={{ color: '#080607', textDecoration: 'none', fontWeight: 600 }}>
                  contact@maxr.ae
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={15} color="#54CFB0" />
                <span style={{ color: '#3F5565' }}>Global Solutions & Technology Consulting</span>
              </div>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#080607', marginBottom: '1.25rem' }}>
              What We Do
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <Link to="/services" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Web Development</Link>
              <Link to="/services" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>App Development</Link>
              <Link to="/services" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Software Development</Link>
              <Link to="/services" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Digital Marketing</Link>
              <Link to="/services" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>AI & Automation</Link>
              <Link to="/services" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Cloud & Data BI</Link>
            </div>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#080607', marginBottom: '1.25rem' }}>
              Industries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <Link to="/industries" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Healthcare</Link>
              <Link to="/industries" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Real Estate</Link>
              <Link to="/industries" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>E-Commerce</Link>
              <Link to="/industries" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Finance & Banking</Link>
              <Link to="/industries" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Education & Hospitality</Link>
              <Link to="/industries" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Technology & Startups</Link>
            </div>
          </div>

          {/* Column 4: Company & Insights */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#080607', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <Link to="/about" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>About Us</Link>
              <Link to="/blog" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Insights & Articles</Link>
              <Link to="/contact" style={{ color: '#3F5565', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#3F5565'}>Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div 
          style={{ 
            borderTop: '1px solid #E1E8E5', 
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
            <p style={{ margin: 0 }}>© 2026 MaxR. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
