import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Layers, 
  Handshake, 
  Clock, 
  ChevronRight,
  Briefcase,
  Code2,
  Workflow
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  // ── GSAP Smooth Enterprise Animation Reveals ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero elements reveal
      gsap.from('.gsap-hero-eyebrow', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: 'power2.out'
      });
      gsap.from('.gsap-hero-headline', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        delay: 0.1,
        ease: 'power2.out'
      });
      gsap.from('.gsap-hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 0.75,
        delay: 0.22,
        ease: 'power2.out'
      });
      gsap.from('.gsap-hero-ctas', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        delay: 0.35,
        ease: 'power2.out'
      });
      gsap.from('.gsap-hero-image-wrap', {
        opacity: 0,
        scale: 0.98,
        duration: 0.9,
        delay: 0.18,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // ── 1. Services Data (Exact 4 Enterprise Domains) ──
  const services = [
    {
      num: "01",
      title: "Business Consulting",
      desc: "Strategic consulting to identify opportunities, solve business challenges and create growth roadmaps.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      link: "/services"
    },
    {
      num: "02",
      title: "Digital Solutions",
      desc: "Custom web, mobile applications and enterprise platforms designed to scale operations and delight users.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "/services"
    },
    {
      num: "03",
      title: "Automation & Integrations",
      desc: "Workflow automation, AI agents and system integrations that eliminate manual friction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/services"
    },
    {
      num: "04",
      title: "Digital Growth",
      desc: "Performance marketing, search visibility and digital strategy to accelerate commercial reach.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      link: "/services"
    }
  ];

  // ── 2. Industries Data (Verified MaxR Sectors, Large Photography Tiles) ──
  const industries = [
    {
      title: "Healthcare",
      desc: "Zero-hold patient scheduling, automated clinical triage, and HIPAA-ready digital care portals.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      tag: "Clinical Systems"
    },
    {
      title: "Real Estate",
      desc: "High-value property discovery engines, broker automation bots, and interactive virtual walkthroughs.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      tag: "Property Platforms"
    },
    {
      title: "E-Commerce",
      desc: "Sub-second headless storefronts, autonomous WhatsApp order resolution, and cart recovery workflows.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      tag: "Omnichannel Commerce"
    },
    {
      title: "Finance",
      desc: "Encrypted investor portals, bank-grade digital KYC onboarding, and compliance audit tracking.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
      tag: "Financial Technologies"
    }
  ];

  // ── 3. Why MaxR Points (4 Clear Principles) ──
  const whyPoints = [
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
  ];

  // ── 4. Insights Data (Editorial Articles) ──
  const insights = [
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
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#080607', overflowX: 'hidden' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (White-First Editorial Enterprise Hero, 650–750px)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        ref={heroRef}
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E5EAE8',
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
            {/* Left Column (~48% Desktop): Large Editorial Typography */}
            <div style={{ maxWidth: '580px' }}>
              
              {/* Eyebrow */}
              <div 
                className="gsap-hero-eyebrow"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '1.25rem' 
                }}
              >
                <span 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: '#54CFB0' 
                  }} 
                />
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase', 
                    color: '#080607' 
                  }}
                >
                  MAXR TECHNOLOGIES
                </span>
              </div>

              {/* Large Headline */}
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

              {/* Supporting Copy */}
              <p 
                className="gsap-hero-subtext"
                style={{ 
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)', 
                  lineHeight: 1.6, 
                  color: '#4a5568', 
                  fontWeight: 400, 
                  margin: '0 0 2.25rem 0',
                  maxWidth: '520px'
                }}
              >
                We help businesses grow, operate smarter and create better customer experiences through technology, digital solutions and automation.
              </p>

              {/* CTA Buttons */}
              <div 
                className="gsap-hero-ctas"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  flexWrap: 'wrap' 
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    background: '#080607',
                    color: '#FFFFFF',
                    padding: '0.9rem 1.85rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 6px rgba(8,6,7,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#54CFB0';
                    e.currentTarget.style.color = '#080607';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#080607';
                    e.currentTarget.style.color = '#FFFFFF';
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
                    border: '1px solid #E5EAE8',
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
                    e.currentTarget.style.borderColor = '#E5EAE8';
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>

            {/* Right Column (~52% Desktop): Premium International Corporate Architecture */}
            <div className="gsap-hero-image-wrap" style={{ position: 'relative' }}>
              <div 
                style={{ 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  border: '1px solid #E5EAE8',
                  boxShadow: '0 16px 40px rgba(8, 6, 7, 0.07)',
                  background: '#F5F8F7',
                  position: 'relative',
                  maxHeight: '520px'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80" 
                  alt="Modern enterprise architecture and corporate business headquarters" 
                  style={{ 
                    width: '100%', 
                    height: 'clamp(360px, 45vw, 500px)', 
                    objectFit: 'cover', 
                    display: 'block' 
                  }} 
                />
                {/* Subtle Corporate Watermark Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #E5EAE8',
                    borderRadius: '6px',
                    padding: '0.6rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(8,6,7,0.06)'
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
          2. CAPABILITY STRIP (Horizontal 4-Column Clean Strip with Thin Dividers)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E5EAE8',
          padding: '2.25rem 0' 
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
            {/* Item 1 */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                borderRight: '1px solid #E5EAE8',
                paddingRight: '1.5rem'
              }}
            >
              <div 
                style={{ 
                  color: '#080607', 
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Target size={20} strokeWidth={2} color="#080607" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#080607', margin: '0 0 0.25rem 0' }}>
                  BUSINESS-FOCUSED
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.45 }}>
                  Solutions built around real outcomes
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                borderRight: '1px solid #E5EAE8',
                paddingRight: '1.5rem'
              }}
            >
              <div 
                style={{ 
                  color: '#080607', 
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Zap size={20} strokeWidth={2} color="#080607" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#080607', margin: '0 0 0.25rem 0' }}>
                  AUTOMATION-DRIVEN
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.45 }}>
                  Reduce manual work and improve efficiency
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                borderRight: '1px solid #E5EAE8',
                paddingRight: '1.5rem'
              }}
            >
              <div 
                style={{ 
                  color: '#080607', 
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Layers size={20} strokeWidth={2} color="#080607" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#080607', margin: '0 0 0.25rem 0' }}>
                  SCALABLE SOLUTIONS
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.45 }}>
                  Built for growing businesses
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem'
              }}
            >
              <div 
                style={{ 
                  color: '#080607', 
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Users size={20} strokeWidth={2} color="#080607" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#080607', margin: '0 0 0.25rem 0' }}>
                  PEOPLE-FIRST
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.45 }}>
                  Technology with human support
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. SERVICES SECTION (Editorial Cards, White-First, Minimal Shadows)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E5EAE8',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0' 
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
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

            <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.6, margin: 0 }}>
              From strategy and consulting to digital solutions and automation, we help businesses grow, operate efficiently and stay ahead.
            </p>
          </div>

          {/* 4 Large Editorial Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
              gap: '1.75rem' 
            }}
          >
            {services.map((svc) => (
              <div 
                key={svc.num}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E5EAE8', 
                  borderRadius: '8px', 
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#54CFB0';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(8, 6, 7, 0.06)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.04)';
                  const arrow = e.currentTarget.querySelector('.service-arrow');
                  if (arrow) arrow.style.color = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5EAE8';
                  e.currentTarget.style.boxShadow = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const arrow = e.currentTarget.querySelector('.service-arrow');
                  if (arrow) arrow.style.color = '#080607';
                }}
              >
                {/* Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#080607', fontFamily: 'monospace' }}>
                    {svc.num}
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#54CFB0' }} />
                </div>

                {/* Card Editorial Image */}
                <div 
                  style={{ 
                    borderRadius: '6px', 
                    overflow: 'hidden', 
                    height: '170px', 
                    marginBottom: '1.5rem',
                    background: '#F5F8F7'
                  }}
                >
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }} 
                  />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#080607', margin: '0 0 0.75rem 0', letterSpacing: '-0.02em' }}>
                  {svc.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.6, margin: '0 0 1.5rem 0', flex: 1 }}>
                  {svc.desc}
                </p>

                {/* Explore Link with Transition */}
                <div style={{ borderTop: '1px solid #E5EAE8', paddingTop: '1.15rem', marginTop: 'auto' }}>
                  <Link 
                    to={svc.link}
                    className="service-arrow"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      fontWeight: 600, 
                      fontSize: '0.875rem', 
                      color: '#080607',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. INDUSTRIES SECTION (Large Visual Tiles, Enterprise Photography)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E5EAE8',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0' 
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
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

            <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.6, margin: 0 }}>
              We build solutions around the unique challenges and opportunities of modern businesses.
            </p>
          </div>

          {/* 4 Large Visual Photography Tiles in a Row */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {industries.map((ind, idx) => (
              <Link
                key={ind.title}
                to="/industries"
                style={{ 
                  position: 'relative', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  height: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.75rem',
                  textDecoration: 'none',
                  border: '1px solid #E5EAE8',
                  boxShadow: '0 4px 16px rgba(8, 6, 7, 0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(8, 6, 7, 0.08)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 6, 7, 0.04)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Background Image with Clean Corporate Grade Gradient Overlay */}
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    zIndex: 0,
                    transition: 'transform 0.5s ease'
                  }} 
                />
                
                {/* Contrast Gradient for Legibility */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(180deg, rgba(8,6,7,0.05) 0%, rgba(8,6,7,0.4) 40%, rgba(8,6,7,0.92) 100%)',
                    zIndex: 1 
                  }} 
                />

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', padding: '3px 8px', borderRadius: '4px', marginBottom: '0.65rem' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#54CFB0' }} />
                    <span style={{ fontSize: '0.725rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                      {ind.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
                    {ind.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                    {ind.desc}
                  </p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#54CFB0', fontSize: '0.825rem', fontWeight: 600 }}>
                    <span>Learn more</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. WHY MAXR SECTION (Split Layout: Image Left, Clean Points Right)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#F5F8F7', 
          borderBottom: '1px solid #E5EAE8',
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
                  border: '1px solid #E5EAE8',
                  boxShadow: '0 16px 36px rgba(8, 6, 7, 0.05)',
                  background: '#FFFFFF'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" 
                  alt="MaxR enterprise collaboration and corporate team advisory workspace" 
                  style={{ 
                    width: '100%', 
                    height: 'clamp(340px, 42vw, 480px)', 
                    objectFit: 'cover', 
                    display: 'block' 
                  }} 
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

              <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.6, margin: '0 0 2.25rem 0' }}>
                We combine strategy, technology and automation to help businesses grow, operate efficiently and stay competitive.
              </p>

              {/* 4 Simple Points with Clean Minimalist Line Icons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {whyPoints.map((pt) => (
                  <div key={pt.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div 
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        borderRadius: '6px', 
                        background: '#FFFFFF', 
                        border: '1px solid #E5EAE8',
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
                      <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0, lineHeight: 1.55 }}>
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
          6. INSIGHTS SECTION (Editorial Perspectives, 3 Article Cards)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E5EAE8',
          padding: 'clamp(4.5rem, 7vw, 6rem) 0' 
        }}
      >
        <div className="container">
          
          {/* Section Header */}
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

          {/* 3 Editorial Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {insights.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E5EAE8', 
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
                  e.currentTarget.style.borderColor = '#E5EAE8';
                  e.currentTarget.style.boxShadow = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const arrow = e.currentTarget.querySelector('.insight-arrow');
                  if (arrow) arrow.style.color = '#080607';
                }}
              >
                {/* Image */}
                <div style={{ height: '200px', overflow: 'hidden', background: '#F5F8F7' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }} 
                  />
                </div>

                {/* Article Info */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#54CFB0' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {item.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#080607', margin: '0 0 1.25rem 0', lineHeight: 1.4, letterSpacing: '-0.015em' }}>
                    {item.title}
                  </h3>

                  <div style={{ marginTop: 'auto', borderTop: '1px solid #E5EAE8', paddingTop: '1rem' }}>
                    <span 
                      className="insight-arrow"
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        fontSize: '0.875rem', 
                        fontWeight: 600, 
                        color: '#080607',
                        transition: 'color 0.2s ease'
                      }}
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
