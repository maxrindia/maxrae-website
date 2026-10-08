import React from 'react';
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
  Mail 
} from 'lucide-react';

export default function AboutPage({ onOpenContact }) {
  const leadership = [
    {
      title: "Founder & CEO",
      bio: "Visionary in AI transformation, business growth, and digital infrastructure. Focuses on modernizing business operations to make intelligent technology practical, scalable, and immediately accessible for growing companies.",
      focus: "AI Transformation & Business Growth Strategy",
      entity: "MaxR Technologies"
    },
    {
      title: "Co-Founder & CTO",
      bio: "Leads MaxR's technology strategy, product development, and the engineering of scalable automation systems. Specializes in conversational voice pipelines, automated workflow engines, and bank-grade infrastructure.",
      focus: "Product Development & Scalable Automation Engineering",
      entity: "MaxR Technologies"
    }
  ];

  const pillars = [
    {
      title: "AI That Builds. You Grow.",
      desc: "We focus on technology that delivers measurable business outcomes. Practical voice agents, reliable workflow automations, and growth systems that create immediate leverage."
    },
    {
      title: "Rapid Deployment (< 7 Days)",
      desc: "Our agile deployment frameworks allow us to audit operations, build tailored automations, and launch production-grade systems in days instead of months."
    },
    {
      title: "Bank-Grade Infrastructure (99.9% Availability)",
      desc: "Engineered with end-to-end data encryption, enterprise security standards, and high-availability cloud architecture to ensure uninterrupted operations."
    }
  ];

  return (
    <div className="about-page" style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0 5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 5vw, 4.5rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7' }}>
              WHO WE ARE
            </span>
          </div>
          <h1 
            style={{ 
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              marginTop: 0, 
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', -apple-system, sans-serif"
            }}
          >
            Transforming Operations Through<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Intelligent Technology.
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', color: '#3F5565', lineHeight: 1.6, margin: 0 }}>
            MaxR Technologies is an enterprise digital transformation partner helping businesses automate operations and scale with confidence.
          </p>
        </div>

        {/* Story Section */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '16px', 
            border: '1px solid #E1E8E5', 
            padding: 'clamp(2rem, 4vw, 3.5rem)', 
            boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)', 
            marginBottom: '3.5rem' 
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00bba7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Our Mission & Vision
                </span>
              </div>
              <h2 
                style={{ 
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)', 
                  fontWeight: 900, 
                  color: '#080607', 
                  marginTop: '0.25rem', 
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                The MaxR Advantage
              </h2>
              <p style={{ color: '#3F5565', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                MaxR specializes in helping businesses automate operations, modernize digital infrastructure, and scale growth through intelligent technology.
              </p>
              <p style={{ color: '#3F5565', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Whether it's replacing manual workflows with 24/7 intelligent systems or providing strategic business consultation to unlock 5X growth within 6 months, we bring rapid onboarding, bank-grade infrastructure, and enterprise scalability.
              </p>

              <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #E1E8E5', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>&lt; 7 Days</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Rapid Onboarding</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>99.9%</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Availability SLA</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>5X</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Target Client Growth</div>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pillars.map((p, idx) => (
                <div key={idx} style={{ background: '#FAFBFB', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E1E8E5' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#080607', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#00bba7" /> {p.title}
                  </h3>
                  <p style={{ color: '#3F5565', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00bba7', fontWeight: 800 }}>
                EXECUTIVE LEADERSHIP
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
              Meet the Leadership Team
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {leadership.map((leader, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E1E8E5',
                  padding: '2.5rem',
                  boxShadow: '0 8px 24px rgba(8, 6, 7, 0.03)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#080607', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {leader.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f766e' }}>
                      Executive Leadership
                    </span>
                  </div>
                  <span style={{ background: '#F5F8F7', color: '#080607', border: '1px solid #E1E8E5', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                    {leader.entity}
                  </span>
                </div>

                <p style={{ color: '#3F5565', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {leader.bio}
                </p>

                <div style={{ borderTop: '1px solid #E1E8E5', paddingTop: '1rem', fontSize: '0.825rem', color: '#64748b' }}>
                  <strong style={{ color: '#080607' }}>Key Focus:</strong> {leader.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Headquarters & Presence (Clean Light MNC Card) */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '16px', 
            padding: 'clamp(2.5rem, 5vw, 3.5rem) 2rem', 
            border: '1px solid #E1E8E5',
            boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00bba7', fontWeight: 800 }}>
              GLOBAL HEADQUARTERS
            </span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
              fontWeight: 900, 
              color: '#080607',
              margin: '0 0 1.5rem 0',
              letterSpacing: '-0.035em',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Dubai, United Arab Emirates
          </h2>

          <div style={{ maxWidth: '640px', margin: '0 auto', background: '#F5F8F7', borderRadius: '12px', padding: '2rem', border: '1px solid #E1E8E5' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '12px', background: 'rgba(0, 187, 167, 0.12)', marginBottom: '1rem' }}>
              <MapPin size={24} color="#00bba7" />
            </div>
            <p style={{ color: '#0f766e', fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              MaxR Technologies FZ · Middle East & Global Operations
            </p>
            <p style={{ color: '#3F5565', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Serving enterprises across Dubai, the UAE, and international markets with scalable AI engineering and operational growth advisory.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: '#080607', fontWeight: 600 }}>
              <Mail size={15} color="#00bba7" />
              <span>Contact: <strong>contact@maxr.ae</strong></span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <button 
              onClick={onOpenContact} 
              style={{ 
                background: '#00bba7', 
                color: '#080607', 
                fontWeight: 800, 
                padding: '0.85rem 2rem', 
                fontSize: '0.95rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(0, 187, 167, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.35)';
              }}
            >
              <span>Contact Our Team</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
