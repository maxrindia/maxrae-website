import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Globe2, 
  Sparkles,
  Mail,
  Phone,
  Clock,
  Cpu,
  Workflow,
  BarChart3,
  Flame,
  Award,
  Layers,
  Terminal,
  ExternalLink
} from 'lucide-react';

export default function AboutPage({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('principles');

  const stats = [
    { value: "< 450ms", label: "Voice Pipeline Latency", sub: "Ultra-low latency conversational AI", tag: "Real-Time" },
    { value: "99.9%", label: "Infrastructure Uptime SLA", sub: "Bank-grade high availability architecture", tag: "Guaranteed" },
    { value: "< 7 Days", label: "Sprint Deployment Speed", sub: "From architecture to production readiness", tag: "Rapid Agile" },
    { value: "5× ROI", label: "Measurable Target Impact", sub: "Deterministic balance sheet leverage", tag: "Outcome First" }
  ];

  const pillars = [
    {
      icon: <Cpu size={24} color="#00bba7" />,
      title: "Deterministic AI Systems",
      badge: "Zero-Hallucination Architecture",
      desc: "We don't deploy brittle wrapper tools. We engineer production-tested conversational voice agents, strict structured data extraction engines, and self-verifying workflow pipelines built for high enterprise reliability."
    },
    {
      icon: <Zap size={24} color="#00bba7" />,
      title: "Agile 7-Day Sprint Delivery",
      badge: "Rapid Production Velocity",
      desc: "Traditional consultancies spend quarters producing slide decks. MaxR designs, prototypes, stress-tests, and deploys fully operational automations and modern web platforms in days."
    },
    {
      icon: <ShieldCheck size={24} color="#00bba7" />,
      title: "Bank-Grade Infrastructure",
      badge: "Enterprise Security SLA",
      desc: "Engineered with strict zero-trust data segregation, TLS 1.3 encryption in transit and at rest, automated failover routing, and complete compliance with GCC and global privacy protocols."
    },
    {
      icon: <Users size={24} color="#00bba7" />,
      title: "Direct Engineering Access",
      badge: "No Middlemen Or Bureaucracy",
      desc: "Our clients work directly with senior systems architects and AI engineers. No junior account buffers, no distorted briefs — just transparent, high-velocity technical collaboration."
    }
  ];

  const leadership = [
    {
      name: "Shagul",
      title: "Founder & Chief Executive Officer",
      role: "Strategic Vision & Enterprise Architecture",
      bio: "Leads MaxR's global commercial expansion, enterprise partnerships, and AI system design across the GCC and international markets. Translates complex operational challenges into scalable, high-margin autonomous systems.",
      tags: ["Enterprise AI", "Commercial Strategy", "GCC Expansion"],
      entity: "MaxR Technologies (Dubai & Global)"
    },
    {
      name: "Gopi",
      title: "Co-Founder & Chief Technology Officer",
      role: "Engineering Leadership & Systems Scalability",
      bio: "Leads technical strategy, conversational voice pipelines, and distributed cloud infrastructure. Specializes in low-latency WebRTC streaming, high-throughput microservices, and fault-tolerant workflow orchestrations.",
      tags: ["Distributed Systems", "Voice Pipelines", "Cloud SLA"],
      entity: "MaxR Technologies & Tech Center"
    }
  ];

  const techStack = [
    { category: "Conversational Voice AI", items: ["WebRTC Streaming", "Custom Dialect Tuning (Arabic & English)", "Sub-450ms TTS/STT", "Telephony Trunking (SIP/VoIP)"] },
    { category: "Workflow Automation Engines", items: ["Event-Driven Webhooks", "n8n & Make Enterprise Pipelines", "Custom Node.js & Python Services", "Self-Healing Fallbacks"] },
    { category: "Cloud & Reliability", items: ["AWS & Azure Dedicated Clusters", "Redis In-Memory Caching", "PostgreSQL & Vector Databases", "99.9% Uptime SLA Monitoring"] },
    { category: "Enterprise Ecosystems", items: ["Salesforce & HubSpot CRM", "Zoho Ecosystem", "WhatsApp Business API", "Custom ERP REST/GraphQL Connectors"] }
  ];

  return (
    <div className="about-page" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* ── 1. HERO SECTION ── */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="about-hero-badge">
            <span className="about-pulse-dot" />
            <span>Dual-Hub Enterprise Engineering • Dubai & Chennai</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em',
              lineHeight: 1.12, 
              marginTop: 0, 
              marginBottom: '1.25rem',
              fontFamily: "'Space Grotesk', -apple-system, sans-serif"
            }}
          >
            We Architect The Technology.<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              That Drives Modern Enterprise.
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)', color: '#3F5565', lineHeight: 1.65, margin: '0 auto', maxWidth: '720px' }}>
            Headquartered in <strong>Dubai</strong> with deep engineering centers in <strong>Chennai</strong>, MaxR delivers autonomous voice agents, deterministic workflow automations, and custom enterprise software that produce immediate balance-sheet impact.
          </p>
        </div>

        {/* ── 2. LIVE TELEMETRY STATS STRIP ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {stats.map((s, idx) => (
            <div key={idx} className="about-stat-card">
              <span style={{ 
                display: 'inline-block', 
                fontSize: '0.7rem', 
                fontWeight: 750, 
                color: '#008779', 
                background: 'rgba(0, 187, 167, 0.1)', 
                padding: '3px 8px', 
                borderRadius: '6px', 
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {s.tag}
              </span>
              <div style={{ 
                fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
                fontWeight: 900, 
                color: '#080607', 
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#080607', marginTop: '6px' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.775rem', color: '#64748b', marginTop: '4px' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. THE MAXR STORY & ADVANTAGE ── */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '20px', 
            border: '1px solid #E2E8F0', 
            padding: 'clamp(2rem, 4.5vw, 3.75rem)', 
            boxShadow: '0 8px 32px rgba(8, 6, 7, 0.04)', 
            marginBottom: '3.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span style={{ width: '20px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Our Mission & Engineering DNA
                </span>
              </div>
              
              <h2 
                style={{ 
                  fontSize: 'clamp(1.85rem, 2.8vw, 2.4rem)', 
                  fontWeight: 900, 
                  color: '#080607', 
                  marginTop: '0.25rem', 
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                Engineered for Performance. <br />
                Proven in Production.
              </h2>

              <p style={{ color: '#3F5565', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                At MaxR, we believe businesses shouldn't be held back by fragile manual handoffs, generic chatbots that frustrate users, or technology vendors that take months to deliver basic features.
              </p>
              
              <p style={{ color: '#3F5565', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                By pairing our <strong>Dubai Commercial Headquarters</strong> (grounded in GCC business strategy and regulatory compliance) with our <strong>Chennai Technology Hub</strong> (specialized in advanced AI pipelines and high-concurrency systems), we give companies world-class digital capabilities with unmatched agility.
              </p>

              {/* Verified Trust Badges */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F8FAFC', padding: '8px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.825rem', fontWeight: 700, color: '#080607' }}>
                  <CheckCircle2 size={16} color="#00bba7" />
                  <span>Sub-second Audio Synthesis</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F8FAFC', padding: '8px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.825rem', fontWeight: 700, color: '#080607' }}>
                  <CheckCircle2 size={16} color="#00bba7" />
                  <span>Zero-Data-Retention Option</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F8FAFC', padding: '8px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.825rem', fontWeight: 700, color: '#080607' }}>
                  <CheckCircle2 size={16} color="#00bba7" />
                  <span>Continuous Telemetry & SLA</span>
                </div>
              </div>
            </div>

            {/* Visual Architecture Pillar Card */}
            <div style={{ background: 'linear-gradient(145deg, #080607 0%, #111b18 100%)', borderRadius: '16px', padding: '2.5rem', color: '#FFFFFF', border: '1px solid rgba(84, 207, 176, 0.3)', boxShadow: '0 16px 40px rgba(8,6,7,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Terminal size={20} color="#54CFB0" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 750, color: '#FFFFFF', letterSpacing: '0.04em' }}>MAXR PRODUCTION RUNTIME</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#54CFB0', background: 'rgba(84,207,176,0.15)', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>LIVE</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Core Engine</span>
                  <span style={{ fontWeight: 650, color: '#FFFFFF' }}>Autonomous Voice & Workflow Orchestrator</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Telephony Nodes</span>
                  <span style={{ fontWeight: 650, color: '#54CFB0' }}>Dubai (+971) & India (+91) SIP Gateways</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Latency Target</span>
                  <span style={{ fontWeight: 650, color: '#54CFB0' }}>380ms – 450ms End-to-End</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Security Tier</span>
                  <span style={{ fontWeight: 650, color: '#FFFFFF' }}>TLS 1.3 / AES-256 Encrypted</span>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.775rem', color: '#94A3B8' }}>
                  Target Delivery: <strong style={{ color: '#FFFFFF' }}>Sprint Phase 1 in 7 Days</strong>
                </div>
                <Link 
                  to="/services" 
                  style={{ color: '#54CFB0', fontSize: '0.825rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                >
                  Explore Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. FOUR PILLARS OF ARCHITECTURAL EXCELLENCE ── */}
        <div style={{ marginBottom: '3.75rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: 0,
                letterSpacing: '-0.03em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              How We Deliver Value
            </h2>
            <p style={{ color: '#3F5565', fontSize: '1rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Our engineering operating model is designed from the ground up for measurable speed, deterministic reliability, and high client ROI.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {pillars.map((p, idx) => (
              <div key={idx} className="about-pillar-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.icon}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 750, color: '#008779', background: 'rgba(0,187,167,0.08)', padding: '3px 8px', borderRadius: '4px' }}>
                    {p.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#080607', marginBottom: '0.65rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {p.title}
                </h3>
                
                <p style={{ color: '#3F5565', fontSize: '0.9rem', lineHeight: 1.65, margin: 0, flex: 1 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. DUAL GLOBAL CENTERS OF EXCELLENCE (DUBAI & CHENNAI) ── */}
        <div style={{ marginBottom: '3.75rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Global Presence
              </span>
            </div>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: 0,
                letterSpacing: '-0.03em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Two Strategic Tech Hubs. One Global Standard.
            </h2>
            <p style={{ color: '#3F5565', fontSize: '0.975rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Seamlessly operating across Dubai and Chennai to deliver around-the-clock innovation, engineering rigor, and executive support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* DUBAI HEADQUARTERS CARD */}
            <div className="about-location-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={22} color="#00bba7" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                      Dubai Headquarters
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#008779', fontWeight: 700 }}>
                      HQ • United Arab Emirates
                    </span>
                  </div>
                </div>
                <span style={{ background: '#080607', color: '#54CFB0', fontSize: '0.72rem', fontWeight: 700, padding: '4px 8px', borderRadius: '6px' }}>
                  Commercial HQ
                </span>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1.25rem', border: '1px solid #E2E8F0', marginBottom: '1.5rem', fontSize: '0.875rem', lineHeight: 1.6, color: '#334155' }}>
                <p style={{ margin: 0, fontWeight: 750, color: '#080607' }}>Office #1812</p>
                <p style={{ margin: 0 }}>Grosvenor Business Tower, Barsha Heights (Tecom)</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Dubai, United Arab Emirates</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={15} color="#00bba7" />
                  <span><strong>Tel:</strong> <a href="tel:+97145648887" style={{ color: '#080607', textDecoration: 'none', fontWeight: 650 }}>+971 4 564 8887</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={15} color="#00bba7" />
                  <span><strong>Email:</strong> <a href="mailto:contact@maxr.ae" style={{ color: '#080607', textDecoration: 'none', fontWeight: 650 }}>contact@maxr.ae</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={15} color="#00bba7" />
                  <span><strong>Hours:</strong> Sunday – Thursday, 9:00 AM – 6:00 PM GST</span>
                </div>
              </div>
            </div>

            {/* CHENNAI TECH HUB CARD */}
            <div className="about-location-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(84,207,176,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={22} color="#0d9488" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                      Chennai Technology Hub
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#0d9488', fontWeight: 700 }}>
                      Engineering Center • India
                    </span>
                  </div>
                </div>
                <span style={{ background: '#00bba7', color: '#080607', fontSize: '0.72rem', fontWeight: 800, padding: '4px 8px', borderRadius: '6px' }}>
                  Core R&D Hub
                </span>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1.25rem', border: '1px solid #E2E8F0', marginBottom: '1.5rem', fontSize: '0.875rem', lineHeight: 1.6, color: '#334155' }}>
                <p style={{ margin: 0, fontWeight: 750, color: '#080607' }}>MaxR Consultancy Services Pvt Ltd</p>
                <p style={{ margin: 0 }}>101, 2/29, Cenotaph Road, 1st Street, Alwarpet</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Chennai, Tamil Nadu 600018, India</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={15} color="#00bba7" />
                  <span><strong>Tel:</strong> <a href="tel:+914424356789" style={{ color: '#080607', textDecoration: 'none', fontWeight: 650 }}>+91 44 2435 6789</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={15} color="#00bba7" />
                  <span><strong>Email:</strong> <a href="mailto:india@maxr.ae" style={{ color: '#080607', textDecoration: 'none', fontWeight: 650 }}>india@maxr.ae</a></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={15} color="#00bba7" />
                  <span><strong>Hours:</strong> Monday – Friday, 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 6. LEADERSHIP & TECHNICAL ARCHITECTURE ── */}
        <div style={{ marginBottom: '3.75rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: 0,
                letterSpacing: '-0.03em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Leadership & Systems Architects
            </h2>
            <p style={{ color: '#3F5565', fontSize: '0.975rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Founded and operated by hands-on engineers who build alongside our clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {leadership.map((leader, idx) => (
              <div key={idx} className="about-leadership-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {leader.name}
                      </h3>
                      <span style={{ fontSize: '0.85rem', color: '#008779', fontWeight: 750 }}>
                        {leader.title}
                      </span>
                    </div>
                    <span style={{ background: '#F5F8F7', color: '#080607', border: '1px solid #E2E8F0', fontSize: '0.72rem', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                      {leader.role}
                    </span>
                  </div>

                  <p style={{ color: '#3F5565', fontSize: '0.925rem', lineHeight: 1.7, margin: '1rem 0 1.5rem' }}>
                    {leader.bio}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.15rem' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {leader.tags.map((t, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '0.72rem', fontWeight: 650, color: '#475569', background: '#F1F5F9', padding: '3px 8px', borderRadius: '4px' }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7. ENTERPRISE CLOSING CTA ── */}
        <div 
          style={{ 
            background: 'linear-gradient(145deg, #080607 0%, #0d1a16 100%)', 
            borderRadius: '24px', 
            padding: 'clamp(2.75rem, 5.5vw, 4.25rem) clamp(1.5rem, 4vw, 3.5rem)', 
            border: '1.5px solid rgba(84, 207, 176, 0.4)', 
            boxShadow: '0 20px 50px rgba(8, 6, 7, 0.35)', 
            textAlign: 'center',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#54CFB0', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '0.85rem' }}>
              Accelerate Your Business
            </span>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 3rem)', 
                fontWeight: 900, 
                color: '#FFFFFF', 
                margin: '0 0 1rem', 
                letterSpacing: '-0.03em',
                lineHeight: 1.18,
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Ready to Build Something <br />
              <span style={{ color: '#54CFB0' }}>Remarkable Together?</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '2.25rem' }}>
              Whether you need autonomous voice systems, workflow automation, or enterprise software, our teams in Dubai and Chennai are ready to design and deploy in days.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/contact"
                className="btn-primary"
                style={{ 
                  background: '#54CFB0', 
                  color: '#080607', 
                  fontWeight: 800, 
                  padding: '0.85rem 2.25rem', 
                  fontSize: '0.95rem',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(84, 207, 176, 0.35)'
                }}
              >
                <span>Schedule Architectural Consultation</span>
                <ArrowRight size={16} />
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
                  padding: '0.85rem 1.75rem', 
                  fontSize: '0.95rem',
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
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
                </svg>
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
