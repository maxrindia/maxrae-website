import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Workflow, 
  Database, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Sliders, 
  BarChart3, 
  Globe, 
  Stethoscope, 
  ShoppingBag, 
  Briefcase, 
  Truck, 
  CreditCard,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenContact }) {
  const valueProps = [
    {
      icon: <Zap size={22} color="#00bba7" />,
      title: "AI-POWERED",
      desc: "Intelligent solutions for modern businesses"
    },
    {
      icon: <Sliders size={22} color="#00bba7" />,
      title: "AUTOMATION-LED",
      desc: "Reduce manual work and improve efficiency"
    },
    {
      icon: <BarChart3 size={22} color="#00bba7" />,
      title: "BUSINESS-FOCUSED",
      desc: "Solutions designed for real outcomes"
    },
    {
      icon: <Globe size={22} color="#00bba7" />,
      title: "SCALABLE",
      desc: "For startups to enterprises"
    }
  ];

  const coreCapabilities = [
    {
      num: "01",
      title: "AI & Automation",
      desc: "AI agents, chatbots, voice agents, workflow automation and CRM integration to streamline your business.",
      image: "/assets/images/card-ai-automation.jpg",
      page: "services"
    },
    {
      num: "02",
      title: "Digital Transformation",
      desc: "Modern web and mobile applications, system integrations and digital solutions to future-proof your business.",
      image: "/assets/images/card-digital-trans.jpg",
      page: "services"
    },
    {
      num: "03",
      title: "Digital Growth",
      desc: "Data-driven marketing, SEO, social media, branding and performance campaigns to accelerate your business.",
      image: "/assets/images/card-digital-growth.jpg",
      page: "services"
    }
  ];

  const floatingPills = [
    { icon: <Bot size={15} color="#00bba7" />, label: "AI Agents" },
    { icon: <Workflow size={15} color="#00bba7" />, label: "Automation" },
    { icon: <Database size={15} color="#00bba7" />, label: "CRM & Integrations" },
    { icon: <MessageSquare size={15} color="#00bba7" />, label: "Customer Engagement" },
    { icon: <TrendingUp size={15} color="#00bba7" />, label: "Business Growth" }
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
      icon: <ShoppingBag size={24} color="#00bba7" />
    },
    {
      title: "Legal & Professional Services",
      desc: "Automated client intake, preliminary qualification questions, and consultation booking.",
      icon: <Briefcase size={24} color="#00bba7" />
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Automated shipment updates, driver dispatch alerts, and multi-channel delivery confirmations.",
      icon: <Truck size={24} color="#00bba7" />
    },
    {
      title: "FinTech & Financial Services",
      desc: "Encrypted client onboarding, automated document workflows, and proactive notification triggers.",
      icon: <CreditCard size={24} color="#00bba7" />
    }
  ];

  return (
    <div className="home-page" style={{ minHeight: '100%', background: '#ffffff', color: '#0f172a' }}>
      
      {/* ── HERO SECTION (Light Theme, Split View Matching Uploaded Mockup) ── */}
      <section 
        className="hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          padding: 'clamp(3.5rem, 6vh, 5.5rem) 0 clamp(3rem, 5vh, 4.5rem)',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
              gap: 'clamp(2rem, 5vw, 4rem)', 
              alignItems: 'center' 
            }}
          >
            
            {/* Left Column: Headline, Copy & CTAs */}
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <span style={{ height: '2px', width: '24px', background: '#00bba7', display: 'inline-block' }}></span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  MAXR TECHNOLOGIES
                </span>
              </div>

              {/* Master Headline */}
              <h1 
                style={{ 
                  fontSize: 'clamp(2.7rem, 5vw, 4.2rem)', 
                  fontWeight: 900, 
                  lineHeight: 1.12, 
                  color: '#0f172a', 
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em'
                }}
              >
                Intelligent<br />
                Technology.<br />
                <span style={{ color: '#00bba7' }}>Real Business Impact.</span>
              </h1>

              {/* Subtitle */}
              <p 
                style={{ 
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', 
                  color: '#475569', 
                  lineHeight: 1.65, 
                  maxWidth: '540px', 
                  marginBottom: '2.25rem' 
                }}
              >
                AI, automation and digital solutions that help businesses operate smarter, engage customers better and scale with confidence.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <button 
                  onClick={onOpenContact} 
                  className="btn-primary"
                  style={{ 
                    background: '#00bba7', 
                    color: '#ffffff', 
                    fontWeight: 700, 
                    fontSize: '1rem', 
                    padding: '0.85rem 1.85rem', 
                    borderRadius: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 24px rgba(0, 187, 167, 0.28)',
                    transition: 'all 0.2s'
                  }}
                >
                  Book a Consultation
                  <ArrowRight size={17} />
                </button>

                <button 
                  onClick={() => onNavigate('services')} 
                  style={{ 
                    background: '#ffffff', 
                    color: '#0f172a', 
                    fontWeight: 700, 
                    fontSize: '1rem', 
                    padding: '0.85rem 1.85rem', 
                    borderRadius: '10px',
                    border: '1.5px solid #0f172a',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00bba7';
                    e.currentTarget.style.color = '#00bba7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#0f172a';
                    e.currentTarget.style.color = '#0f172a';
                  }}
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Social Proof */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex' }}>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Client" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #ffffff', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Client" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #ffffff', marginLeft: -10, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="Client" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #ffffff', marginLeft: -10, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" alt="Client" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #ffffff', marginLeft: -10, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                    <span style={{ color: '#f59e0b', fontSize: '0.85rem' }}>★★★★★</span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0f172a' }}>4.9/5 Rating</span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#475569', fontWeight: 600 }}>
                    Trusted by 50+ growing businesses across the UAE and global markets.
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Terrace Skyline & Connected Tech Hub */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  position: 'relative', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 24px 50px rgba(15, 23, 42, 0.12)',
                  border: '1px solid #e2e8f0',
                  aspectRatio: '16/11',
                  background: '#0a1428'
                }}
              >
                {/* Panoramic Terrace & Dubai Skyline Background */}
                <img 
                  src="/assets/images/dubai-skyline.jpg" 
                  alt="MaxR Tech Terrace" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center',
                    display: 'block'
                  }} 
                />

                {/* Subtle dark gradient overlay to make floating glass cards pop */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'radial-gradient(circle at 75% 45%, rgba(0, 187, 167, 0.15), transparent 60%), linear-gradient(180deg, rgba(10,20,40,0.1) 0%, rgba(10,20,40,0.4) 100%)',
                    pointerEvents: 'none'
                  }} 
                />

                {/* Floating Card: Top Left */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '8%', 
                    left: '6%', 
                    background: 'rgba(255, 255, 255, 0.92)', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '14px',
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,187,167,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00bba7' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600 }}>From Ideas</div>
                    <div style={{ fontSize: '0.78rem', color: '#0f172a', fontWeight: 800 }}>to Intelligent Systems</div>
                  </div>
                </div>

                {/* Central Glowing MaxR "X" Node */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '38%', 
                    left: '52%', 
                    transform: 'translate(-50%, -50%)',
                    width: 58, 
                    height: 58, 
                    borderRadius: '50%', 
                    background: '#040811',
                    border: '2px solid #00bba7',
                    boxShadow: '0 0 30px rgba(0, 187, 167, 0.7), 0 0 60px rgba(0, 187, 167, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 5
                  }}
                >
                  <span style={{ color: '#00bba7', fontWeight: 900, fontSize: '1.4rem', fontFamily: 'sans-serif' }}>
                    ✕
                  </span>
                </div>

                {/* Floating Card: Bottom Left */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '10%', 
                    left: '6%', 
                    background: 'rgba(255, 255, 255, 0.92)', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '14px',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.12)'
                  }}
                >
                  <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(0,187,167,0.12)' }}>
                    <BarChart3 size={18} color="#00bba7" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Smarter Operations</div>
                    <div style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 800 }}>Higher Growth</div>
                  </div>
                  {/* Miniature Green Growth Bars */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '22px', marginLeft: '6px' }}>
                    <div style={{ width: 4, height: '35%', background: '#00bba7', borderRadius: '2px' }} />
                    <div style={{ width: 4, height: '50%', background: '#00bba7', borderRadius: '2px' }} />
                    <div style={{ width: 4, height: '70%', background: '#00bba7', borderRadius: '2px' }} />
                    <div style={{ width: 4, height: '90%', background: '#00bba7', borderRadius: '2px' }} />
                    <div style={{ width: 4, height: '100%', background: '#10b981', borderRadius: '2px' }} />
                  </div>
                </div>

                {/* Floating Right Vertical Stack of Glass Pills */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    right: '4%', 
                    top: '8%', 
                    bottom: '8%',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    gap: '6px',
                    zIndex: 6
                  }}
                >
                  {floatingPills.map((pill, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.94)', 
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.85)',
                        borderRadius: '999px',
                        padding: '6px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.08)'
                      }}
                    >
                      <div style={{ padding: '4px', borderRadius: '50%', background: 'rgba(0,187,167,0.12)' }}>
                        {pill.icon}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap' }}>
                        {pill.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUE PROPS STRIP (Matching Uploaded Mockup) ── */}
      <section 
        style={{ 
          background: '#ffffff', 
          borderTop: '1px solid #e2e8f0', 
          borderBottom: '1px solid #e2e8f0',
          padding: '1.75rem 0'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {valueProps.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px',
                  borderRight: idx < valueProps.length - 1 ? '1px solid #f1f5f9' : 'none',
                  paddingRight: '1rem'
                }}
              >
                <div 
                  style={{ 
                    width: 46, 
                    height: 46, 
                    borderRadius: '50%', 
                    background: 'rgba(0, 187, 167, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.04em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px', lineHeight: 1.4 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── "WHAT WE DO AT MAXR" CORE CAPABILITIES (Matching Uploaded Mockup) ── */}
      <section style={{ padding: 'clamp(4rem, 7vh, 6rem) 0', background: '#f8fafc' }}>
        <div className="container">
          
          {/* Header Row: Title on Left, Description on Right */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'flex-end', 
              justifyContent: 'space-between', 
              gap: '2rem',
              marginBottom: '3.5rem' 
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                OUR CORE CAPABILITIES
              </span>
              <h2 
                style={{ 
                  fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', 
                  fontWeight: 900, 
                  color: '#0f172a', 
                  marginTop: '0.4rem',
                  letterSpacing: '-0.025em' 
                }}
              >
                What We Do at MaxR
              </h2>
            </div>

            <div style={{ maxWidth: '480px' }}>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                We combine AI, automation, digital technology and strategic consulting to help businesses grow, operate efficiently and stay ahead in a fast-changing world.
              </p>
              <button 
                onClick={() => onNavigate('services')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#00bba7', 
                  fontWeight: 700, 
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                View All Services <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* 3 Isometric Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {coreCapabilities.map((card, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate(card.page)}
                style={{ 
                  background: '#ffffff', 
                  borderRadius: '22px', 
                  border: '1px solid #e2e8f0', 
                  padding: '2.5rem 2rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  cursor: 'pointer', 
                  transition: 'all 0.28s ease',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#00bba7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Number Badge */}
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.75rem' }}>
                  {card.num}
                </span>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                  {card.desc}
                </p>

                {/* 3D Isometric Generated Image */}
                <div 
                  style={{ 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    marginBottom: '1.5rem',
                    background: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px'
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain', 
                      display: 'block' 
                    }} 
                  />
                </div>

                {/* Action Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00bba7', fontWeight: 700, fontSize: '0.9rem' }}>
                  Learn More <ArrowRight size={15} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE (Light Clean Theme) ── */}
      <section style={{ padding: 'clamp(4rem, 6vh, 5.5rem) 0', background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              INDUSTRY DOMAINS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: 900, color: '#0f172a', marginTop: '0.4rem', letterSpacing: '-0.02em' }}>
              Engineered for Real-World Workflows
            </h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1rem', lineHeight: 1.6 }}>
              Tailored software and automation pipelines built for high-demand business environments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate('industries')}
                style={{
                  background: '#f8fafc',
                  borderRadius: '18px',
                  padding: '2rem 1.6rem',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.background = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                }}
              >
                <div style={{ width: 50, height: 50, borderRadius: '12px', background: 'rgba(0, 187, 167, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {ind.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.45rem' }}>
                  {ind.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ACTION DISCOVERY BANNER (Matching Clean Light Design) ── */}
            {/* ── ACTION DISCOVERY BANNER (Matching Clean Light Design) ── */}
      <section style={{ padding: 'clamp(4rem, 7vh, 5.5rem) 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1px solid #e2e8f0', 
              padding: 'clamp(3rem, 5vw, 4.25rem) clamp(2rem, 4vw, 3.5rem)', 
              textAlign: 'center', 
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              START YOUR TRANSFORMATION
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 900, color: '#0f172a', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
              Ready to Build Your Automation & Software Roadmap?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.65, maxWidth: '640px', margin: '0 auto 2.25rem' }}>
              Speak directly with our engineering and consulting team to identify high-ROI automations, custom applications, and scalable growth pipelines.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenContact} 
                className="btn-primary" 
                style={{ 
                  background: '#00bba7', 
                  color: '#ffffff', 
                  fontWeight: 700, 
                  padding: '0.9rem 2.25rem', 
                  fontSize: '1rem', 
                  borderRadius: '10px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(0, 187, 167, 0.25)'
                }}
              >
                Book Discovery Session
                <ArrowRight size={17} />
              </button>
              <button 
                onClick={() => onNavigate('contact')} 
                style={{ 
                  background: '#ffffff', 
                  color: '#0f172a', 
                  border: '1.5px solid #0f172a', 
                  padding: '0.9rem 2.25rem', 
                  fontSize: '1rem', 
                  fontWeight: 700, 
                  borderRadius: '10px', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.color = '#00bba7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#0f172a';
                  e.currentTarget.style.color = '#0f172a';
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
