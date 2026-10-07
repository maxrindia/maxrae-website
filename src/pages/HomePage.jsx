import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Globe2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Bot,
  Layers,
  BarChart3,
  Check
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenContact }) {
  return (
    <div className="home-page" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* ── Hero Section (Balanced 2-Column Layout that fits the viewport) ── */}
      <section 
        className="hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          padding: 'clamp(3.5rem, 6vh, 5.5rem) 0 clamp(3rem, 5vh, 4rem)',
          display: 'flex',
          alignItems: 'center',
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 187, 167, 0.18), transparent 70%), #070d1a'
        }}
      >
        <div 
          className="hero-bg-overlay" 
          style={{ 
            backgroundImage: "url('/assets/images/ai-hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08
          }} 
          aria-hidden="true" 
        />
        <div className="hero-gradient-overlay" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2rem, 4vw, 3.5rem)', 
              alignItems: 'center' 
            }}
          >
            {/* Left Column: Core Value Proposition */}
            <div>
              {/* Eyebrow Badge */}
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  borderRadius: '999px', 
                  background: 'rgba(0, 187, 167, 0.12)', 
                  border: '1px solid rgba(0, 187, 167, 0.3)', 
                  marginBottom: '1.25rem' 
                }}
              >
                <Sparkles size={14} color="#00bba7" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  AI Automation & Growth Systems
                </span>
              </div>

              {/* Main Headline */}
              <h1 
                id="hero-heading" 
                style={{ 
                  fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', 
                  lineHeight: 1.15, 
                  fontWeight: 800, 
                  color: '#ffffff', 
                  marginBottom: '1.2rem',
                  letterSpacing: '-0.025em'
                }}
              >
                AI Automation That Builds. <br />
                <span style={{ background: 'linear-gradient(135deg, #00bba7 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  You Grow.
                </span>
              </h1>

              {/* Subheadline */}
              <p 
                style={{ 
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', 
                  color: '#cbd5e1', 
                  lineHeight: 1.65, 
                  maxWidth: '560px', 
                  marginBottom: '2rem' 
                }}
              >
                We help ambitious businesses scale through <strong>AI automation</strong>, strategic <strong>business consultation</strong>, and <strong>growth systems</strong>. Turn manual operations into high-performing digital infrastructure.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.25rem' }}>
                <button 
                  onClick={onOpenContact}
                  className="btn-primary" 
                  style={{ 
                    background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)', 
                    boxShadow: '0 8px 24px rgba(0, 187, 167, 0.35)', 
                    padding: '0.85rem 1.85rem', 
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '10px'
                  }}
                >
                  Book a Consultation
                  <ArrowRight size={17} />
                </button>

                <button 
                  onClick={() => onNavigate('services')}
                  className="btn-outline-white"
                  style={{ 
                    borderColor: 'rgba(255,255,255,0.22)', 
                    padding: '0.85rem 1.85rem', 
                    fontSize: '0.95rem',
                    borderRadius: '10px'
                  }}
                >
                  Explore What We Do
                </button>
              </div>

              {/* Key Highlights */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                  gap: '1rem', 
                  paddingTop: '1.5rem', 
                  borderTop: '1px solid rgba(255,255,255,0.08)' 
                }}
              >
                <div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#2dd4bf' }}>&lt; 7 Days</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>Rapid Launch</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#2dd4bf' }}>99.9%</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>System Uptime</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#2dd4bf' }}>145%</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>Avg Client Growth</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#2dd4bf' }}>Bank-Grade</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>Data Security</div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Automation Terminal Card */}
            <div>
              <div 
                style={{ 
                  background: 'rgba(10, 20, 40, 0.75)', 
                  border: '1px solid rgba(0, 187, 167, 0.28)', 
                  borderRadius: '20px', 
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45), 0 0 40px rgba(0, 187, 167, 0.1)', 
                  overflow: 'hidden',
                  backdropFilter: 'blur(16px)'
                }}
              >
                {/* Terminal Header */}
                <div 
                  style={{ 
                    padding: '1rem 1.25rem', 
                    background: 'rgba(7, 13, 26, 0.85)', 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginLeft: '6px' }}>
                      MaxR Automation Architecture
                    </span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                    <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700 }}>LIVE</span>
                  </div>
                </div>

                {/* Workflow Simulation Items */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  {/* Step 1 */}
                  <div 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.06)', 
                      borderRadius: '12px', 
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(0, 187, 167, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={20} color="#00bba7" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>24/7 AI Inbound Receptionist</span>
                        <span style={{ fontSize: '0.7rem', color: '#2dd4bf', background: 'rgba(0,187,167,0.15)', padding: '1px 6px', borderRadius: '4px' }}>&lt; 1s Response</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                        Answers voice calls & WhatsApp inquiries, qualifies intent, and eliminates hold times.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.06)', 
                      borderRadius: '12px', 
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Layers size={20} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>CRM & Pipeline Synchronization</span>
                        <span style={{ fontSize: '0.7rem', color: '#38bdf8', background: 'rgba(56,189,248,0.15)', padding: '1px 6px', borderRadius: '4px' }}>Auto-Synced</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                        Instantly populates client data into Hubspot, Zoho, or Salesforce and books meetings.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.06)', 
                      borderRadius: '12px', 
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <BarChart3 size={20} color="#c084fc" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>Strategic Consultation & Scaling</span>
                        <span style={{ fontSize: '0.7rem', color: '#c084fc', background: 'rgba(168,85,247,0.15)', padding: '1px 6px', borderRadius: '4px' }}>Proven Playbook</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                        Led by Shagul Hamithu & Gopi Duraisamy to eliminate bottlenecks and compound revenue.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Terminal Footer */}
                <div 
                  style={{ 
                    padding: '0.85rem 1.25rem', 
                    background: 'rgba(0, 187, 167, 0.08)', 
                    borderTop: '1px solid rgba(0, 187, 167, 0.2)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                    Ready to build your automation roadmap?
                  </span>
                  <button 
                    onClick={onOpenContact}
                    style={{ 
                      fontSize: '0.8rem', 
                      color: '#2dd4bf', 
                      fontWeight: 700, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer' 
                    }}
                  >
                    Start Now <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Services (The 3 Real Pillars on maxr.io) ── */}
      <section style={{ padding: 'clamp(3.5rem, 6vh, 4.5rem) 0', background: '#ffffff', flex: 1 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              OUR SERVICES
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.4rem)', color: '#0a1428', fontWeight: 800, marginTop: '0.35rem', letterSpacing: '-0.02em' }}>
              What We Do at MaxR
            </h2>
            <p style={{ color: '#64748b', maxWidth: '580px', margin: '0.5rem auto 0', fontSize: '1rem', lineHeight: 1.6 }}>
              Three interconnected pillars designed to modernize your operations and scale your revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.75rem' }}>
            
            {/* Pillar 1: AI Automation */}
            <div 
              style={{ 
                background: '#f8fafc', 
                padding: '2.25rem 1.75rem', 
                borderRadius: '18px', 
                border: '1px solid #e2e8f0', 
                display: 'flex', 
                flexDirection: 'column', 
                cursor: 'pointer', 
                transition: 'transform 0.25s, box-shadow 0.25s' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
              onClick={() => onNavigate('services')}
            >
              <div style={{ width: 52, height: 52, borderRadius: '13px', background: 'rgba(0,187,167,0.12)', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.35rem' }}>
                AI Automation
              </h3>
              <p style={{ color: '#00bba7', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                Voice agents, chatbots, CRM & workflows
              </p>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                Replace manual busywork with intelligent systems. Inbound phone receptionists that never miss calls, automated lead capture via WhatsApp, and seamless CRM synchronization.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00bba7', fontWeight: 700, fontSize: '0.9rem' }}>
                Explore AI Automation <ArrowRight size={15} />
              </div>
            </div>

            {/* Pillar 2: Business Consultation */}
            <div 
              style={{ 
                background: '#f8fafc', 
                padding: '2.25rem 1.75rem', 
                borderRadius: '18px', 
                border: '1px solid #e2e8f0', 
                display: 'flex', 
                flexDirection: 'column', 
                cursor: 'pointer', 
                transition: 'transform 0.25s, box-shadow 0.25s' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
              onClick={() => onNavigate('services')}
            >
              <div style={{ width: 52, height: 52, borderRadius: '13px', background: 'rgba(0,187,167,0.12)', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <TrendingUp size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.35rem' }}>
                Business Consultation
              </h3>
              <p style={{ color: '#00bba7', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                Strategy, growth & operational optimization
              </p>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                Led by Founder & CEO <strong>Shagul Hamithu</strong> and CTO <strong>Gopi Duraisamy</strong>. We audit your business bottlenecks, identify revenue growth opportunities, and build an actionable 3- to 6-month roadmap.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00bba7', fontWeight: 700, fontSize: '0.9rem' }}>
                Explore Consultation <ArrowRight size={15} />
              </div>
            </div>

            {/* Pillar 3: Digital Marketing */}
            <div 
              style={{ 
                background: '#f8fafc', 
                padding: '2.25rem 1.75rem', 
                borderRadius: '18px', 
                border: '1px solid #e2e8f0', 
                display: 'flex', 
                flexDirection: 'column', 
                cursor: 'pointer', 
                transition: 'transform 0.25s, box-shadow 0.25s' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
              onClick={() => onNavigate('services')}
            >
              <div style={{ width: 52, height: 52, borderRadius: '13px', background: 'rgba(0,187,167,0.12)', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Globe2 size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.35rem' }}>
                Digital Marketing
              </h3>
              <p style={{ color: '#00bba7', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                Websites, SEO, social media & paid ads
              </p>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                High-performance digital presence engineered to convert. Modern branding, technical search optimization, and performance marketing pipelines that drive qualified inbound leads.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00bba7', fontWeight: 700, fontSize: '0.9rem' }}>
                Explore Digital Marketing <ArrowRight size={15} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Action Banner ── */}
      <section style={{ padding: 'clamp(3rem, 5vh, 4rem) 0', background: '#070d1a', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Ready to Automate & Scale Your Business?
          </h2>
          <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Speak directly with our team to explore tailored automations, CRM workflows, and growth systems for your company.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary" 
              style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.85rem 1.85rem', fontSize: '0.95rem' }}
            >
              Book Discovery Session
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn-outline-white" 
              style={{ padding: '0.85rem 1.85rem', fontSize: '0.95rem' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
