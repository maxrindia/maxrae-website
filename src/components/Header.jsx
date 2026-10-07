import React, { useState, useEffect } from 'react';
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
  ArrowRight 
} from 'lucide-react';

export default function Header({ currentPage, onNavigate, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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

  const handleNavClick = (page) => {
    onNavigate(page);
    setActiveMega(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── Main Sticky Header ── */}
      <header 
        className={`header ${isScrolled ? 'scrolled' : ''}`} 
        id="site-header" 
        role="banner" 
        style={{ 
          background: 'rgba(7, 13, 26, 0.96)', 
          backdropFilter: 'blur(16px)', 
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Official White Logo (Enlarged and prominent) */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="logo-container" 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="MaxR Home"
          >
            <img 
              src="/assets/maxr-logo-white.png" 
              alt="MaxR" 
              style={{ height: '46px', width: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>

          {/* Primary Navigation */}
          <nav className="nav-primary" id="navbar-main" aria-label="Primary navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            
            {/* What We Do Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveMega('services')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button 
                onClick={() => handleNavClick('services')}
                className="dropdown-toggle" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  background: 'none', 
                  border: 'none', 
                  color: currentPage === 'services' ? '#00bba7' : '#ffffff', 
                  fontWeight: currentPage === 'services' ? 700 : 500,
                  fontSize: '0.95rem', 
                  cursor: 'pointer',
                  padding: '0.5rem 0.25rem',
                  transition: 'color 0.2s'
                }}
              >
                What We Do <ChevronDown size={14} />
              </button>

              {activeMega === 'services' && (
                <div className="mega-menu" style={{ opacity: 1, visibility: 'visible', pointerEvents: 'auto', background: '#0a1428', border: '1px solid rgba(0,187,167,0.25)', width: '640px' }}>
                  <div style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00bba7', fontWeight: 700 }}>
                      MaxR Core Capabilities
                    </span>
                    <button 
                      onClick={() => handleNavClick('services')} 
                      style={{ fontSize: '0.78rem', color: '#2dd4bf', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                    >
                      View All Services <ArrowRight size={13} />
                    </button>
                  </div>
                  <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                    {servicesMega.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="mega-item"
                        onClick={() => handleNavClick(item.page)}
                      >
                        <div className="mega-item-icon" style={{ background: 'rgba(0,187,167,0.15)', color: '#00bba7' }}>
                          {item.icon}
                        </div>
                        <div className="mega-item-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
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
            >
              <button 
                onClick={() => handleNavClick('industries')}
                className="dropdown-toggle" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  background: 'none', 
                  border: 'none', 
                  color: currentPage === 'industries' ? '#00bba7' : '#ffffff', 
                  fontWeight: currentPage === 'industries' ? 700 : 500,
                  fontSize: '0.95rem', 
                  cursor: 'pointer',
                  padding: '0.5rem 0.25rem',
                  transition: 'color 0.2s'
                }}
              >
                Industries <ChevronDown size={14} />
              </button>

              {activeMega === 'industries' && (
                <div className="mega-menu" style={{ opacity: 1, visibility: 'visible', pointerEvents: 'auto', background: '#0a1428', border: '1px solid rgba(0,187,167,0.25)', width: '560px' }}>
                  <div style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00bba7', fontWeight: 700 }}>
                      Industry Domains
                    </span>
                    <button 
                      onClick={() => handleNavClick('industries')} 
                      style={{ fontSize: '0.78rem', color: '#2dd4bf', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                    >
                      View All Playbooks <ArrowRight size={13} />
                    </button>
                  </div>
                  <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                    {industriesMega.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="mega-item"
                        onClick={() => handleNavClick(item.page)}
                      >
                        <div className="mega-item-icon" style={{ background: 'rgba(0,187,167,0.15)', color: '#00bba7' }}>
                          {item.icon}
                        </div>
                        <div className="mega-item-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Who We Are */}
            <button 
              onClick={() => handleNavClick('about')} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: currentPage === 'about' ? '#00bba7' : '#ffffff', 
                fontWeight: currentPage === 'about' ? 700 : 500, 
                fontSize: '0.95rem', 
                cursor: 'pointer',
                padding: '0.5rem 0.25rem',
                transition: 'color 0.2s'
              }}
            >
              Who We Are
            </button>

            {/* Contact */}
            <button 
              onClick={() => handleNavClick('contact')} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: currentPage === 'contact' ? '#00bba7' : '#ffffff', 
                fontWeight: currentPage === 'contact' ? 700 : 500, 
                fontSize: '0.95rem', 
                cursor: 'pointer',
                padding: '0.5rem 0.25rem',
                transition: 'color 0.2s'
              }}
            >
              Contact
            </button>
          </nav>

          {/* Action Button */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary"
              style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.6rem 1.35rem', fontSize: '0.9rem' }}
            >
              Book Consultation
            </button>

            <button 
              className="mobile-toggle" 
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" style={{ background: '#070d1a', borderLeft: '1px solid rgba(0,187,167,0.3)' }}>
          <div className="mobile-drawer-header">
            <div style={{ cursor: 'pointer' }} onClick={() => handleNavClick('home')}>
              <img src="/assets/maxr-logo-white.png" alt="MaxR" style={{ height: '38px', width: 'auto' }} />
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ color: '#fff', padding: '4px', background: 'none', border: 'none' }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, overflowY: 'auto' }}>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('services')}
              style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: currentPage === 'services' ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600 }}
            >
              What We Do
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('industries')}
              style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: currentPage === 'industries' ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600 }}
            >
              Industries
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('about')}
              style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: currentPage === 'about' ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600 }}
            >
              Who We Are
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('contact')}
              style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: currentPage === 'contact' ? '#00bba7' : '#fff', fontSize: '1.05rem', fontWeight: 600 }}
            >
              Contact
            </button>
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
