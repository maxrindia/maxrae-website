import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Mail, Users, Sparkles, Target, ShieldCheck } from 'lucide-react';

export default function CareersPage({ onOpenContact }) {
  return (
    <div style={{ background: '#FFFFFF', color: '#080607', minHeight: '100vh' }}>
      
      {/* ── Hero Banner ── */}
      <section 
        style={{ 
          background: 'linear-gradient(135deg, #080607 0%, #0F171B 100%)',
          color: '#FFFFFF',
          padding: 'clamp(5rem, 8vw, 7.5rem) 0 clamp(3.5rem, 6vw, 5rem)',
          borderBottom: '1px solid #1E293B',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-10%', 
            width: '500px', 
            height: '500px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(84, 207, 176, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none' 
          }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0' }}>
                CAREERS AT MAXR
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
                fontWeight: 800, 
                letterSpacing: '-0.03em', 
                lineHeight: 1.15, 
                color: '#FFFFFF', 
                margin: '0 0 1.25rem 0' 
              }}
            >
              Build the Future of Digital & AI.
            </h1>

            <p 
              style={{ 
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', 
                color: 'rgba(255, 255, 255, 0.8)', 
                lineHeight: 1.65, 
                margin: 0, 
                maxWidth: '640px' 
              }}
            >
              We bring together technologists, product architects, and creative strategists to solve complex business challenges across the Middle East and globally.
            </p>
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
                desc: "Our multicultural engineers and domain consultants work seamlessly across UAE, Saudi Arabia, and international hubs."
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
      <section style={{ padding: 'clamp(4.5rem, 7vw, 6.5rem) 0', background: '#FAFCFB' }}>
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
