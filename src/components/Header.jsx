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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Scrolling DOWN -> Hide floating menu bar
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setIsVisible(false);
          setActiveMega(null);
        }
        // Scrolling UP -> Reveal floating menu bar
        else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
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
          transition: 'all 0.25s ease'
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

          {/* Right Actions matching reference floating bar */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Search */}
            <button 
              onClick={onOpenContact}
              title="Search Services & Solutions"
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#475569', 
                cursor: 'pointer', 
                padding: '8px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
            >
              <Search size={18} />
            </button>

            {/* Region / Globe Selector */}
            <button 
              onClick={onOpenContact}
              title="Dubai, UAE / Global"
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#475569', 
                cursor: 'pointer', 
                padding: '6px 8px', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
            >
              <Globe size={17} />
              <ChevronDown size={12} color="#94a3b8" />
            </button>

            {/* Consultation Chat Pill Button (Matching Reference) */}
            <button 
              onClick={onOpenContact} 
              className="btn-primary"
              style={{ 
                background: '#ffffff', 
                color: '#0f172a', 
                border: '1.5px solid #e2e8f0',
                fontWeight: 700, 
                padding: '0.55rem 1.15rem', 
                fontSize: '0.875rem',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.color = '#00bba7';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#0f172a';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
              }}
              title="Connect with MaxR Technologists"
            >
              <MessageSquare size={16} color="#00bba7" />
              <span className="consult-btn-text">Consultation</span>
            </button>

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

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', background: '#00bba7', color: '#040811', fontWeight: 700 }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
