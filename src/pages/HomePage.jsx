import React from 'react';
import { 
  Bot, 
  Smartphone, 
  Code2, 
  TrendingUp, 
  Globe2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Workflow,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Truck,
  CreditCard,
  Zap,
  Check,
  ChevronRight
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenContact }) {
  const capabilities = [
    {
      id: "ai-voice",
      icon: <Bot size={22} color="#00bba7" />,
      title: "AI Voice & Chatbots",
      desc: "24/7 inbound phone receptionists, WhatsApp automation, and multi-channel instant customer engagement."
    },
    {
      id: "web-mobile",
      icon: <Smartphone size={22} color="#38bdf8" />,
      title: "Web & Mobile Apps",
      desc: "Custom iOS/Android apps, responsive React web platforms, and lightning-fast customer digital portals."
    },
    {
      id: "software",
      icon: <Code2 size={22} color="#a855f7" />,
      title: "Custom Software",
      desc: "Bespoke SaaS tools, cloud infrastructure, secure backend architectures, and database optimizations."
    },
    {
      id: "consulting",
      icon: <TrendingUp size={22} color="#f59e0b" />,
      title: "Business Consulting",
      desc: "Operations audit, bottleneck removal, and actionable 3–6 month strategic roadmaps for 2X–5X scaling."
    }
  ];

  const services = [
    {
      id: "ai-automation",
      title: "AI Automation & Voice Agents",
      category: "AUTONOMOUS OPERATIONS",
      icon: <Bot size={28} />,
      iconColor: "#00bba7",
      iconBg: "rgba(0, 187, 167, 0.12)",
      desc: "Replace manual repetitive busywork with intelligent 24/7 conversational agents that never miss a call or lead.",
      bullets: [
        "Inbound AI Voice Receptionists (< 1s latency)",
        "WhatsApp Business API chatbots & automated flows",
        "Direct CRM sync (HubSpot, Zoho, Salesforce)"
      ],
      page: "services"
    },
    {
      id: "web-mobile-apps",
      title: "Web & Mobile Applications",
      category: "DIGITAL PRODUCTS",
      icon: <Smartphone size={28} />,
      iconColor: "#38bdf8",
      iconBg: "rgba(56, 189, 248, 0.12)",
      desc: "High-performance iOS, Android, and web applications engineered for speed, clean UX, and high conversion.",
      bullets: [
        "Cross-platform iOS & Android mobile apps",
        "React, Next.js & Node.js web applications",
        "Progressive Web Apps (PWAs) & customer portals"
      ],
      page: "services"
    },
    {
      id: "software-development",
      title: "Custom Software Development",
      category: "ENTERPRISE ENGINEERING",
      icon: <Code2 size={28} />,
      iconColor: "#a855f7",
      iconBg: "rgba(168, 85, 247, 0.12)",
      desc: "Bespoke software solutions tailored to solve specific operational friction and support high transaction volumes.",
      bullets: [
        "End-to-end custom business software & SaaS MVPs",
        "RESTful API & webhook architecture",
        "Cloud database optimization & secure microservices"
      ],
      page: "services"
    },
    {
      id: "workflow-automation",
      title: "Workflow & CRM Automation",
      category: "INTEGRATION & SCALE",
      icon: <Workflow size={28} />,
      iconColor: "#2dd4bf",
      iconBg: "rgba(45, 212, 191, 0.12)",
      desc: "Connect your disparate tools into a unified, frictionless pipeline that moves leads and data automatically.",
      bullets: [
        "Automated lead capture and calendar scheduling",
        "Multi-app sync (Zapier, Make, custom scripts)",
        "Automated invoice and notification dispatches"
      ],
      page: "services"
    },
    {
      id: "business-consultation",
      title: "Business Consultation & Strategy",
      category: "LEADERSHIP ADVISORY",
      icon: <TrendingUp size={28} />,
      iconColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.12)",
      desc: "Led by Shagul Hamithu (CEO) & Gopi Duraisamy (CTO). We audit your bottlenecks and map a 3–6 month 2X–5X growth plan.",
      bullets: [
        "Deep operational audit & software stack review",
        "Revenue friction analysis & growth roadmaps",
        "SOP streamlining & milestone-based execution"
      ],
      page: "services"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & SEO",
      category: "GROWTH ACQUISITION",
      icon: <Globe2 size={28} />,
      iconColor: "#ec4899",
      iconBg: "rgba(236, 72, 153, 0.12)",
      desc: "Modern digital presence engineered to convert. Technical SEO, high-intent paid advertising, and brand storytelling.",
      bullets: [
        "High-performance website design & CRO",
        "Technical SEO for regional and global authority",
        "Google & Meta performance ad campaigns"
      ],
      page: "services"
    }
  ];

  const industries = [
    {
      title: "Healthcare & Clinics",
      desc: "24/7 patient booking, appointment reminders, and automated clinic front desk management.",
      icon: <Stethoscope size={24} color="#00bba7" />
    },
    {
      title: "E-Commerce & Retail",
      desc: "WhatsApp order tracking, instant customer support deflection, and abandoned checkout recovery.",
      icon: <ShoppingBag size={24} color="#38bdf8" />
    },
    {
      title: "Legal & Professional Services",
      desc: "Automated client intake, preliminary qualification questions, and consultation booking.",
      icon: <Briefcase size={24} color="#a855f7" />
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Automated shipment updates, driver dispatch alerts, and multi-channel delivery confirmations.",
      icon: <Truck size={24} color="#f59e0b" />
    },
    {
      title: "FinTech & Financial Services",
      desc: "Encrypted client onboarding, automated document workflows, and proactive notification triggers.",
      icon: <CreditCard size={24} color="#2dd4bf" />
    }
  ];

  return (
    <div className="home-page" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* ── Hero Section (Sleek dark theme, NO image background, perfectly fitted for laptops) ── */}
      <section 
        className="hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          padding: 'clamp(4rem, 7vh, 6rem) 0 clamp(3.5rem, 6vh, 4.5rem)',
          background: 'linear-gradient(180deg, #060c18 0%, #071224 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Ambient Radial Gradient Mesh Glows (Zero image files) */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(0, 187, 167, 0.16) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 75%)',
            pointerEvents: 'none',
            zIndex: 1
          }} 
          aria-hidden="true" 
        />
        
        {/* Subtle Tech Grid Pattern */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
            opacity: 0.7,
            zIndex: 1
          }} 
          aria-hidden="true" 
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Main Hero Header Block (Widescreen balanced) */}
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Pill Eyebrow */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 16px', 
                borderRadius: '999px', 
                background: 'rgba(0, 187, 167, 0.12)', 
                border: '1px solid rgba(0, 187, 167, 0.3)', 
                marginBottom: '1.5rem' 
              }}
            >
              <Sparkles size={15} color="#00bba7" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                AI Automation • Web & Mobile Apps • Software Development
              </span>
            </div>

            {/* Headline */}
            <h1 
              id="hero-heading" 
              style={{ 
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)', 
                lineHeight: 1.15, 
                fontWeight: 800, 
                color: '#ffffff', 
                marginBottom: '1.4rem',
                letterSpacing: '-0.03em'
              }}
            >
              AI Automation & Software That Build. <br />
              <span style={{ background: 'linear-gradient(135deg, #00bba7 0%, #38bdf8 60%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                You Grow.
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
                color: '#cbd5e1', 
                lineHeight: 1.65, 
                maxWidth: '740px', 
                margin: '0 auto 2.25rem' 
              }}
            >
              We engineer intelligent <strong>AI voice agents</strong>, custom <strong>web & mobile applications</strong>, scalable <strong>software architectures</strong>, and <strong>business consulting roadmaps</strong> that help modern enterprises scale without operational friction.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
              <button 
                onClick={onOpenContact}
                className="btn-primary" 
                style={{ 
                  background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)', 
                  boxShadow: '0 8px 26px rgba(0, 187, 167, 0.35)', 
                  padding: '0.95rem 2.25rem', 
                  fontSize: '1rem',
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
                  padding: '0.95rem 2.25rem', 
                  fontSize: '1rem',
                  borderRadius: '10px'
                }}
              >
                Explore All Services
              </button>
            </div>

          </div>

          {/* ── Laptop-Fit Capability Cards Deck (Wide 4-Column Strip) ── */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1.25rem',
              marginTop: '1rem'
            }}
          >
            {capabilities.map((item) => (
              <div 
                key={item.id}
                onClick={() => onNavigate('services')}
                style={{
                  background: 'rgba(10, 20, 38, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.4rem 1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 187, 167, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 187, 167, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.65rem' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Key Trust Highlights Strip ── */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '1.5rem', 
              paddingTop: '2.5rem', 
              marginTop: '2.5rem', 
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2dd4bf' }}>&lt; 7 Days</div>
              <div style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '2px' }}>Rapid Deployment</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2dd4bf' }}>99.9%</div>
              <div style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '2px' }}>Infrastructure Uptime</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2dd4bf' }}>145%</div>
              <div style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '2px' }}>Average Client Growth</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2dd4bf' }}>Bank-Grade</div>
              <div style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '2px' }}>End-to-End Data Security</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Core Services Stack (Comprehensive from maxr.io) ── */}
      <section style={{ padding: 'clamp(4rem, 7vh, 5.5rem) 0', background: '#ffffff', flex: 1 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              OUR CORE CAPABILITIES
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: '#0a1428', fontWeight: 800, marginTop: '0.4rem', letterSpacing: '-0.02em' }}>
              What We Do at MaxR
            </h2>
            <p style={{ color: '#64748b', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1.05rem', lineHeight: 1.6 }}>
              From intelligent AI agents to full-stack web & mobile apps and strategic growth roadmaps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map((item) => (
              <div 
                key={item.id}
                style={{ 
                  background: '#f8fafc', 
                  padding: '2.25rem 2rem', 
                  borderRadius: '20px', 
                  border: '1px solid #e2e8f0', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  cursor: 'pointer', 
                  transition: 'all 0.25s ease' 
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
                onClick={() => onNavigate(item.page)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: 54, height: 54, borderRadius: '14px', background: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', color: '#64748b', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.75rem', flex: 1 }}>
                  {item.bullets.map((b, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
                      <Check size={15} color="#00bba7" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00bba7', fontWeight: 700, fontSize: '0.9rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                  Explore Details <ArrowRight size={15} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Industries We Serve (Completely clean of Real Estate) ── */}
      <section style={{ padding: 'clamp(4rem, 6vh, 5rem) 0', background: '#f1f5f9', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              INDUSTRY DOMAINS
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.4rem)', color: '#0a1428', fontWeight: 800, marginTop: '0.4rem', letterSpacing: '-0.02em' }}>
              Engineered for Real-World Workflows
            </h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1rem', lineHeight: 1.6 }}>
              Tailored software and automation pipelines built for high-demand business environments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate('industries')}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = '#00bba7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0, 187, 167, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {ind.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.4rem' }}>
                  {ind.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Action Banner ── */}
      <section style={{ padding: 'clamp(3.5rem, 6vh, 4.5rem) 0', background: '#070d1a', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Ready to Build Your Automation & Software Roadmap?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem' }}>
            Speak directly with our engineering and consulting team to identify high-ROI automations, custom applications, and growth pipelines.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary" 
              style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.9rem 2.25rem', fontSize: '1rem' }}
            >
              Book Discovery Session
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn-outline-white" 
              style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
