import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Globe, 
  MessageSquare, 
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
    { label: "Blog / Insights", path: "/blog" },
    { label: "Contact", path: "/contact" }
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
                  >
                    <Link
                      to={item.path}
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
                e.currentTarget.style.color = '#00bba7';
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

        {/* ── 1. WHAT WE DO DROPDOWN (Hover Triggered, Solid White, No Spotlight Card) ── */}
        {activeDropdown === 'services' && (
          <div 
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
            className="header-dropdown-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              width: '100%',
              background: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              boxShadow: '0 24px 48px rgba(8, 6, 7, 0.09)',
              padding: '2.5rem 0 2rem',
              zIndex: 999
            }}
          >
            <div className="container">
              {/* 3 Perfectly Balanced Columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', marginBottom: '2rem' }}>
                
                {/* Column 1: AI & Intelligent Systems */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                    <span style={{ width: '12px', height: '2px', background: '#00bba7' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0f766e' }}>
                      AI & Automation
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { title: "Voice & AI Agents", path: "/voice-agents", desc: "Autonomous multilingual voice agents for 24/7 client booking" },
                      { title: "Workflow Automation", path: "/services", desc: "End-to-end intelligent RPA and back-office pipelines" },
                      { title: "WhatsApp Lead Bots", path: "/services", desc: "Instant conversational sales qualifiers & instant intake" },
                      { title: "Data & BI Analytics", path: "/services", desc: "Unified executive dashboards and real-time insights" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        style={{ textDecoration: 'none', display: 'block', padding: '6px 8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#F5F8F7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '0.925rem', color: '#080607', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                          {item.title}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Digital Engineering */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                    <span style={{ width: '12px', height: '2px', background: '#00bba7' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#080607' }}>
                      Digital Engineering
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { title: "Web Development", path: "/services", desc: "High-performance enterprise websites and portals" },
                      { title: "Mobile App Engineering", path: "/services", desc: "Native iOS & Android mobile software experiences" },
                      { title: "SaaS Custom Architecture", path: "/services", desc: "Scalable cloud-native platforms with multi-tenant design" },
                      { title: "Cloud & DevOps Scaling", path: "/services", desc: "Modern CI/CD, AWS/Azure serverless infrastructure" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        style={{ textDecoration: 'none', display: 'block', padding: '6px 8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#F5F8F7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '0.925rem', color: '#080607', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                          {item.title}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Commercial Growth */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                    <span style={{ width: '12px', height: '2px', background: '#00bba7' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#080607' }}>
                      Commercial Growth
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { title: "CRM & Lead Solutions", path: "/services", desc: "HubSpot, Salesforce & custom customer data platforms" },
                      { title: "Digital Marketing & SEO", path: "/services", desc: "Precision enterprise acquisition and conversion growth" },
                      { title: "Headless E-Commerce", path: "/services", desc: "Next-gen Shopify Plus & custom transaction stacks" },
                      { title: "Digital Transformation", path: "/services", desc: "Modernize legacy enterprise workflows into cloud speed" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        style={{ textDecoration: 'none', display: 'block', padding: '6px 8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#F5F8F7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '0.925rem', color: '#080607', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                          {item.title}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Quick Bar */}
              <div 
                style={{ 
                  borderTop: '1px solid #E2E8F0', 
                  paddingTop: '1.25rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Looking for tailored enterprise technology solutions for your company?
                </span>
                <Link
                  to="/services"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00bba7',
                    fontWeight: 750,
                    fontSize: '0.875rem',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  <span>Explore All Services</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* ── 2. INDUSTRIES DROPDOWN (Hover Triggered, Clean 4-Column Grid) ── */}
        {activeDropdown === 'industries' && (
          <div 
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
            className="header-dropdown-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              width: '100%',
              background: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              boxShadow: '0 24px 48px rgba(8, 6, 7, 0.09)',
              padding: '2.5rem 0 2rem',
              zIndex: 999
            }}
          >
            <div className="container">
              {/* 4 Clean Columns of Industries */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
                
                {/* Column 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00bba7', flexShrink: 0 }}>
                      <Stethoscope size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Healthcare & Clinics
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Patient booking, WhatsApp recalls & clinical workflows
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#080607', flexShrink: 0 }}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Professional Services
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Legal, tax & consulting intake pre-qualification
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Column 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00bba7', flexShrink: 0 }}>
                      <ShoppingBag size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Retail & E-Commerce
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        High-volume storefronts, cart recovery & tracking bots
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#080607', flexShrink: 0 }}>
                      <Building2 size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Real Estate & PropTech
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Property portals, CRM automation & lead routing
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Column 3 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00bba7', flexShrink: 0 }}>
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        FinTech & Banking
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Secure transactions, automated KYC & compliance BI
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#080607', flexShrink: 0 }}>
                      <Truck size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Logistics & Supply Chain
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Fleet tracking, dispatch automation & ERP links
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Column 4 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00bba7', flexShrink: 0 }}>
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Education & EdTech
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Digital learning portals & admission workflows
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/industries"
                    onClick={() => setActiveDropdown(null)}
                    style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F5F8F7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#080607', flexShrink: 0 }}>
                      <Utensils size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 750, color: '#080607', display: 'block', marginBottom: '2px' }}>
                        Hospitality & Tourism
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', lineHeight: 1.4 }}>
                        Guest bookings & 24/7 AI concierge automation
                      </span>
                    </div>
                  </Link>
                </div>

              </div>

              {/* Bottom Quick Bar */}
              <div 
                style={{ 
                  borderTop: '1px solid #E2E8F0', 
                  paddingTop: '1.25rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Looking for domain-specific automation tailored to your operational model?
                </span>
                <Link
                  to="/industries"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00bba7',
                    fontWeight: 750,
                    fontSize: '0.875rem',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  <span>Explore All Industries</span>
                  <ArrowRight size={14} />
                </Link>
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
