import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowLeft,
  X,
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  Layers, 
  Handshake, 
  Clock, 
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const industryPanelRef = useRef(null);

  // ── Services Carousel State ──
  const [currentService, setCurrentService] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // ── Industries Interactive Selection State ──
  const [selectedIndustry, setSelectedIndustry] = useState(null); // null = grid only, index = expanded panel

  // ── 1. EXACT 10 SERVICES DATA ──
  const services = [
    {
      num: "01",
      title: "Web Development",
      highlight: "Business Websites · Corporate · E-commerce · Custom Web Apps",
      desc: "Business websites, corporate platforms and custom web applications built to scale with secure modern web architecture and sub-second load times.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "02",
      title: "App Development",
      highlight: "iOS Apps · Android Apps · Cross-Platform · Mobile UX",
      desc: "High-performance native and cross-platform mobile experiences engineered for intuitive user journeys, offline sync, and enterprise reliability.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "03",
      title: "Software & Product Development",
      highlight: "Custom Software · SaaS Platforms · ERP Systems · API Integrations",
      desc: "Enterprise-grade bespoke software systems, scalable multi-tenant SaaS platforms, and core business management architectures tailored to operational scale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "04",
      title: "Digital Marketing",
      highlight: "Search Engine Optimization · Google Ads · Social Ads · Performance",
      desc: "Precision performance marketing, high-intent search visibility, and full-funnel digital campaigns that drive commercial acquisition and verifiable return.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "05",
      title: "Social Media Management",
      highlight: "Content Strategy · LinkedIn & Instagram · Community · Growth",
      desc: "Strategic content production, consistent multichannel publishing, and executive brand positioning that engages high-value audiences and prospects.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "06",
      title: "AI & Automation",
      highlight: "Workflow Automation · AI Voice Agents · Lead Bots · Process Optimization",
      desc: "Autonomous business process automation, 24/7 intelligent voice receptionists, and generative AI agents that eliminate manual friction across workflows.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "07",
      title: "CRM & Lead Solutions",
      highlight: "CRM Setup · Lead Pipelines · Lead Qualification · Sales Automation",
      desc: "End-to-end CRM deployment, instant lead capture pipelines, and automated follow-up sequences that convert inbound interest into closed commercial deals.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "08",
      title: "UI/UX & Branding",
      highlight: "Product Design · UI/UX Design Systems · Brand Identity · Wireframing",
      desc: "Cohesive visual identity systems, enterprise design guidelines, and user experience wireframing tested for usability, clarity, and brand authority.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "09",
      title: "Cloud & Technology",
      highlight: "Cloud Infrastructure · Database Solutions · API Architecture · DevOps",
      desc: "Resilient cloud infrastructure setup, secure database clustering, enterprise API gateways, and 24/7 uptime monitoring for mission-critical apps.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      num: "10",
      title: "Data & Business Intelligence",
      highlight: "Executive Dashboards · Data Warehousing · Business Analytics · Reporting",
      desc: "Unified business intelligence dashboards, real-time KPI streaming, data warehousing, and automated executive reporting that empower decisive leadership.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    }
  ];

  // ── 2. EXACT 8 INDUSTRIES DATA ──
  const industries = [
    {
      name: "Healthcare",
      tagline: "Digital solutions for modern healthcare businesses and clinical practices.",
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

  // ── Services Carousel Navigation ──
  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1 < services.length ? prev + 1 : 0));
  }, [services.length]);

  const prevService = useCallback(() => {
    setCurrentService((prev) => (prev - 1 >= 0 ? prev - 1 : services.length - 1));
  }, [services.length]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextService();
      if (e.key === 'ArrowLeft') prevService();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextService, prevService]);

  // Touch and Pointer Drag Handling for Services Carousel
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    setDragOffset(currentX - startX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) {
      nextService();
    } else if (dragOffset > 60) {
      prevService();
    }
    setDragOffset(0);
  };

  // GSAP Animation for Services Carousel Slide Transition
  useEffect(() => {
    if (carouselTrackRef.current) {
      gsap.to(carouselTrackRef.current, {
        xPercent: -(currentService * 100),
        duration: 0.75,
        ease: 'power2.out'
      });
    }
  }, [currentService]);

  // GSAP Animation for Industry Detail Panel Expansion
  useEffect(() => {
    if (selectedIndustry !== null && industryPanelRef.current) {
      gsap.fromTo(
        industryPanelRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power2.out' }
      );
    }
  }, [selectedIndustry]);

  // GSAP Initial Hero Elements Reveal
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
          1. HERO SECTION (White-First Editorial Enterprise Hero)
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
            {/* Left Column: Large Editorial Headline & Strategic Copy */}
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

            {/* Right Column: Premium Architectural Photography */}
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
          SECTION 1 — OUR SERVICES (Horizontal Rotating Slides, 10 Services)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="services-carousel-section"
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
          overflow: 'hidden'
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

            {/* Quick Slide Navigation Arrows */}
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

        {/* ── Horizontal Carousel Track (Current Slide ~88vw, Next Slide partially visible on right) ── */}
        <div 
          style={{ 
            width: '100%', 
            overflow: 'hidden',
            paddingLeft: 'max(1.25rem, calc((100vw - 1240px) / 2))',
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
              gap: '24px', 
              transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(calc(-${currentService * 100}% - ${currentService * 24}px + ${dragOffset}px))`,
              userSelect: 'none'
            }}
          >
            {services.map((item, idx) => {
              const isActive = idx === currentService;
              return (
                <div
                  key={item.num}
                  style={{
                    flex: '0 0 clamp(300px, 86vw, 1140px)',
                    height: 'clamp(480px, 58vh, 620px)',
                    background: '#FFFFFF',
                    border: isActive ? '1.5px solid #E1E8E5' : '1px solid #E1E8E5',
                    borderRadius: '12px',
                    padding: 'clamp(1.75rem, 4vw, 3rem)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(1.5rem, 3.5vw, 3.5rem)',
                    alignItems: 'center',
                    boxShadow: isActive ? '0 16px 40px rgba(8, 6, 7, 0.06)' : '0 4px 12px rgba(8,6,7,0.02)',
                    transform: isActive ? 'scale(1)' : 'scale(0.96)',
                    opacity: isActive ? 1 : 0.75,
                    transition: 'all 0.45s ease',
                    position: 'relative'
                  }}
                >
                  {/* Left Column: Number, Title, Highlight, Description, Link */}
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <div>
                      {/* Top Number indicator */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#080607', fontFamily: 'monospace' }}>
                          {item.num}
                        </span>
                        <span 
                          style={{ 
                            fontSize: '0.8rem', 
                            fontWeight: 700, 
                            color: '#54CFB0', 
                            background: 'rgba(84, 207, 176, 0.1)', 
                            padding: '4px 10px', 
                            borderRadius: '4px' 
                          }}
                        >
                          SERVICE {item.num} / 10
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        style={{ 
                          fontSize: 'clamp(1.6rem, 2.6vw, 2.25rem)', 
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
                          fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)', 
                          color: '#3F5565', 
                          lineHeight: 1.6, 
                          margin: '0 0 1.5rem 0' 
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Highlights Pill Text */}
                      <div 
                        style={{ 
                          padding: '0.85rem 1rem', 
                          background: '#F5F8F7', 
                          border: '1px solid #E1E8E5', 
                          borderRadius: '6px',
                          fontSize: '0.85rem',
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
                    <div style={{ borderTop: '1px solid #E1E8E5', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Link
                        to={item.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#080607',
                          fontWeight: 700,
                          fontSize: '0.925rem',
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

                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#3F5565', fontFamily: 'monospace' }}>
                        {item.num} / 10
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Large Premium Editorial Photograph */}
                  <div 
                    style={{ 
                      height: '100%', 
                      maxHeight: '440px',
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

        {/* ── Carousel Bottom Progress Bar & Counter ── */}
        <div className="container" style={{ marginTop: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            {/* Counter */}
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#080607', fontFamily: 'monospace' }}>
              {String(currentService + 1).padStart(2, '0')} / 10
            </span>

            {/* Mint Progress Line */}
            <div 
              style={{ 
                flex: 1, 
                height: '3px', 
                background: '#E1E8E5', 
                borderRadius: '999px', 
                overflow: 'hidden',
                position: 'relative' 
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  bottom: 0, 
                  left: 0, 
                  width: `${((currentService + 1) / services.length) * 100}%`, 
                  background: '#54CFB0',
                  transition: 'width 0.4s ease'
                }} 
              />
            </div>

            {/* Left & Right Arrow Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={prevService}
                aria-label="Previous slide"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E1E8E5',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#080607',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#54CFB0'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E1E8E5'}
              >
                ← Prev
              </button>
              <button
                onClick={nextService}
                aria-label="Next slide"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E1E8E5',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#080607',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#54CFB0'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E1E8E5'}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 2 — INDUSTRIES (Selectable Boxes Opening Into Large Image Detail Panel)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="industries-section"
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0' 
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
              We build solutions around the unique challenges and opportunities of modern businesses. Click any sector to view specialized architectures.
            </p>
          </div>

          {/* ── 8 Industry Selectable Boxes (4 Columns × 2 Rows on Desktop, 2 Columns Mobile) ── */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1rem',
              marginBottom: selectedIndustry !== null ? '2.5rem' : '0'
            }}
          >
            {industries.map((ind, idx) => {
              const isSelected = selectedIndustry === idx;
              return (
                <button
                  key={ind.name}
                  onClick={() => {
                    // If clicking the same one, toggle close, else open/switch immediately
                    setSelectedIndustry(selectedIndustry === idx ? null : idx);
                  }}
                  style={{
                    background: isSelected ? '#F5F8F7' : '#FFFFFF',
                    border: isSelected ? '2px solid #54CFB0' : '1px solid #E1E8E5',
                    borderRadius: '6px',
                    padding: '1.35rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 6px 18px rgba(84, 207, 176, 0.15)' : 'none'
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span 
                      style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        background: isSelected ? '#54CFB0' : '#E1E8E5',
                        transition: 'background 0.2s ease'
                      }} 
                    />
                    <span 
                      style={{ 
                        fontSize: '1rem', 
                        fontWeight: isSelected ? 800 : 700, 
                        color: isSelected ? '#080607' : '#080607' 
                      }}
                    >
                      {ind.name}
                    </span>
                  </div>

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

          {/* ── EXPANDED INDUSTRY DETAIL PANEL (Appears dynamically upon selection) ── */}
          {selectedIndustry !== null && (
            <div 
              ref={industryPanelRef}
              style={{ 
                position: 'relative', 
                borderRadius: '10px', 
                overflow: 'hidden', 
                minHeight: 'clamp(520px, 60vh, 620px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(2rem, 4.5vw, 3.5rem)',
                boxShadow: '0 20px 50px rgba(8, 6, 7, 0.12)',
                border: '1px solid #E1E8E5'
              }}
            >
              {/* Full-Bleed Background Image */}
              <img 
                src={industries[selectedIndustry].image} 
                alt={industries[selectedIndustry].name} 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  zIndex: 0,
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }} 
              />

              {/* Dark Gradient Overlay for Supreme Text Legibility */}
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(135deg, rgba(8,6,7,0.92) 0%, rgba(8,6,7,0.82) 45%, rgba(8,6,7,0.4) 100%)',
                  zIndex: 1 
                }} 
              />

              {/* Panel Top Bar: Industry Number + Close Button */}
              <div 
                style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#54CFB0' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#54CFB0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    SECTOR {String(selectedIndustry + 1).padStart(2, '0')} / 08
                  </span>
                </div>

                <button
                  onClick={() => setSelectedIndustry(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#54CFB0';
                    e.currentTarget.style.color = '#080607';
                    e.currentTarget.style.borderColor = '#54CFB0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                >
                  <X size={15} />
                  <span>Close</span>
                </button>
              </div>

              {/* Panel Center Content: Headline, Description & Relevant MaxR Capabilities */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '2rem 0' }}>
                <span 
                  style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase', 
                    color: '#54CFB0',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}
                >
                  {industries[selectedIndustry].name}
                </span>

                <h3 
                  style={{ 
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', 
                    fontWeight: 800, 
                    color: '#FFFFFF', 
                    letterSpacing: '-0.025em', 
                    lineHeight: 1.2,
                    margin: '0 0 1rem 0'
                  }}
                >
                  {industries[selectedIndustry].tagline}
                </h3>

                <p 
                  style={{ 
                    fontSize: 'clamp(1rem, 1.2vw, 1.1rem)', 
                    color: '#cbd5e1', 
                    lineHeight: 1.6, 
                    margin: '0 0 2rem 0' 
                  }}
                >
                  {industries[selectedIndustry].desc}
                </p>

                {/* Relevant MaxR Capabilities List */}
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF', display: 'block', marginBottom: '0.75rem' }}>
                    Relevant MaxR Capabilities:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {industries[selectedIndustry].capabilities.map((cap, cIdx) => (
                      <span 
                        key={cIdx}
                        style={{ 
                          fontSize: '0.85rem', 
                          fontWeight: 600, 
                          color: '#FFFFFF', 
                          background: 'rgba(255, 255, 255, 0.1)', 
                          backdropFilter: 'blur(6px)', 
                          border: '1px solid rgba(255, 255, 255, 0.2)', 
                          padding: '6px 12px', 
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
              </div>

              {/* Panel Bottom Action Bar */}
              <div 
                style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)', 
                  paddingTop: '1.5rem' 
                }}
              >
                <Link
                  to="/industries"
                  style={{
                    background: '#54CFB0',
                    color: '#080607',
                    padding: '0.8rem 1.6rem',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
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
                  <span>Explore {industries[selectedIndustry].name}</span>
                  <ArrowRight size={15} />
                </Link>

                <button
                  onClick={() => setSelectedIndustry(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e1',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  <span>Return to All Industries</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. WHY MAXR SECTION (Split Layout: Workspace Left, 4 Principles Right)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
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
            {/* Left: Premium Enterprise Office / Workspace Photography */}
            <div>
              <div 
                style={{ 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  border: '1px solid #E1E8E5',
                  boxShadow: '0 16px 36px rgba(8, 6, 7, 0.05)',
                  background: '#FFFFFF'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" 
                  alt="MaxR enterprise collaboration and corporate team advisory workspace" 
                  style={{ width: '100%', height: 'clamp(340px, 42vw, 480px)', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            </div>

            {/* Right: Editorial Information & 4 Principles */}
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

              {/* 4 Simple Principles */}
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
                        background: '#FFFFFF', 
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
          4. CAPABILITY STRIP (Horizontal 4-Column Clean Strip with Thin Dividers)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
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
          5. CASE STUDIES (Enterprise Solutions & Tangible Outcomes)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0' 
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                  CASE STUDIES
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#080607', margin: 0 }}>
                Measurable Impact Across Industries.
              </h2>
            </div>

            <Link
              to="/case-studies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontSize: '0.925rem',
                color: '#080607',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#54CFB0'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#080607'}
            >
              <span>View All Case Studies</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              {
                sector: "RETAIL & E-COMMERCE",
                title: "Scaling Omnichannel Checkout to Sub-Second Latency",
                impact: "42% increase in checkout completions and zero downtime during high-volume flash sales.",
                image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80"
              },
              {
                sector: "REAL ESTATE",
                title: "Automated Inbound Lead Qualification & Virtual Viewings",
                impact: "68% reduction in broker manual screening time with automated WhatsApp pre-qualification.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
              },
              {
                sector: "HEALTHCARE",
                title: "Autonomous 24/7 Patient Appointment Triage System",
                impact: "Zero busy signals on clinical hotlines and automated appointment reminder confirmations.",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
              }
            ].map((cs) => (
              <div 
                key={cs.title}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E1E8E5', 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '210px', overflow: 'hidden' }}>
                  <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#54CFB0', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    {cs.sector}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#080607', margin: '0 0 0.85rem 0', lineHeight: 1.35 }}>
                    {cs.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#3F5565', lineHeight: 1.55, margin: '0 0 1.25rem 0', flex: 1 }}>
                    {cs.impact}
                  </p>
                  <Link 
                    to="/case-studies"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      fontWeight: 700, 
                      fontSize: '0.875rem', 
                      color: '#080607',
                      textDecoration: 'none',
                      marginTop: 'auto'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#54CFB0'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#080607'}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. INSIGHTS SECTION (Editorial Perspectives, 3 Article Cards)
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
          7. FINAL CTA (Minimalist Executive Black Background, Mint Accent)
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
