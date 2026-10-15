import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
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
  Coins,
  Factory
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import { NotchedProjectCard } from '../components/ui/notched-project-card';
import HowItWorks from '../components/ui/how-it-works';

export default function HomePage() {
  const heroRef = useRef(null);



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




  // ── Industries Interactive Selection & Preview State ──
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const currentActiveIdx = hoveredIndustry !== null ? hoveredIndustry : selectedIndustry;

  // ── Client Stories Video Playback State ──
  const [playingVideo, setPlayingVideo] = useState(null); // null | 'ardhra' | 'parvathi'

  // ── Services Dual-Row Infinite Bi-Directional Auto-Scroll State & Physics ──
  const servicesRow1TrackRef = useRef(null);
  const servicesRow2TrackRef = useRef(null);
  const scrollPos1Ref = useRef(0);
  const scrollPos2Ref = useRef(0);
  const isHovered1Ref = useRef(false);
  const isHovered2Ref = useRef(false);
  const isDragging1Ref = useRef(false);
  const isDragging2Ref = useRef(false);
  const startX1Ref = useRef(0);
  const startX2Ref = useRef(0);
  const dragStartPos1Ref = useRef(0);
  const dragStartPos2Ref = useRef(0);
  const hasMoved1Ref = useRef(false);
  const hasMoved2Ref = useRef(false);

  useEffect(() => {
    let animId;
    let lastTime = performance.now();
    const speed = 0.75; // Smooth cinematic glide speed

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;

      // Row 1: glides LEFT
      if (!isHovered1Ref.current && !isDragging1Ref.current && servicesRow1TrackRef.current) {
        scrollPos1Ref.current += speed * dt;
        const unit1 = servicesRow1TrackRef.current.scrollWidth / 3;
        if (unit1 > 0 && scrollPos1Ref.current >= unit1) {
          scrollPos1Ref.current -= unit1;
        }
        servicesRow1TrackRef.current.style.transform = `translate3d(-${scrollPos1Ref.current}px, 0, 0)`;
      }

      // Row 2: glides RIGHT (opposite direction)
      if (!isHovered2Ref.current && !isDragging2Ref.current && servicesRow2TrackRef.current) {
        scrollPos2Ref.current += speed * dt;
        const unit2 = servicesRow2TrackRef.current.scrollWidth / 3;
        if (unit2 > 0 && scrollPos2Ref.current >= unit2) {
          scrollPos2Ref.current -= unit2;
        }
        servicesRow2TrackRef.current.style.transform = `translate3d(-${unit2 - scrollPos2Ref.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Row 1 Pointer Controls (gliding Left)
  const handleRow1PointerDown = (e) => {
    isDragging1Ref.current = true;
    startX1Ref.current = e.clientX;
    dragStartPos1Ref.current = scrollPos1Ref.current;
    hasMoved1Ref.current = false;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
  };

  const handleRow1PointerMove = (e) => {
    if (!isDragging1Ref.current) return;
    const delta = e.clientX - startX1Ref.current;
    if (Math.abs(delta) > 5) hasMoved1Ref.current = true;
    let newPos = dragStartPos1Ref.current - delta;
    if (servicesRow1TrackRef.current) {
      const unit = servicesRow1TrackRef.current.scrollWidth / 3;
      if (unit > 0) {
        while (newPos >= unit) newPos -= unit;
        while (newPos < 0) newPos += unit;
      }
      scrollPos1Ref.current = newPos;
      servicesRow1TrackRef.current.style.transform = `translate3d(-${newPos}px, 0, 0)`;
    }
  };

  const handleRow1PointerUp = (e) => {
    isDragging1Ref.current = false;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
  };

  // Row 2 Pointer Controls (gliding Right)
  const handleRow2PointerDown = (e) => {
    isDragging2Ref.current = true;
    startX2Ref.current = e.clientX;
    dragStartPos2Ref.current = scrollPos2Ref.current;
    hasMoved2Ref.current = false;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
  };

  const handleRow2PointerMove = (e) => {
    if (!isDragging2Ref.current) return;
    const delta = e.clientX - startX2Ref.current;
    if (Math.abs(delta) > 5) hasMoved2Ref.current = true;
    let newPos = dragStartPos2Ref.current + delta;
    if (servicesRow2TrackRef.current) {
      const unit = servicesRow2TrackRef.current.scrollWidth / 3;
      if (unit > 0) {
        while (newPos >= unit) newPos -= unit;
        while (newPos < 0) newPos += unit;
      }
      scrollPos2Ref.current = newPos;
      servicesRow2TrackRef.current.style.transform = `translate3d(-${unit - newPos}px, 0, 0)`;
    }
  };

  const handleRow2PointerUp = (e) => {
    isDragging2Ref.current = false;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
  };

  // ── 1. EXACT 12 COMPREHENSIVE SERVICES ──
  const services = [
    // ── Row 1 (6 Services) ──
    {
      title: "Web Development",
      category: "WEB DEVELOPMENT",
      desc: "High-performance websites and web applications designed around your business goals.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      link: "/services/web-development"
    },
    {
      title: "Mobile App Development",
      category: "APP DEVELOPMENT",
      desc: "Native and cross-platform mobile applications that engage users and scale with your business.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      link: "/services/app-development"
    },
    {
      title: "AI Chatbots & Assistants",
      category: "CHATBOT AUTOMATION",
      desc: "24/7 intelligent customer support chatbots that resolve queries, qualify leads, and close sales.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
      link: "/services/ai-automation"
    },
    {
      title: "WhatsApp Automation",
      category: "WHATSAPP AUTOMATION",
      desc: "Official WhatsApp Business API bots, automated catalog ordering, instant alerts & CRM broadcasts.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
      link: "/services/ai-automation"
    },
    {
      title: "Software & SaaS Development",
      category: "SOFTWARE ENGINEERING",
      desc: "Custom SaaS platforms and enterprise business software built to automate operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "/services/software-development"
    },
    {
      title: "Digital Marketing & SEO",
      category: "DIGITAL MARKETING",
      desc: "Data-driven SEO, PPC campaigns and organic acquisition strategies that convert visitors into revenue.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      link: "/services/digital-marketing"
    },

    // ── Row 2 (6 Services) ──
    {
      title: "Voice AI Agents",
      category: "VOICE AGENTS",
      desc: "24/7 multilingual conversational voice agents that answer inbound phone calls and book meetings.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
      link: "/voice-agents"
    },
    {
      title: "Social Media Automation",
      category: "SOCIAL MEDIA AUTOMATION",
      desc: "Automated social content scheduling, auto-DM response funnels & community engagement bots.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
      link: "/services/social-media-management"
    },
    {
      title: "AI & Workflow Automation",
      category: "AI & AUTOMATION",
      desc: "Autonomous workflow bots, custom AI pipelines & ERP integrations cutting manual work by 70%.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      link: "/services/ai-automation"
    },
    {
      title: "CRM & Lead Solutions",
      category: "CRM & LEADS",
      desc: "End-to-end sales pipelines, automated lead routing, and proactive client engagement engines.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      link: "/services/crm-lead-solutions"
    },
    {
      title: "UI/UX & Branding",
      category: "UI/UX & BRANDING",
      desc: "Digital experiences, high-converting interfaces, and distinctive corporate brand identities.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      link: "/services/ui-ux-branding"
    },
    {
      title: "Cloud & Technology",
      category: "CLOUD ARCHITECTURE",
      desc: "Reliable cloud infrastructure, secure database scaling and 24/7 high-availability microservices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      link: "/services/cloud-technology"
    }
  ];

  // 6 columns per row, mutually exclusive, continuous bi-directional auto-scrolling
  const row1Services = services.slice(0, 6);
  const row2Services = services.slice(6, 12);

  // ── 2. EXACT 8 INDUSTRIES ──
  const industries = [
    {
      slug: "healthcare",
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
      slug: "real-estate",
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
      slug: "ecommerce",
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
      slug: "finance",
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
      slug: "education",
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
      slug: "hospitality",
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
      slug: "professional-services",
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
      slug: "technology",
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
    },
    {
      slug: "web3-crypto",
      name: "Web3 & Crypto",
      displayTitle: "WEB3 & CRYPTO",
      icon: Coins,
      desc: "Institutional dApps, multi-chain wallet onboarding, automated community AI agents, and real-time on-chain telemetry.",
      linkText: "Our Web3 & Crypto »",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "dApp Development",
        "Smart Contract Security",
        "AI Community Agents",
        "On-Chain Analytics",
        "Whale Alert Pipelines"
      ],
      ctaText: "Explore Industry →"
    },
    {
      slug: "manufacturing",
      name: "Manufacturing",
      displayTitle: "MANUFACTURING & SUPPLY CHAIN",
      icon: Factory,
      desc: "Shop-floor IoT telemetry, predictive maintenance alerts, ERP sync pipelines, and automated supplier voice communication.",
      linkText: "Our Manufacturing »",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
      capabilities: [
        "Smart Factory IoT",
        "ERP Integrations",
        "Predictive Maintenance",
        "Supplier AI Agents",
        "QA & Compliance Portals"
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
        "AI Automation & Inbound Systems",
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
      quote: "MAXR analyzed our business, identified growth opportunities, and created a strategic roadmap that helped us achieve 5X business growth.",
      tags: ["Business Strategy", "Growth Roadmap", "Market Expansion"],
      servicesRendered: [
        "Strategic Business Growth Advisory",
        "Commercial 5X Growth Roadmap Architecture",
        "B2B Sales Pipeline & CRM Automation"
      ]
    }
  ];



  return (
    <div style={{ background: '#FFFFFF', color: '#080607', overflowX: 'hidden' }}>

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
                fontSize: 'clamp(2.1rem, 5vw, 4.5rem)', 
                fontWeight: 900, 
                lineHeight: 1.08, 
                letterSpacing: '-0.04em', 
                color: '#080607', 
                margin: '0 0 1.5rem 0',
                wordBreak: 'break-word',
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
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
                margin: '0 0 2.75rem 0',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              AI automation, custom software, and digital marketing — built to deliver results from day one.
            </p>

            {/* CTA Buttons */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                flexWrap: 'wrap'
              }}
            >
              <Link
                to="/services"
                className="btn-animated"
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.875rem',
                  fontWeight: 750,
                  borderRadius: '8px',
                  backgroundColor: '#00bba7',
                  color: '#080607',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Explore Services</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
                className="btn-outline"
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
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
          2. STATS BAR (Between Hero and Services) - Animated Numbers
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #F8FAFA 0%, #EFF5F3 100%)', 
          borderTop: '1px solid #E1E8E5', 
          borderBottom: '1px solid #E1E8E5', 
          padding: '2.75rem 0' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', 
              gap: '1.25rem',
              textAlign: 'center' 
            }}
          >
            {[
              { target: 50, suffix: "+", label: "Projects Delivered", highlight: false },
              { target: 20, suffix: "+", label: "Clients Served", highlight: false },
              { target: 3, suffix: "×", label: "Average ROI", highlight: true },
              { target: 7, prefix: "< ", label: "Days to Deploy", highlight: false }
            ].map((st, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '1.25rem 1rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(8, 6, 7, 0.03)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 187, 167, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 6, 7, 0.03)';
                }}
              >
                <div 
                  style={{ 
                    fontSize: 'clamp(2.3rem, 3.8vw, 2.9rem)', 
                    fontWeight: 900, 
                    color: st.highlight ? '#00bba7' : '#080607', 
                    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  <AnimatedCounter 
                    target={st.target} 
                    prefix={st.prefix || ''} 
                    suffix={st.suffix || ''} 
                    duration={1800} 
                  />
                </div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 650, marginTop: '6px' }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. OUR SERVICES (Notched Project Cards)
          ═════════════════════════════════════════════ */}
      <section 
        id="services"
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(4.5rem, 6.5vw, 6.5rem) 0',
          position: 'relative'
        }}
      >
        <div className="container">
          {/* Centered Header with Big OUR SERVICES and Sub-content */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.75rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#008779' }}>
                WHAT WE DO
              </span>
              <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(2.6rem, 4.6vw, 3.8rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.1, 
                color: '#080607',
                margin: '0 0 1rem 0',
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
              }}
            >
              OUR SERVICES
            </h2>

            <p 
              style={{ 
                fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', 
                fontWeight: 600,
                color: '#3F5565', 
                lineHeight: 1.4, 
                margin: '0 auto',
                maxWidth: '680px'
              }}
            >
              End-to-End Technology for Modern Businesses.
            </p>
          </div>

          {/* Services Dual-Row Infinite Bi-Directional Auto-Scrolling Showcase */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            {/* ── ROW 1: Gliding LEFT (Services 1 to 5) ── */}
            <div 
              className="services-auto-viewport services-row-1"
              style={{ 
                position: 'relative', 
                width: '100%', 
                overflow: 'hidden',
                padding: '0.5rem 0',
                cursor: 'grab',
                touchAction: 'pan-y',
                maskImage: 'linear-gradient(to right, transparent, black 2.5%, black 97.5%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 2.5%, black 97.5%, transparent)'
              }}
              onPointerDown={handleRow1PointerDown}
              onPointerMove={handleRow1PointerMove}
              onPointerUp={handleRow1PointerUp}
              onPointerCancel={handleRow1PointerUp}
              onMouseEnter={() => { isHovered1Ref.current = true; }}
              onMouseLeave={() => { isHovered1Ref.current = false; }}
              onClickCapture={(e) => {
                if (hasMoved1Ref.current) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              role="region"
              aria-label="Our services row 1 auto-scrolling showcase"
            >
              <div
                ref={servicesRow1TrackRef}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'clamp(1.25rem, 2vw, 2rem)',
                  width: 'max-content',
                  willChange: 'transform'
                }}
              >
                {[...row1Services, ...row1Services, ...row1Services].map((item, idx) => (
                  <div
                    key={`row1-${item.title}-${idx}`}
                    style={{
                      flex: '0 0 clamp(280px, 24vw, 350px)',
                      width: 'clamp(280px, 24vw, 350px)',
                      maxWidth: '85vw',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <NotchedProjectCard
                      href={item.link}
                      title={item.title}
                      description={item.desc}
                      image={item.image}
                      surface="#FFFFFF"
                      accent="#00bba7"
                      accentForeground="#080607"
                      monochrome={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── ROW 2: Gliding RIGHT in opposite direction (Services 6 to 10) ── */}
            <div 
              className="services-auto-viewport services-row-2"
              style={{ 
                position: 'relative', 
                width: '100%', 
                overflow: 'hidden',
                padding: '0.5rem 0',
                cursor: 'grab',
                touchAction: 'pan-y',
                maskImage: 'linear-gradient(to right, transparent, black 2.5%, black 97.5%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 2.5%, black 97.5%, transparent)'
              }}
              onPointerDown={handleRow2PointerDown}
              onPointerMove={handleRow2PointerMove}
              onPointerUp={handleRow2PointerUp}
              onPointerCancel={handleRow2PointerUp}
              onMouseEnter={() => { isHovered2Ref.current = true; }}
              onMouseLeave={() => { isHovered2Ref.current = false; }}
              onClickCapture={(e) => {
                if (hasMoved2Ref.current) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              role="region"
              aria-label="Our services row 2 auto-scrolling showcase"
            >
              <div
                ref={servicesRow2TrackRef}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'clamp(1.25rem, 2vw, 2rem)',
                  width: 'max-content',
                  willChange: 'transform'
                }}
              >
                {[...row2Services, ...row2Services, ...row2Services].map((item, idx) => (
                  <div
                    key={`row2-${item.title}-${idx}`}
                    style={{
                      flex: '0 0 clamp(280px, 24vw, 350px)',
                      width: 'clamp(280px, 24vw, 350px)',
                      maxWidth: '85vw',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <NotchedProjectCard
                      href={item.link}
                      title={item.title}
                      description={item.desc}
                      image={item.image}
                      surface="#FFFFFF"
                      accent="#00bba7"
                      accentForeground="#080607"
                      monochrome={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. HOW WE WORK (Animated Interactive Process Journey)
          ═════════════════════════════════════════════ */}
      <section 
        id="how-it-works"
        style={{ 
          background: 'linear-gradient(180deg, #FAFCFB 0%, #F4F8F6 100%)', 
          borderBottom: '1px solid #E1E8E5',
          padding: 'clamp(3.5rem, 5vw, 4.75rem) 0 clamp(4rem, 6vw, 5.5rem) 0',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <div className="container">
          {/* Centered Header: Matching Image Content */}
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 2.75rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#008779' }}>
                HOW IT WORKS
              </span>
              <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.15, 
                color: '#080607',
                margin: '0 0 1rem 0',
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
              }}
            >
              A Clear, Direct Process.
            </h2>

            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', 
                fontWeight: 500,
                color: '#4B5563', 
                lineHeight: 1.55, 
                margin: '0 auto',
                maxWidth: '740px'
              }}
            >
              From initial audit to production launch and scale — we eliminate slow agency overhead with agile 2-week execution sprints.
            </p>
          </div>

          {/* Integrated HowItWorks Process Flow */}
          <HowItWorks />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. INDUSTRIES (Interactive Editorial Showcase: Transparent Matrix Pattern)
          ═════════════════════════════════════════════ */}
      <section 
        id="industries"
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
          {/* Section Heading: Centered layout */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2.75rem, 4.5vw, 4rem) auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ width: '20px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#54CFB0' }}>
                EXPERTISE
              </span>
              <span style={{ width: '20px', height: '2px', background: '#54CFB0' }} />
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.15, 
                color: '#FFFFFF', 
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
              }}
            >
              Technology Built for Every Sector.
            </h2>
          </div>

          {/* Square Pattern Matrix: 5 Columns x 2 Rows Grid */}
          <div className="expertise-5x2-grid">
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
                    minHeight: '210px',
                    padding: '1.4rem 1.25rem',
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
                        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
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
                      to={`/industries/${ind.slug}`}
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
          
          {/* Centered Header Strip */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.85rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#008779' }}>
                Real Results
              </span>
              <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            </div>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.3rem, 4vw, 3.3rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.15, 
                color: '#080607', 
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
              }}
            >
              Real Impact. Lasting Partnerships.
            </h2>
          </div>

          {/* 2-Card Video Grid */}
          <div 
            style={{ 
              maxWidth: '880px',
              margin: '0 auto',
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
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

                  <div style={{ marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: '0 0 2px 0' }}>
                      {story.company}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: '#64748b', margin: 0 }}>
                      {story.industry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          8. FINAL CTA STRIP
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
              gap: '2rem', 
              flexWrap: 'wrap' 
            }}
          >
            {/* Left side: Single-line Headline & Subtext */}
            <div style={{ flex: '1 1 auto', maxWidth: '820px' }}>
              <h2 
                style={{ 
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.9rem)', 
                  fontWeight: 900, 
                  letterSpacing: '-0.035em', 
                  lineHeight: 1.2, 
                  color: '#FFFFFF',
                  margin: '0 0 0.75rem 0',
                  wordBreak: 'break-word',
                  fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
                }}
              >
                Ready to automate your business?
              </h2>

              <p 
                style={{ 
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)', 
                  color: 'rgba(255, 255, 255, 0.82)', 
                  lineHeight: 1.5, 
                  margin: 0 
                }}
              >
                No commitment. Just a real conversation about what technology can do for you.
              </p>
            </div>

            {/* Right side: Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link
                to="/contact"
                className="btn-animated"
                style={{
                  padding: '0.75rem 1.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 750,
                  borderRadius: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>Get in Touch</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
