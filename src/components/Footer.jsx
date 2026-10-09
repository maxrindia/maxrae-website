import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe,
  ChevronDown,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const [activeLocation, setActiveLocation] = useState('dubai');

  const locations = {
    dubai: {
      name: 'Dubai',
      badge: 'HQ • UAE',
      office: 'Office #1812',
      building: 'Grosvenor Business Tower, Barsha Heights (Tecom)',
      city: 'Dubai, United Arab Emirates',
      phone: '+971 4 564 8887',
      email: 'contact@maxr.ae'
    },
    chennai: {
      name: 'Chennai',
      badge: 'Tech Hub • India',
      office: 'MaxR Consultancy Services',
      building: '101, 2/29, Cenotaph 1st St, Alwarpet',
      city: 'Chennai, Tamil Nadu 600018, India',
      phone: '+91 44 2435 6789',
      email: 'india@maxr.ae'
    }
  };

  // ── Circular Outline Social Channels (Matching Enterprise Pattern) ──
  const socialChannels = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/maxr.ae",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/maxr_ae",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/maxr-technology",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/maxr.ae",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@maxr-technology",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@maxr.ae",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24C5.467 24 0 18.533 0 11.814S5.467-.372 12.186-.372c6.719 0 12.186 5.467 12.186 12.186s-5.467 12.186-12.186 12.186zm0-22.186c-5.62 0-10.186 4.566-10.186 10.186s4.566 10.186 10.186 10.186 10.186-4.566 10.186-10.186-4.566-10.186-10.186-10.186zm4.846 13.918c-.378.232-.862.336-1.442.308-.857-.042-1.635-.353-2.316-.927-.584-.492-1.045-1.127-1.371-1.89-.166-.388-.3-.805-.399-1.241-.453.308-.87.697-1.238 1.157-.456.57-.751 1.206-.879 1.892-.128.685-.043 1.348.252 1.97.359.756.969 1.328 1.815 1.701.846.374 1.823.473 2.903.294 1.057-.175 1.989-.645 2.769-1.398l1.397 1.397c-1.066 1.066-2.378 1.737-3.905 1.99-1.527.253-2.955.093-4.24-.475-1.285-.568-2.227-1.455-2.802-2.636-.452-.927-.586-1.936-.4-3.001.186-1.065.656-2.036 1.397-2.885.589-.675 1.282-1.235 2.062-1.666.07-.468.175-.921.314-1.35.378-1.168.995-2.083 1.834-2.721.839-.638 1.859-.938 3.036-.893 1.177.045 2.164.444 2.936 1.186.772.742 1.229 1.71 1.359 2.879.13 1.169-.071 2.455-.599 3.824l-1.879-.724c.421-1.092.571-2.069.45-2.905-.121-.836-.462-1.492-.999-1.954-.537-.462-1.208-.686-1.997-.668-.789.018-1.488.291-2.08.81-.592.519-1.025 1.259-1.288 2.203-.099.355-.175.728-.228 1.112.934-.08 1.889-.043 2.842.112 1.231.2 2.274.72 3.102 1.549.828.829 1.272 1.849 1.321 3.032.049 1.183-.301 2.168-1.042 2.928zm-3.673-3.047c-.571-.093-1.144-.094-1.706-.002.08.318.188.621.322.903.228.479.524.856.88 1.121.356.265.753.377 1.179.333.33-.034.618-.158.857-.369.239-.211.378-.49.413-.827.035-.337-.076-.669-.331-.986-.255-.317-.655-.526-1.184-.619z"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
      className="footer" 
      role="contentinfo" 
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FBFA 100%)', 
        borderTop: '1px solid #E2E8F0', 
        color: '#080607', 
        padding: '5rem 0 4.5rem' 
      }}
    >
      <div className="container">

        {/* ── EDITORIAL DIRECTORY (Locations + What We Do + Company) ── */}
        <div className="footer-edirect-layout">
          
          {/* Column 1: Brand Logo, Location Selector & Selected Office */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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

            {/* Location Switcher & Address (Classic Style with Dubai & Chennai) */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
              {/* Location tabs with mint ring/dot indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '95px' }}>
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
                  <a 
                    href={`tel:${locations[activeLocation].phone.replace(/\s+/g, '')}`} 
                    style={{ color: '#080607', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#080607'}
                  >
                    {locations[activeLocation].phone}
                  </a>
                </p>
                <p style={{ margin: '2px 0 0 0' }}>
                  <span style={{ fontWeight: 600 }}>E.</span>{' '}
                  <a 
                    href={`mailto:${locations[activeLocation].email}`} 
                    style={{ color: '#080607', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#080607'}
                  >
                    {locations[activeLocation].email}
                  </a>
                </p>
              </div>
            </div>

            {/* Global Delivery Status Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '0.75rem', 
              color: '#008779', 
              background: 'rgba(0, 187, 167, 0.08)', 
              padding: '4px 10px', 
              borderRadius: '20px', 
              fontWeight: 650, 
              width: 'fit-content' 
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00bba7' }} />
              <span>UAE & India • Global Delivery</span>
            </div>
          </div>

          {/* Column 2: WHAT WE DO (Clean Enterprise Typography) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontSize: '1.05rem', 
              fontWeight: 800, 
              color: '#0F172A', 
              letterSpacing: '-0.02em', 
              marginBottom: '1.5rem'
            }}>
              What We Do
            </h3>

            {/* Clean 2-Column Services Links */}
            <div className="footer-services-grid">
              {[
                { title: "Voice & AI Agents", path: "/voice-agents" },
                { title: "Web Development", path: "/services" },
                { title: "Mobile App Engineering", path: "/services" },
                { title: "Workflow Automation", path: "/services" },
                { title: "SaaS Custom Architecture", path: "/services" },
                { title: "Cloud & DevOps Scaling", path: "/services" },
                { title: "CRM & Lead Solutions", path: "/services" },
                { title: "Digital Marketing & SEO", path: "/services" },
                { title: "Data & BI Analytics", path: "/services" },
                { title: "Digital Transformation", path: "/services" }
              ].map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  to={srv.path}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00bba7';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {srv.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: COMPANY */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontSize: '1.05rem', 
              fontWeight: 800, 
              color: '#0F172A', 
              letterSpacing: '-0.02em', 
              marginBottom: '1.5rem'
            }}>
              Company
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {[
                { title: "About MaxR", path: "/about" },
                { title: "Case Studies & Work", path: "/case-studies" },
                { title: "Voice AI Agents", path: "/voice-agents" },
                { title: "Engineering Insights", path: "/blog" },
                { title: "Industries We Serve", path: "/industries" },
                { title: "Careers & Culture", path: "/careers" },
                { title: "Contact Our Team", path: "/contact" }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00bba7';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ── CRISP DIVIDER LINE ── */}
        <div style={{ borderTop: '1px solid #E2E8F0', margin: '3.5rem 0 2.25rem' }} />

        {/* ═════════════════════════════════════════════════════════════════════
            ENTERPRISE PATTERN: Circular Outlines + Globe + Centered Legal & Cookie
            ═════════════════════════════════════════════ */}
        
        {/* Row 1: Centered Circular Social Icons + Globe ⌵ */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {socialChannels.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1.5px solid #0F172A',
                background: '#FFFFFF',
                color: '#0F172A',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.color = '#00bba7';
                e.currentTarget.style.background = 'rgba(0, 187, 167, 0.06)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#0F172A';
                e.currentTarget.style.color = '#0F172A';
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.icon}
            </a>
          ))}

          {/* Globe + Chevron Selector */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: '#0F172A',
              marginLeft: '6px',
              cursor: 'pointer',
              padding: '6px 8px',
              borderRadius: '6px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
            title="Global Region Selector"
          >
            <Globe size={18} />
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Row 2: Copyright & Inline Legal Links (Constrained width for clear spacing) */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 0.75rem' }}>
          <p style={{ margin: 0, fontSize: '0.825rem', color: '#475569', lineHeight: 1.75 }}>
            <span>Copyright © 2026 MaxR Technologies Limited</span>
            <span style={{ margin: '0 12px', color: '#94a3b8' }}>•</span>
            <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#475569'}>Contact Us</Link>
            <span style={{ margin: '0 6px', color: '#cbd5e1' }}>/</span>
            <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#475569'}>Disclaimer</Link>
            <span style={{ margin: '0 6px', color: '#cbd5e1' }}>/</span>
            <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#475569'}>Privacy Statement</Link>
            <span style={{ margin: '0 6px', color: '#cbd5e1' }}>/</span>
            <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#475569'}>Terms of use</Link>
            <span style={{ margin: '0 6px', color: '#cbd5e1' }}>/</span>
            <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#475569'}>Sitemap</Link>
            <span style={{ margin: '0 6px', color: '#cbd5e1' }}>/</span>
            <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#475569'}>Raise a Grievance</Link>
          </p>
        </div>

        {/* Row 3: Cookies Notice */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>
            We use cookies on our site. Please read more about{' '}
            <Link 
              to="/contact" 
              style={{ 
                color: '#008779', 
                textDecoration: 'none', 
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00bba7';
                e.target.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#008779';
                e.target.style.textDecoration = 'none';
              }}
            >
              cookies policy
            </Link>
            {' '}here.
          </p>
        </div>

        {/* Back to Top Arrow Trigger */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            title="Scroll to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#475569',
              fontSize: '0.78rem',
              fontWeight: 650,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00bba7';
              e.currentTarget.style.color = '#008779';
              e.currentTarget.style.background = 'rgba(0,187,167,0.06)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.color = '#475569';
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}

