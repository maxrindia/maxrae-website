import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Play, 
  Heart,
  GraduationCap,
  Building2, 
  Luggage,
  ShoppingCart, 
  Users,
  TrendingUp,
  Rocket,
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);

  // ── Scroll to Top Visibility ──
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Hero Banner Dynamic Multi-Image Background State (Auto-Swipe) ──
  const heroImages = [
    "/assets/images/hero-bg-dubai.jpg",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
  ];
  const [currentHeroBg, setCurrentHeroBg] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroBg((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  // ── Services Carousel State (Infinite Looping / Circular Continuation) ──
  const [currentService, setCurrentService] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  // ── Industries Interactive Selection & Preview State ──
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const currentActiveIdx = hoveredIndustry !== null ? hoveredIndustry : selectedIndustry;

  // ── Client Stories Video Playback State ──
  const [playingVideo, setPlayingVideo] = useState(null); // null | 'ardhra' | 'parvathi'

  // ── 1. EXACT 10 SERVICES (Circular Array: 0 = Web Dev, 9 = Data & Business) ──
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

  // Circular offset calculation: when currentService=0 (Web Dev), slide 9 (Data & BI) has offset = -1 (left side)
  const getCardOffset = (idx) => {
    let diff = (idx - currentService) % services.length;
    if (diff > services.length / 2) diff -= services.length;
    if (diff < -services.length / 2) diff += services.length;
    return diff;
  };

  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prevService = useCallback(() => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
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

  // Touch and drag handlers
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

  // Services Carousel Slow Auto-Scroll Timer
  useEffect(() => {
    if (isServicesHovered || isDragging) return;
    const servicesTimer = setInterval(() => {
      nextService();
    }, 4500);
    return () => clearInterval(servicesTimer);
  }, [isServicesHovered, isDragging, nextService]);

  // ── 2. EXACT 8 INDUSTRIES ──
  const industries = [
    {
      name: "Healthcare",
      displayTitle: "HEALTHCARE & HEALTH-TECH",
      icon: Heart,
      desc: "Digital patient experiences, clinical workflows, HIPAA-compliant portals, and connected medical operations.",
      linkText: "Our Healthcare »",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "AI & Automation",
        "CRM & Lead Solutions",
        "Data & Business Intelligence",
        "Maintenance & Support"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "Real Estate",
      displayTitle: "REAL ESTATE & PROPTECH",
      icon: Building2,
      desc: "High-converting property portals, automated CRM lead routing, and connected virtual asset experiences.",
      linkText: "Our Real Estate »",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "CRM & Lead Solutions",
        "Digital Marketing",
        "AI & Automation",
        "Data & Business Intelligence"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "E-Commerce",
      displayTitle: "E-COMMERCE & RETAIL",
      icon: ShoppingCart,
      desc: "High-conversion headless storefronts, multi-currency checkout, and automated inventory sync pipelines.",
      linkText: "Our E-Commerce »",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "E-Commerce Solutions",
        "Web Development",
        "Digital Marketing",
        "AI & Automation",
        "Cloud & DevOps"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "Finance",
      displayTitle: "FINANCE & FINTECH",
      icon: TrendingUp,
      desc: "Secure compliance workflows, automated KYC intake, executive BI dashboards, and financial transaction portals.",
      linkText: "Our Finance »",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "Data & Business Intelligence",
        "AI & Automation",
        "Cloud & DevOps",
        "CRM & Lead Solutions"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "Education",
      displayTitle: "EDUCATION & EDTECH",
      icon: GraduationCap,
      desc: "Digital learning management platforms, campus student portals, and automated admission intake funnels.",
      linkText: "Our Education »",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "Mobile App Development",
        "CRM & Lead Solutions",
        "AI & Automation",
        "Digital Marketing"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "Hospitality",
      displayTitle: "HOSPITALITY & TOURISM",
      icon: Luggage,
      desc: "Direct booking engines, 24/7 multilingual guest concierge bots, and integrated loyalty rewards systems.",
      linkText: "Our Hospitality »",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "Mobile App Development",
        "CRM & Lead Solutions",
        "Digital Marketing",
        "AI & Automation"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "Professional Services",
      displayTitle: "PROFESSIONAL SERVICES",
      icon: Users,
      desc: "Refined digital presence, automated client onboarding, and integrated enterprise practice workflows.",
      linkText: "Our Professional Services »",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "CRM & Lead Solutions",
        "Digital Transformation",
        "Data & Business Intelligence",
        "Digital Marketing"
      ],
      ctaText: "Explore Industry →"
    },
    {
      name: "Technology & Startups",
      displayTitle: "TECHNOLOGY & STARTUPS",
      icon: Rocket,
      desc: "Rapid full-stack engineering, scalable multi-tenant cloud platforms, and intelligent AI automation pipelines.",
      linkText: "Our Technology »",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Web Development",
        "Mobile App Development",
        "AI & Automation",
        "Cloud & DevOps",
        "Digital Transformation"
      ],
      ctaText: "Explore Industry →"
    }
  ];

  // ── 3. CLIENT LOGOS ──
  const clientLogos = [
    { name: "ARDHRA", src: "/assets/clients/ardhra.png" },
    { name: "Corrumatik", src: "/assets/clients/corrumatik.png" },
    { name: "Glomi", src: "/assets/clients/glomi.png" },
    { name: "Deeplance", src: "/assets/clients/deeplance.png" },
    { name: "Le Spa", src: "/assets/clients/lespa.png" },
    { name: "Parvathi Computers", src: "/assets/clients/parvathi.png" },
    { name: "SCOINS", src: "/assets/clients/scoins.png" }
  ];

  // ── 4. CLIENT VIDEO STORIES ──
  const clientVideoStories = [
    {
      id: "ardhra",
      company: "ARDHRA",
      industry: "Natural Skincare & Wellness",
      logo: "/assets/clients/ardhra.png",
      videoSrc: "/assets/Client Video/ARDHRA-C-tNFB5X.mp4",
      thumbnail: "/assets/clients/ardhra_thumb.jpg",
      quote: "MAXR helped us strengthen our digital presence and streamline customer engagement.",
      tags: ["AI Automation", "Lead Capture", "Customer Engagement"],
      servicesRendered: [
        "AI Automation & WhatsApp Lead Engine",
        "24/7 Customer Support AI Bots",
        "Digital Presence & Web Architecture"
      ]
    },
    {
      id: "parvathi",
      company: "Parvathi Computers",
      industry: "IT & Computer Services",
      logo: "/assets/clients/parvathi.png",
      videoSrc: "/assets/Client Video/parvathi-J3kE264L.mp4",
      thumbnail: "/assets/clients/parvathi_thumb.jpg",
      quote: "MAXR analyzed our business, identified growth opportunities, and created a strategic roadmap that helped us achieve 5X business growth within 6 months.",
      tags: ["Business Strategy", "Growth Roadmap", "Market Expansion"],
      servicesRendered: [
        "Strategic Business Growth Advisory",
        "Commercial 5X Growth Roadmap Architecture",
        "B2B Sales Pipeline & CRM Automation"
      ]
    }
  ];

  // ── 5. INSIGHTS ──
  const insights = [
    {
      title: "How Automation Improves Business Efficiency",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      link: "/blog/how-automation-improves-business-efficiency"
    },
    {
      title: "Why Modern Websites Must Be Built for Speed and Mobile",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "/blog/modern-websites-speed-and-mobile"
    },
    {
      title: "The Growing Role of AI Agents in Customer Service",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      link: "/blog/voice-ai-agents-customer-service"
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#080607', overflowX: 'hidden' }}>

      {/* Hide sibling floating modal button from App.jsx on HomePage */}
      <style>{`
        button[title="Schedule Discovery Session"] { display: none !important; }
      `}</style>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Dynamic Auto-Switching Background Experience)
          ═════════════════════════════════════════════ */}
      <section 
        ref={heroRef}
        className="hero-enterprise-section"
      >
        {/* Dynamic Multi-Image Auto-Switching Background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          {heroImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Hero background"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center right',
                opacity: currentHeroBg === i ? 1 : 0,
                transform: currentHeroBg === i ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 1.2s ease-in-out, transform 1.6s ease-out'
              }}
            />
          ))}
          <div className="hero-enterprise-overlay" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px', padding: 'clamp(4.5rem, 8vw, 7rem) 0' }}>
            
            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5.2vw, 4.6rem)', 
                fontWeight: 900, 
                lineHeight: 1.08, 
                letterSpacing: '-0.04em', 
                color: '#080607', 
                margin: '0 0 1.5rem 0',
                fontFamily: "'Space Grotesk', -apple-system, sans-serif"
              }}
            >
              We Build Technology That Works.
            </h1>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)', 
                lineHeight: 1.65, 
                color: '#3F5565', 
                maxWidth: '620px', 
                margin: '0 0 2.75rem 0' 
              }}
            >
              AI automation, custom software, and digital marketing — built to deliver results from day one.
            </p>

            {/* CTA Buttons - Compact with Animation Effects */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/case-studies"
                className="btn-animated"
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.875rem',
                  fontWeight: 750,
                  borderRadius: '8px'
                }}
              >
                <span>See Our Work</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
                className="btn-outline"
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  borderRadius: '8px'
                }}
              >
                <span>Talk to Us</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. STATS BAR (Between Hero and Services)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderTop: '1px solid #E1E8E5', 
          borderBottom: '1px solid #E1E8E5', 
          padding: '2.5rem 0' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem',
              textAlign: 'center' 
            }}
          >
            <div>
              <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#080607', fontFamily: "'Space Grotesk', -apple-system, sans-serif" }}>50+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>Projects Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#080607', fontFamily: "'Space Grotesk', -apple-system, sans-serif" }}>20+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>Clients Served</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#00bba7', fontFamily: "'Space Grotesk', -apple-system, sans-serif" }}>3×</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>Average ROI</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#080607', fontFamily: "'Space Grotesk', -apple-system, sans-serif" }}>&lt; 7</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>Days to Deploy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. OUR SERVICES (Infinite Loop Carousel)
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
          {/* Header Strip with Eyebrow, Title and Subtitle */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ maxWidth: '640px' }}>
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

            <p style={{ fontSize: '0.95rem', color: '#3F5565', lineHeight: 1.5, margin: 0, maxWidth: '380px' }}>
              From strategy and digital solutions to automation, we help businesses grow, operate efficiently and stay ahead.
            </p>
          </div>
        </div>

        {/* Circular Continuous Looping Track */}
        <div 
          style={{ 
            width: '100%', 
            overflow: 'hidden',
            padding: '1rem 0 1.5rem',
            cursor: isDragging ? 'grabbing' : 'grab',
            position: 'relative',
            minHeight: 'clamp(420px, 48vh, 500px)'
          }}
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: 'clamp(400px, 46vh, 480px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {services.map((item, idx) => {
              const offset = getCardOffset(idx);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <div
                  key={item.title}
                  onClick={() => {
                    setCurrentService(idx);
                  }}
                  style={{
                    position: 'absolute',
                    width: 'clamp(320px, 48vw, 680px)',
                    height: 'clamp(380px, 44vh, 460px)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: isActive ? 'default' : 'pointer',
                    transform: `translateX(calc(${offset} * (clamp(320px, 48vw, 680px) + clamp(16px, 2.5vw, 30px)) + ${dragOffset}px)) scale(${isActive ? 1 : 0.88})`,
                    opacity: isActive ? 1 : (isVisible ? 0.65 : 0),
                    zIndex: isActive ? 10 : (isVisible ? 5 : 0),
                    pointerEvents: isVisible ? 'auto' : 'none',
                    boxShadow: isActive ? '0 20px 45px rgba(8, 6, 7, 0.18)' : '0 6px 18px rgba(8, 6, 7, 0.04)',
                    transition: isDragging ? 'none' : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s ease, box-shadow 0.55s ease'
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

                  {/* Dark Gradient Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(8,6,7,0.1) 0%, rgba(8,6,7,0.55) 45%, rgba(8,6,7,0.92) 100%)',
                      zIndex: 1
                    }}
                  />

                  {/* Active Card Pointer Arrow Indicator */}
                  {isActive && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.25rem',
                        background: '#54CFB0',
                        color: '#080607',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 4px 14px rgba(84, 207, 176, 0.4)',
                        zIndex: 3
                      }}
                    >
                      <span>Active</span>
                      <ArrowDown size={13} strokeWidth={2.5} />
                    </div>
                  )}

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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                      <span style={{ width: '12px', height: '2px', background: '#54CFB0' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                        {item.category}
                      </span>
                    </div>

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

                    {/* View More Action Button */}
                    <Link
                      to={item.link}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '0.75rem 1.4rem',
                        borderRadius: '8px',
                        background: isActive ? '#54CFB0' : 'rgba(255, 255, 255, 0.22)',
                        backdropFilter: 'blur(8px)',
                        border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.4)',
                        color: isActive ? '#080607' : '#FFFFFF',
                        fontWeight: 750,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        width: 'fit-content',
                        boxShadow: isActive ? '0 4px 14px rgba(84, 207, 176, 0.3)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.color = '#080607';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isActive ? '#54CFB0' : 'rgba(255, 255, 255, 0.22)';
                        e.currentTarget.style.color = isActive ? '#080607' : '#FFFFFF';
                      }}
                    >
                      <span>View More</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Centered Slide Indicator Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {services.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentService(i)}
                style={{
                  width: i === currentService ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === currentService ? '#54CFB0' : '#E1E8E5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. HOW IT WORKS SECTION (3 Steps Horizontal Layout)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6rem) 0'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
              <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#080607' }}>
                HOW IT WORKS
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
              A Clear, Direct Process.
            </h2>
          </div>

          {/* 3 Steps Horizontal Layout with Connecting Line */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2.5rem',
              position: 'relative'
            }}
          >
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We audit your workflow and identify exactly where time and money are being lost."
              },
              {
                step: "02",
                title: "Build",
                desc: "We design and deploy the solution — automations, apps, or campaigns. You see progress every two weeks."
              },
              {
                step: "03",
                title: "Grow",
                desc: "You get results. We monitor, optimise, and scale what works. Post-launch support is included."
              }
            ].map((st, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2.25rem 2rem',
                  border: '1px solid #E1E8E5',
                  boxShadow: '0 4px 16px rgba(8, 6, 7, 0.03)',
                  position: 'relative'
                }}
              >
                {/* Outlined Circle Step Number with Mint Border */}
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '2px solid #54CFB0',
                    background: '#FFFFFF',
                    color: '#080607',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.95rem',
                    fontWeight: 900,
                    marginBottom: '1.25rem',
                    fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                  }}
                >
                  {st.step}
                </div>

                <h3 
                  style={{ 
                    fontSize: '1.35rem', 
                    fontWeight: 800, 
                    color: '#080607', 
                    margin: '0 0 0.75rem 0',
                    letterSpacing: '-0.02em',
                    fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                  }}
                >
                  {st.title}
                </h3>

                <p 
                  style={{ 
                    fontSize: '0.925rem', 
                    color: '#3F5565', 
                    lineHeight: 1.6, 
                    margin: 0 
                  }}
                >
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. INDUSTRIES (Interactive Editorial Showcase: Transparent Matrix Pattern)
          ═════════════════════════════════════════════ */}
      <section 
        id="industries-section"
        className="industries-editorial-section"
        aria-label="Industries We Serve"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#080607',
          padding: 'clamp(5rem, 8vw, 7.5rem) 0'
        }}
      >
        {/* Dynamic Background Image: Visible ONLY when hovering or clicking an industry */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, background: '#080607' }}>
          {industries.map((ind, idx) => {
            const isVisible = currentActiveIdx === idx;
            return (
              <img
                key={ind.name}
                src={ind.image}
                alt={ind.name}
                className="industries-bg-layer"
                style={{
                  opacity: isVisible ? 0.8 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(1.04)',
                  visibility: isVisible ? 'visible' : 'hidden',
                  transition: 'opacity 550ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1), visibility 550ms'
                }}
                loading="lazy"
              />
            );
          })}
          {/* Lighter Editorial Overlay for vivid, visible background images */}
          <div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: currentActiveIdx !== null 
                ? 'linear-gradient(180deg, rgba(8, 6, 7, 0.6) 0%, rgba(8, 6, 7, 0.38) 45%, rgba(8, 6, 7, 0.7) 100%)' 
                : 'transparent',
              transition: 'background 0.4s ease',
              zIndex: 1 
            }} 
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Heading: Editorial layout */}
          <div style={{ marginBottom: 'clamp(2.75rem, 4.5vw, 4rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ width: '22px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#54CFB0' }}>
                EXPERTISE
              </span>
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.15, 
                color: '#FFFFFF',
                margin: '0 0 1rem 0',
                fontFamily: "'Space Grotesk', -apple-system, sans-serif"
              }}
            >
              Technology Built for Every Sector.
            </h2>

            <p style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.65, margin: 0, maxWidth: '640px' }}>
              Select or hover any sector below to preview how MaxR designs and accelerates targeted technology.
            </p>
          </div>

          {/* Square Pattern Matrix: Transparent Editorial Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
              gap: '2.5rem 2.25rem' 
            }}
          >
            {industries.map((ind, idx) => {
              const isCurrent = currentActiveIdx === idx;
              const isAnyActive = currentActiveIdx !== null;

              return (
                <div
                  key={ind.name}
                  onMouseEnter={() => setHoveredIndustry(idx)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  onClick={() => setSelectedIndustry(selectedIndustry === idx ? null : idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '235px',
                    padding: '1.75rem 1.6rem',
                    borderRadius: '16px',
                    background: isCurrent ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    backdropFilter: isCurrent ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: isCurrent ? 'blur(20px)' : 'none',
                    border: isCurrent ? '1.5px solid rgba(84, 207, 176, 0.55)' : '1.5px solid transparent',
                    boxShadow: isCurrent ? '0 24px 50px rgba(0, 0, 0, 0.55), 0 0 35px rgba(84, 207, 176, 0.12)' : 'none',
                    transform: isCurrent ? 'translateY(-6px)' : 'none',
                    opacity: (isAnyActive && !isCurrent) ? 0.28 : 1,
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    {/* Sector Title */}
                    <h3 
                      style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: 800, 
                        letterSpacing: '0.04em', 
                        textTransform: 'uppercase',
                        color: isCurrent ? '#54CFB0' : '#FFFFFF', 
                        lineHeight: 1.35,
                        margin: '0 0 1rem 0',
                        fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {ind.displayTitle}
                    </h3>

                    {/* Sector Description */}
                    <p 
                      style={{ 
                        fontSize: '0.92rem', 
                        color: isCurrent ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.72)', 
                        lineHeight: 1.65, 
                        margin: 0,
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {ind.desc}
                    </p>
                  </div>

                  {/* Clean Text Link: Our [Industry] >> */}
                  <div style={{ marginTop: '1.75rem' }}>
                    <Link
                      to="/industries"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 750,
                        color: isCurrent ? '#54CFB0' : 'rgba(255, 255, 255, 0.85)',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#54CFB0';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isCurrent ? '#54CFB0' : 'rgba(255, 255, 255, 0.85)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <span>Our {ind.name}</span>
                      <span style={{ 
                        display: 'inline-block', 
                        transform: isCurrent ? 'translateX(3px)' : 'none',
                        transition: 'transform 0.25s ease',
                        letterSpacing: '-0.05em',
                        fontWeight: 900
                      }}>
                        &gt;&gt;
                      </span>
                    </Link>

                    {/* Horizontal Divider Line */}
                    <div 
                      style={{
                        width: '100%',
                        height: '1px',
                        background: isCurrent ? '#54CFB0' : 'rgba(255, 255, 255, 0.18)',
                        marginTop: '1.15rem',
                        transition: 'background 0.3s ease'
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
          6. CLIENT LOGOS SECTION (Companies We've Worked With)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(2.75rem, 4.5vw, 4rem) 0 3.5rem 0',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
            <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#080607' }}>
              Companies We've Worked With
            </span>
          </div>
          <p 
            style={{ 
              fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', 
              color: '#64748b', 
              maxWidth: '680px', 
              margin: '0 auto', 
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            From startups to established enterprises, businesses rely on MaxR to automate operations and accelerate growth.
          </p>
        </div>

        {/* Framed Horizontal Strip */}
        <div 
          style={{ 
            width: '100%', 
            borderTop: '1px solid #E1E8E5',
            borderBottom: '1px solid #E1E8E5',
            background: '#FAFBFB',
            padding: '1.25rem 0',
            overflow: 'hidden',
            position: 'relative',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
          }}
        >
          <div className="logo-marquee-track" style={{ gap: '2rem' }}>
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
              <div 
                key={`${client.name}-${i}`}
                className="client-logo-box"
              >
                <img 
                  src={client.src} 
                  alt={client.name} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          7. CLIENT VIDEOS SECTION (Real Results)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6rem) 0' 
        }}
      >
        <div className="container">
          
          {/* Header Strip */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#080607' }}>
                  Real Results
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
              <span>Learn More About Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 2-Card Video Grid */}
          <div 
            style={{ 
              maxWidth: '880px',
              margin: '0 auto',
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.75rem' 
            }}
          >
            {clientVideoStories.map((story) => (
              <div 
                key={story.id}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E1E8E5', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(8, 6, 7, 0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%',
                    aspectRatio: '16 / 9', 
                    background: '#000000',
                    overflow: 'hidden' 
                  }}
                >
                  {playingVideo === story.id ? (
                    <video 
                      src={story.videoSrc} 
                      controls 
                      autoPlay 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000000' }} 
                    />
                  ) : (
                    <div 
                      onClick={() => setPlayingVideo(story.id)}
                      style={{ 
                        position: 'relative', 
                        width: '100%', 
                        height: '100%', 
                        cursor: 'pointer' 
                      }}
                    >
                      <img 
                        src={story.thumbnail} 
                        alt={story.company} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                      />

                      <div 
                        style={{ 
                          position: 'absolute', 
                          top: '1rem', 
                          left: '1rem', 
                          background: 'rgba(255, 255, 255, 0.92)', 
                          padding: '4px 10px', 
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.2)' 
                        }}
                      >
                        <img 
                          src={story.logo} 
                          alt={story.company} 
                          style={{ height: '22px', width: 'auto', display: 'block' }} 
                        />
                      </div>

                      <div 
                        style={{ 
                          position: 'absolute', 
                          bottom: '1rem', 
                          right: '1rem', 
                          width: '46px', 
                          height: '46px', 
                          borderRadius: '50%', 
                          background: 'rgba(8, 6, 7, 0.75)', 
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                          transition: 'transform 0.2s ease, background 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.background = '#54CFB0';
                          e.currentTarget.style.color = '#080607';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.background = 'rgba(8, 6, 7, 0.75)';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                      >
                        <Play size={18} fill="currentColor" style={{ marginLeft: '2px' }} />
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <blockquote 
                    style={{ 
                      fontSize: '0.98rem', 
                      fontWeight: 700, 
                      color: '#080607', 
                      lineHeight: 1.5, 
                      letterSpacing: '-0.015em', 
                      margin: '0 0 1rem 0' 
                    }}
                  >
                    "{story.quote}"
                  </blockquote>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.1rem' }}>
                    {story.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: 700, 
                          color: '#0f766e', 
                          background: '#e6f9f4', 
                          border: '1px solid rgba(84, 207, 176, 0.4)', 
                          padding: '3px 8px', 
                          borderRadius: '6px' 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: '0 0 2px 0' }}>
                      {story.company}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: 0 }}>
                      {story.industry}
                    </p>
                  </div>

                  <div 
                    style={{ 
                      background: '#F5F8F7', 
                      border: '1px solid #E1E8E5', 
                      borderRadius: '8px', 
                      padding: '0.75rem 0.9rem', 
                      marginBottom: '0.5rem' 
                    }}
                  >
                    <span style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#080607', display: 'block', marginBottom: '5px' }}>
                      Services Delivered by MaxR:
                    </span>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      {story.servicesRendered.map((sItem, sIdx) => (
                        <li key={sIdx} style={{ fontSize: '0.825rem', color: '#3F5565', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle2 size={13} color="#00bba7" />
                          <span>{sItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          8. INSIGHTS SECTION
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6rem) 0' 
        }}
      >
        <div className="container">
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E1E8E5';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', background: '#F5F8F7' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                </div>

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

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F5F8F7', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>
                      {item.readTime}
                    </span>

                    <span style={{ color: '#080607', display: 'inline-flex', alignItems: 'center' }}>
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
          9. FINAL CTA STRIP
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#080607', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: 'clamp(4rem, 6vw, 5.5rem) 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '2.5rem', 
              flexWrap: 'wrap' 
            }}
          >
            {/* Left side: Headline & Subtext */}
            <div style={{ flex: '1 1 500px', maxWidth: '680px' }}>
              <h2 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)', 
                  fontWeight: 900, 
                  letterSpacing: '-0.035em', 
                  lineHeight: 1.15, 
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                Ready to automate your business?
              </h2>

              <p 
                style={{ 
                  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)', 
                  color: 'rgba(255, 255, 255, 0.82)', 
                  lineHeight: 1.6, 
                  margin: 0 
                }}
              >
                No commitment. Just a real conversation about what technology can do for you.
              </p>
            </div>

            {/* Right side: Action Buttons - Compact Animated */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                className="btn-animated"
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.85rem',
                  fontWeight: 750,
                  borderRadius: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>Book a Free Call</span>
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/97145648887"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '8px',
                  fontWeight: 750,
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.22s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.35)';
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Bottom Scroll-To-Top Arrow Trigger */}
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(84, 207, 176, 0.35)',
                  color: '#FFFFFF',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#00bba7';
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.color = '#080607';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(84, 207, 176, 0.35)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Back to Top</span>
                <ArrowUp size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          10. FLOATING WHATSAPP BUTTON (Bottom Right - Logo Only)
          ═════════════════════════════════════════════ */}
      <a
        href="https://wa.me/97145648887"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MaxR on WhatsApp"
        title="Chat with MaxR on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 10001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.45)';
        }}
      >
        <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
        </svg>
      </a>

      {/* ═════════════════════════════════════════════════════════════════════
          11. FLOATING SCROLL-TO-TOP BUTTON (Floats Above WhatsApp)
          ═════════════════════════════════════════════ */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '86px',
          right: '27px',
          zIndex: 10000,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#080607',
          border: '1.5px solid rgba(84, 207, 176, 0.45)',
          color: '#54CFB0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(8, 6, 7, 0.3)',
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#00bba7';
          e.currentTarget.style.color = '#080607';
          e.currentTarget.style.borderColor = '#00bba7';
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 187, 167, 0.45)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#080607';
          e.currentTarget.style.color = '#54CFB0';
          e.currentTarget.style.borderColor = 'rgba(84, 207, 176, 0.45)';
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(8, 6, 7, 0.3)';
        }}
      >
        <ArrowUp size={20} strokeWidth={2.4} />
      </button>

    </div>
  );
}
