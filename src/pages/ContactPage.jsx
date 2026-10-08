import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  Clock, 
  ShieldCheck, 
  Globe2 
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" style={{ padding: '2rem 0 5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
              Get In Touch
            </span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, color: '#080607', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Let's Engineer Your Digital Growth
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#556575', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Ready to deploy enterprise AI automations, scale high-converting software, or explore strategic technology consultation? Speak with our leadership team directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
          
          {/* Left: Office Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: 'clamp(2rem, 3.5vw, 2.75rem)', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,187,167,0.2)' }}>
                  <MapPin size={24} color="#00bba7" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#00bba7', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    HEADQUARTERS
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#080607', margin: 0, letterSpacing: '-0.02em' }}>
                    Dubai, United Arab Emirates
                  </h3>
                </div>
              </div>

              <p style={{ color: '#556575', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                MaxR Technologies FZ · Supporting enterprise leaders across Dubai, the UAE, and global markets with tailored AI voice agents, modern web architectures, and autonomous workflows.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#080607' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="#00bba7" />
                  <span>Email: <strong style={{ color: '#080607' }}>contact@maxr.ae</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={16} color="#00bba7" />
                  <span style={{ color: '#556575' }}>Business Hours: Monday – Friday (9:00 AM – 6:00 PM GST)</span>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://wa.me/?text=Hello%20MaxR%20Technologies,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
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
                    boxShadow: '0 4px 14px rgba(37,211,102,0.25)' 
                  }}
                >
                  <MessageSquare size={16} />
                  Connect on WhatsApp
                </a>
              </div>
            </div>

            {/* Why Choose MaxR Commitment Card */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '2rem', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)' }}>
              <h4 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#080607', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                The MaxR Commitment:
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#556575', padding: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} /> Rapid deployment (&lt; 7 days production turnaround)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} /> Enterprise-grade infrastructure (99.9% uptime SLA)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} /> Verified business growth methodology
                </li>
              </ul>
            </div>

          </div>

          {/* Right: Consultation Booking Form */}
          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid #A7F3D0' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: '#556575', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Thank you, <strong>{formData.name}</strong>. A MaxR executive consultant will review your business requirements and contact you within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                  style={{ 
                    background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)', 
                    color: '#ffffff', 
                    fontWeight: 700,
                    padding: '0.75rem 1.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#00bba7', fontWeight: 800, letterSpacing: '0.08em' }}>
                    1-ON-1 EXECUTIVE SESSION
                  </span>
                  <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.65rem', fontWeight: 800, color: '#080607', marginTop: '0.25rem', letterSpacing: '-0.02em' }}>
                    Book a Discovery Session
                  </h2>
                  <p style={{ color: '#556575', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                    Speak with our team about AI automation, enterprise software engineering, or strategic growth.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="form-input"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                      placeholder="e.g. John Smith / Ahmed Al-Mansoor"
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
                      className="form-select"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E1E8E5', fontSize: '0.9rem', outline: 'none', background: '#FAFCFB' }}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="AI Automation">AI Automation (Voice Agents, Chatbots, CRM & Workflows)</option>
                      <option value="Web & Product Engineering">Web & Product Engineering (High-Performance Applications)</option>
                      <option value="Business Consultation">Business Consultation (Strategy, Growth & Operations)</option>
                      <option value="Digital Marketing">Digital Marketing (Performance SEO & Paid Growth)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#080607', marginBottom: '6px' }}>
                      Project Notes / Current Objectives
                    </label>
                    <textarea
                      id="message"
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
                    className="btn-primary"
                    style={{ 
                      width: '100%', 
                      justifyContent: 'center', 
                      background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)', 
                      color: '#ffffff', 
                      fontWeight: 700, 
                      padding: '0.9rem', 
                      fontSize: '1rem',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 16px rgba(0,187,167,0.25)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Send size={16} />
                    Schedule Discovery Session
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
