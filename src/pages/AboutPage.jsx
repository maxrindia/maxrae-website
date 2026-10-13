import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Zap,
  Globe2
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

export default function AboutPage({ onOpenContact }) {
  const stats = [
    { target: 50, suffix: "+", label: "Projects Delivered", desc: "Across UAE & international markets" },
    { target: 20, suffix: "+", label: "Businesses Served", desc: "Clinics, real estate, retail & tech" },
    { target: 7, prefix: "< ", suffix: " Days", label: "Deployment Speed", desc: "From kickoff to production systems" },
    { target: 2, suffix: " Hubs", label: "Dubai & Chennai", desc: "Commercial HQ & deep tech center" }
  ];

  const leadership = [
    {
      name: "Shagul",
      title: "Founder & CEO",
      focus: "Product Vision & Strategy",
      bio: "Leads client strategy, product vision, and AI system architecture across Dubai, the GCC, and international markets.",
      location: "Chennai"
    },
    {
      name: "Gopi",
      title: "Co-Founder & CTO",
      focus: "Technology & Engineering",
      bio: "Leads MaxR's engineering team, conversational voice pipelines, workflow engines, and scalable cloud infrastructure.",
      location: "Chennai"
    }
  ];

  const values = [
    {
      icon: <Zap size={22} color="#00bba7" />,
      title: "Rapid Deployment (< 7 Days)",
      desc: "We don't take months producing endless slide decks. We audit your workflows and launch working production automations in days."
    },
    {
      icon: <Users size={22} color="#00bba7" />,
      title: "Direct Engineering Access",
      desc: "You talk directly with senior architects and engineers building your software — no middlemen, no junior buffers, and no runaround."
    },
    {
      icon: <ShieldCheck size={22} color="#00bba7" />,
      title: "Bank-Grade Reliability (99.9%)",
      desc: "Built with enterprise security standards, data encryption, and high-availability cloud architecture to ensure uninterrupted operations."
    }
  ];

  return (
    <div className="about-page" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* ── 1. HEADER ── */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 3.75rem)' }}>
          <h1 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em', 
              lineHeight: 1.15, 
              marginTop: 0, 
              marginBottom: '1rem' 
            }}
          >
            Who We Are
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.15rem)', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            A focused technology team building AI systems, modern software, and digital solutions for growing businesses across Dubai and India.
          </p>
        </div>

        {/* ── 2. KEY STATS STRIP ── */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', 
            gap: '1.25rem', 
            marginBottom: '3.5rem' 
          }}
        >
          {stats.map((s, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '1.5rem 1.25rem',
                border: '1px solid #E2E8F0',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(8, 6, 7, 0.03)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 187, 167, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 6, 7, 0.03)';
              }}
            >
              <div 
                style={{ 
                  fontSize: 'clamp(2.1rem, 3.2vw, 2.6rem)', 
                  fontWeight: 900, 
                  color: '#080607', 
                  fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                <AnimatedCounter 
                  target={s.target} 
                  prefix={s.prefix || ''} 
                  suffix={s.suffix || ''} 
                  duration={1800} 
                />
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#008779', marginTop: '6px' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '3px' }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. OUR STORY & WHAT WE STAND FOR ── */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '16px', 
            border: '1px solid #E2E8F0', 
            padding: 'clamp(2rem, 4vw, 3.25rem)', 
            boxShadow: '0 6px 24px rgba(8, 6, 7, 0.03)', 
            marginBottom: '3.5rem' 
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: '0 0 1rem 0',
                letterSpacing: '-0.025em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Practical Technology. Real Business Leverage.
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, margin: '0 0 1rem 0' }}>
              MaxR was created to help businesses eliminate manual bottlenecks and scale through intelligent technology. We believe you shouldn't have to hire bloated teams or deal with slow traditional agencies to get modern AI and web systems running.
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Operating across <strong>Dubai</strong> and <strong>Chennai</strong>, we deliver rapid turnarounds, high security, and systems that start delivering value in your first 30 days.
            </p>
          </div>

          {/* 3 Core Value Cards (Animated Micro-Interactions) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.75rem' }}>
            {values.map((v, vIdx) => (
              <div 
                key={vIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2rem 1.75rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 18px rgba(8, 6, 7, 0.03)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 187, 167, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(8, 6, 7, 0.03)';
                }}
              >
                <div>
                  <div 
                    style={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '12px', 
                      background: 'rgba(0,187,167,0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom: '1.25rem',
                      border: '1px solid rgba(0,187,167,0.25)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#080607', margin: '0 0 0.65rem 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {v.desc}
                  </p>
                </div>

                {/* Subtle indicator pill */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                  <span 
                    style={{ 
                      fontSize: '0.74rem', 
                      fontWeight: 700, 
                      color: '#008779', 
                      background: 'rgba(0, 187, 167, 0.08)', 
                      padding: '4px 10px', 
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00bba7' }} />
                    <span>{vIdx === 0 ? "Production in Days" : vIdx === 1 ? "Direct Senior Devs" : "Enterprise SLA"}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. LEADERSHIP ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.25rem' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: 0,
                letterSpacing: '-0.025em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Our Leadership
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.35rem' }}>
              Hands-on founders who build directly alongside our client partners.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.75rem' }}>
            {leadership.map((leader, lIdx) => (
              <div 
                key={lIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '2rem',
                  boxShadow: '0 4px 20px rgba(8, 6, 7, 0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 187, 167, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(8, 6, 7, 0.03)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {leader.name}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#008779', fontWeight: 700 }}>
                      {leader.title}
                    </span>
                  </div>
                  <span style={{ background: '#F1F5F9', color: '#334155', fontSize: '0.72rem', padding: '4px 8px', borderRadius: '6px', fontWeight: 650 }}>
                    {leader.focus}
                  </span>
                </div>

                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                  {leader.bio}
                </p>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem', fontSize: '0.78rem', color: '#64748b' }}>
                  <strong>Based in:</strong> {leader.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. OUR EXACT OFFICE LOCATIONS (DUBAI & CHENNAI) ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.25rem' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: 0,
                letterSpacing: '-0.025em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Our Locations
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.35rem' }}>
              Official presence in the United Arab Emirates and India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.75rem' }}>
            
            {/* DUBAI */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #E2E8F0',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(8, 6, 7, 0.03)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={20} color="#00bba7" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                    Dubai
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#008779', fontWeight: 700 }}>
                    United Arab Emirates
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="#00bba7" />
                  <span><strong>Support:</strong> <a href="mailto:support@maxr.ae" style={{ color: '#080607', textDecoration: 'none' }}>support@maxr.ae</a></span>
                </div>
              </div>
            </div>

            {/* CHENNAI */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #E2E8F0',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(8, 6, 7, 0.03)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(84,207,176,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} color="#0d9488" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                    Chennai
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#0d9488', fontWeight: 700 }}>
                    India
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color="#00bba7" />
                  <span><strong>Tel:</strong> <a href="tel:+917778884359" style={{ color: '#080607', textDecoration: 'none' }}>+91 77788 84359</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="#00bba7" />
                  <span><strong>Email:</strong> <a href="mailto:hello@maxr.io" style={{ color: '#080607', textDecoration: 'none' }}>hello@maxr.io</a></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 6. CLOSING CTA (Single-line concise dedicated section) ── */}
        <div 
          style={{ 
            borderTop: '1px solid #E2E8F0', 
            paddingTop: '3.5rem',
            marginTop: '2rem',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: '2rem', 
            flexWrap: 'wrap'
          }}
        >
          <div>
            <h2 
              style={{ 
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: '0 0 0.4rem 0', 
                letterSpacing: '-0.025em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Ready to Build Something Great?
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B', margin: 0 }}>
              Automate customer calls, build custom software, or scale operations with our team.
            </p>
          </div>

          <Link 
            to="/contact"
            className="btn-primary"
            style={{ 
              background: '#00bba7', 
              color: '#080607', 
              fontWeight: 800, 
              padding: '0.85rem 2rem', 
              fontSize: '0.925rem',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0, 187, 167, 0.25)',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Talk to Our Team</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
