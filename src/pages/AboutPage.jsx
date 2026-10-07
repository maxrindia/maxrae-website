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
      name: "Shagul Hamithu",
      role: "Founder & CEO",
      bio: "Visionary in AI transformation, business growth, and digital infrastructure. Shagul focuses on modernizing business operations to make intelligent technology practical, scalable, and immediately accessible for growing companies.",
      focus: "AI Transformation & Business Growth Strategy",
      entity: "MaxR Technologies"
    },
    {
      name: "Gopi Duraisamy",
      role: "Co-Founder & CTO",
      bio: "Leads MaxR's technology strategy, product development, and the engineering of scalable automation systems. Gopi specializes in conversational voice pipelines, automated workflow engines, and bank-grade infrastructure.",
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
    <div className="about-page" style={{ padding: '4rem 0 6rem', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
            WHO WE ARE
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Transforming Operations Through Intelligent Technology
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
            MaxR Technologies is an AI transformation and business growth company helping enterprises automate operations and scale with confidence.
          </p>
        </div>

        {/* Story Section */}
        <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00bba7', textTransform: 'uppercase' }}>
                Our Mission & Vision
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0a1428', marginTop: '0.25rem', marginBottom: '1.25rem' }}>
                The MaxR Advantage
              </h2>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                MaxR specializes in helping businesses automate operations, modernize digital infrastructure, and scale growth through intelligent technology.
              </p>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Whether it's replacing manual busywork with 24/7 AI voice agents or providing strategic business consultation to unlock 5X growth within 6 months, we bring rapid onboarding, bank-grade infrastructure, and enterprise scalability.
              </p>

              <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00bba7' }}>&lt; 7 Days</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Rapid Onboarding</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00bba7' }}>99.9%</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Availability SLA</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00bba7' }}>145%</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Client Growth</div>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pillars.map((p, idx) => (
                <div key={idx} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a1428', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#00bba7" /> {p.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              EXECUTIVE LEADERSHIP
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0a1428', marginTop: '0.25rem' }}>
              Meet the Leadership Team
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {leadership.map((leader, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  padding: '2.5rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                      {leader.name}
                    </h3>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00bba7' }}>
                      {leader.role}
                    </span>
                  </div>
                  <span style={{ background: '#ecfdf5', color: '#065f46', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    {leader.entity}
                  </span>
                </div>

                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {leader.bio}
                </p>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
                  <strong>Key Focus:</strong> {leader.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Headquarters & Presence */}
        <div style={{ background: '#0a1428', borderRadius: '20px', padding: '3.5rem 2.5rem', color: '#ffffff' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              LOCATIONS
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.25rem' }}>
              MaxR Technologies
            </h2>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto', background: '#0f1d38', borderRadius: '16px', padding: '2.5rem', border: '1px solid rgba(0,187,167,0.3)', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: '12px', background: 'rgba(0,187,167,0.15)', marginBottom: '1rem' }}>
              <MapPin size={26} color="#00bba7" />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Dubai, United Arab Emirates
            </h3>
            <p style={{ color: '#2dd4bf', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
              MaxR Technologies FZ · Middle East & GCC Operations
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Serving businesses across Dubai, the UAE, and global markets with tailored AI automation, conversational voice bots, and business growth consultation.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <Mail size={15} color="#00bba7" />
              <span>Contact: <strong>contact@maxr.ae</strong></span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary" 
              style={{ background: '#00bba7', color: '#040811', fontWeight: 700 }}
            >
              Contact Our Team
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
