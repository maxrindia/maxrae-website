import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Instagram, Check, ArrowRight, Mail, MapPin, Globe2, Phone } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="footer" role="contentinfo" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', color: '#0f172a', padding: '4rem 0 2rem' }}>
      <div className="container">
        
        {/* Newsletter Bar (Light Theme) */}
        <div style={{ paddingBottom: '2.5rem', marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#0f172a', fontSize: '1.3rem', fontWeight: 800 }}>
              Subscribe to MaxR Growth Briefing
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Practical insights on AI automation, software engineering, and business growth strategy.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '440px' }}>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', border: '1px solid #10b981', color: '#059669', padding: '0.65rem 1rem', borderRadius: '10px', fontSize: '0.85rem', width: '100%', fontWeight: 600 }}>
                <Check size={16} /> Subscribed to MaxR Growth Briefing!
              </div>
            ) : (
              <>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter business email..."
                    style={{ 
                      width: '100%', 
                      padding: '0.7rem 1.1rem', 
                      borderRadius: '10px', 
                      background: '#ffffff', 
                      border: '1.5px solid #cbd5e1', 
                      color: '#0f172a', 
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ 
                    background: '#00bba7', 
                    color: '#ffffff', 
                    padding: '0.7rem 1.35rem', 
                    borderRadius: '10px', 
                    border: 'none', 
                    fontWeight: 700, 
                    fontSize: '0.875rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    cursor: 'pointer', 
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0, 187, 167, 0.2)'
                  }}
                >
                  Join Briefing <ArrowRight size={14} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Directory Grid (Light Theme) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <a 
              href="/"
              style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.25rem', textDecoration: 'none' }}
            >
              <img src="/assets/maxr-logo.png" alt="maxr." style={{ height: '38px', width: 'auto' }} />
            </a>

            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              AI Automation, Web & Mobile Applications, Software Development, and Strategic Business Consulting. Engineering sustainable digital growth for modern enterprises worldwide.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#00bba7" />
                <span>Dubai Headquarters: Dubai, United Arab Emirates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#00bba7" />
                <span>contact@maxr.ae</span>
              </div>
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f172a', marginBottom: '1.25rem' }}>
              What We Do
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>AI Automation & Voice Agents</Link>
              <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Web & Mobile Applications</Link>
              <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Custom Software Development</Link>
              <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Workflow & CRM Automation</Link>
              <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Business Consultation</Link>
              <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Digital Marketing & SEO</Link>
            </div>
          </div>

          {/* Column: Industries */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f172a', marginBottom: '1.25rem' }}>
              Industries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/industries" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Healthcare & Clinics</Link>
              <Link to="/industries" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>E-Commerce & Retail</Link>
              <Link to="/industries" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Legal & Professional Services</Link>
              <Link to="/industries" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Logistics & Supply Chain</Link>
              <Link to="/industries" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>FinTech & Financial Services</Link>
            </div>
          </div>

          {/* Column: Company */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f172a', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/about" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Who We Are (Our Mission)</Link>
              <Link to="/about" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Leadership: Shagul & Gopi</Link>
              <Link to="/blog" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Tech Insights & Blog</Link>
              <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00bba7'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Contact Us</Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.825rem', color: '#64748b' }}>
          <div>
            <p>© 2026 MaxR Technologies. All rights reserved.</p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
              UAE Trade License: CN-4829102 / Department of Economy and Tourism (DET), Dubai, UAE
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Statement</Link>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</Link>
            <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }}>Bank-Grade Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
