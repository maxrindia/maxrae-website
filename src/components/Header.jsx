import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  Stethoscope,
  Briefcase,
  ShoppingBag,
  Building2,
  TrendingUp,
  Truck,
  GraduationCap,
  Utensils
} from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Hover & Click Dropdown State ('services' | 'industries' | null)
  const [activeDropdown, setActiveDropdown] = useState(null);
  const leaveTimerRef = useRef(null);
  const headerContainerRef = useRef(null);

  const handleMouseEnter = (menuKey) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerContainerRef.current && !headerContainerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

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
          setActiveDropdown(null);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Nav Links Configuration ──
  // Home only shows when NOT on the homepage!
  const baseLinks = [
    { label: "What We Do", path: "/services", dropdownKey: "services" },
    { label: "Industries", path: "/industries", dropdownKey: "industries" },
    { label: "Who We Are", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" }
  ];

  const navLinks = currentPath === '/' 
    ? baseLinks 
    : [{ label: "Home", path: "/" }, ...baseLinks];

  return (
    <>
      {/* ── Sticky Header with MNC Centered Nav & Interactive Megamenu ── */}
      <header 
        ref={headerContainerRef}
        className={`header ${isScrolled ? 'scrolled' : ''}`} 
        id="site-header" 
        role="banner" 
        onMouseLeave={handleMouseLeave}
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

          {/* Center: Navigation Links with Hover Dropdown Trigger */}
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
              const isDropdownActive = activeDropdown === item.dropdownKey;

              if (item.dropdownKey) {
                return (
                  <div 
                    key={item.path} 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => handleMouseEnter(item.dropdownKey)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {currentPath === '/' ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(null);
                          const targetId = item.dropdownKey === 'services' ? 'services' : 'industries';
                          const el = document.getElementById(targetId);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: isDropdownActive || isActive ? '#080607' : '#2b3442',
                          fontWeight: isDropdownActive || isActive ? 700 : 500,
                          fontSize: '0.925rem',
                          letterSpacing: '-0.01em',
                          padding: '0.5rem 0.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          fontFamily: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#00bba7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = isDropdownActive || isActive ? '#080607' : '#2b3442';
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          style={{ 
                            transform: isDropdownActive ? 'rotate(180deg)' : 'rotate(0deg)', 
                            transition: 'transform 0.25s ease' 
                          }} 
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: isDropdownActive || isActive ? '#080607' : '#2b3442',
                          fontWeight: isDropdownActive || isActive ? 700 : 500,
                          fontSize: '0.925rem',
                          letterSpacing: '-0.01em',
                          padding: '0.5rem 0.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          fontFamily: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#00bba7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = isDropdownActive || isActive ? '#080607' : '#2b3442';
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          style={{ 
                            transform: isDropdownActive ? 'rotate(180deg)' : 'rotate(0deg)', 
                            transition: 'transform 0.25s ease' 
                          }} 
                        />
                      </Link>
                    )}
                    {(isActive || isDropdownActive) && (
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

                    {/* ── Anchored Clean Dropdown: "What We Do" (Names Only, Compact 3 Columns) ── */}
                    {isDropdownActive && item.dropdownKey === 'services' && (
                      <div
                        className="header-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 12px)',
                          left: '50%',
                          transform: 'translateX(-35%)',
                          width: '580px',
                          background: '#FFFFFF',
                          borderRadius: '12px',
                          border: '1px solid #E2E8F0',
                          boxShadow: '0 20px 45px rgba(8, 6, 7, 0.12)',
                          padding: '1.25rem 1.5rem',
                          zIndex: 9999
                        }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '0.5rem' }}>
                          {/* Col 1 */}
                          <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#00bba7', display: 'block', marginBottom: '10px' }}>
                              AI & Automation
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {[
                                { title: "Voice & AI Agents", path: "/services/voice-agents" },
                                { title: "AI & Automation", path: "/services/ai-automation" },
                                { title: "CRM & Speed-to-Lead", path: "/services/crm-lead-solutions" },
                                { title: "Data & BI Analytics", path: "/services/data-bi-analytics" }
                              ].map((s, idx) => (
                                <Link
                                  key={idx}
                                  to={s.path}
                                  onClick={() => setActiveDropdown(null)}
                                  style={{ fontSize: '0.875rem', color: '#1E293B', fontWeight: 600, textDecoration: 'none', transition: 'all 0.15s ease', padding: '3px 0' }}
                                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00bba7'; e.currentTarget.style.transform = 'translateX(2px)'; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.color = '#1E293B'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                  {s.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Col 2 */}
                          <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#080607', display: 'block', marginBottom: '10px' }}>
                              Digital Engineering
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {[
                                { title: "Web Development", path: "/services/web-development" },
                                { title: "Mobile App Engineering", path: "/services/app-development" },
                                { title: "SaaS Product Architecture", path: "/services/software-development" },
                                { title: "Cloud & Technology", path: "/services/cloud-technology" }
                              ].map((s, idx) => (
                                <Link
                                  key={idx}
                                  to={s.path}
                                  onClick={() => setActiveDropdown(null)}
                                  style={{ fontSize: '0.875rem', color: '#1E293B', fontWeight: 600, textDecoration: 'none', transition: 'all 0.15s ease', padding: '3px 0' }}
                                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00bba7'; e.currentTarget.style.transform = 'translateX(2px)'; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.color = '#1E293B'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                  {s.title}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Col 3 */}
                          <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#080607', display: 'block', marginBottom: '10px' }}>
                              Brand & Growth
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {[
                                { title: "Digital Marketing & SEO", path: "/services/digital-marketing" },
                                { title: "Social Media Strategy", path: "/services/social-media-management" },
                                { title: "UI/UX & Branding", path: "/services/ui-ux-branding" }
                              ].map((s, idx) => (
                                <Link
                                  key={idx}
                                  to={s.path}
                                  onClick={() => setActiveDropdown(null)}
                                  style={{ fontSize: '0.875rem', color: '#1E293B', fontWeight: 600, textDecoration: 'none', transition: 'all 0.15s ease', padding: '3px 0' }}
                                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00bba7'; e.currentTarget.style.transform = 'translateX(2px)'; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.color = '#1E293B'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                >
                                  {s.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Anchored Clean Dropdown: "Industries" (Names Only, Compact 2 Columns) ── */}
                    {isDropdownActive && item.dropdownKey === 'industries' && (
                      <div
                        className="header-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 12px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '450px',
                          background: '#FFFFFF',
                          borderRadius: '12px',
                          border: '1px solid #E2E8F0',
                          boxShadow: '0 20px 45px rgba(8, 6, 7, 0.12)',
                          padding: '1.25rem 1.5rem',
                          zIndex: 9999
                        }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 1.5rem' }}>
                          {[
                            { name: "Healthcare & Clinics", path: "/industries/healthcare", icon: <Stethoscope size={15} color="#00bba7" /> },
                            { name: "Professional Services", path: "/industries/professional-services", icon: <Briefcase size={15} color="#00bba7" /> },
                            { name: "Retail & E-Commerce", path: "/industries/ecommerce", icon: <ShoppingBag size={15} color="#00bba7" /> },
                            { name: "Real Estate & PropTech", path: "/industries/real-estate", icon: <Building2 size={15} color="#00bba7" /> },
                            { name: "FinTech & Banking", path: "/industries/finance", icon: <TrendingUp size={15} color="#00bba7" /> },
                            { name: "Education & EdTech", path: "/industries/education", icon: <GraduationCap size={15} color="#00bba7" /> },
                            { name: "Hospitality & Tourism", path: "/industries/hospitality", icon: <Utensils size={15} color="#00bba7" /> },
                            { name: "Technology & Startups", path: "/industries/technology", icon: <Truck size={15} color="#00bba7" /> }
                          ].map((ind, idx) => (
                            <Link
                              key={idx}
                              to={ind.path}
                              onClick={() => setActiveDropdown(null)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.875rem',
                                color: '#1E293B',
                                fontWeight: 600,
                                textDecoration: 'none',
                                padding: '4px 0',
                                transition: 'all 0.15s ease'
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.color = '#00bba7'; e.currentTarget.style.transform = 'translateX(2px)'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.color = '#1E293B'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                              {ind.icon}
                              <span>{ind.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
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
                    e.currentTarget.style.color = '#00bba7';
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

          {/* Right: Compact Animated Action Button & Mobile Toggle */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link 
              to="/contact" 
              className="nav-btn-compact"
              title="Let's Talk"
            >
              <span>Let's Talk</span>
              <ArrowRight size={13} />
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
            {baseLinks.map((item) => {
              if (currentPath === '/' && (item.dropdownKey === 'services' || item.dropdownKey === 'industries')) {
                return (
                  <button
                    key={item.path}
                    type="button"
                    className="mobile-nav-link"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      const targetId = item.dropdownKey === 'services' ? 'services' : 'industries';
                      const el = document.getElementById(targetId);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: '#080607',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      padding: '10px 0',
                      borderBottom: '1px solid #F5F8F7',
                      fontFamily: 'inherit'
                    }}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
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
              );
            })}
          </div>

          <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #E5EAE8' }}>
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ 
                width: '100%', 
                justifyContent: 'center', 
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem'
              }}
            >
              <span>Let's Talk</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
