import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [megamenuOpen, setMegamenuOpen] = useState(false);
  const megamenuRef = useRef(null);

  // Close megamenu on route change
  useEffect(() => {
    setMegamenuOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Click outside to close megamenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megamenuRef.current && !megamenuRef.current.contains(event.target)) {
        setMegamenuOpen(false);
      }
    };
    if (megamenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [megamenuOpen]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      if (maxScroll > 0 && currentScrollY > maxScroll) return;

      if (currentScrollY <= 30) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsVisible(false);
          setMegamenuOpen(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Nav Links Configuration (Request 7 & 8) ──
  // Home only shows when NOT on the homepage!
  const baseLinks = [
    { label: "What We Do", path: "/services", hasMegamenu: true },
    { label: "Industries", path: "/industries" },
    { label: "Who We Are", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Blog / Insights", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];

  const navLinks = currentPath === '/' 
    ? baseLinks 
    : [{ label: "Home", path: "/" }, ...baseLinks];

  return (
    <>
      {/* ── Sticky Header with MNC Centered Nav & Interactive Megamenu (Request 7, 8, 9) ── */}
      <header 
        ref={megamenuRef}
        className={`header ${isScrolled ? 'scrolled' : ''}`} 
        id="site-header" 
        role="banner" 
        style={{ 
          background: '#ffffff', 
          borderBottom: '1px solid #E5EAE8',
          boxShadow: isScrolled ? '0 2px 14px rgba(8, 6, 7, 0.06)' : 'none',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s ease, box-shadow 0.25s ease'
        }}
      >
        <div 
          className="container" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: isScrolled ? '64px' : '74px',
            transition: 'height 0.25s ease',
            position: 'relative'
          }}
        >
          {/* Left: MaxR Logo */}
          <Link 
            to="/" 
            className="logo-container" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            title="MaxR Technologies"
          >
            <img 
              src="/assets/maxr-logo.png" 
              alt="maxr." 
              style={{ height: '34px', width: 'auto', display: 'block' }} 
            />
          </Link>

          {/* Center: Navigation Links with Clickable Megamenu Trigger (Request 9) */}
          <nav 
            className="nav-primary" 
            id="navbar-main" 
            aria-label="Primary navigation" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem',
              margin: '0 auto'
            }}
          >
            {navLinks.map((item) => {
              const isActive = item.path === '/' 
                ? currentPath === '/' 
                : (currentPath === item.path || currentPath.startsWith(item.path));

              if (item.hasMegamenu) {
                return (
                  <div key={item.path} style={{ position: 'relative' }}>
                    <button
                      type="button"
                      onClick={() => setMegamenuOpen(!megamenuOpen)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: megamenuOpen || isActive ? '#080607' : '#2b3442',
                        fontWeight: megamenuOpen || isActive ? 700 : 500,
                        fontSize: '0.925rem',
                        letterSpacing: '-0.01em',
                        padding: '0.5rem 0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'color 0.2s ease',
                        fontFamily: 'inherit'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#54CFB0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = megamenuOpen || isActive ? '#080607' : '#2b3442';
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        size={14} 
                        style={{ 
                          transform: megamenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.25s ease' 
                        }} 
                      />
                    </button>
                    {(isActive || megamenuOpen) && (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: '-12px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: '#54CFB0'
                        }}
                      />
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#080607' : '#2b3442',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.925rem',
                    letterSpacing: '-0.01em',
                    padding: '0.5rem 0.2rem',
                    transition: 'color 0.2s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#54CFB0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? '#080607' : '#2b3442';
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '-12px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#54CFB0'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: World Logo + Message Logo */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
            {/* World Logo (Global Indicator) */}
            <div 
              style={{ 
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#F5F8F7',
                border: '1px solid #E5EAE8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3F5565',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Global Enterprise Solutions"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#54CFB0';
                e.currentTarget.style.color = '#54CFB0';
                e.currentTarget.style.background = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5EAE8';
                e.currentTarget.style.color = '#3F5565';
                e.currentTarget.style.background = '#F5F8F7';
              }}
            >
              <Globe size={18} strokeWidth={2} />
            </div>

            {/* Message Logo (Contact & Consultation) */}
            <Link 
              to="/contact" 
              title="Contact / Book a Consultation"
              aria-label="Contact MaxR"
              style={{ 
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#080607', 
                color: '#ffffff', 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(8, 6, 7, 0.12)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#54CFB0';
                e.currentTarget.style.color = '#080607';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#080607';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageSquare size={18} strokeWidth={2.2} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle" 
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ 
                color: '#080607', 
                display: 'none', 
                background: 'none', 
                border: 'none', 
                padding: '6px', 
                cursor: 'pointer' 
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* ── Megamenu Dropdown Panel (HCLTech MNC Reference Style - Request 9) ── */}
        {megamenuOpen && (
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#FFFFFF',
              borderBottom: '1px solid #E1E8E5',
              boxShadow: '0 16px 40px rgba(8, 6, 7, 0.12)',
              padding: '2.5rem 0',
              animation: 'slideDownNav 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 999
            }}
          >
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '3.5rem', alignItems: 'stretch' }}>
              
              {/* Left: 3 Categorized Services Columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                
                {/* Column 1: AI & Intelligent Systems */}
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0f766e', display: 'block', marginBottom: '1.25rem' }}>
                    AI & Automation
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {[
                      { title: "Voice & AI Agents", path: "/voice-agents" },
                      { title: "Workflow Automation", path: "/services" },
                      { title: "WhatsApp Lead Bots", path: "/services" },
                      { title: "Data & BI Analytics", path: "/services" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.path}
                        onClick={() => setMegamenuOpen(false)}
                        style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => e.target.style.color = '#54CFB0'}
                        onMouseLeave={(e) => e.target.style.color = '#334155'}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Digital Engineering */}
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#080607', display: 'block', marginBottom: '1.25rem' }}>
                    Digital Engineering
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {[
                      { title: "Web Development", path: "/services" },
                      { title: "Mobile App Engineering", path: "/services" },
                      { title: "SaaS Custom Architecture", path: "/services" },
                      { title: "Cloud & DevOps Scaling", path: "/services" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.path}
                        onClick={() => setMegamenuOpen(false)}
                        style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => e.target.style.color = '#54CFB0'}
                        onMouseLeave={(e) => e.target.style.color = '#334155'}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Commercial & Transformation */}
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#080607', display: 'block', marginBottom: '1.25rem' }}>
                    Commercial Growth
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {[
                      { title: "CRM & Lead Solutions", path: "/services" },
                      { title: "Digital Marketing & SEO", path: "/services" },
                      { title: "Headless E-Commerce", path: "/services" },
                      { title: "Digital Transformation", path: "/services" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.path}
                        onClick={() => setMegamenuOpen(false)}
                        style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => e.target.style.color = '#54CFB0'}
                        onMouseLeave={(e) => e.target.style.color = '#334155'}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: Featured Spotlight Card (Matching HCLTech Reference Style) */}
              <div 
                style={{ 
                  background: 'linear-gradient(135deg, #080607 0%, #172554 100%)',
                  borderRadius: '12px',
                  padding: '2rem',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(8, 6, 7, 0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: '#54CFB0', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    FEATURED SPOTLIGHT
                  </span>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, margin: '0 0 0.65rem 0' }}>
                    MaxR Engineering Platform
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55, margin: 0 }}>
                    Accelerating AI-led transformation, custom web architecture, and cloud workflows for fast-scaling enterprises.
                  </p>
                </div>

                <div style={{ position: 'relative', zIndex: 1, marginTop: '1.5rem' }}>
                  <Link
                    to="/services"
                    onClick={() => setMegamenuOpen(false)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#FFFFFF',
                      color: '#080607',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#54CFB0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* ── Mobile Navigation Drawer (Clean White MNC Style) ── */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer" 
          role="dialog" 
          aria-modal="true" 
          style={{ 
            background: '#ffffff', 
            borderLeft: '1px solid #E5EAE8',
            boxShadow: '-8px 0 30px rgba(0,0,0,0.1)'
          }}
        >
          <div className="mobile-drawer-header" style={{ borderBottom: '1px solid #E5EAE8', padding: '1.25rem' }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <img src="/assets/maxr-logo.png" alt="MaxR" style={{ height: '32px', width: 'auto' }} />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ color: '#080607', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
            {/* Show Home link on mobile ONLY if not on homepage */}
            {currentPath !== '/' && (
              <Link 
                className="mobile-nav-link" 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  textDecoration: 'none', 
                  color: '#080607', 
                  fontSize: '1.05rem', 
                  fontWeight: 600, 
                  padding: '10px 0',
                  borderBottom: '1px solid #F5F8F7'
                }}
              >
                Home
              </Link>
            )}
            {baseLinks.map((item) => (
              <Link 
                key={item.path}
                className="mobile-nav-link" 
                to={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  textDecoration: 'none', 
                  color: currentPath.startsWith(item.path) ? '#54CFB0' : '#080607', 
                  fontSize: '1.05rem', 
                  fontWeight: 600, 
                  padding: '10px 0',
                  borderBottom: '1px solid #F5F8F7'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #E5EAE8', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#F5F8F7',
                border: '1px solid #E5EAE8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3F5565',
                flexShrink: 0
              }}
              title="Global Enterprise"
            >
              <Globe size={18} strokeWidth={2} />
            </div>

            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                flex: 1, 
                justifyContent: 'center', 
                background: '#080607', 
                color: '#ffffff', 
                fontWeight: 700, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                height: '42px', 
                borderRadius: '8px', 
                textDecoration: 'none',
                fontSize: '0.9rem' 
              }}
            >
              <MessageSquare size={17} strokeWidth={2.2} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
