import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Mail, Users, Sparkles, Target, ShieldCheck } from 'lucide-react';

export default function CareersPage({ onOpenContact }) {
  return (
    <div style={{ background: '#FFFFFF', color: '#080607', minHeight: '100vh' }}>
      
      {/* ── CAREERS AT MAXR HERO BANNER ── */}
      <section 
        style={{ 
          background: 'linear-gradient(135deg, #080607 0%, #0F171B 50%, #080607 100%)',
          color: '#FFFFFF',
          padding: 'clamp(5rem, 8vw, 7.5rem) 0 clamp(4rem, 6vw, 5.5rem)',
          borderBottom: '1px solid #1E293B',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Glow Orbs */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-10%', 
            width: '550px', 
            height: '550px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(0, 187, 167, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none' 
          }} 
        />
        <div 
          style={{ 
            position: 'absolute', 
            bottom: '-25%', 
            left: '-10%', 
            width: '450px', 
            height: '450px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(84, 207, 176, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none' 
          }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '840px', marginBottom: '3rem' }}>
            {/* Live Status Pill */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(0, 187, 167, 0.1)',
                border: '1px solid rgba(0, 187, 167, 0.3)',
                marginBottom: '1.25rem' 
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00bba7', boxShadow: '0 0 10px #00bba7' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#54CFB0' }}>
                CAREERS AT MAXR • GLOBAL HUBS
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.6rem, 5vw, 4rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.035em', 
                lineHeight: 1.1, 
                color: '#FFFFFF', 
                margin: '0 0 1.25rem 0',
                fontFamily: "'Space Grotesk', -apple-system, sans-serif"
              }}
            >
              Careers at MaxR.
            </h1>

            <p 
              style={{ 
                fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)', 
                color: '#54CFB0', 
                fontWeight: 700, 
                margin: '0 0 1.25rem 0',
                lineHeight: 1.35
              }}
            >
              Build the Future of Enterprise AI, Voice Agents & High-Performance Software.
            </p>

            <p 
              style={{ 
                fontSize: 'clamp(0.975rem, 1.2vw, 1.1rem)', 
                color: 'rgba(255, 255, 255, 0.75)', 
                lineHeight: 1.65, 
                margin: '0 0 2rem 0', 
                maxWidth: '680px' 
              }}
            >
              Join our engineering and strategy team across Dubai Headquarters and our Chennai Deep Tech Hub. We work with ambitious founders and multinational businesses to build, automate, and scale next-generation digital intelligence.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('openings');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: '#00bba7',
                  color: '#080607',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 6px 20px rgba(0, 187, 167, 0.35)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 26px rgba(0, 187, 167, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.35)';
                }}
              >
                <span>View Open Opportunities</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="mailto:careers@maxr.ae"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = '#00bba7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <Mail size={16} color="#00bba7" />
                <span>Send Open CV (careers@maxr.ae)</span>
              </a>
            </div>
          </div>

          {/* 4 Hero Highlight Perks */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '2.5rem'
            }}
          >
            {[
              {
                title: "Rapid Deployment Culture",
                desc: "< 7 days turnaround. Zero endless slide decks — we build real working software."
              },
              {
                title: "Dual Commercial & Tech Hubs",
                desc: "Dubai HQ commercial presence with deep R&D engineering in Chennai, India."
              },
              {
                title: "Next-Gen AI & Voice Stack",
                desc: "Realtime speech pipelines, autonomous agent workflows & modern cloud."
              },
              {
                title: "High Autonomy & Direct Access",
                desc: "Work directly alongside founders and lead architects with high ownership."
              }
            ].map((perk, pIdx) => (
              <div 
                key={pIdx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.background = 'rgba(0, 187, 167, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: '#00bba7', fontSize: '0.875rem', fontWeight: 800, marginBottom: '6px' }}>
                  {perk.title}
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.825rem', lineHeight: 1.5 }}>
                  {perk.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Culture & Values ── */}
      <section style={{ padding: 'clamp(4rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #E1E8E5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f766e' }}>
              OUR VALUES
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#080607', marginTop: '0.5rem' }}>
              What Drives Our Team
            </h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {[
              {
                icon: Target,
                title: "Excellence First",
                desc: "We prioritize precision, architecture that scales, and measurable business impact over short-term shortcuts."
              },
              {
                icon: Sparkles,
                title: "Innovation in Practice",
                desc: "We explore bleeding-edge AI models, autonomous agents, and modern cloud patterns to solve real corporate problems."
              },
              {
                icon: Users,
                title: "Global Collaboration",
                desc: "Our multicultural engineers and domain specialists work seamlessly across UAE, Saudi Arabia, and international hubs."
              }
            ].map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  style={{ 
                    background: '#F5F8F7', 
                    border: '1px solid #E1E8E5', 
                    borderRadius: '12px', 
                    padding: '2rem',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#54CFB0';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E1E8E5';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    style={{ 
                      width: '44px', 
                      height: '44px', 
                      borderRadius: '8px', 
                      background: '#FFFFFF', 
                      border: '1px solid #E1E8E5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#080607',
                      marginBottom: '1.25rem' 
                    }}
                  >
                    <IconComp size={22} color="#0f766e" />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#080607', marginBottom: '0.65rem' }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Current Openings (No Active Openings State) ── */}
      <section id="openings" style={{ padding: 'clamp(4.5rem, 7vw, 6.5rem) 0', background: '#FAFCFB' }}>
        <div className="container">
          <div 
            style={{ 
              maxWidth: '720px', 
              margin: '0 auto', 
              textAlign: 'center', 
              background: '#FFFFFF', 
              border: '1.5px solid #E1E8E5', 
              borderRadius: '16px', 
              padding: 'clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)',
              boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)'
            }}
          >
            <div 
              style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                background: '#e6f9f4', 
                border: '1.5px solid #54CFB0', 
                color: '#0f766e', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1.5rem auto' 
              }}
            >
              <Briefcase size={28} />
            </div>

            <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#080607', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              Currently No Active Openings
            </h2>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, maxWidth: '520px', margin: '0 auto 2rem auto' }}>
              We do not have open vacancies at this time. However, we are always eager to connect with exceptional engineers, architects, and designers for future opportunities.
            </p>

            <div 
              style={{ 
                background: '#F5F8F7', 
                border: '1px solid #E1E8E5', 
                borderRadius: '10px', 
                padding: '1.25rem 1.75rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '2rem'
              }}
            >
              <Mail size={20} color="#0f766e" />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', display: 'block' }}>
                  Send your CV to our talent team:
                </span>
                <a 
                  href="mailto:careers@maxr.ae" 
                  style={{ fontSize: '1rem', fontWeight: 800, color: '#080607', textDecoration: 'none' }}
                >
                  careers@maxr.ae
                </a>
              </div>
            </div>

            <div>
              <Link
                to="/"
                style={{
                  background: '#080607',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
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
                <span>Return to Homepage</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
