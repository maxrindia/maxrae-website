import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowLeft,
  ArrowUpRight,
  ArrowDown,
  Play,
  Heart,
  GraduationCap,
  Building2,
  Luggage,
  ShoppingCart,
  Users,
  TrendingUp,
  Rocket,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);

  // ── Hero Banner Dynamic Multi-Image Background State (Request 5) ──
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
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const displayIndustry = hoveredIndustry !== null ? hoveredIndustry : activeIndustry;

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

  // ── Services Carousel Slow Auto-Scroll Timer (Request 4) ──
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
      icon: Heart,
      desc: "Digital solutions that improve patient experiences, clinical efficiency, and connected healthcare operations.",
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
      icon: Building2,
      desc: "Digital experiences and connected solutions for modern property businesses.",
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
      icon: ShoppingCart,
      desc: "High-conversion digital storefronts, connected commerce platforms, and automated inventory workflows.",
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
      icon: TrendingUp,
      desc: "Secure portals, compliance-ready digital workflows, and real-time business financial intelligence.",
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
      icon: GraduationCap,
      desc: "Engaging digital learning platforms, institutional portals, and streamlined student admission systems.",
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
      icon: Luggage,
      desc: "Seamless reservation systems, personalized guest communication, and digital loyalty platforms.",
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
      icon: Users,
      desc: "Refined digital presence, automated client intake, and integrated practice management platforms.",
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
      icon: Rocket,
      desc: "Rapid full-stack engineering, scalable cloud architectures, and intelligent digital automation.",
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

  // ── 3. REAL CLIENT LOGOS FROM public/assets/clients ──
  const clientLogos = [
    { name: "ARDHRA", src: "/assets/clients/ardhra.png" },
    { name: "Corrumatik", src: "/assets/clients/corrumatik.png" },
    { name: "Glomi", src: "/assets/clients/glomi.png" },
    { name: "Deeplance", src: "/assets/clients/deeplance.png" },
    { name: "Le Spa", src: "/assets/clients/lespa.png" },
    { name: "Parvathi Computers", src: "/assets/clients/parvathi.png" },
    { name: "SCOINS", src: "/assets/clients/scoins.png" }
  ];

  // ── 4. ONLY THE TWO CLIENT STORIES WITH REAL VIDEOS & DELIVERED SERVICES ──
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
        "Strategic Business Consulting",
        "Commercial 5X Growth Roadmap Architecture",
        "B2B Sales Pipeline & CRM Automation"
      ]
    }
  ];

  // ── 5. INSIGHTS (Exact 3 Cards) ──
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

  return (
    <div style={{ background: '#FFFFFF', color: '#080607', overflowX: 'hidden' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Dynamic Mobile-to-Desktop Responsive Skyline Experience)
          ═════════════════════════════════════════════ */}
      <section 
        ref={heroRef}
        className="hero-enterprise-section"
      >
        {/* Dynamic Multi-Image Auto-Switching Background (Request 5) */}
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
            
            {/* Eyebrow Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <span style={{ width: '20px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00bba7' }}>
                MAXR TECHNOLOGIES
              </span>
            </div>

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
              Intelligent Technology.<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Real Business Impact.
              </span>
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
              AI, automation and digital solutions that help businesses operate smarter, engage customers better and scale with confidence.
            </p>

            {/* CTA Buttons */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '14px', 
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/contact"
                style={{
                  background: '#00bba7',
                  color: '#080607',
                  padding: 'clamp(0.85rem, 1.3vw, 1.05rem) clamp(1.6rem, 2.2vw, 2.2rem)',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0, 187, 167, 0.35)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 26px rgba(0, 187, 167, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.35)';
                }}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/services"
                style={{
                  background: '#FFFFFF',
                  color: '#080607',
                  border: '1.5px solid #080607',
                  padding: 'clamp(0.85rem, 1.3vw, 1.05rem) clamp(1.5rem, 2vw, 2rem)',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F5F8F7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. OUR SERVICES (Infinite Loop: Data & BI joined to left of Web Dev, Centered Arrows Below)
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
              From strategy and consulting to digital solutions and automation, we help businesses grow, operate efficiently and stay ahead.
            </p>
          </div>
        </div>

        {/* ── Circular Continuous Looping Track (Left neighbor of Web Dev = Data & Business Intelligence) ── */}
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

                  {/* Active Card Pointer Arrow Indicator (Request 4) */}
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

                    {/* View More Action Button (Request 4) */}
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

        {/* ── Centered Slide Indicator Pills (Bottom Arrows Removed per Request 4) ── */}
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
          3. INDUSTRIES (Interactive Editorial Showcase)
          ═════════════════════════════════════════════ */}
      <section 
        id="industries-section"
        className="industries-editorial-section"
        aria-label="Industries We Serve"
      >
        {/* Dynamic Full-Section Background Images with Smooth Crossfade & Scale */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          {industries.map((ind, idx) => {
            const isVisible = displayIndustry === idx;
            return (
              <img
                key={ind.name}
                src={ind.image}
                alt={ind.name}
                className="industries-bg-layer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                  visibility: isVisible ? 'visible' : 'hidden',
                  transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 850ms cubic-bezier(0.16, 1, 0.3, 1), visibility 600ms'
                }}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            );
          })}
          {/* Subtle Dark Editorial Overlay */}
          <div className="industries-overlay" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Heading */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '18px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                  INDUSTRIES
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.15, 
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                Technology for Every Industry.
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0, maxWidth: '440px' }}>
              Every industry has different challenges. MaxR brings together digital solutions, technology and automation to support different business needs.
            </p>
          </div>

          {/* 8 Industry Cards Grid with Full Details & Dynamic Background on Hover/Click */}
          <div className="industries-cards-grid">
            {industries.map((ind, idx) => {
              const isSelected = activeIndustry === idx;
              const isCurrentDisplay = displayIndustry === idx;

              return (
                <div
                  key={ind.name}
                  className={`industry-showcase-card ${isCurrentDisplay ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveIndustry(idx);
                    setHoveredIndustry(null);
                  }}
                  onMouseEnter={() => setHoveredIndustry(idx)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndustry(idx);
                      setHoveredIndustry(null);
                    }
                  }}
                >
                  {/* Card Header: Sector Number & Icon Wrap */}
                  <div className="industry-card-header">
                    <span className="industry-card-sector">
                      0{idx + 1}
                    </span>
                    <div className="industry-card-icon-wrap">
                      <ArrowUpRight className="industry-card-arrow" size={16} />
                    </div>
                  </div>

                  {/* Card Body: Title & Description */}
                  <h3 className="industry-card-title">
                    {ind.name}
                  </h3>

                  <p className="industry-card-desc">
                    {ind.desc}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="industry-card-tags">
                    {ind.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <span key={cIdx} className="industry-card-tag">
                        <span className="industry-card-tag-dot" />
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer: Explore Link */}
                  <div className="industry-card-footer">
                    <Link 
                      to="/industries"
                      className="industry-card-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Explore Industry</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. TRUSTED BY BUSINESSES (Auto-Scrolling Marquee with Framed Band)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(2.75rem, 4.5vw, 4rem) 0 3.5rem 0',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
          {/* Centered Supporting Paragraph from User's Reference */}
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
            From startups to established enterprises, businesses rely on MaxR to automate operations, engage customers, and accelerate growth.
          </p>
        </div>

        {/* Framed Horizontal Strip with Top & Bottom Borders (Normalized Uniform Logo Boxes) */}
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
          5. CLIENT STORIES (Only the 2 Real Videos + Exact Services Rendered)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
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

          {/* 2-Card Video Grid (Compact, Full-Frame Video Player) */}
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
                {/* Video Container / Thumbnail with Play Button - 16:9 Full Frame */}
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

                      {/* Brand Logo in Top-Left Corner */}
                      <div 
                        style={{ 
                          position: 'absolute', 
                          top: '1rem', 
                          left: '1rem', 
                          background: 'rgba(8, 6, 7, 0.75)', 
                          backdropFilter: 'blur(8px)',
                          padding: '6px 12px', 
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

                      {/* Glass Play Button in Bottom-Right */}
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

                {/* Card Body - Compact & Sleek */}
                <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Quote */}
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

                  {/* Core tags */}
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

                  {/* Client Info */}
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: '0 0 2px 0' }}>
                      {story.company}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: 0 }}>
                      {story.industry}
                    </p>
                  </div>

                  {/* Services Delivered by MaxR */}
                  <div 
                    style={{ 
                      background: '#F5F8F7', 
                      border: '1px solid #E1E8E5', 
                      borderRadius: '8px', 
                      padding: '0.75rem 0.9rem', 
                      marginBottom: '1.15rem' 
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

                  {/* Watch Success Story CTA Button */}
                  <div style={{ marginTop: 'auto', borderTop: '1px solid #F5F8F7', paddingTop: '1rem' }}>
                    <button
                      onClick={() => setPlayingVideo(story.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#0f766e',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: 0
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0f766e'}
                    >
                      <span>Watch Success Story</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. INSIGHTS (Exact 3 Cards)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
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
          7. FINAL CTA (Cohesive Light Enterprise Design with Compact Spacing)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(3rem, 5vw, 4.25rem) 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              maxWidth: '820px', 
              margin: '0 auto', 
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1px solid #E1E8E5',
              borderRadius: '16px',
              padding: 'clamp(2.25rem, 4.5vw, 3.25rem) clamp(1.25rem, 3.5vw, 2.75rem)',
              boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)'
            }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7' }}>
                LET'S BUILD TOGETHER
              </span>
            </div>

            {/* Headline */}
            <h2 
              style={{ 
                fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.15, 
                color: '#080607',
                margin: '0 0 0.85rem 0',
                fontFamily: "'Space Grotesk', -apple-system, sans-serif"
              }}
            >
              Turn Your Ideas Into<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Real Business Impact.
              </span>
            </h2>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: 'clamp(0.925rem, 1.15vw, 1.05rem)', 
                color: '#3F5565', 
                lineHeight: 1.55, 
                maxWidth: '560px', 
                margin: '0 auto 1.75rem auto' 
              }}
            >
              Tell us what you're building and let's explore how technology and automation can help you achieve it.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  background: '#00bba7',
                  color: '#080607',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0, 187, 167, 0.35)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 187, 167, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 187, 167, 0.35)';
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
                  border: '1.5px solid #080607',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F5F8F7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
