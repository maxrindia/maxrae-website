import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      if (maxScroll > 0 && currentScrollY > maxScroll) return;

      // When near top (<= 30px), header stays normal
      if (currentScrollY <= 30) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Scrolling DOWN -> Slide UP off screen
        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsVisible(false);
        }
        // Scrolling UP -> Slide back down into view
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "What We Do", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Who We Are", path: "/about" },
    { label: "Blog / Insights", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* ── Enterprise White Header (MNC Style, Centered Nav, Smooth Scroll Response) ── */}
      <header 
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
            transition: 'height 0.25s ease'
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

          {/* Center: Navigation Links (MNC Centered Layout) */}
          <nav 
            className="nav-primary" 
            id="navbar-main" 
            aria-label="Primary navigation" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2.25rem',
              margin: '0 auto'
            }}
          >
            {navLinks.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
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
                        bottom: 0,
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

          {/* Right: Language Indicator + Primary CTA */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexShrink: 0 }}>
            {/* Language Pill */}
            <span 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: '#4a5568', 
                padding: '4px 8px',
                borderRadius: '4px',
                background: '#F5F8F7',
                border: '1px solid #E5EAE8',
                letterSpacing: '0.04em'
              }}
              title="Language: English"
            >
              EN
            </span>

            {/* Primary CTA (MNC Enterprise Styling) */}
            <Link 
              to="/contact" 
              className="btn-primary"
              style={{ 
                background: '#080607', 
                color: '#ffffff', 
                fontWeight: 600, 
                padding: '0.65rem 1.35rem', 
                fontSize: '0.875rem',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#54CFB0';
                e.currentTarget.style.color = '#080607';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#080607';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={14} />
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
            <Link 
              className="mobile-nav-link" 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: currentPath === '/' ? '#54CFB0' : '#080607', 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                padding: '10px 0',
                borderBottom: '1px solid #F5F8F7'
              }}
            >
              Home
            </Link>
            {navLinks.map((item) => (
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

          <div style={{ padding: '1.5rem', borderTop: '1px solid #E5EAE8' }}>
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                width: '100%', 
                justifyContent: 'center', 
                background: '#080607', 
                color: '#ffffff', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '0.85rem', 
                borderRadius: '6px', 
                textDecoration: 'none' 
              }}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
