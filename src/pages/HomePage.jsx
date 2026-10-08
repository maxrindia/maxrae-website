import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowLeft,
  X,
  Target, 
  Zap, 
  Users, 
  Layers, 
  Handshake, 
  Clock,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);
  const carouselViewportRef = useRef(null);

  // ── 1. Services Centered Horizontal Carousel State ──
  const [currentService, setCurrentService] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // ── 2. Industries Lightweight Selection / Overlay State ──
  const [activeIndustry, setActiveIndustry] = useState(null);

  // ── 3. Client Stories State ──
  const [activeStory, setActiveStory] = useState(0);

  // ── EXACT 10 SERVICES ──
  const services = [
    {
      title: "Web Development",
      highlight: "Business Websites · Corporate Platforms · E-Commerce · Custom Web Apps",
      desc: "Business websites, corporate platforms and custom web applications built to scale with secure modern web architecture and sub-second load times.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "App Development",
      highlight: "iOS Apps · Android Apps · Cross-Platform · Enterprise Mobile UX",
      desc: "High-performance native and cross-platform mobile experiences engineered for intuitive user journeys, offline sync, and enterprise reliability.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Software & Product Development",
      highlight: "Custom Software · SaaS Platforms · ERP Systems · API Integrations",
      desc: "Enterprise-grade bespoke software systems, scalable multi-tenant SaaS platforms, and core business management architectures tailored to operational scale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Digital Marketing",
      highlight: "Search Engine Optimization · Google Ads · Social Ads · Performance",
      desc: "Precision performance marketing, high-intent search visibility, and full-funnel digital campaigns that drive commercial acquisition and verifiable return.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Social Media Management",
      highlight: "Content Strategy · Multichannel Publishing · Community · Executive Branding",
      desc: "Strategic content production, consistent multichannel publishing, and executive brand positioning that engages high-value audiences and prospects.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "AI & Automation",
      highlight: "Workflow Automation · AI Voice Agents · Lead Bots · Process Optimization",
      desc: "Autonomous business process automation, 24/7 intelligent voice receptionists, and generative AI agents that eliminate manual friction across workflows.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "CRM & Lead Solutions",
      highlight: "CRM Setup · Lead Pipelines · Lead Qualification · Sales Automation",
      desc: "End-to-end CRM deployment, instant lead capture pipelines, and automated follow-up sequences that convert inbound interest into closed commercial deals.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "UI/UX & Branding",
      highlight: "Product Design · UI/UX Design Systems · Brand Identity · Wireframing",
      desc: "Cohesive visual identity systems, enterprise design guidelines, and user experience wireframing tested for usability, clarity, and brand authority.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Cloud & Technology",
      highlight: "Cloud Infrastructure · Database Solutions · API Architecture · DevOps",
      desc: "Resilient cloud infrastructure setup, secure database clustering, enterprise API gateways, and 24/7 uptime monitoring for mission-critical apps.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Data & Business Intelligence",
      highlight: "Executive Dashboards · Data Warehousing · Business Analytics · Reporting",
      desc: "Unified business intelligence dashboards, real-time KPI streaming, data warehousing, and automated executive reporting that empower decisive leadership.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    }
  ];

  // ── EXACT 8 INDUSTRIES ──
  const industries = [
    {
      name: "Healthcare",
      tagline: "Digital solutions for modern healthcare systems and clinical practices.",
      desc: "Zero-hold patient appointment scheduling, automated clinical triage, and secure HIPAA-compliant communication portals.",
      capabilities: ["Web Development", "CRM & Lead Solutions", "AI Voice Automation", "Data & Business Intelligence"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "Real Estate",
      tagline: "Property discovery engines, broker automation bots and luxury architectural portals.",
      desc: "High-value buyer pre-qualification, 24/7 viewing scheduling, and interactive 3D digital floorplan presentations.",
      capabilities: ["Web Development", "CRM & Lead Solutions", "Interactive 3D Portals", "AI Voice Receptionist"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "E-Commerce",
      tagline: "Sub-second headless storefronts, automated customer care and conversion acceleration.",
      desc: "Instant multi-currency checkout, autonomous WhatsApp order & return resolution, and cart recovery workflows.",
      capabilities: ["App & Web Development", "WhatsApp Order Resolution", "Performance Marketing", "CRM & Loyalty Systems"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "Finance",
      tagline: "Encrypted investor portals, bank-grade digital KYC onboarding and regulatory pipelines.",
      desc: "256-bit encrypted client document onboarding, real-time portfolio dashboards, and regulatory compliance audit logging.",
      capabilities: ["Custom Software & SaaS", "Cloud & Security Architecture", "Data & BI Analytics", "Automated Compliance Pipelines"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "Education",
      tagline: "Student onboarding workflows, campus management portals and virtual learning platforms.",
      desc: "Automated student inquiry routing, centralized admissions pipelines, and interactive digital learning environments.",
      capabilities: ["Web & Portal Development", "Custom LMS Architecture", "CRM & Student Ingestion", "Workflow Automation"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "Hospitality",
      tagline: "24/7 multilingual booking agents, guest digital concierge and reservation automation.",
      desc: "Zero-wait phone and WhatsApp table booking, automated dietary preference capture, and contactless guest amenity requests.",
      capabilities: ["AI Voice Reservation Desks", "Guest Concierge Web Apps", "CRM & VIP Loyalty", "Digital Growth & SEO"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "Professional Services",
      tagline: "Practice management platforms, automated client onboarding and partner billing portals.",
      desc: "Streamlined legal, accounting, and advisory client engagement, secure file sharing, and automated billing workflows.",
      capabilities: ["Custom Software Development", "Client Intake Automation", "CRM & Lead Pipeline", "Cloud Infrastructure"],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
    },
    {
      name: "Technology & Startups",
      tagline: "Rapid MVP prototyping, scalable cloud backends, API integrations and growth architectures.",
      desc: "From initial product architecture to high-concurrency cloud scaling and automated developer telemetry pipelines.",
      capabilities: ["Full-Stack App Development", "SaaS Engineering", "Cloud & DevOps Architecture", "Performance Growth"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  // ── REAL MAXR CUSTOMER LOGOS (from maxr.io) ──
  const clientLogos = [
    { name: "ARDHRA", src: "/assets/clients/ardhra.png" },
    { name: "Corrumatik", src: "/assets/clients/corrumatik.png" },
    { name: "Glomi", src: "/assets/clients/glomi.png" },
    { name: "Deeplance", src: "/assets/clients/deeplance.png" },
    { name: "Le Spa", src: "/assets/clients/lespa.png" },
    { name: "Parvathi Computers", src: "/assets/clients/parvathi.png" },
    { name: "SCOINS", src: "/assets/clients/scoins.png" }
  ];

  // ── REAL MAXR CLIENT STORIES (from maxr.io) ──
  const clientStories = [
    {
      company: "Parvathi Computers",
      industry: "IT & Computer Services",
      image: "/assets/clients/parvathi_thumb.jpg",
      quote: "MAXR analyzed our business, identified growth opportunities, and created a strategic roadmap that helped us achieve 5X business growth within 6 months.",
      tags: ["Business Strategy", "Growth Roadmap", "Market Expansion"]
    },
    {
      company: "ARDHRA",
      industry: "Natural Skincare & Wellness",
      image: "/assets/clients/ardhra_thumb.jpg",
      quote: "MAXR helped us strengthen our digital presence and streamline customer engagement across all our touchpoints.",
      tags: ["AI Automation", "Lead Capture", "Customer Engagement"]
    }
  ];

  // ── Carousel Navigation Callbacks ──
  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1 < services.length ? prev + 1 : 0));
  }, [services.length]);

  const prevService = useCallback(() => {
    setCurrentService((prev) => (prev - 1 >= 0 ? prev - 1 : services.length - 1));
  }, [services.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextService();
      if (e.key === 'ArrowLeft') prevService();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextService, prevService]);

  // Pointer & Touch Drag Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
    setDragStartX(clientX);
    setDragDistance(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
    setDragDistance(clientX - dragStartX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDistance < -50) {
      nextService();
    } else if (dragDistance > 50) {
      prevService();
    }
    setDragDistance(0);
  };

  // GSAP Hero Reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-eyebrow', { opacity: 0, y: 15, duration: 0.6, ease: 'power2.out' });
      gsap.from('.gsap-hero-headline', { opacity: 0, y: 26, duration: 0.8, delay: 0.1, ease: 'power2.out' });
      gsap.from('.gsap-hero-subtext', { opacity: 0, y: 18, duration: 0.75, delay: 0.2, ease: 'power2.out' });
      gsap.from('.gsap-hero-ctas', { opacity: 0, y: 15, duration: 0.6, delay: 0.32, ease: 'power2.out' });
      gsap.from('.gsap-hero-image-wrap', { opacity: 0, scale: 0.98, duration: 0.9, delay: 0.16, ease: 'power2.out' });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: '#FFFFFF', color: '#080607', overflowX: 'hidden' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (White Editorial Enterprise Hero)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        ref={heroRef}
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0 clamp(3rem, 5vw, 4.5rem)',
          minHeight: 'clamp(620px, 72vh, 750px)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center' 
            }}
          >
            {/* Left Column: Large Editorial Typography */}
            <div style={{ maxWidth: '580px' }}>
              <div 
                className="gsap-hero-eyebrow"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#080607' }}>
                  MAXR TECHNOLOGIES
                </span>
              </div>

              <h1 
                className="gsap-hero-headline"
                style={{ 
                  fontSize: 'clamp(2.5rem, 4.6vw, 3.85rem)', 
                  fontWeight: 800, 
                  lineHeight: 1.1, 
                  letterSpacing: '-0.035em', 
                  color: '#080607', 
                  margin: '0 0 1.5rem 0' 
                }}
              >
                Technology That Moves<br />
                Businesses <span style={{ color: '#54CFB0' }}>Forward.</span>
              </h1>

              <p 
                className="gsap-hero-subtext"
                style={{ 
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)', 
                  lineHeight: 1.6, 
                  color: '#3F5565', 
                  fontWeight: 400, 
                  margin: '0 0 2.25rem 0',
                  maxWidth: '520px'
                }}
              >
                We help businesses grow, operate smarter and create better customer experiences through technology, digital solutions and automation.
              </p>

              <div 
                className="gsap-hero-ctas"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
              >
                <Link
                  to="/contact"
                  style={{
                    background: '#54CFB0',
                    color: '#080607',
                    padding: '0.9rem 1.85rem',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(84, 207, 176, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/services"
                  style={{
                    background: '#FFFFFF',
                    color: '#080607',
                    border: '1px solid #E1E8E5',
                    padding: '0.9rem 1.85rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#080607';
                    e.currentTarget.style.background = '#F5F8F7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E1E8E5';
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="gsap-hero-image-wrap" style={{ position: 'relative' }}>
              <div 
                style={{ 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  border: '1px solid #E1E8E5',
                  boxShadow: '0 16px 40px rgba(8, 6, 7, 0.07)',
                  background: '#F5F8F7',
                  position: 'relative',
                  maxHeight: '520px'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80" 
                  alt="Modern enterprise architecture and corporate business headquarters" 
                  style={{ width: '100%', height: 'clamp(360px, 45vw, 500px)', objectFit: 'cover', display: 'block' }} 
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #E1E8E5',
                    borderRadius: '6px',
                    padding: '0.6rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#54CFB0' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#080607' }}>
                    Enterprise Engineering & Strategic Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          UPDATE 1 — OUR SERVICES (Centered Horizontal Carousel with Side Peeks)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="services-carousel-section"
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                  OUR SERVICES
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.15, 
                  color: '#080607',
                  margin: '0 0 1rem 0'
                }}
              >
                End-to-End Technology<br />
                for Modern Businesses.
              </h2>

              <p style={{ fontSize: '1.05rem', color: '#3F5565', lineHeight: 1.6, margin: 0 }}>
                From strategy and consulting to digital solutions and automation, we help businesses grow, operate efficiently and stay ahead.
              </p>
            </div>

            {/* Minimal Left / Right Navigation Arrows Only */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={prevService}
                aria-label="Previous Service Slide"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #E1E8E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#080607',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(8,6,7,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#54CFB0';
                  e.currentTarget.style.color = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E1E8E5';
                  e.currentTarget.style.color = '#080607';
                }}
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextService}
                aria-label="Next Service Slide"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#080607',
                  border: '1px solid #080607',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(8,6,7,0.12)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#54CFB0';
                  e.currentTarget.style.color = '#080607';
                  e.currentTarget.style.borderColor = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#080607';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#080607';
                }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Centered Carousel Track (Active Centered, Previous left peek, Next right peek) ── */}
        <div 
          ref={carouselViewportRef}
          style={{ 
            width: '100%', 
            overflow: 'hidden',
            padding: '1rem 0 2rem',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 'clamp(16px, 2.5vw, 28px)', 
              transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
              /* Center the active card: 50vw - (cardWidth/2) - (currentService * (cardWidth + gap)) + dragDistance */
              transform: `translateX(calc(50vw - (clamp(320px, 60vw, 840px) / 2) - (${currentService} * (clamp(320px, 60vw, 840px) + clamp(16px, 2.5vw, 28px))) + ${dragDistance}px))`,
              userSelect: 'none'
            }}
          >
            {services.map((item, idx) => {
              const isActive = idx === currentService;
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    if (!isActive) setCurrentService(idx);
                  }}
                  style={{
                    flex: '0 0 clamp(320px, 60vw, 840px)',
                    minHeight: 'clamp(460px, 54vh, 580px)',
                    background: '#FFFFFF',
                    border: isActive ? '1.5px solid #54CFB0' : '1px solid #E1E8E5',
                    borderRadius: '12px',
                    padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                    alignItems: 'center',
                    boxShadow: isActive ? '0 16px 40px rgba(8, 6, 7, 0.08)' : '0 4px 12px rgba(8,6,7,0.02)',
                    transform: isActive ? 'scale(1)' : 'scale(0.91)',
                    opacity: isActive ? 1 : 0.65,
                    transition: 'transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease',
                    cursor: isActive ? 'default' : 'pointer'
                  }}
                >
                  {/* Left Column: Title, Description, Highlight, Link (NO numbers, NO 01/10) */}
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <div>
                      {/* Top Category Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#54CFB0' }} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3F5565', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          Core Capability
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        style={{ 
                          fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)', 
                          fontWeight: 800, 
                          color: '#080607', 
                          letterSpacing: '-0.025em', 
                          lineHeight: 1.2,
                          margin: '0 0 1rem 0'
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p 
                        style={{ 
                          fontSize: 'clamp(0.925rem, 1.05vw, 1rem)', 
                          color: '#3F5565', 
                          lineHeight: 1.6, 
                          margin: '0 0 1.5rem 0' 
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Highlight pill */}
                      <div 
                        style={{ 
                          padding: '0.85rem 1rem', 
                          background: '#F5F8F7', 
                          border: '1px solid #E1E8E5', 
                          borderRadius: '6px',
                          fontSize: '0.825rem',
                          color: '#080607',
                          fontWeight: 600,
                          lineHeight: 1.5,
                          marginBottom: '1.5rem'
                        }}
                      >
                        {item.highlight}
                      </div>
                    </div>

                    {/* Bottom CTA within card */}
                    <div style={{ borderTop: '1px solid #E1E8E5', paddingTop: '1.25rem' }}>
                      <Link
                        to={item.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#080607',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#54CFB0';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#080607';
                        }}
                      >
                        <span>Explore Service</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Editorial Photograph */}
                  <div 
                    style={{ 
                      height: '100%', 
                      maxHeight: '400px',
                      borderRadius: '8px', 
                      overflow: 'hidden', 
                      background: '#F5F8F7',
                      border: '1px solid #E1E8E5',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        display: 'block' 
                      }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          UPDATE 2 — INDUSTRIES (Clean Selectable Grid + Subtle Overlay Expansion)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="industries-section"
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
          position: 'relative'
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                INDUSTRIES
              </span>
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', 
                fontWeight: 800, 
                letterSpacing: '-0.03em', 
                lineHeight: 1.15, 
                color: '#080607',
                margin: '0 0 1rem 0'
              }}
            >
              Technology<br />
              for Every Industry.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#3F5565', lineHeight: 1.6, margin: 0 }}>
              We build solutions around the unique challenges and opportunities of modern businesses.
            </p>
          </div>

          {/* Clean Lightweight Industry Boxes Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1rem'
            }}
          >
            {industries.map((ind, idx) => {
              const isSelected = activeIndustry === idx;
              return (
                <button
                  key={ind.name}
                  onClick={() => setActiveIndustry(isSelected ? null : idx)}
                  style={{
                    background: isSelected ? '#F5F8F7' : '#FFFFFF',
                    border: isSelected ? '1.5px solid #54CFB0' : '1px solid #E1E8E5',
                    borderRadius: '6px',
                    padding: '1.35rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 6px 18px rgba(84, 207, 176, 0.12)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#54CFB0';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = '#F5F8F7';
                      const arrow = e.currentTarget.querySelector('.box-arrow');
                      if (arrow) arrow.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#E1E8E5';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = '#FFFFFF';
                      const arrow = e.currentTarget.querySelector('.box-arrow');
                      if (arrow) arrow.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#080607' }}>
                    {ind.name}
                  </span>
                  <span 
                    className="box-arrow"
                    style={{ 
                      color: isSelected ? '#54CFB0' : '#3F5565', 
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease, color 0.2s ease'
                    }}
                  >
                    <ArrowRight size={16} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Subtle Expandable/Overlay Information Panel (Compact & Integrated) ── */}
          {activeIndustry !== null && (
            <div 
              style={{ 
                marginTop: '2rem',
                position: 'relative', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                minHeight: 'clamp(420px, 48vh, 480px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 16px 36px rgba(8, 6, 7, 0.1)',
                border: '1px solid #E1E8E5',
                animation: 'fadeIn 0.35s ease'
              }}
            >
              {/* Background Image */}
              <img 
                src={industries[activeIndustry].image} 
                alt={industries[activeIndustry].name} 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  zIndex: 0 
                }} 
              />

              {/* Dark Subtle Overlay */}
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(135deg, rgba(8,6,7,0.92) 0%, rgba(8,6,7,0.82) 50%, rgba(8,6,7,0.4) 100%)',
                  zIndex: 1 
                }} 
              />

              {/* Top Bar with Close Button */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#54CFB0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {industries[activeIndustry].name}
                </span>

                <button
                  onClick={() => setActiveIndustry(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#54CFB0';
                    e.currentTarget.style.color = '#080607';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <X size={14} />
                  <span>Close</span>
                </button>
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '1.5rem 0' }}>
                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.25, margin: '0 0 0.85rem 0' }}>
                  {industries[activeIndustry].tagline}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 1.5rem 0' }}>
                  {industries[activeIndustry].desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {industries[activeIndustry].capabilities.map((cap, cIdx) => (
                    <span 
                      key={cIdx}
                      style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 600, 
                        color: '#FFFFFF', 
                        background: 'rgba(255, 255, 255, 0.1)', 
                        backdropFilter: 'blur(6px)', 
                        border: '1px solid rgba(255, 255, 255, 0.2)', 
                        padding: '5px 11px', 
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#54CFB0' }} />
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.25rem' }}>
                <Link
                  to="/industries"
                  style={{
                    background: '#54CFB0',
                    color: '#080607',
                    padding: '0.75rem 1.45rem',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  <span>Explore Industry</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. TRUSTED BY BUSINESSES (Real Logos from maxr.io)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: '4rem 0' 
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0', display: 'block', marginBottom: '0.5rem' }}>
              TRUSTED BY BUSINESSES
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#080607', margin: 0, letterSpacing: '-0.02em' }}>
              Growing Businesses Trust MaxR.
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#3F5565', marginTop: '0.5rem', lineHeight: 1.5 }}>
              From emerging brands to established enterprises, companies rely on MaxR to automate operations and drive digital growth.
            </p>
          </div>

          {/* Real Customer Logos Row */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 'clamp(2rem, 5vw, 4rem)',
              flexWrap: 'wrap',
              padding: '0.5rem 0'
            }}
          >
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  opacity: 0.75,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  padding: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.75';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title={client.name}
              >
                <img 
                  src={client.src} 
                  alt={client.name} 
                  style={{ 
                    height: 'clamp(32px, 4vw, 42px)', 
                    width: 'auto', 
                    maxWidth: '150px',
                    objectFit: 'contain', 
                    display: 'block' 
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. CLIENT STORIES (Real MaxR Customer Stories from maxr.io)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0' 
        }}
      >
        <div className="container">
          
          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#54CFB0', display: 'block', marginBottom: '0.5rem' }}>
                CLIENT STORIES
              </span>
              <h2 style={{ fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#080607', margin: 0 }}>
                Real Impact.<br />
                Lasting Partnerships.
              </h2>
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => setActiveStory(prev => (prev - 1 >= 0 ? prev - 1 : clientStories.length - 1))}
                aria-label="Previous story"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #E1E8E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#080607',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#54CFB0'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E1E8E5'}
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={() => setActiveStory(prev => (prev + 1 < clientStories.length ? prev + 1 : 0))}
                aria-label="Next story"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#080607',
                  border: '1px solid #080607',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#54CFB0';
                  e.currentTarget.style.color = '#080607';
                  e.currentTarget.style.borderColor = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#080607';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#080607';
                }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Active Story Card */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E1E8E5', 
              borderRadius: '12px', 
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 12px 36px rgba(8, 6, 7, 0.05)'
            }}
          >
            {/* Story Thumbnail Image */}
            <div 
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                height: 'clamp(260px, 35vw, 360px)', 
                background: '#F5F8F7',
                border: '1px solid #E1E8E5'
              }}
            >
              <img 
                src={clientStories[activeStory].image} 
                alt={clientStories[activeStory].company} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>

            {/* Quote and Details */}
            <div>
              <blockquote 
                style={{ 
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', 
                  fontWeight: 600, 
                  color: '#080607', 
                  lineHeight: 1.55, 
                  letterSpacing: '-0.015em',
                  margin: '0 0 1.75rem 0' 
                }}
              >
                "{clientStories[activeStory].quote}"
              </blockquote>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                {clientStories[activeStory].tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    style={{ 
                      fontSize: '0.8rem', 
                      fontWeight: 600, 
                      color: '#080607', 
                      background: '#F5F8F7', 
                      border: '1px solid #E1E8E5', 
                      padding: '4px 10px', 
                      borderRadius: '4px' 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#080607', margin: '0 0 0.25rem 0' }}>
                  {clientStories[activeStory].company}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#3F5565', margin: 0 }}>
                  {clientStories[activeStory].industry}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. WHY MAXR SECTION (Split Layout: Workspace Left, 4 Principles Right)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(3rem, 6vw, 5rem)',
              alignItems: 'center' 
            }}
          >
            {/* Left: Enterprise Advisory Photography */}
            <div>
              <div 
                style={{ 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  border: '1px solid #E1E8E5',
                  boxShadow: '0 16px 36px rgba(8, 6, 7, 0.05)',
                  background: '#F5F8F7'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" 
                  alt="MaxR enterprise collaboration and corporate team advisory workspace" 
                  style={{ width: '100%', height: 'clamp(340px, 42vw, 480px)', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            </div>

            {/* Right: 4 Principles */}
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                  WHY BUSINESSES CHOOSE MAXR
                </span>
              </div>

              <h2 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.15, 
                  color: '#080607',
                  margin: '0 0 1.25rem 0'
                }}
              >
                A Partner for<br />
                What's Next.
              </h2>

              <p style={{ fontSize: '1.05rem', color: '#3F5565', lineHeight: 1.6, margin: '0 0 2.25rem 0' }}>
                We combine strategy, technology and automation to help businesses grow, operate efficiently and stay competitive.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  {
                    title: "Practical, outcome-driven solutions",
                    desc: "We focus on measurable business value, operational efficiency, and tangible ROI rather than technology for its own sake.",
                    icon: Target
                  },
                  {
                    title: "Flexible and scalable approach",
                    desc: "Architectures and delivery frameworks that adapt seamlessly to your changing volume, team size, and commercial goals.",
                    icon: Layers
                  },
                  {
                    title: "Technology with human support",
                    desc: "Dedicated senior architects, responsive support, and clear communication at every phase of your transformation.",
                    icon: Users
                  },
                  {
                    title: "Long-term partnership",
                    desc: "We build enduring relationships, serving as a trusted technical advisor as your company scales across markets.",
                    icon: Handshake
                  }
                ].map((pt) => (
                  <div key={pt.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div 
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        borderRadius: '6px', 
                        background: '#F5F8F7', 
                        border: '1px solid #E1E8E5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <pt.icon size={18} strokeWidth={2} color="#080607" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#080607', margin: '0 0 0.25rem 0' }}>
                        {pt.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#3F5565', margin: 0, lineHeight: 1.55 }}>
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. CAPABILITY STRIP (Horizontal 4-Column Clean Strip)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: '2.5rem 0' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {[
              { title: "BUSINESS-FOCUSED", sub: "Solutions built around real outcomes", icon: Target },
              { title: "AUTOMATION-DRIVEN", sub: "Reduce manual work and improve efficiency", icon: Zap },
              { title: "SCALABLE SOLUTIONS", sub: "Built for growing businesses", icon: Layers },
              { title: "PEOPLE-FIRST", sub: "Technology with human support", icon: Users }
            ].map((item, idx) => (
              <div 
                key={item.title}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem',
                  borderRight: idx < 3 ? '1px solid #E1E8E5' : 'none',
                  paddingRight: '1rem'
                }}
              >
                <div style={{ color: '#080607', flexShrink: 0, marginTop: '2px' }}>
                  <item.icon size={20} strokeWidth={2} color="#080607" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#080607', margin: '0 0 0.25rem 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#3F5565', margin: 0, lineHeight: 1.45 }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          7. INSIGHTS SECTION (Editorial Perspectives, 3 Article Cards)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0' 
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                INSIGHTS
              </span>
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', 
                fontWeight: 800, 
                letterSpacing: '-0.03em', 
                lineHeight: 1.15, 
                color: '#080607',
                margin: '0 0 1rem 0'
              }}
            >
              Perspectives on<br />
              Technology and Growth.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                category: "ENTERPRISE AUTOMATION",
                title: "How Intelligent Workflows Are Reshaping Operations in 2025",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
                link: "/blog"
              },
              {
                category: "DIGITAL ARCHITECTURE",
                title: "Building High-Performance Digital Platforms for Enterprise Scale",
                readTime: "4 min read",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                link: "/blog"
              },
              {
                category: "STRATEGY & GROWTH",
                title: "Bridging the Gap Between Business Strategy and Modern Technology",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                link: "/blog"
              }
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E1E8E5', 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#54CFB0';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(8, 6, 7, 0.06)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.04)';
                  const arrow = e.currentTarget.querySelector('.insight-arrow');
                  if (arrow) arrow.style.color = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E1E8E5';
                  e.currentTarget.style.boxShadow = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const arrow = e.currentTarget.querySelector('.insight-arrow');
                  if (arrow) arrow.style.color = '#080607';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', background: '#F5F8F7' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#54CFB0' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#3F5565', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {item.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#080607', margin: '0 0 1.25rem 0', lineHeight: 1.4, letterSpacing: '-0.015em' }}>
                    {item.title}
                  </h3>
                  <div style={{ marginTop: 'auto', borderTop: '1px solid #E1E8E5', paddingTop: '1rem' }}>
                    <span 
                      className="insight-arrow"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: '#080607', transition: 'color 0.2s ease' }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          8. FINAL CTA (Executive Black Background, Mint Accent)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#080607', 
          color: '#FFFFFF', 
          padding: 'clamp(5rem, 8vw, 7rem) 0' 
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                LET'S BUILD TOGETHER
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', 
                fontWeight: 800, 
                letterSpacing: '-0.03em', 
                lineHeight: 1.15, 
                color: '#FFFFFF',
                margin: '0 0 1.25rem 0'
              }}
            >
              Turn Your Ideas Into<br />
              Real Business Impact.
            </h2>

            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', 
                color: '#94a3b8', 
                lineHeight: 1.6, 
                maxWidth: '620px', 
                margin: '0 auto 2.5rem' 
              }}
            >
              Tell us what you're building and let's explore how technology and automation can help you achieve it.
            </p>

            <Link
              to="/contact"
              style={{
                background: '#54CFB0',
                color: '#080607',
                padding: '1rem 2.25rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.975rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px rgba(84, 207, 176, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.92';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
