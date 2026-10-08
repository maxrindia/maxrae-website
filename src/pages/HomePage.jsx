import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowLeft,
  Heart,
  GraduationCap,
  Building2,
  Luggage,
  ShoppingCart,
  Users,
  TrendingUp,
  Rocket,
  Clock
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);
  const [currentService, setCurrentService] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // ── 1. EXACT 10 SERVICES (Full-Bleed Photographic Cards with Dark Overlays) ──
  const services = [
    {
      title: "Web Development",
      category: "WEB DEVELOPMENT",
      desc: "High-performance websites and web applications designed around your business goals.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "App Development",
      category: "APP DEVELOPMENT",
      desc: "Native and cross-platform mobile applications that engage users and scale with your business.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Software & Product Development",
      category: "SOFTWARE DEVELOPMENT",
      desc: "Custom business software, SaaS architectures and enterprise platforms built to automate workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Digital Marketing",
      category: "DIGITAL MARKETING",
      desc: "Data-driven SEO, PPC campaigns and organic acquisition strategies that convert visitors into revenue.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Social Media Management",
      category: "SOCIAL MEDIA",
      desc: "Strategic content creation, community engagement and brand positioning across high-intent channels.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "AI & Automation",
      category: "AI & AUTOMATION",
      desc: "Autonomous workflow bots, AI voice agents and smart integrations that cut manual overhead by 70%.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "CRM & Lead Solutions",
      category: "CRM & LEADS",
      desc: "End-to-end sales pipelines, automated lead routing and proactive client engagement engines.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "UI/UX & Branding",
      category: "UI/UX & BRANDING",
      desc: "Digital experiences and brand identities that create clarity, customer delight and consistency.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Cloud & Technology",
      category: "CLOUD ARCHITECTURE",
      desc: "Reliable cloud infrastructure, secure database scaling and 24/7 high-availability microservices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    },
    {
      title: "Data & Business Intelligence",
      category: "DATA & BI",
      desc: "Executive dashboards, real-time KPI telemetry and predictive business intelligence reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/services"
    }
  ];

  // ── 2. EXACT 8 INDUSTRIES (Pills Left + Integrated Preview Panel Right) ──
  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      desc: "Digital solutions that improve patient experiences, operational efficiency and connected care.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
      tags: ["Web Development", "AI & Automation", "CRM & Lead Solutions", "Data & Business Intelligence", "Digital Marketing"],
      ctaText: "Explore Healthcare Solutions"
    },
    {
      name: "Education",
      icon: GraduationCap,
      desc: "Unified student management portals, automated admissions pipelines and interactive digital learning.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
      tags: ["Custom Portals", "LMS Architecture", "Student Ingestion CRM", "Workflow Automation"],
      ctaText: "Explore Education Solutions"
    },
    {
      name: "Real Estate",
      icon: Building2,
      desc: "High-value buyer pre-qualification, 24/7 viewing booking bots, and interactive 3D digital floorplans.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      tags: ["Property Portals", "WhatsApp Lead Bots", "Virtual Tours", "Broker Automation CRM"],
      ctaText: "Explore Real Estate Solutions"
    },
    {
      name: "Hospitality",
      icon: Luggage,
      desc: "Zero-wait multilingual voice reservation receptionists, contactless guest concierge and table bookings.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      tags: ["Voice Concierge", "Guest Mobile Apps", "Table Booking Bots", "Loyalty Systems"],
      ctaText: "Explore Hospitality Solutions"
    },
    {
      name: "E-Commerce",
      icon: ShoppingCart,
      desc: "Sub-second headless storefronts, autonomous WhatsApp order tracking, and cart recovery triggers.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
      tags: ["Headless Storefronts", "Order Resolution AI", "Performance Ads", "CRM Automation"],
      ctaText: "Explore E-Commerce Solutions"
    },
    {
      name: "Professional Services",
      icon: Users,
      desc: "Practice management platforms, automated client onboarding and partner billing portals.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      tags: ["Client Intake Workflows", "Billing Portals", "Document Cloud", "Practice CRM"],
      ctaText: "Explore Professional Services Solutions"
    },
    {
      name: "Finance",
      icon: TrendingUp,
      desc: "Encrypted investor portals, bank-grade digital KYC onboarding and automated regulatory audit pipelines.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
      tags: ["Encrypted KYC Portals", "Investor Dashboards", "Compliance Automation", "API Security"],
      ctaText: "Explore Finance Solutions"
    },
    {
      name: "Technology & Startups",
      icon: Rocket,
      desc: "Rapid full-stack MVP prototyping, high-concurrency cloud scaling, and automated telemetry pipelines.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      tags: ["Full-Stack Engineering", "Cloud DevOps", "SaaS Architecture", "Growth Engines"],
      ctaText: "Explore Startup Solutions"
    }
  ];

  // ── 3. TRUSTED BY BUSINESSES (Exact Logos from Mockup) ──
  const trustedLogos = [
    { name: "EMAAR", style: { fontWeight: 900, letterSpacing: '0.18em', fontSize: '1.25rem' } },
    { name: "TOYOTA", sub: "TOYOTA", isIconic: true },
    { name: "Emirates", isSerif: true, style: { fontFamily: 'Georgia, serif', fontSize: '1.35rem', fontWeight: 700 } },
    { name: "Jumeirah", isSerif: true, style: { fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 600 } },
    { name: "etisalat", style: { fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em', color: '#080607' } },
    { name: "DHL", isBoldItalic: true, style: { fontWeight: 900, fontStyle: 'italic', fontSize: '1.5rem', letterSpacing: '0.05em' } },
    { name: "LEXUS", isPill: true },
    { name: "Emirates NBD", isCombined: true },
    { name: "NISSAN", isCircle: true }
  ];

  // ── 4. CLIENT STORIES (Matching Mockup Reference) ──
  const clientStories = [
    {
      quote: "MaxR helped us build a scalable digital platform that improved our customer experience and operational efficiency. Their team understood our requirements and delivered a solution that created real business value.",
      client: "Real Estate Client",
      industry: "Real Estate Industry",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    {
      quote: "MAXR analyzed our business, identified growth opportunities, and created a strategic roadmap that helped us achieve 5X business growth within 6 months.",
      client: "Parvathi Computers",
      industry: "IT & Computer Services",
      image: "/assets/clients/parvathi_thumb.jpg"
    },
    {
      quote: "MAXR helped us strengthen our digital presence, streamline customer engagement, and automate inbound inquiries seamlessly.",
      client: "ARDHRA",
      industry: "Natural Skincare & Wellness",
      image: "/assets/clients/ardhra_thumb.jpg"
    }
  ];

  // ── 5. INSIGHTS (Exact 3 Cards from Mockup) ──
  const insights = [
    {
      title: "How Automation Improves Business Efficiency",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      link: "/blog"
    },
    {
      title: "Building Scalable Digital Products for Growth",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      link: "/blog"
    },
    {
      title: "Key Trends in Digital Transformation",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      link: "/blog"
    }
  ];

  // Carousel Controls
  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1 < services.length ? prev + 1 : 0));
  }, [services.length]);

  const prevService = useCallback(() => {
    setCurrentService((prev) => (prev - 1 >= 0 ? prev - 1 : services.length - 1));
  }, [services.length]);

  // Drag / Swipe Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
    setDragOffset(clientX - dragStartX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) nextService();
    else if (dragOffset > 50) prevService();
    setDragOffset(0);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextService();
      if (e.key === 'ArrowLeft') prevService();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextService, prevService]);

  return (
    <div style={{ background: '#FFFFFF', color: '#080607', overflowX: 'hidden' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          HERO SECTION (Preserved White-First Enterprise Hero)
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
            {/* Left Column: Typography */}
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <span style={{ width: '14px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#080607' }}>
                  MAXR TECHNOLOGIES
                </span>
              </div>

              <h1 
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
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
            <div style={{ position: 'relative' }}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          1. OUR SERVICES (Exact Layout Matching Mockup: Centered Full-Image Carousel)
          ═════════════════════════════════════════════ */}
      <section 
        id="services-carousel-section"
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4rem, 6vw, 5.5rem) 0',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          {/* Header Strip with Eyebrow, Title, Subtitle, and Far Right Arrows */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '2.75rem' }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
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
                  margin: 0
                }}
              >
                End-to-End Technology for Modern Businesses.
              </h2>
            </div>

            {/* Subtitle & Circular Arrow Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexShrink: 0 }}>
              <p style={{ fontSize: '0.95rem', color: '#3F5565', lineHeight: 1.5, margin: 0, maxWidth: '340px' }}>
                From strategy and consulting to digital solutions and automation, we help businesses grow, operate efficiently and stay ahead.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={prevService}
                  aria-label="Previous Service"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid #080607',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#080607',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#54CFB0';
                    e.currentTarget.style.color = '#54CFB0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#080607';
                    e.currentTarget.style.color = '#080607';
                  }}
                >
                  <ArrowLeft size={16} />
                </button>

                <button
                  onClick={nextService}
                  aria-label="Next Service"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#080607',
                    border: '1.5px solid #080607',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#54CFB0';
                    e.currentTarget.style.borderColor = '#54CFB0';
                    e.currentTarget.style.color = '#080607';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#080607';
                    e.currentTarget.style.borderColor = '#080607';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Centered Full-Image Carousel Track Matching Mockup ── */}
        <div 
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
              gap: 'clamp(16px, 2.5vw, 30px)', 
              transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(calc(50vw - (clamp(320px, 48vw, 680px) / 2) - (${currentService} * (clamp(320px, 48vw, 680px) + clamp(16px, 2.5vw, 30px))) + ${dragOffset}px))`,
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
                    flex: '0 0 clamp(320px, 48vw, 680px)',
                    height: 'clamp(380px, 44vh, 460px)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: isActive ? 'default' : 'pointer',
                    transform: isActive ? 'scale(1)' : 'scale(0.88)',
                    opacity: isActive ? 1 : 0.65,
                    boxShadow: isActive ? '0 20px 45px rgba(8, 6, 7, 0.18)' : '0 6px 18px rgba(8, 6, 7, 0.04)',
                    transition: 'transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease'
                  }}
                >
                  {/* Full-Bleed Background Image */}
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

                  {/* Dark Gradient Overlay for Maximum Text Legibility */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(180deg, rgba(8,6,7,0.1) 0%, rgba(8,6,7,0.55) 45%, rgba(8,6,7,0.92) 100%)',
                      zIndex: 1 
                    }} 
                  />

                  {/* Content Overlay */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      zIndex: 2, 
                      padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}
                  >
                    {/* Eyebrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                      <span style={{ width: '12px', height: '2px', background: '#54CFB0' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                        {item.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 
                      style={{ 
                        fontSize: 'clamp(1.65rem, 2.5vw, 2.25rem)', 
                        fontWeight: 800, 
                        color: '#FFFFFF', 
                        letterSpacing: '-0.025em', 
                        lineHeight: 1.15,
                        margin: '0 0 0.75rem 0' 
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p 
                      style={{ 
                        fontSize: 'clamp(0.9rem, 1.05vw, 0.975rem)', 
                        color: 'rgba(255, 255, 255, 0.88)', 
                        lineHeight: 1.55, 
                        maxWidth: '480px',
                        margin: '0 0 1.5rem 0' 
                      }}
                    >
                      {item.desc}
                    </p>

                    {/* Circular Action Button */}
                    <Link
                      to={item.link}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: isActive ? '#54CFB0' : 'rgba(255, 255, 255, 0.2)',
                        border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.4)',
                        color: isActive ? '#080607' : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease, background 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. INDUSTRIES (Exact Layout Matching Mockup: Side-by-Side Split Grid & Preview)
          ═════════════════════════════════════════════ */}
      <section 
        id="industries-section"
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6rem) 0'
        }}
      >
        <div className="container">
          
          {/* Header Strip with Eyebrow, Title, and Subtitle on the Right */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
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
                  margin: 0
                }}
              >
                Technology for Every Industry.
              </h2>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#3F5565', lineHeight: 1.5, margin: 0, maxWidth: '420px' }}>
              Every industry has different challenges. Our solutions adapt to the way your business works.
            </p>
          </div>

          {/* ── Side-By-Side Split Layout (Left: 2×4 Pill Grid | Right: Rich Visual Panel) ── */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'stretch'
            }}
          >
            {/* Left Column: 2 Columns × 4 Rows of Industry Buttons */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px' 
              }}
            >
              {industries.map((ind, idx) => {
                const isSelected = activeIndustry === idx;
                const IconComp = ind.icon;
                return (
                  <button
                    key={ind.name}
                    onClick={() => setActiveIndustry(idx)}
                    style={{
                      background: isSelected ? '#e6f9f4' : '#FFFFFF',
                      border: isSelected ? '1.5px solid #54CFB0' : '1px solid #E1E8E5',
                      borderRadius: '8px',
                      padding: '1.15rem 1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 12px rgba(84, 207, 176, 0.15)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = '#54CFB0';
                        e.currentTarget.style.background = '#F5F8F7';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = '#E1E8E5';
                        e.currentTarget.style.background = '#FFFFFF';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <IconComp size={18} color={isSelected ? '#0f766e' : '#080607'} strokeWidth={2} />
                      <span style={{ fontSize: '0.925rem', fontWeight: isSelected ? 800 : 700, color: '#080607' }}>
                        {ind.name}
                      </span>
                    </div>

                    <ArrowRight size={14} color={isSelected ? '#0f766e' : '#94a3b8'} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Visual Preview Panel for Selected Industry */}
            <div 
              style={{ 
                position: 'relative', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                minHeight: 'clamp(440px, 50vh, 520px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                boxShadow: '0 16px 40px rgba(8, 6, 7, 0.12)'
              }}
            >
              {/* Dynamic Background Image */}
              <img 
                src={industries[activeIndustry].image} 
                alt={industries[activeIndustry].name} 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  zIndex: 0,
                  transition: 'opacity 0.4s ease'
                }} 
              />

              {/* Dark Gradient Overlay */}
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(180deg, rgba(8,6,7,0.15) 0%, rgba(8,6,7,0.7) 40%, rgba(8,6,7,0.94) 100%)',
                  zIndex: 1 
                }} 
              />

              {/* Panel Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                  <span style={{ width: '14px', height: '2px', background: '#54CFB0' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                    INDUSTRY
                  </span>
                </div>

                <h3 
                  style={{ 
                    fontSize: 'clamp(1.85rem, 2.6vw, 2.4rem)', 
                    fontWeight: 800, 
                    color: '#FFFFFF', 
                    letterSpacing: '-0.025em', 
                    lineHeight: 1.15,
                    margin: '0 0 0.85rem 0' 
                  }}
                >
                  {industries[activeIndustry].name}
                </h3>

                <p 
                  style={{ 
                    fontSize: '0.95rem', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    lineHeight: 1.55, 
                    maxWidth: '540px',
                    margin: '0 0 1.5rem 0' 
                  }}
                >
                  {industries[activeIndustry].desc}
                </p>

                {/* Capability Tags Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
                  {industries[activeIndustry].tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 600, 
                        color: '#FFFFFF', 
                        background: 'rgba(8, 6, 7, 0.65)', 
                        backdropFilter: 'blur(8px)', 
                        border: '1px solid rgba(255, 255, 255, 0.22)', 
                        padding: '6px 12px', 
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#54CFB0' }} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore CTA Button */}
                <Link
                  to="/industries"
                  style={{
                    background: '#54CFB0',
                    color: '#080607',
                    padding: '0.85rem 1.65rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(84, 207, 176, 0.3)'
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
                  <span>{industries[activeIndustry].ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. TRUSTED BY BUSINESSES (Exact Logos & Arrows Matching Mockup)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: '3.5rem 0' 
        }}
      >
        <div className="container">
          {/* Header Strip with Eyebrow and Right Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#080607' }}>
                TRUSTED BY BUSINESSES
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                aria-label="Previous logos"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: '4px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#080607'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                aria-label="Next logos"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: '4px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#080607'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Grayscale Enterprise Brand Logos Row */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: 'clamp(1.5rem, 3.5vw, 3rem)',
              flexWrap: 'wrap',
              opacity: 0.8
            }}
          >
            {/* EMAAR */}
            <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.18em', color: '#334155' }}>
              EMAAR
            </span>

            {/* TOYOTA */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <svg width="28" height="20" viewBox="0 0 40 28" fill="none">
                <ellipse cx="20" cy="14" rx="19" ry="13" stroke="#334155" strokeWidth="2.5"/>
                <ellipse cx="20" cy="14" rx="7" ry="13" stroke="#334155" strokeWidth="2.5"/>
                <ellipse cx="20" cy="9" rx="14" ry="5" stroke="#334155" strokeWidth="2.5"/>
              </svg>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', color: '#334155' }}>TOYOTA</span>
            </div>

            {/* Emirates */}
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: '#334155', letterSpacing: '-0.01em' }}>
              Emirates
            </span>

            {/* Jumeirah */}
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#334155' }}>
              Jumeirah
            </span>

            {/* etisalat */}
            <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#334155' }}>
              etisalat
            </span>

            {/* DHL */}
            <span style={{ fontSize: '1.5rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '0.05em', color: '#334155' }}>
              DHL
            </span>

            {/* LEXUS */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 900, fontStyle: 'italic', color: '#334155' }}>L</span>
              </div>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.12em', color: '#334155' }}>LEXUS</span>
            </div>

            {/* Emirates NBD */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '14px', height: '20px', background: '#334155' }} />
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#334155' }}>Emirates NBD</span>
            </div>

            {/* NISSAN */}
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ fontSize: '0.55rem', fontWeight: 900, letterSpacing: '0.04em', color: '#334155' }}>NISSAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. CLIENT STORIES (Exact Layout Matching Mockup Reference)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6rem) 0' 
        }}
      >
        <div className="container">
          
          {/* Header Strip with Eyebrow, Title, and Right 'View All Stories →' */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                  CLIENT STORIES
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.15, 
                  color: '#080607', 
                  margin: 0 
                }}
              >
                Real Impact. Lasting Partnerships.
              </h2>
            </div>

            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#0f766e',
                fontWeight: 700,
                fontSize: '0.925rem',
                textDecoration: 'none'
              }}
            >
              <span>View All Stories</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Client Story Card Matching Mockup */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E1E8E5', 
              borderRadius: '12px', 
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'center',
              boxShadow: '0 4px 16px rgba(8, 6, 7, 0.03)'
            }}
          >
            {/* Left: Thumbnail Image */}
            <div 
              style={{ 
                height: 'clamp(200px, 26vw, 260px)', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                background: '#F5F8F7' 
              }}
            >
              <img 
                src={clientStories[currentStory].image} 
                alt={clientStories[currentStory].client} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>

            {/* Right: Quote, Client Info, and Navigation Arrows */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                {/* Big Mint Quotation Mark */}
                <span 
                  style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: 900, 
                    color: '#54CFB0', 
                    lineHeight: 0.8,
                    fontFamily: 'Georgia, serif',
                    userSelect: 'none'
                  }}
                >
                  “
                </span>

                {/* Quote Text */}
                <p 
                  style={{ 
                    fontSize: 'clamp(1rem, 1.25vw, 1.125rem)', 
                    color: '#3F5565', 
                    lineHeight: 1.6, 
                    margin: 0, 
                    fontWeight: 500 
                  }}
                >
                  {clientStories[currentStory].quote}
                </p>
              </div>

              {/* Bottom Author Row with Arrows Far Right */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F5F8F7', paddingTop: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: '0 0 2px 0' }}>
                    {clientStories[currentStory].client}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                    {clientStories[currentStory].industry}
                  </p>
                </div>

                {/* Arrow Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => setCurrentStory(prev => (prev - 1 >= 0 ? prev - 1 : clientStories.length - 1))}
                    aria-label="Previous story"
                    style={{
                      width: '38px',
                      height: '38px',
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
                    <ArrowLeft size={15} />
                  </button>

                  <button
                    onClick={() => setCurrentStory(prev => (prev + 1 < clientStories.length ? prev + 1 : 0))}
                    aria-label="Next story"
                    style={{
                      width: '38px',
                      height: '38px',
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
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. INSIGHTS (Exact 3 Cards from Mockup Reference)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6rem) 0' 
        }}
      >
        <div className="container">
          {/* Header Strip with Eyebrow, Title, and Right 'View All Insights →' */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
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
                  margin: 0 
                }}
              >
                Perspectives on<br />
                Technology and Growth.
              </h2>
            </div>

            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#0f766e',
                fontWeight: 700,
                fontSize: '0.925rem',
                textDecoration: 'none'
              }}
            >
              <span>View All Insights</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 3 Editorial Cards Grid Matching Mockup */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.75rem' 
            }}
          >
            {insights.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E1E8E5', 
                  borderRadius: '10px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#54CFB0';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(8, 6, 7, 0.06)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  const arrow = e.currentTarget.querySelector('.card-arrow');
                  if (arrow) arrow.style.color = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E1E8E5';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  const arrow = e.currentTarget.querySelector('.card-arrow');
                  if (arrow) arrow.style.color = '#080607';
                }}
              >
                {/* Image */}
                <div style={{ height: '180px', overflow: 'hidden', background: '#F5F8F7' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                </div>

                {/* Details */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 
                    style={{ 
                      fontSize: '1.15rem', 
                      fontWeight: 700, 
                      color: '#080607', 
                      margin: '0 0 1.5rem 0', 
                      lineHeight: 1.4, 
                      letterSpacing: '-0.015em' 
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Bottom: Read Time (left) and Arrow (right) */}
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F5F8F7', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                      {item.readTime}
                    </span>

                    <span 
                      className="card-arrow"
                      style={{ color: '#080607', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s ease' }}
                    >
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. FINAL CTA (Minimalist Executive Black Background, Mint Accent)
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
              <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
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
