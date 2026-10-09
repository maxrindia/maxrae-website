import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "AI Automation",
    message: ""
  });
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch("https://formspree.io/f/XXXXXXXX", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page" style={{ padding: '3rem 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <h1 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em', 
              lineHeight: 1.1, 
              marginBottom: '1rem' 
            }}
          >
            Let's Talk
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#556575', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
            Tell us what you're working on. We'll tell you how we can help.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
          
          {/* Left: Office Information & Commitment */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Left Info Card — HQ */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: 'clamp(2rem, 3.5vw, 2.75rem)', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,187,167,0.2)' }}>
                  <MapPin size={24} color="#00bba7" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#080607', margin: 0, letterSpacing: '-0.02em' }}>
                    Get In Touch
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#00bba7', fontWeight: 700 }}>
                    UAE — Available across the GCC
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#080607' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="#00bba7" />
                  <span>Email: <a href="mailto:contact@maxr.ae" style={{ color: '#080607', fontWeight: 700, textDecoration: 'none' }}>contact@maxr.ae</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={16} color="#00bba7" />
                  <span style={{ color: '#556575' }}>Hours: Sun – Thu, 9:00 AM – 6:00 PM GST</span>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://wa.me/971XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: '#25D366', 
                    color: '#FFFFFF', 
                    padding: '11px 22px', 
                    borderRadius: '8px', 
                    fontWeight: 700, 
                    fontSize: '0.9rem', 
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37,211,102,0.25)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <MessageCircle size={17} />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Commitment Card */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '2rem', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)' }}>
              <h4 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#080607', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                The MaxR Commitment:
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#556575', padding: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} />
                  <span>Rapid deployment (&lt; 7 days production turnaround)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} />
                  <span>Enterprise-grade infrastructure (99.9% uptime SLA)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} />
                  <span>Direct communication — no account managers, no middlemen</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right: Message Form */}
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)' }}>
            
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid #A7F3D0' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  Message Sent
                </h3>
                <p style={{ color: '#556575', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Thanks! We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus(null);
                    setFormData({ name: "", email: "", phone: "", company: "", service: "AI Automation", message: "" });
                  }}
                  style={{ 
                    background: '#00bba7', 
                    color: '#080607', 
                    fontWeight: 700, 
                    padding: '0.75rem 1.75rem', 
                    borderRadius: '8px', 
                    border: 'none', 
                    cursor: 'pointer' 
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.65rem', fontWeight: 800, color: '#080607', margin: 0, letterSpacing: '-0.02em' }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: '#556575', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>
                </div>

                {status === 'error' && (
                  <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', fontSize: '0.875rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please email us at contact@maxr.ae</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="form-input"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                        Business Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        className="form-input"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        type="tel"
                        className="form-input"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                        placeholder="+971 50 ... / +91 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="company" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                      Company Name *
                    </label>
                    <input
                      id="company"
                      name="company"
                      required
                      type="text"
                      className="form-input"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="service" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="AI Automation">AI Automation (Voice Agents, Chatbots & Workflows)</option>
                      <option value="Web & App Development">Web & App Development (High-Performance Applications)</option>
                      <option value="Digital Marketing">Digital Marketing (Performance SEO & Paid Growth)</option>
                      <option value="Voice AI Agents">Voice AI Agents (24/7 Phone Calling Bots)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                      Project Notes / Current Objectives
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="form-textarea"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB', resize: 'vertical' }}
                      placeholder="Describe what manual processes you'd like to automate or your current growth goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '0.8rem', color: '#556575' }}>
                    <ShieldCheck size={16} color="#059669" />
                    <span>Your data is protected under strict enterprise confidentiality standards.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary"
                    style={{ 
                      width: '100%', 
                      justifyContent: 'center', 
                      background: '#00bba7', 
                      color: '#080607', 
                      fontWeight: 800, 
                      padding: '0.9rem', 
                      fontSize: '1rem',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 16px rgba(0,187,167,0.25)',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (status !== 'submitting') {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,187,167,0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,187,167,0.25)';
                    }}
                  >
                    <Send size={16} />
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message →'}</span>
                  </button>
                </form>
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
