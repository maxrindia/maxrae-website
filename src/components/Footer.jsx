import React, { useState } from 'react';
import { Linkedin, Twitter, Youtube, Instagram, Check, ArrowRight, Mail, MapPin, Globe2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
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
    <footer className="footer" role="contentinfo" style={{ background: '#040811', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        
        {/* Newsletter Bar */}
        <div style={{ paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800 }}>
              Subscribe to MaxR Growth Briefing
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.2rem' }}>
              Practical insights on AI automation, business growth strategy, and operational optimization.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '420px' }}>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 187, 167, 0.2)', border: '1px solid #00bba7', color: '#2dd4bf', padding: '0.6rem 1rem', borderRadius: '8px', fontSize: '0.85rem', width: '100%' }}>
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
                    style={{ width: '100%', padding: '0.65rem 1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.85rem' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: '#00bba7', color: '#040811', padding: '0.65rem 1.25rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Join Briefing <ArrowRight size={14} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Directory Grid */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <div 
              style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.25rem', cursor: 'pointer' }}
              onClick={() => onNavigate('home')}
            >
              <img src="/assets/maxr-logo-white.png" alt="MaxR" style={{ height: '44px', width: 'auto' }} />
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              AI Automation, Web & Mobile Applications, Software Development, and Strategic Business Consulting. Engineering sustainable digital growth for modern enterprises worldwide.
            </p>

            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.825rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="#00bba7" />
                <span><strong>Dubai Headquarters:</strong> Dubai, United Arab Emirates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe2 size={15} color="#00bba7" />
                <span><strong>Official Website:</strong> <a href="https://maxr.io" target="_blank" rel="noopener noreferrer" style={{ color: '#00bba7', fontWeight: 600 }}>maxr.io</a></span>
              </div>
            </div>
          </div>

          {/* Column: Services */}
          <div className="footer-col">
            <h4>What We Do</h4>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>AI Automation & Voice Agents</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Web & Mobile Applications</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Custom Software Development</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Workflow & CRM Automation</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Business Consultation</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Digital Marketing & SEO</a>
          </div>

          {/* Column: Industries */}
          <div className="footer-col">
            <h4>Industries</h4>
            <a href="#industries" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Healthcare & Clinics</a>
            <a href="#industries" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>E-Commerce & Retail</a>
            <a href="#industries" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Legal & Professional Services</a>
            <a href="#industries" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>Logistics & Supply Chain</a>
            <a href="#industries" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}>FinTech & Financial Services</a>
          </div>

          {/* Column: Company & Navigation */}
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Who We Are (Our Mission)</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Leadership: Shagul & Gopi</a>
            <a href="https://maxr.io" target="_blank" rel="noopener noreferrer">Official Site (maxr.io)</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Dubai Team</a>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', marginTop: '3rem' }}>
          <p>© 2026 MaxR Technologies. All rights reserved. MaxR Technologies Dubai & maxr.io</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Statement</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Bank-Grade Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
