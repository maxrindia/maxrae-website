import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bot, 
  Code2, 
  TrendingUp, 
  PhoneCall, 
  Building2, 
  ShoppingBag, 
  Truck, 
  Landmark, 
  Hotel, 
  HeartPulse,
  CheckCircle2,
  Calendar
} from 'lucide-react';

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 18, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Scroll-revealed Box Container Component
function ScrollBox({ children, style = {}, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(36px)',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage({ onOpenContact }) {
  const [activeSector, setActiveSector] = useState('realestate');

  const whatsappUrl = "https://wa.me/971501234567?text=Hello%20MaxR%20Technology%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services";

  // 1. Core Services (Data & Analytics removed as requested; 4 rich core pillars)
  const services = [
    {
      id: "ai-automation",
      name: "AI Automation",
      subtitle: "Workflow & CRM Intelligence",
      desc: "Autonomous multi-step workflows and CRM integrations that eliminate repetitive manual drag.",
      features: [
        "Bi-directional sync with HubSpot, Salesforce & Zoho",
        "Autonomous document parsing & intake routing",
        "Zero-delay automated customer notification triggers"
      ],
      icon: <Bot size={24} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "voice-ai-agents",
      name: "Voice AI Agents",
      subtitle: "Conversational Reception & Triage",
      desc: "Sub-second conversational voice bots for 24/7 inbound reception, inquiry deflection, and qualification.",
      features: [
        "Natural conversational fluency with < 1s latency",
        "Automated calendar booking & live call transfers",
        "Complete call transcripts & CRM field mapping"
      ],
      icon: <PhoneCall size={24} color="#00bba7" />,
      link: "/voice-agents"
    },
    {
      id: "web-app-dev",
      name: "Web & App Development",
      subtitle: "Cloud Platforms & Mobile Apps",
      desc: "Fast, resilient web platforms and mobile applications built on modern cloud architecture.",
      features: [
        "Full-stack React & Next.js production platforms",
        "Native & cross-platform iOS and Android mobile apps",
        "High-performance APIs, database modeling & SaaS design"
      ],
      icon: <Code2 size={24} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      subtitle: "Performance & Technical SEO",
      desc: "Technical SEO, acquisition funnels, and data-backed digital performance campaigns.",
      features: [
        "Enterprise technical search engine optimization",
        "High-converting landing funnels & CRO testing",
        "Attribution tracking for commercial acquisition"
      ],
      icon: <TrendingUp size={24} color="#00bba7" />,
      link: "/services"
    }
  ];

  // 2. Sectors with Images and Minimal Details (User's Exact Vision)
  const sectorData = [
    {
      id: "realestate",
      name: "Real Estate",
      icon: <Building2 size={20} />,
      headline: "24/7 Inbound Investor Qualification & Viewing Scheduling",
      desc: "Handle off-hours property inquiries instantly, verify buyer budget criteria, and automatically schedule VIP viewing appointments directly into senior broker calendars.",
      highlights: ["Zero missed high-intent investor calls", "Instant automated WhatsApp brochure delivery", "Bi-directional property CRM integration"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      icon: <ShoppingBag size={20} />,
      headline: "Autonomous Support Resolution & Cart Recovery",
      desc: "Connect autonomous assistants directly to store inventories and order APIs to deflect tracking questions, issue instant return labels, and recover abandoned checkouts.",
      highlights: ["80%+ support inquiry deflection", "Real-time order tracking & status lookups", "Personalized checkout recovery triggers"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "logistics",
      name: "Logistics & Supply",
      icon: <Truck size={20} />,
      headline: "Real-Time Consignment Updates & Driver Coordination",
      desc: "Provide shippers and drivers with autonomous voice and SMS consignment updates. Eliminate telephone hold queues and sync delivery exceptions directly to your TMS.",
      highlights: ["Real-time milestone dispatch tracking", "Automated consignee proof-of-delivery pings", "-70% manual dispatch call load"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <Landmark size={20} />,
      headline: "Encrypted Client Intake & Preliminary Verification",
      desc: "Accelerate preliminary onboarding, document collection, and appointment booking with wealth advisors while maintaining bank-grade security standards.",
      highlights: ["Bank-grade 256-bit encryption protocols", "Streamlined client verification workflows", "3X faster client qualification cycle"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "hospitality",
      name: "Hospitality & Travel",
      icon: <Hotel size={20} />,
      headline: "24/7 Multilingual Reservation & Guest Concierge",
      desc: "Eliminate busy signals during peak dining and hotel booking hours. Answer availability questions, confirm special dietary requests, and send instant booking confirmations.",
      highlights: ["Zero busy signals during reservation surges", "Fluent multilingual conversational handling", "Instant confirmation messaging"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "healthcare",
      name: "Healthcare & Clinics",
      icon: <HeartPulse size={20} />,
      headline: "Zero-Hold Patient Booking & Automated Reminders",
      desc: "Automate patient bookings, doctor schedule checks, and two-way WhatsApp appointment reminders. Free clinical staff from telephone queues to focus on in-person patient care.",
      highlights: ["-68% reduction in appointment no-shows", "24/7 zero-wait patient appointment booking", "Direct practice management sync"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const currentSector = sectorData.find(s => s.id === activeSector) || sectorData[0];

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
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '5rem 0 6rem'
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

            {/* CTA Buttons */}
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
          2. SERVICES SECTION (Box Framed Container with Scroll Reveal Animation)
             (Data & Analytics removed; 4 Core Pillars with Rich Main Content)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0 3rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
                Capabilities
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                Engineered for Enterprise Impact
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Specialized automation and digital development architectures designed to drive high-margin business performance.
              </p>
            </div>

            {/* 4 Cards Grid with Distinctive Shape and Main Content */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {services.map((svc) => (
                <div
                  key={svc.id}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00bba7';
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 187, 167, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                  }}
                >
                  {/* Top Bar: Icon + Subtitle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: '12px',
                        background: 'rgba(0, 187, 167, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {svc.icon}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {svc.subtitle}
                    </span>
                  </div>

                  {/* Service Name */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.75rem' }}>
                    {svc.name}
                  </h3>

                  {/* 1 Line Description */}
                  <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.55, margin: 0, marginBottom: '1.5rem' }}>
                    {svc.desc}
                  </p>

                  {/* Main Content Highlights (Bullets) */}
                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', marginBottom: '1.75rem', flex: 1 }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.4 }}>
                          <CheckCircle2 size={16} color="#00bba7" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link (React Router) */}
                  <Link
                    to={svc.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#00bba7',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      transition: 'gap 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.gap = '9px'}
                    onMouseLeave={(e) => e.currentTarget.style.gap = '6px'}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </ScrollBox>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. HOW IT WORKS (Box Framed Container with Horizontal 3 Steps)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 3rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 4rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
                Process
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.4rem' }}>
                How It Works
              </h2>
            </div>

            {/* Horizontal Layout with Continuous Connecting Line */}
            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
              <div 
                aria-hidden="true"
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
          </ScrollBox>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. INDUSTRIES WE SERVE (User's Vision: Card Selector + Dynamic Sector Card with Image & Minimal Details)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 3rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
                Sectors
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                Industries We Serve
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Select a sector below to view specialized automation and digital engineering capabilities.
              </p>
            </div>

            {/* Horizontal Sector Selector Cards */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0.85rem',
                marginBottom: '2.5rem'
              }}
            >
              {sectorData.map((sec) => {
                const isActive = sec.id === activeSector;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSector(sec.id)}
                    style={{
                      background: isActive ? '#0a1428' : '#f8fafc',
                      color: isActive ? '#ffffff' : '#334155',
                      border: isActive ? '1.5px solid #0a1428' : '1.5px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1rem 0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 6px 18px rgba(10, 20, 40, 0.15)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = '#00bba7';
                        e.currentTarget.style.background = '#ffffff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.background = '#f8fafc';
                      }
                    }}
                  >
                    <span style={{ color: isActive ? '#00bba7' : '#64748b' }}>
                      {sec.icon}
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      {sec.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Sector Showcase Card: Image + Minimal Details */}
            <div 
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
                minHeight: '380px'
              }}
            >
              {/* Sector Image with Subtle Contrast Gradient */}
              <div style={{ position: 'relative', minHeight: '260px' }}>
                <img 
                  src={currentSector.image} 
                  alt={currentSector.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div 
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(10,20,40,0.1) 0%, rgba(10,20,40,0.5) 100%)'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(10, 20, 40, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  <span style={{ color: '#00bba7' }}>{currentSector.icon}</span>
                  <span>{currentSector.name}</span>
                </div>
              </div>

              {/* Minimal Sector Details */}
              <div 
                style={{
                  padding: 'clamp(2rem, 3.5vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: '#ffffff'
                }}
              >
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00bba7', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Domain Focus
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.3, marginBottom: '1rem' }}>
                  {currentSector.headline}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {currentSector.desc}
                </p>

                {/* Minimal Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '2rem' }}>
                  {currentSector.highlights.map((item, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#00bba7" flexShrink={0} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <Link
                  to="/industries"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00bba7',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>Explore industry specifications</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </ScrollBox>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. CTA STRIP (Box Framed Dark Section with WhatsApp & Call CTAs)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: 'linear-gradient(135deg, #070d1a 0%, #0a1428 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(3rem, 5vw, 4.5rem) 2rem',
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
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
          </ScrollBox>
        </div>
      </section>

    </div>
  );
}
