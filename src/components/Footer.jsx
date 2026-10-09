import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUp,
  Check, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram 
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeLocation, setActiveLocation] = useState('dubai');

  const locations = {
    dubai: {
      name: 'Dubai',
      office: 'Office #1812',
      building: 'Grosvenor Business Tower, Barsha Heights (Tecom)',
      city: 'Dubai, United Arab Emirates',
      phone: '+971 4 564 8887',
      email: 'contact@maxr.ae'
    },
    riyadh: {
      name: 'Riyadh',
      office: 'Floor 9, Olaya Towers',
      building: 'King Fahd Road, Al Olaya District',
      city: 'Riyadh, Kingdom of Saudi Arabia',
      phone: '+966 11 456 7890',
      email: 'saudi@maxr.ae'
    },
    abudhabi: {
      name: 'Abu Dhabi',
      office: 'Office #1402',
      building: 'Al Khatem Tower, ADGM Square',
      city: 'Abu Dhabi, United Arab Emirates',
      phone: '+971 2 612 3456',
      email: 'ad@maxr.ae'
    },
    india: {
      name: 'India',
      office: 'MaxR Tech Hub',
      building: 'IT Corridor, Rajiv Gandhi Salai (OMR)',
      city: 'Chennai, Tamil Nadu, India',
      phone: '+91 44 2456 7890',
      email: 'india@maxr.ae'
    }
  };

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
        padding: '4.5rem 0 2.5rem' 
      }}
    >
      <div className="container">
        
        {/* ── 1. EXECUTIVE BRIEFING (High-Contrast Premium Dark Section) ── */}
        <div className="executive-briefing-card">
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <div style={{ maxWidth: '540px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.45rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                  EXECUTIVE BRIEFING
                </span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-0.025em' }}>
                Subscribe to MaxR Perspectives
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.925rem', margin: 0, lineHeight: 1.55 }}>
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
                    background: 'rgba(84, 207, 176, 0.15)', 
                    border: '1px solid #54CFB0', 
                    color: '#54CFB0', 
                    padding: '0.85rem 1.25rem', 
                    borderRadius: '8px', 
                    fontSize: '0.875rem', 
                    width: '100%', 
                    fontWeight: 700 
                  }}
                >
                  <Check size={18} color="#54CFB0" /> Subscribed to MaxR Perspectives
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
                        padding: '0.85rem 1.15rem', 
                        borderRadius: '8px', 
                        background: 'rgba(255, 255, 255, 0.08)', 
                        border: '1px solid rgba(255, 255, 255, 0.18)', 
                        color: '#FFFFFF', 
                        fontSize: '0.875rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        backdropFilter: 'blur(8px)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#54CFB0'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)'}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ 
                      background: '#54CFB0', 
                      color: '#080607', 
                      padding: '0.85rem 1.5rem', 
                      borderRadius: '8px', 
                      border: 'none', 
                      fontWeight: 750, 
                      fontSize: '0.875rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      cursor: 'pointer', 
                      whiteSpace: 'nowrap',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 4px 14px rgba(84, 207, 176, 0.25)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.color = '#080607';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#54CFB0';
                      e.currentTarget.style.color = '#080607';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={15} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* ── 2. EDITORIAL DIRECTORY (Locations + What We Do + Badges) ── */}
        <div className="footer-edirect-layout">
          
          {/* Column 1: Brand Logo, Location Selector, Address & Socials */}
          <div>
            <Link 
              to="/" 
              style={{ display: 'inline-block', marginBottom: '1.75rem', textDecoration: 'none' }}
              title="MaxR Technology"
            >
              <img 
                src="/assets/maxr-logo.png" 
                alt="maxr." 
                style={{ height: '36px', width: 'auto' }} 
              />
            </Link>

            {/* Location Switcher & Address */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
              {/* Location tabs with mint ring/dot indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '110px' }}>
                {Object.keys(locations).map((locKey) => {
                  const loc = locations[locKey];
                  const isActive = activeLocation === locKey;
                  return (
                    <button
                      key={locKey}
                      type="button"
                      className={`footer-loc-item ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveLocation(locKey)}
                    >
                      <span>{loc.name}</span>
                      <span className="footer-loc-indicator">
                        <span className="footer-loc-dot" />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Address details */}
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55 }}>
                <p style={{ margin: 0, fontWeight: 750, color: '#080607' }}>
                  {locations[activeLocation].office}
                </p>
                <p style={{ margin: 0 }}>
                  {locations[activeLocation].building}
                </p>
                <p style={{ margin: 0 }}>
                  {locations[activeLocation].city}
                </p>
                <p style={{ margin: '8px 0 0 0' }}>
                  <span style={{ fontWeight: 600 }}>T.</span>{' '}
                  <a href={`tel:${locations[activeLocation].phone.replace(/\s+/g, '')}`} style={{ color: '#080607', textDecoration: 'none' }}>
                    {locations[activeLocation].phone}
                  </a>
                </p>
                <p style={{ margin: '2px 0 0 0' }}>
                  <span style={{ fontWeight: 600 }}>E.</span>{' '}
                  <a href={`mailto:${locations[activeLocation].email}`} style={{ color: '#080607', textDecoration: 'none' }}>
                    {locations[activeLocation].email}
                  </a>
                </p>
              </div>
            </div>

            {/* Social Icons row (Strictly NO customer reviews or Google reviews) */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: What We Do (Editorial 2-Column Links) */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#080607', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
              What We Do
            </h3>
            
            <div className="footer-whatwedo-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <Link to="/services" className="footer-whatwedo-link">WEBSITE DESIGN</Link>
                <Link to="/services" className="footer-whatwedo-link">MOBILE APPS</Link>
                <Link to="/services" className="footer-whatwedo-link">GRAPHIC DESIGN</Link>
                <Link to="/services" className="footer-whatwedo-link">SOCIAL MEDIA</Link>
                <Link to="/services" className="footer-whatwedo-link">SEO</Link>
                <Link to="/services" className="footer-whatwedo-link">PPC</Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <Link to="/services" className="footer-whatwedo-link">BRANDING</Link>
                <Link to="/services" className="footer-whatwedo-link">E COMMERCE</Link>
                <Link to="/services" className="footer-whatwedo-link">WEB APPLICATIONS</Link>
                <Link to="/services" className="footer-whatwedo-link">AI & AUTOMATION</Link>
                <Link to="/blog" className="footer-whatwedo-link">BLOG</Link>
                <Link to="/contact" className="footer-whatwedo-link">CONTACT</Link>
              </div>
            </div>
          </div>

          {/* Column 3: Quality Badges & Certifications (No review widgets) */}
          <div className="footer-badge-box">
            {/* Clutch Top Web Designers Badge */}
            <div 
              style={{
                width: '135px',
                background: '#0F172A',
                borderRadius: '8px',
                padding: '12px 10px',
                textAlign: 'center',
                color: '#FFFFFF',
                border: '1.5px solid #334155',
                boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.08em', color: '#94A3B8', textTransform: 'uppercase' }}>
                TOP WEB DESIGNERS
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF', margin: '4px 0 2px' }}>
                Clutch
              </div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#54CFB0' }}>
                UAE • 2024
              </div>
            </div>

            {/* The Network Top Agencies Badge */}
            <div 
              style={{
                width: '135px',
                background: '#080607',
                borderRadius: '8px',
                padding: '12px 10px',
                textAlign: 'center',
                color: '#FFFFFF',
                border: '1.5px solid rgba(84, 207, 176, 0.45)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.05em', color: '#94A3B8', textTransform: 'uppercase' }}>
                TOP CREATIVE AGENCIES
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#54CFB0', margin: '4px 0 2px' }}>
                thenetwork
              </div>
              <div style={{ fontSize: '0.62rem', fontWeight: 600, color: '#CBD5E1' }}>
                GLOBAL 2024
              </div>
            </div>

            {/* Google Partner Premier Badge */}
            <div 
              style={{
                width: '135px',
                background: '#FFFFFF',
                borderRadius: '8px',
                padding: '12px 10px',
                textAlign: 'center',
                border: '1.5px solid #E1E8E5',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1E293B' }}>Partner</span>
              </div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#475569', background: '#F1F5F9', borderRadius: '4px', padding: '2px 4px', marginTop: '4px' }}>
                PREMIER 2024
              </div>
            </div>

          </div>

        </div>

        {/* ── 3. BOTTOM LEGAL BAR & SCROLL-TO-TOP ── */}
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
            <p style={{ margin: 0 }}>© 2026, All rights reserved | MaxR Technology</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Tech Support</Link>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Privacy Policy</Link>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Cookies Policy</Link>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Terms & Conditions</Link>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Sitemap</Link>
          </div>

          {/* Back to top scroll button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1.5px solid #E1E8E5',
              color: '#080607',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#54CFB0';
              e.currentTarget.style.background = '#54CFB0';
              e.currentTarget.style.color = '#080607';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E1E8E5';
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#080607';
            }}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
