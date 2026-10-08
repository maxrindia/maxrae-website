import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

      // When near top (<= 40px), always stay visible
      if (currentScrollY <= 40) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Scrolling DOWN -> Slide UP off screen to hide
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
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* ── Main Sticky Header (White with Transparency & Smooth Scroll Hide) ── */}
      <header 
        className={`header ${isScrolled ? 'scrolled' : ''}`} 
        id="site-header" 
        role="banner" 
        style={{ 
          background: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)', 
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, box-shadow 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          
          {/* Logo (Official maxr. with Teal Dot) */}
          <Link 
            to="/" 
            className="logo-container" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            title="MaxR Home"
          >
            <img 
              src="/assets/maxr-logo.png" 
              alt="maxr." 
              style={{ height: '36px', width: 'auto', display: 'block' }} 
            />
          </Link>

          {/* Primary Navigation: Clean text only, no icons or clunky popups */}
          <nav className="nav-primary" id="navbar-main" aria-label="Primary navigation" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#00bba7' : '#0f172a',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.4rem 0.2rem',
                    transition: 'color 0.2s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#00bba7';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#0f172a';
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Clean letter text only (EN) + CTA button */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
            {/* Language Text Indicator (Letter only, clean) */}
            <span 
              style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                color: '#475569', 
                padding: '4px 8px',
                borderRadius: '6px',
                background: 'rgba(0, 0, 0, 0.04)',
                letterSpacing: '0.04em'
              }}
              title="Language: English"
            >
              EN
            </span>

            {/* CTA Button Far Right */}
            <Link 
              to="/contact" 
              className="btn-primary"
              style={{ 
                background: '#00bba7', 
                color: '#040811', 
                fontWeight: 700, 
                padding: '0.55rem 1.25rem', 
                fontSize: '0.875rem',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(0, 187, 167, 0.25)',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0d9488';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#00bba7';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Book a Call</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button 
              className="mobile-toggle" 
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#0f172a', display: 'none', background: 'none', border: 'none', padding: '6px', cursor: 'pointer' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" style={{ background: '#070d1a', borderLeft: '1px solid rgba(0,187,167,0.3)' }}>
          <div className="mobile-drawer-header">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <img src="/assets/maxr-logo-white.png" alt="MaxR" style={{ height: '36px', width: 'auto' }} />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ color: '#fff', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1, overflowY: 'auto' }}>
            <Link className="mobile-nav-link" to="/" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath === '/' ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              Home
            </Link>
            {navLinks.map((item) => (
              <Link 
                key={item.path}
                className="mobile-nav-link" 
                to={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: 'none', color: currentPath.startsWith(item.path) ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', background: '#00bba7', color: '#040811', fontWeight: 700, display: 'flex', alignItems: 'center', padding: '0.75rem', borderRadius: '10px', textDecoration: 'none' }}
            >
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
