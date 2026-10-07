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
    <div className="contact-page" style={{ padding: '4rem 0 6rem', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
            GET IN TOUCH
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Let's Automate Your Growth
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
            Ready to deploy AI automation or explore strategic business growth? Reach our engineering and consulting team directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Left: Office Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#0a1428', color: '#ffffff', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(0,187,167,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0,187,167,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} color="#00bba7" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#2dd4bf', fontWeight: 700, textTransform: 'uppercase' }}>
                    HEADQUARTERS
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
                    Dubai, United Arab Emirates
                  </h3>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                MaxR Technologies FZ · Supporting healthcare, retail, fintech, and enterprise leaders across Dubai, the UAE, and global markets with tailored AI automations and custom software.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="#00bba7" />
                  <span>Email: <strong>contact@maxr.ae</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={16} color="#00bba7" />
                  <span>Business Hours: Sunday – Thursday (9:00 AM – 6:00 PM GST)</span>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://wa.me/?text=Hello%20MaxR%20Technologies,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25d366', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  <MessageSquare size={16} />
                  Connect on WhatsApp
                </a>
              </div>
            </div>

            {/* Why Choose MaxR Mini-Card */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.03)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a1428', marginBottom: '0.75rem' }}>
                The MaxR Commitment:
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: '#475569' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#00bba7" /> Rapid onboarding (&lt; 7 days turnaround)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#00bba7" /> Bank-grade infrastructure (99.9% uptime SLA)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#00bba7" /> Tested 5X business growth methodology
                </li>
              </ul>
            </div>

          </div>

          {/* Right: Consultation Booking Form */}
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.5rem' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. A MaxR consultant will review your business requirements and contact you within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                  style={{ background: '#00bba7', color: '#040811', fontWeight: 700 }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#00bba7', fontWeight: 700 }}>
                    1-ON-1 CONSULTATION
                  </span>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a1428', marginTop: '0.2rem' }}>
                    Book a Discovery Session
                  </h2>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.35rem' }}>
                    Speak with our team about AI automations, business consultation, or digital growth.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="form-input"
                      placeholder="e.g. John Smith / Ahmed Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Business Email *
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        className="form-input"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        className="form-input"
                        placeholder="+971 50 ... / +1 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      required
                      type="text"
                      className="form-input"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="AI Automation">AI Automation (Voice Agents, Chatbots, CRM & Workflows)</option>
                      <option value="Business Consultation">Business Consultation (Strategy, Growth & Operations)</option>
                      <option value="Digital Marketing">Digital Marketing (Websites, SEO & Paid Ads)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Project Notes / Current Bottlenecks
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="form-textarea"
                      placeholder="Describe what manual processes you'd like to automate or your current growth goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', fontSize: '0.78rem', color: '#64748b' }}>
                    <ShieldCheck size={16} color="#059669" />
                    <span>Your data is protected under strict enterprise confidentiality standards.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.9rem', fontSize: '1rem' }}
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
