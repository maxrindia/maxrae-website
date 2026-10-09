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

export default function AboutPage({ onOpenContact }) {
  const stats = [
    { value: "50+", label: "Projects Delivered", desc: "Across UAE & international markets" },
    { value: "20+", label: "Businesses Served", desc: "Clinics, real estate, retail & tech" },
    { value: "< 7 Days", label: "Deployment Speed", desc: "From kickoff to production systems" },
    { value: "2 Hubs", label: "Dubai & Chennai", desc: "Commercial HQ & deep tech center" }
  ];

  const leadership = [
    {
      name: "Shagul",
      title: "Founder & CEO",
      focus: "Product Vision & Strategy",
      bio: "Leads client strategy, product vision, and AI system architecture across Dubai, the GCC, and international markets.",
      location: "Dubai Headquarters (UAE)"
    },
    {
      name: "Gopi",
      title: "Co-Founder & CTO",
      focus: "Technology & Engineering",
      bio: "Leads MaxR's engineering team, conversational voice pipelines, workflow engines, and scalable cloud infrastructure.",
      location: "Chennai Tech Hub (India)"
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
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
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
                  fontWeight: 900, 
                  color: '#080607', 
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                {s.value}
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
              MaxR was created to help businesses eliminate manual bottlenecks and scale through intelligent technology. We believe you shouldn't have to hire bloated teams or deal with slow software consultancies to get modern AI and web systems running.
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              By pairing our <strong>Commercial Strategy in Dubai</strong> with our <strong>Technology & Engineering Center in Chennai</strong>, we deliver rapid turnarounds, high security, and systems that start delivering value in your first 30 days.
            </p>
          </div>

          {/* 3 Core Value Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, vIdx) => (
              <div 
                key={vIdx}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.background = '#F8FAFC';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', margin: '0 0 0.45rem 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {v.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            
            {/* DUBAI HQ */}
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={20} color="#00bba7" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                      Dubai Headquarters
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#008779', fontWeight: 700 }}>
                      United Arab Emirates
                    </span>
                  </div>
                </div>
                <span style={{ background: '#080607', color: '#54CFB0', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                  Head Office
                </span>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1rem', border: '1px solid #E2E8F0', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                <p style={{ margin: 0, fontWeight: 750, color: '#080607' }}>Office #1812</p>
                <p style={{ margin: 0 }}>Grosvenor Business Tower, Barsha Heights (Tecom)</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Dubai, United Arab Emirates</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={14} color="#00bba7" />
                  <span><strong>Tel:</strong> <a href="tel:+97145648887" style={{ color: '#080607', textDecoration: 'none' }}>+971 4 564 8887</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={14} color="#00bba7" />
                  <span><strong>Email:</strong> <a href="mailto:contact@maxr.ae" style={{ color: '#080607', textDecoration: 'none' }}>contact@maxr.ae</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={14} color="#00bba7" />
                  <span><strong>Hours:</strong> Sun – Thu, 9:00 AM – 6:00 PM GST</span>
                </div>
              </div>
            </div>

            {/* CHENNAI TECH HUB */}
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'rgba(84,207,176,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} color="#0d9488" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                      Chennai Technology Hub
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#0d9488', fontWeight: 700 }}>
                      Engineering Center • India
                    </span>
                  </div>
                </div>
                <span style={{ background: '#00bba7', color: '#080607', fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px' }}>
                  Tech Hub
                </span>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1rem', border: '1px solid #E2E8F0', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                <p style={{ margin: 0, fontWeight: 750, color: '#080607' }}>MaxR Consultancy Services Pvt Ltd</p>
                <p style={{ margin: 0 }}>101, 2/29, Cenotaph Road, 1st Street, Alwarpet</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Chennai, Tamil Nadu 600018, India</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={14} color="#00bba7" />
                  <span><strong>Tel:</strong> <a href="tel:+914424356789" style={{ color: '#080607', textDecoration: 'none' }}>+91 44 2435 6789</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={14} color="#00bba7" />
                  <span><strong>Email:</strong> <a href="mailto:india@maxr.ae" style={{ color: '#080607', textDecoration: 'none' }}>india@maxr.ae</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={14} color="#00bba7" />
                  <span><strong>Hours:</strong> Mon – Fri, 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 6. SIMPLE CLOSING ACTION ── */}
        <div 
          style={{ 
            background: 'linear-gradient(145deg, #080607 0%, #0d1a16 100%)', 
            borderRadius: '20px', 
            padding: 'clamp(2.5rem, 5vw, 3.5rem) 2rem', 
            border: '1px solid rgba(84, 207, 176, 0.35)', 
            boxShadow: '0 16px 40px rgba(8, 6, 7, 0.25)', 
            textAlign: 'center',
            color: '#FFFFFF',
            maxWidth: '780px',
            margin: '0 auto'
          }}
        >
          <h2 
            style={{ 
              fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', 
              fontWeight: 800, 
              color: '#FFFFFF', 
              margin: '0 0 0.75rem 0', 
              letterSpacing: '-0.025em',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Ready to Build Something Great?
          </h2>

          <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, margin: '0 0 1.75rem 0', maxWidth: '540px', marginInline: 'auto' }}>
            Whether you want to automate customer calls, build a custom app, or scale your operations, our team is ready to help.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact"
              className="btn-primary"
              style={{ 
                background: '#54CFB0', 
                color: '#080607', 
                fontWeight: 800, 
                padding: '0.75rem 1.75rem', 
                fontSize: '0.9rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <span>Talk to Our Team</span>
              <ArrowRight size={15} />
            </Link>

            <a 
              href="https://wa.me/97145648887"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)', 
                border: '1px solid rgba(255, 255, 255, 0.2)', 
                color: '#FFFFFF', 
                fontWeight: 700, 
                padding: '0.75rem 1.5rem', 
                fontSize: '0.9rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.borderColor = '#25D366';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
