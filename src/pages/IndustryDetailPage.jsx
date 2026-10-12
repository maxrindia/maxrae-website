import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Sparkles,
  PhoneCall,
  MessageSquare,
  Globe2,
  Calendar,
  Search,
  Lock,
  Users,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import TechBadge from '../components/TechLogos';

export default function IndustryDetailPage({ onOpenContact }) {
  const { slug } = useParams();

  // Scroll to top immediately on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  const industry = industriesData[slug];
  if (!industry) {
    return <Navigate to="/industries/healthcare" replace />;
  }

  // Recommended automation & tech stack by sector
  const sectorTech = {
    "healthcare": ["Zoho CRM", "Twilio", "OpenAI API", "Make.com", "Next.js", "PostgreSQL"],
    "real-estate": ["Zoho CRM", "Twilio", "Zapier", "Make.com", "Next.js", "Meta Cloud API", "Google Ads"],
    "ecommerce": ["Shopify", "Tailwind CSS", "Zapier", "Meta Cloud API", "Google Ads", "Stripe"],
    "finance": ["Next.js", "PostgreSQL", "AWS", "Docker", "Twilio", "Power BI"],
    "education": ["Zoho CRM", "Twilio", "Zapier", "Next.js", "Google Ads", "Meta Cloud API"],
    "hospitality": ["Twilio", "OpenAI API", "Make.com", "Next.js", "Google Ads", "Meta Cloud API"],
    "professional-services": ["HubSpot", "Zapier", "Next.js", "Google Ads", "LinkedIn Creator", "Stripe"],
    "technology": ["React", "Next.js", "TypeScript", "Node.js", "Docker", "AWS", "Stripe", "n8n"]
  };

  const currentTech = sectorTech[slug] || ["Zoho CRM", "Twilio", "n8n", "Next.js", "Zapier"];

  return (
    <div className="industry-detail-page" style={{ background: '#FAFBFB', minHeight: '100vh', color: '#080607' }}>
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. FULL-WIDTH CINEMATIC HERO BANNER (Rich Industry Visual Background)
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          position: 'relative',
          background: '#080607',
          color: '#FFFFFF',
          padding: 'clamp(3.5rem, 6vw, 5rem) 0 clamp(3rem, 5vw, 4.5rem) 0',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        {/* Cinematic Background Image with Gradient Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src={industry.heroImage} 
            alt={industry.name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.38) contrast(1.1)'
            }} 
          />
          <div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(180deg, rgba(8, 6, 7, 0.72) 0%, rgba(8, 6, 7, 0.5) 50%, rgba(8, 6, 7, 0.92) 100%)' 
            }} 
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Micro Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '0.825rem' }}>
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>/</span>
            <span style={{ color: '#54CFB0', fontWeight: 700 }}>Industries We Serve</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{industry.name}</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            {/* Sector Pill Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#54CFB0' }}>
                {industry.name} SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.12, 
                color: '#FFFFFF', 
                margin: '0 0 1.25rem 0',
                fontFamily: "'Space Grotesk', -apple-system, sans-serif"
              }}
            >
              {industry.headline}
            </h1>

            {/* Subheadline */}
            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', 
                color: 'rgba(255, 255, 255, 0.85)', 
                lineHeight: 1.6, 
                margin: '0 0 2rem 0',
                fontWeight: 450,
                maxWidth: '720px'
              }}
            >
              {industry.tagline}
            </p>

            {/* Buttons & Metric Badges Strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                type="button"
                onClick={onOpenContact}
                style={{
                  backgroundColor: '#00bba7',
                  color: '#080607',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.9rem 2rem',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(0, 187, 167, 0.45)',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00a392';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('services-list');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '10px',
                  padding: '0.9rem 1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(8px)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.color = '#54CFB0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <span>View Exact Services</span>
                <span>↓</span>
              </button>
            </div>

            {/* 3 Metric Pills in Translucent Glass */}
            <div 
              style={{ 
                display: 'inline-flex', 
                flexWrap: 'wrap',
                gap: '16px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.18)'
              }}
            >
              {industry.metrics.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {idx > 0 && <span style={{ color: 'rgba(255, 255, 255, 0.35)', marginRight: '8px' }}>•</span>}
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#54CFB0', fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" }}>
                    {m.value}
                  </span>
                  <span style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 650 }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. EXACT SERVICES WE DELIVER FOR THIS INDUSTRY (Crystal Clear & Practical)
          (e.g., AI Voice Calling, Bulk WhatsApp, Portals, CRM Sync, Ads)
          ═════════════════════════════════════════════ */}
      <section id="services-list" style={{ padding: 'clamp(3.5rem, 5.5vw, 5rem) 0' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              alignItems: 'start'
            }}
          >
            {/* Left: What Services We Deliver */}
            <div style={{ flex: '1 1 60%' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#008779' }}>
                  WHAT WE BUILD & AUTOMATE
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', 
                  fontWeight: 900, 
                  color: '#080607', 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.2,
                  margin: '0 0 0.5rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                Services We Deliver for {industry.name}
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
                Here is exactly what MaxR designs, automates, and manages for your business:
              </p>

              {/* Numbered List of Exact Services with Distinct Category Tags */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {industry.servicesProvided.map((service, idx) => {
                  const IconComp = service.icon || Zap;
                  return (
                    <div 
                      key={idx}
                      style={{
                        padding: '1.25rem 1.4rem',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '14px',
                        border: '1.5px solid #E8ECEB',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        transition: 'all 0.25s ease',
                        cursor: 'default',
                        boxShadow: '0 2px 10px rgba(8, 6, 7, 0.02)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00bba7';
                        e.currentTarget.style.backgroundColor = '#F8FCFA';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 187, 167, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E8ECEB';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(8, 6, 7, 0.02)';
                      }}
                    >
                      {/* Icon */}
                      <div 
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '10px', 
                          backgroundColor: 'rgba(0, 187, 167, 0.1)', 
                          color: '#008779', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          flexShrink: 0,
                          marginTop: '2px' 
                        }}
                      >
                        <IconComp size={20} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                            {service.title}
                          </h3>
                          <span 
                            style={{ 
                              fontSize: '0.72rem', 
                              fontWeight: 800, 
                              color: '#008779', 
                              backgroundColor: '#E6F8F5', 
                              padding: '3px 8px', 
                              borderRadius: '6px',
                              border: '1px solid rgba(0, 187, 167, 0.25)',
                              letterSpacing: '0.04em'
                            }}
                          >
                            {service.tag}
                          </span>
                        </div>

                        <p style={{ fontSize: '0.91rem', color: '#4B5563', lineHeight: 1.55, margin: 0 }}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Verified Outcomes & Industry Tooling */}
            <div style={{ flex: '1 1 40%' }}>
              
              {/* Documented Outcomes Card */}
              <div 
                style={{ 
                  background: '#F0FDF4', 
                  border: '1.5px solid #BBF7D0', 
                  borderRadius: '18px', 
                  padding: '2rem 1.75rem',
                  boxShadow: '0 4px 18px rgba(22, 101, 52, 0.06)',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    MEASURABLE BUSINESS IMPACT
                  </span>
                </div>

                <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#14532D', margin: '0 0 1.25rem 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                  Proven Results in {industry.name}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {industry.results.map((res, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#15803D', fontWeight: 650, lineHeight: 1.5 }}>
                      <span style={{ color: '#16a34a', fontWeight: 900, marginTop: '1px' }}>✓</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrated Industry Tech & Tooling */}
              <div 
                style={{ 
                  background: '#FFFFFF', 
                  border: '1.5px solid #E2E8F0', 
                  borderRadius: '18px', 
                  padding: '1.75rem',
                  boxShadow: '0 4px 16px rgba(8, 6, 7, 0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#008779', marginBottom: '0.65rem' }}>
                  <Sparkles size={16} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    INTEGRATED PLATFORMS & LOGOS
                  </span>
                </div>

                <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#080607', margin: '0 0 0.5rem 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                  Systems We Connect & Automate
                </h4>

                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 1.25rem 0' }}>
                  Direct APIs and webhooks connecting your ads, phone lines, and databases:
                </p>

                {/* Tech Badges with Brand SVG Logos */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentTech.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. CONCISE DOUBLE-ROW (2-LINE) CTA STRIP
          ═════════════════════════════════════════════ */}
      <section 
        style={{ 
          background: '#080607', 
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          padding: 'clamp(2.5rem, 4vw, 3.25rem) 0',
          position: 'relative',
          color: '#FFFFFF'
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
            {/* Left side: Double-Row (Line 1 Headline, Line 2 Subtitle) */}
            <div style={{ flex: '1 1 auto', maxWidth: '760px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ width: '14px', height: '2px', background: '#54CFB0' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#54CFB0' }}>
                  SECTOR ACCELERATION
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', 
                  fontWeight: 900, 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1.2, 
                  color: '#FFFFFF',
                  margin: '0 0 0.4rem 0',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
              >
                Scale Your {industry.name} Operations with MaxR
              </h2>

              <p 
                style={{ 
                  fontSize: 'clamp(0.88rem, 1vw, 0.98rem)', 
                  color: 'rgba(255, 255, 255, 0.78)', 
                  lineHeight: 1.5, 
                  margin: 0 
                }}
              >
                No commitment. Speak directly with our senior technology team to get a scoped deployment plan.
              </p>
            </div>

            {/* Right side: Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={onOpenContact}
                style={{
                  backgroundColor: '#00bba7',
                  color: '#080607',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.85rem 1.85rem',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 20px rgba(0, 187, 167, 0.35)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00a392';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
