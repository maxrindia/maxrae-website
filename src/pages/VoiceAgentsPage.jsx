import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Globe2, 
  Sparkles, 
  Clock, 
  Bot,
  Database,
  Calendar
} from 'lucide-react';
import TechBadge from '../components/TechLogos';

export default function VoiceAgentsPage({ onOpenContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const voiceServices = [
    {
      icon: PhoneCall,
      title: "24/7 Autonomous Inbound Reception",
      description: "Answers phone lines instantly with sub-500ms latency. Greets callers, triages urgent inquiries, and routes high-value VIP calls."
    },
    {
      icon: Zap,
      title: "Speed-to-Lead Outbound Qualification",
      description: "Auto-dials new web leads within 45 seconds of form submission. Qualifies budget, intent, and timeline before scheduling calendar appointments."
    },
    {
      icon: Calendar,
      title: "Live CRM & Calendar Slot Booking",
      description: "Direct real-time two-way sync with Google Calendar, Outlook, Zoho, HubSpot, and Salesforce. Locks booking slots on the call."
    },
    {
      icon: Globe2,
      title: "Bilingual English & Arabic Dialects",
      description: "Natural accent adaptation across Gulf Arabic and enterprise English, with human-like turn-taking and graceful interruption handling."
    },
    {
      icon: Database,
      title: "Instant Post-Call Action Automations",
      description: "Triggers automated WhatsApp confirmations, creates CRM deal tickets, logs structured call summaries, and updates pipeline statuses."
    },
    {
      icon: Bot,
      title: "Custom Domain Knowledge Integration",
      description: "Trained strictly on your product catalog, clinical pricing, service menus, and FAQ vectors with zero hallucination guardrails."
    }
  ];

  const voiceTechStack = [
    "Zoho",
    "n8n",
    "Zapier",
    "Make.com",
    "Twilio",
    "OpenAI API",
    "Retell AI",
    "ElevenLabs",
    "Vapi",
    "Calendly",
    "HubSpot",
    "Salesforce"
  ];

  return (
    <div className="voice-agents-page" style={{ background: '#FAFBFB', minHeight: '100vh', color: '#080607' }}>
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. COMPACT HERO SECTION
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F9F7 100%)', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(2.5rem, 4vw, 3.5rem) 0 clamp(2rem, 3vw, 3rem) 0',
          position: 'relative'
        }}
      >
        <div className="container">
          
          {/* Micro Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', fontSize: '0.825rem' }}>
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <Link to="/services" style={{ color: '#008779', textDecoration: 'none', fontWeight: 700 }}>Services</Link>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <Link to="/services/voice-agents" style={{ color: '#080607', textDecoration: 'none', fontWeight: 700 }}>Voice AI Agents</Link>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center' 
            }}
          >
            {/* Left Content Column */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#008779' }}>
                  AUTONOMOUS VOICE & AI AGENTS
                </span>
              </div>

              <h1 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)', 
                  fontWeight: 900, 
                  letterSpacing: '-0.035em', 
                  lineHeight: 1.15, 
                  color: '#080607', 
                  margin: '0 0 1rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                Enterprise Voice & AI Agents That Never Miss a Lead
              </h1>

              <p 
                style={{ 
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)', 
                  color: '#475569', 
                  lineHeight: 1.6, 
                  margin: '0 0 1.75rem 0',
                  fontWeight: 450,
                  maxWidth: '560px'
                }}
              >
                We build human-like AI voice agents with sub-500ms latency. They handle inbound calls, qualify outbound leads, and book slots directly in your CRM 24 hours a day.
              </p>

              {/* Action Button */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1.75rem' }}>
                <button
                  type="button"
                  onClick={onOpenContact}
                  style={{
                    backgroundColor: '#00bba7',
                    color: '#080607',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.8rem 1.6rem',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 6px 18px rgba(0, 187, 167, 0.25)',
                    transition: 'all 0.2s ease',
                    fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00a392';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#00bba7';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Build Your Voice Agent</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Compact Inline Metric Badges */}
              <div 
                style={{ 
                  display: 'inline-flex', 
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '10px 16px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(8, 6, 7, 0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#008779', fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" }}>
                    &lt; 450ms
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Response Latency</span>
                </div>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#008779', fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" }}>
                    100%
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Call Coverage</span>
                </div>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#008779', fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" }}>
                    3.8×
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Booking Conversion</span>
                </div>
              </div>
            </div>

            {/* Right Media Preview */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  borderRadius: '18px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px -10px rgba(8, 6, 7, 0.12)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  maxHeight: '340px',
                  background: '#080607'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Voice and AI Agents" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                
                {/* Subtle Overlay Badge */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    left: '1rem', 
                    right: '1rem', 
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#008779', fontSize: '0.8rem', fontWeight: 800 }}>
                    <Sparkles size={15} />
                    <span>MaxR Enterprise AI Voice</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#080607', fontWeight: 700 }}>
                    Real-Time SIP & CRM Sync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. WHAT SERVICES WE PROVIDE: VOICE & AI AGENT SERVICES + TECH STACK
          ═════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              alignItems: 'start'
            }}
          >
            {/* Left: What Voice & AI Agent Services We Deliver */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '14px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#008779' }}>
                  VOICE & AI AGENT SERVICES
                </span>
              </div>
              <h2 
                style={{ 
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', 
                  fontWeight: 900, 
                  color: '#080607', 
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  margin: '0 0 1.75rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                What We Build & Deliver in Voice AI
              </h2>

              {/* Numbered Strip List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {voiceServices.map((service, idx) => {
                  const IconComp = service.icon || Bot;
                  return (
                    <div 
                      key={idx}
                      style={{
                        padding: '1.1rem 1.25rem',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        border: '1px solid #E8ECEB',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        transition: 'all 0.2s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00bba7';
                        e.currentTarget.style.backgroundColor = '#F8FCFA';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E8ECEB';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <div 
                        style={{ 
                          width: '34px', 
                          height: '34px', 
                          borderRadius: '8px', 
                          backgroundColor: 'rgba(0, 187, 167, 0.1)', 
                          color: '#008779',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <IconComp size={18} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                            {service.title}
                          </h3>
                          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94A3B8', fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" }}>
                            0{idx + 1}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Automation & Telephony Tech Stack (Zoho, n8n, Zapier, Make, Twilio, etc.) */}
            <div 
              style={{ 
                background: '#FFFFFF', 
                border: '1.5px solid #E2E8F0', 
                borderRadius: '18px', 
                padding: '2rem 1.75rem',
                boxShadow: '0 4px 20px rgba(8, 6, 7, 0.03)'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '14px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#008779' }}>
                  AUTOMATION & TELEPHONY LOGOS
                </span>
              </div>
              
              <h3 
                style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: 900, 
                  color: '#080607', 
                  letterSpacing: '-0.02em', 
                  margin: '0 0 0.5rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                Integrated Tools & AI Engines
              </h3>

              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 1.5rem 0' }}>
                Direct webhooks and native connectors to Zoho, n8n, Zapier, Make, and enterprise SIP telephony.
              </p>

              {/* Tech Badges with Brand SVG Logos */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.75rem' }}>
                {voiceTechStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

              {/* Verified Voice Standards */}
              <div 
                style={{ 
                  borderTop: '1px solid #F1F5F9', 
                  paddingTop: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {[
                  "Natural interruption & graceful human handoff",
                  "Dedicated UAE / US / UK phone numbers with instant SIP trunking",
                  "100% HIPAA and enterprise call encryption standards"
                ].map((std, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155', fontWeight: 600 }}>
                    <CheckCircle2 size={15} color="#00bba7" style={{ flexShrink: 0 }} />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          3. 1-LINE HORIZONTAL DEPLOYMENT STEPPER
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderTop: '1px solid #E1E8E5', 
          borderBottom: '1px solid #E1E8E5', 
          padding: 'clamp(2.5rem, 4vw, 3.25rem) 0' 
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#008779', display: 'block', marginBottom: '4px' }}>
                HOW WE DEPLOY
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                Voice Agent Launch Process
              </h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
              Live in under 7 business days
            </span>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.25rem'
            }}
          >
            {[
              { step: "01", title: "Script & Persona Design", desc: "We map your FAQs, objections, and conversation branch logic." },
              { step: "02", title: "CRM & Tool Integration", desc: "Connect webhooks to Zoho, n8n, Make, and your calendar booking links." },
              { step: "03", title: "Latency & Audio Tuning", desc: "We tune turn-taking pauses and test edge phone line clarity." },
              { step: "04", title: "Live SIP Number Routing", desc: "Deploy your dedicated inbound/outbound business numbers." }
            ].map((p, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.25rem 1.15rem',
                  backgroundColor: '#F8FAF9',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)", fontSize: '1.2rem', fontWeight: 900, color: '#00bba7' }}>
                    {p.step}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B' }}>
                    PHASE 0{idx + 1}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: '0 0 0.35rem 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          4. CONCISE DOUBLE-ROW CTA STRIP
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#080607', 
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          padding: 'clamp(2.5rem, 4vw, 3.25rem) 0',
          position: 'relative',
          color: '#FFFFFF'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '2rem', 
              flexWrap: 'wrap' 
            }}
          >
            {/* Left side: Double-Row (Line 1 Headline, Line 2 Subtitle) */}
            <div style={{ flex: '1 1 auto', maxWidth: '760px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ width: '14px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#54CFB0' }}>
                  START YOUR PROJECT
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', 
                  fontWeight: 900, 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.2, 
                  color: '#FFFFFF',
                  margin: '0 0 0.4rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                Ready to Deploy Voice & AI Agents for Your Business?
              </h2>

              <p 
                style={{ 
                  fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', 
                  color: 'rgba(255, 255, 255, 0.78)', 
                  lineHeight: 1.5, 
                  margin: 0 
                }}
              >
                No commitment. Speak directly with our AI telephony team to get a scoped deployment roadmap.
              </p>
            </div>

            {/* Right side: Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={onOpenContact}
                style={{
                  backgroundColor: '#00bba7',
                  color: '#080607',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.85rem 1.85rem',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 20px rgba(0, 187, 167, 0.35)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00a392';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Schedule Scoping Session</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
