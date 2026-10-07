import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, User, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "AI Automation (Voice Agents, Chatbots, CRM & Workflows)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "AI Automation (Voice Agents, Chatbots, CRM & Workflows)",
      message: ""
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.25rem', border: '1px solid rgba(0,187,167,0.3)' }}>
        
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.5rem' }}>
              Consultation Requested
            </h3>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you, <strong>{formData.name}</strong>. A MaxR consultant will contact you at <strong>{formData.email}</strong> within 1 business day.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#334155' }}>
              <p><strong>Service Focus:</strong> {formData.service}</p>
              <p><strong>Organization:</strong> {formData.company || 'Enterprise'}</p>
              <p><strong>Timeline:</strong> Rapid deployment in &lt; 7 days</p>
            </div>

            <button onClick={handleReset} className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#00bba7', color: '#040811', fontWeight: 700 }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: 'rgba(0,187,167,0.12)', borderRadius: '6px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
                  MaxR Technologies · Consultation
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                Schedule a Discovery Session
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.35rem' }}>
                Discuss AI automations, operational optimization, or digital growth for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-name">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="e.g. Tariq Mansoor"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-email">
                    Business Email *
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="tariq@company.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    placeholder="+971 50 ... / +1 ..."
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-company">
                  Company Name *
                </label>
                <input
                  id="modal-company"
                  required
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-input"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-service">
                  Service of Interest
                </label>
                <select
                  id="modal-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="form-select"
                >
                  <option value="AI Automation (Voice Agents, Chatbots, CRM & Workflows)">AI Automation (Voice Agents, Chatbots, CRM & Workflows)</option>
                  <option value="Business Consultation (Strategy, Growth & Operations)">Business Consultation (Strategy, Growth & Operations)</option>
                  <option value="Digital Marketing (Websites, SEO & Paid Ads)">Digital Marketing (Websites, SEO & Paid Ads)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-message">
                  Briefly describe your requirements
                </label>
                <textarea
                  id="modal-message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  placeholder="Outline key operational bottlenecks or automation goals..."
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: '#64748b', fontSize: '0.75rem' }}>
                <ShieldCheck size={16} color="#059669" />
                <span>Protected under mutual confidentiality standards. Go live in under 7 days.</span>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '0.85rem', background: '#00bba7', color: '#040811', fontWeight: 700 }}
              >
                <Send size={16} />
                Submit Discovery Request
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
