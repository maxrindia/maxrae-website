import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
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

  // ── Authentic Official Colorful Social Accounts (Request 3) ──
  const socialChannels = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/maxr-technology",
      bg: "#0A66C2",
      color: "#FFFFFF",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/maxr.ae",
      bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      color: "#FFFFFF",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/maxr.ae",
      bg: "#1877F2",
      color: "#FFFFFF",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/97145648887",
      bg: "#25D366",
      color: "#FFFFFF",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@maxr-technology",
      bg: "#FF0000",
      color: "#FFFFFF",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/maxr_ae",
      bg: "#080607",
      color: "#FFFFFF",
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

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

        {/* ── EDITORIAL DIRECTORY (Locations + Real Colorful Social Accounts + Badges) ── */}
        <div className="footer-edirect-layout">
          
          {/* Column 1: Brand Logo, Location Selector & Selected Office */}
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
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
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
          </div>

          {/* Column 2: WHAT WE DO (Centered in Directory) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              fontWeight: 800, 
              color: '#080607', 
              letterSpacing: '-0.02em', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '14px', height: '2px', background: '#54CFB0' }} />
              <span>What We Do</span>
            </h3>

            {/* Structured 2-Column Services Links */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px 24px' 
              }}
            >
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
                    fontWeight: 600,
                    color: '#334155',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00bba7';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#334155';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ color: '#54CFB0', fontSize: '0.75rem' }}>›</span>
                  <span>{srv.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social Media Logos Only on Right Corner (No Words/Text per Request 2) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              fontWeight: 800, 
              color: '#080607', 
              letterSpacing: '-0.02em', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '14px', height: '2px', background: '#54CFB0' }} />
              <span>Connect With MaxR</span>
            </h3>

            {/* Social Logos Only (Exact Real Brand Colorful Icons) */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px',
                alignItems: 'center'
              }}
            >
              {socialChannels.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: item.bg,
                    color: item.color,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.22s ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.06)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.12)';
                  }}
                >
                  {item.iconSvg}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── BOTTOM LEGAL BAR & SCROLL-TO-TOP ── */}
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
            <Link to="/careers" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#54CFB0'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Careers</Link>
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
