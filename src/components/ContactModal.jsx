import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, User, MessageSquare } from 'lucide-react';
import { sendLeadSubmission } from '../lib/leadService';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendLeadSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        source: "Strategic Consultation Modal"
      });
    } catch (err) {
      console.error('Modal form submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: 'clamp(1.25rem, 4vw, 2.25rem)', border: '1px solid rgba(0,187,167,0.3)', width: 'min(580px, 92vw)' }}>
        
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
              Inquiry Received
            </h3>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.email}</strong> within 1 business day.
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
                  MaxR Technologies · Get in Touch
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                Send Us a Message
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
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
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-company">
                  Company Name (Optional)
                </label>
                <input
                  id="modal-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-input"
                  placeholder="Your Company Name (Optional)"
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
                  <option value="Voice & AI Agents">Voice & AI Agents (24/7 Phone Calling & Speech AI)</option>
                  <option value="Web Development">Web Development (High-Performance Websites & Portals)</option>
                  <option value="Mobile App Engineering">Mobile App Engineering (iOS & Android)</option>
                  <option value="Workflow Automation">Workflow Automation (Cross-App & System Integrations)</option>
                  <option value="SaaS Custom Architecture">SaaS Custom Architecture (Cloud Platforms & Multi-Tenant)</option>
                  <option value="Cloud & DevOps Scaling">Cloud & DevOps Scaling (99.9% Uptime Infrastructure)</option>
                  <option value="CRM & Lead Solutions">CRM & Lead Solutions (Instant Lead Capture & Speed-to-Lead)</option>
                  <option value="Digital Marketing & SEO">Digital Marketing & SEO (Top Google Rankings & High-ROI Ads)</option>
                  <option value="Data & BI Analytics">Data & BI Analytics (Real-Time Dashboards & KPI Reporting)</option>
                  <option value="Digital Transformation">Digital Transformation (Modernizing Enterprise Workflows)</option>
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
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
                Send Message
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
