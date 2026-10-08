import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  Zap, 
  Bot,
  Smartphone,
  Code2,
  TrendingUp, 
  Globe2, 
  Stethoscope, 
  ShoppingBag, 
  Briefcase, 
  Truck,
  CreditCard,
  ArrowRight,
  Search,
  Globe,
  MessageSquare
} from 'lucide-react';

export default function Header({ onOpenContact }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

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
          setActiveMega(null);
          setLangDropdownOpen(false);
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

  const servicesMega = [
    {
      title: "AI Automation & Voice Agents",
      desc: "Inbound voice receptionists, WhatsApp bots, and automated CRM workflows",
      icon: <Bot size={18} color="#00bba7" />,
      page: "services"
    },
    {
      title: "Web & Mobile Applications",
      desc: "Custom iOS/Android apps, high-converting web apps, React & full-stack",
      icon: <Smartphone size={18} color="#00bba7" />,
      page: "services"
    },
    {
      title: "Software Development",
      desc: "Enterprise custom software, SaaS systems, APIs & database architecture",
      icon: <Code2 size={18} color="#00bba7" />,
      page: "services"
    },
    {
      title: "Business Consultation",
      desc: "Operations audit, bottleneck removal & 2X-5X revenue growth roadmaps",
      icon: <TrendingUp size={18} color="#00bba7" />,
      page: "services"
    },
    {
      title: "Digital Marketing & SEO",
      desc: "Search engine optimization, paid ad campaigns & multi-channel brand growth",
      icon: <Globe2 size={18} color="#00bba7" />,
      page: "services"
    }
  ];

  const industriesMega = [
    {
      title: "Healthcare & Clinics",
      desc: "24/7 patient booking, appointment reminders & clinical inquiry deflection",
      icon: <Stethoscope size={18} color="#00bba7" />,
      page: "industries"
    },
    {
      title: "E-Commerce & Retail",
      desc: "WhatsApp order tracking, customer support automation & cart recovery",
      icon: <ShoppingBag size={18} color="#00bba7" />,
      page: "industries"
    },
    {
      title: "Legal & Professional Services",
      desc: "Automated client intake, consultation booking & eligibility screening",
      icon: <Briefcase size={18} color="#00bba7" />,
      page: "industries"
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Automated shipment updates, vendor communication & driver dispatch",
      icon: <Truck size={18} color="#00bba7" />,
      page: "industries"
    },
    {
      title: "FinTech & Financial Services",
      desc: "Secure customer onboarding, transaction notifications & compliance intake",
      icon: <CreditCard size={18} color="#00bba7" />,
      page: "industries"
    }
  ];

  

  return (
    <>
      {/* ── Main Sticky Header ── */}
      <header 
        className={`header ${isScrolled ? 'scrolled' : ''}`} 
        id="site-header" 
        role="banner" 
        style={{ 
          background: '#ffffff', 
          borderBottom: '1px solid #f1f5f9',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '78px' }}>
          
          {/* Official Dark Logo: maxr. (with Teal Dot) */}
          <Link 
            to="/" 
            className="logo-container" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            title="MaxR Home"
          >
            <img 
              src="/assets/maxr-logo.png" 
              alt="maxr." 
              style={{ height: '38px', width: 'auto', display: 'block' }} 
            />
          </Link>

          {/* Primary Navigation (Light Mode) */}
          <nav className="nav-primary" id="navbar-main" aria-label="Primary navigation" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            
            {/* What We Do Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('services')}
              onMouseLeave={() => setActiveMega(null)}
              style={{ position: 'relative' }}
            >
              <Link 
                to="/services" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  color: currentPath.startsWith('/services') ? '#00bba7' : '#0f172a', 
                  fontWeight: 600,
                  fontSize: '0.95rem', 
                  cursor: 'pointer',
                  padding: '0.5rem 0.25rem',
                  transition: 'color 0.2s'
                }}
              >
                What We Do <ChevronDown size={14} color="#64748b" />
              </Link>

              {activeMega === 'services' && (
                <div 
                  className="mega-menu" 
                  style={{ 
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    opacity: 1, 
                    visibility: 'visible', 
                    pointerEvents: 'auto', 
                    background: '#ffffff', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '16px',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08)',
                    width: '640px',
                    padding: '1.5rem',
                    zIndex: 100
                  }}
                >
                  <div style={{ marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00bba7', fontWeight: 700 }}>
                      MaxR Core Capabilities
                    </span>
                    <Link 
                      to="/services" 
                      onClick={() => setActiveMega(null)}
                      style={{ fontSize: '0.8rem', color: '#00bba7', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                    >
                      View All Services <ArrowRight size={13} />
                    </Link>
                  </div>
                  <div className="mega-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                    {servicesMega.map((item, idx) => (
                      <Link 
                        key={idx} 
                        to="/services"
                        onClick={() => setActiveMega(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '0.85rem',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1px solid #f1f5f9',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f1f5f9';
                          e.currentTarget.style.borderColor = '#00bba7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f8fafc';
                          e.currentTarget.style.borderColor = '#f1f5f9';
                        }}
                      >
                        <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(0,187,167,0.1)', color: '#00bba7', flexShrink: 0 }}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', margin: '0 0 3px' }}>{item.title}</h4>
                          <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('industries')}
              onMouseLeave={() => setActiveMega(null)}
              style={{ position: 'relative' }}
            >
              <Link 
                to="/industries" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  color: currentPath.startsWith('/industries') ? '#00bba7' : '#0f172a', 
                  fontWeight: 600,
                  fontSize: '0.95rem', 
                  cursor: 'pointer',
                  padding: '0.5rem 0.25rem',
                  transition: 'color 0.2s'
                }}
              >
                Industries <ChevronDown size={14} color="#64748b" />
              </Link>

              {activeMega === 'industries' && (
                <div 
                  className="mega-menu" 
                  style={{ 
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    opacity: 1, 
                    visibility: 'visible', 
                    pointerEvents: 'auto', 
                    background: '#ffffff', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '16px',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08)',
                    width: '640px',
                    padding: '1.5rem',
                    zIndex: 100
                  }}
                >
                  <div style={{ marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00bba7', fontWeight: 700 }}>
                      Industry Domains
                    </span>
                    <Link 
                      to="/industries" 
                      onClick={() => setActiveMega(null)}
                      style={{ fontSize: '0.8rem', color: '#00bba7', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                    >
                      View All Playbooks <ArrowRight size={13} />
                    </Link>
                  </div>
                  <div className="mega-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                    {industriesMega.map((item, idx) => (
                      <Link 
                        key={idx} 
                        to="/industries"
                        onClick={() => setActiveMega(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '0.85rem',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1px solid #f1f5f9',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f1f5f9';
                          e.currentTarget.style.borderColor = '#00bba7';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f8fafc';
                          e.currentTarget.style.borderColor = '#f1f5f9';
                        }}
                      >
                        <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(0,187,167,0.1)', color: '#00bba7', flexShrink: 0 }}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', margin: '0 0 3px' }}>{item.title}</h4>
                          <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Who We Are */}
            <Link 
              to="/about" 
              style={{ 
                background: 'none', 
                border: 'none', 
                textDecoration: 'none',
                color: currentPath.startsWith('/about') ? '#00bba7' : '#0f172a', 
                fontWeight: 600, 
                fontSize: '0.95rem', 
                cursor: 'pointer',
                padding: '0.5rem 0.25rem',
                transition: 'color 0.2s'
              }}
            >
              Who We Are
            </Link>

            {/* Blog */}
            <Link 
              to="/blog" 
              style={{ 
                background: 'none', 
                border: 'none', 
                textDecoration: 'none',
                color: currentPath.startsWith('/blog') ? '#00bba7' : '#0f172a', 
                fontWeight: 600, 
                fontSize: '0.95rem', 
                cursor: 'pointer',
                padding: '0.5rem 0.25rem',
                transition: 'color 0.2s'
              }}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link 
              to="/contact" 
              style={{ 
                background: 'none', 
                border: 'none', 
                textDecoration: 'none',
                color: currentPath.startsWith('/contact') ? '#00bba7' : '#0f172a', 
                fontWeight: 600, 
                fontSize: '0.95rem', 
                cursor: 'pointer',
                padding: '0.5rem 0.25rem',
                transition: 'color 0.2s'
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions: Language Preference + Direct Message Link to /contact */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            
            {/* Language Preference Dropdown (Default English, expandable for additional languages) */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                title="Language Preference: English (EN)"
                style={{ 
                  background: 'none', 
                  border: '1px solid transparent', 
                  color: '#334155', 
                  cursor: 'pointer', 
                  padding: '6px 10px', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00bba7';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <Globe size={16} color="#00bba7" />
                <span>EN</span>
                <ChevronDown size={12} color="#94a3b8" />
              </button>

              {langDropdownOpen && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '6px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                    padding: '6px',
                    minWidth: '155px',
                    zIndex: 110
                  }}
                >
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '7px 10px', 
                      borderRadius: '8px', 
                      background: 'rgba(0,187,167,0.08)', 
                      color: '#0a1428', 
                      fontSize: '0.825rem', 
                      fontWeight: 700 
                    }}
                  >
                    <span>English (EN)</span>
                    <span style={{ color: '#00bba7', fontSize: '0.78rem' }}>✓</span>
                  </div>
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '7px 10px', 
                      borderRadius: '8px', 
                      color: '#94a3b8', 
                      fontSize: '0.825rem', 
                      fontWeight: 500,
                      marginTop: '3px'
                    }}
                    title="Arabic language support in development"
                  >
                    <span>العربية (AR)</span>
                    <span style={{ fontSize: '0.7rem', background: '#f1f5f9', padding: '2px 5px', borderRadius: '4px', color: '#64748b' }}>Soon</span>
                  </div>
                </div>
              )}
            </div>

            {/* Message Logo Button -> Redirects to /contact without consultancy word */}
            <Link 
              to="/contact" 
              title="Contact MaxR"
              style={{ 
                background: '#ffffff', 
                color: '#0f172a', 
                border: '1.5px solid #e2e8f0',
                width: '40px',
                height: '40px',
                borderRadius: '11px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.2s',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.2)';
                e.currentTarget.style.color = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.color = '#0f172a';
              }}
            >
              <MessageSquare size={18} color="#00bba7" />
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
              <img src="/assets/maxr-logo-white.png" alt="MaxR" style={{ height: '38px', width: 'auto' }} />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ color: '#fff', padding: '4px', background: 'none', border: 'none' }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, overflowY: 'auto' }}>
            <Link className="mobile-nav-link" to="/" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath === '/' ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              Home
            </Link>
            <Link className="mobile-nav-link" to="/services" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath.startsWith('/services') ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              What We Do
            </Link>
            <Link className="mobile-nav-link" to="/industries" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath.startsWith('/industries') ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              Industries
            </Link>
            <Link className="mobile-nav-link" to="/about" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath.startsWith('/about') ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              Who We Are
            </Link>
            <Link className="mobile-nav-link" to="/blog" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath.startsWith('/blog') ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              Tech Insights & Blog
            </Link>
            <Link className="mobile-nav-link" to="/contact" onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: currentPath.startsWith('/contact') ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0' }}
            >
              Contact
            </Link>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Language Selector in Mobile */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <Globe size={16} color="#00bba7" />
                <span>Language:</span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ fontSize: '0.78rem', background: '#00bba7', color: '#040811', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>EN</span>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.1)', color: '#64748b', padding: '2px 8px', borderRadius: '4px' }}>AR (Soon)</span>
              </div>
            </div>

            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', background: '#00bba7', color: '#040811', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem', borderRadius: '10px', textDecoration: 'none' }}
            >
              <MessageSquare size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
