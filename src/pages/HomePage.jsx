import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bot, 
  Code2, 
  TrendingUp, 
  BarChart3, 
  PhoneCall, 
  Building2, 
  ShoppingBag, 
  Truck, 
  Landmark, 
  Hotel, 
  HeartPulse,
  Calendar
} from 'lucide-react';

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 18, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function HomePage({ onOpenContact }) {
  const whatsappUrl = "https://wa.me/971501234567?text=Hello%20MaxR%20Technology%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services";

  // 1. Core Services (Strictly: AI Automation, Web & App Development, Digital Marketing, Data & Analytics, Voice AI Agents)
  const services = [
    {
      id: "ai-automation",
      name: "AI Automation",
      desc: "Autonomous multi-step workflows and CRM integrations that eliminate repetitive manual drag.",
      icon: <Bot size={22} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "web-app-dev",
      name: "Web & App Development",
      desc: "Fast, resilient web platforms and mobile applications built on modern cloud architecture.",
      icon: <Code2 size={22} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      desc: "Technical SEO, acquisition funnels, and data-backed digital performance campaigns.",
      icon: <TrendingUp size={22} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "data-analytics",
      name: "Data & Analytics",
      desc: "Real-time executive dashboards and predictive pipelines turning raw data into insight.",
      icon: <BarChart3 size={22} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "voice-ai-agents",
      name: "Voice AI Agents",
      desc: "Sub-second conversational voice bots for 24/7 inbound reception and qualification.",
      icon: <PhoneCall size={22} color="#00bba7" />,
      link: "/voice-agents"
    }
  ];

  // 2. Industries (Clean Grid of Cards)
  const industries = [
    { name: "Real Estate", icon: <Building2 size={26} color="#00bba7" /> },
    { name: "Retail", icon: <ShoppingBag size={26} color="#00bba7" /> },
    { name: "Logistics", icon: <Truck size={26} color="#00bba7" /> },
    { name: "Finance", icon: <Landmark size={26} color="#00bba7" /> },
    { name: "Hospitality", icon: <Hotel size={26} color="#00bba7" /> },
    { name: "Healthcare", icon: <HeartPulse size={26} color="#00bba7" /> }
  ];

  // 3. How It Works (3 Steps: Understand → Build → Grow)
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We audit your existing operational workflows to identify high-impact automation levers."
    },
    {
      num: "02",
      title: "Build",
      desc: "Our engineering squad develops, tests, and integrates custom AI models and cloud systems."
    },
    {
      num: "03",
      title: "Grow",
      desc: "We deploy with continuous SLA monitoring to scale output while lowering operational overhead."
    }
  ];

  return (
    <div className="home-page" style={{ minHeight: '100%', background: '#ffffff', color: '#0f172a' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Unsplash Tech-Abstract BG + Dark Semi-Transparent Overlay)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '84vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '6rem 0'
        }}
      >
        {/* Dark semi-transparent layer overlay on top of image */}
        <div 
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(7, 13, 26, 0.88) 0%, rgba(10, 20, 40, 0.94) 100%)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            
            {/* Minimal Eyebrow Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(0, 187, 167, 0.1)', border: '1px solid rgba(0, 187, 167, 0.25)', marginBottom: '1.75rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00bba7' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Enterprise AI & Software Engineering
              </span>
            </div>

            {/* Bold, Confident, Minimal 2-3 Word Headline (Linear/Vercel style) */}
            <h1 
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 4.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Build. Automate. <span style={{ color: '#00bba7' }}>Scale.</span>
            </h1>

            {/* Short Subtext (1-2 sentences) */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto 2.5rem'
              }}
            >
              Autonomous AI systems, full-stack software, and automated workflows engineered for high-performance enterprises.
            </p>

            {/* 2 CTA Buttons */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/services"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#00bba7',
                  color: '#040811',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 187, 167, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0d9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </Link>

              {/* WhatsApp Button (Prominent Green) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with MaxR on WhatsApp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1ebd59';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <WhatsAppIcon size={18} color="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Book a Call Option */}
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.background = 'rgba(0, 187, 167, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Calendar size={16} />
                <span>Book a Call</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. SERVICES SECTION (5 Cards: Icon + Name + 1 Line Desc + Learn More)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="services"
        style={{
          padding: '6rem 0',
          background: '#ffffff'
        }}
      >
        <div className="container">
          
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              Capabilities
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.5rem' }}>
              Engineered for Enterprise Impact
            </h2>
          </div>

          {/* Clean 5 Services Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {services.map((svc) => (
              <div
                key={svc.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                }}
              >
                {/* Real Lucide Icon Container */}
                <div 
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '10px',
                    background: 'rgba(0, 187, 167, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  {svc.icon}
                </div>

                {/* Service Name */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.65rem' }}>
                  {svc.name}
                </h3>

                {/* 1 Line Description Only */}
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.5, margin: 0, marginBottom: '1.5rem', flex: 1 }}>
                  {svc.desc}
                </p>

                {/* Learn More Link (React Router) */}
                <Link
                  to={svc.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00bba7',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'gap 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '9px'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '6px'}
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. HOW IT WORKS (3 Steps Horizontal Layout with Connecting Line)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="how-it-works"
        style={{
          padding: '6rem 0',
          background: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 4.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              Process
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.5rem' }}>
              How It Works
            </h2>
          </div>

          {/* Horizontal Layout Container */}
          <div style={{ position: 'relative', maxWidth: '1080px', margin: '0 auto' }}>
            
            {/* Connecting Line Running Horizontally Behind Circles */}
            <div 
              aria-hidden="true"
              className="process-connecting-line"
              style={{
                position: 'absolute',
                top: '24px',
                left: '12%',
                right: '12%',
                height: '2px',
                background: '#e2e8f0',
                zIndex: 0
              }}
            />

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2.5rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              {steps.map((st, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    textAlign: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center' 
                  }}
                >
                  {/* Step Number Styled as an Outlined Circle */}
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '2px solid #00bba7',
                      background: '#ffffff',
                      color: '#00bba7',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      boxShadow: '0 4px 12px rgba(0, 187, 167, 0.15)'
                    }}
                  >
                    {st.num}
                  </div>

                  {/* Short Title */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.65rem' }}>
                    {st.title}
                  </h3>

                  {/* 1 Sentence Description */}
                  <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, maxWidth: '280px', margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. INDUSTRIES SECTION (Clean Grid of Cards, NOT Pill Tags)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="industries"
        style={{
          padding: '6rem 0',
          background: '#ffffff'
        }}
      >
        <div className="container">
          
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              Sectors
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.5rem' }}>
              Industries We Serve
            </h2>
          </div>

          {/* Clean Grid of Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {industries.map((ind, idx) => (
              <Link
                key={idx}
                to="/industries"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.75rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.02)';
                }}
              >
                <div 
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '12px',
                    background: 'rgba(0, 187, 167, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  {ind.icon}
                </div>

                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0a1428' }}>
                  {ind.name}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. CTA STRIP (Dark Background Section, No Mention of Dubai)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        className="cta-strip"
        style={{
          padding: '5.5rem 0',
          background: 'linear-gradient(135deg, #070d1a 0%, #0a1428 100%)',
          color: '#ffffff',
          position: 'relative'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            
            <h2 
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              Ready to Accelerate Your Operations?
            </h2>

            <p 
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.6,
                maxWidth: '560px',
                margin: '0 auto 2.5rem'
              }}
            >
              Deploy production-grade AI agents and custom software systems in days.
            </p>

            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              {/* WhatsApp Button (Green) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instant WhatsApp Consultation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1ebd59';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <WhatsAppIcon size={18} color="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Book a Call Button */}
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#00bba7',
                  color: '#040811',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 187, 167, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0d9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Calendar size={16} />
                <span>Book a Call</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
