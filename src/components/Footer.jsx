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

          {/* Column 2: Exact Official Real Colorful Social Media Accounts (Request 3) */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#080607', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Connect & Follow MaxR
            </h3>

            {/* Social Grid with Official Authentic Colorful Cards */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px' 
              }}
            >
              {socialChannels.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #E1E8E5',
                    textDecoration: 'none',
                    color: '#080607',
                    boxShadow: '0 2px 8px rgba(8, 6, 7, 0.04)',
                    transition: 'all 0.22s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = '#54CFB0';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(8, 6, 7, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E1E8E5';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(8, 6, 7, 0.04)';
                  }}
                >
                  <div 
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '8px', 
                      background: item.bg, 
                      color: item.color, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                  >
                    {item.iconSvg}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', color: '#080607' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                      Official Channel
                    </span>
                  </div>
                </a>
              ))}
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
