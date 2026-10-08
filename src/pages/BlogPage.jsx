import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Calendar, 
  User, 
  Tag, 
  Sparkles, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  TrendingUp, 
  Layers,
  ChevronRight
} from 'lucide-react';

export default function BlogPage({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Automation', 'Voice Systems', 'Enterprise Architecture', 'Dubai Tech'];

  const articles = [
    {
      id: 'enterprise-ai-2026',
      title: 'The 2026 Enterprise AI Blueprint: Moving Beyond LLM Wrappers to Autonomous Systems',
      slug: 'enterprise-ai-blueprint',
      category: 'AI Automation',
      readTime: '6 min read',
      date: 'October 2026',
      author: 'Shagul Hamithu',
      authorRole: 'Founder & CEO',
      excerpt: 'Why superficial chatbot wrappers fail in real operations, and how multi-agent architectures and deterministic workflow pipelines unlock actual enterprise ROI.',
      tags: ['Autonomous Agents', 'Enterprise Architecture', 'AI Strategy'],
      featured: true
    },
    {
      id: 'voice-agents-production',
      title: 'Voice AI Agents in Production: Lessons from High-Volume UAE Operations',
      slug: 'voice-ai-agents-production-uae',
      category: 'Voice Systems',
      readTime: '5 min read',
      date: 'September 2026',
      author: 'Gopi Duraisamy',
      authorRole: 'Co-Founder & CTO',
      excerpt: 'Achieving sub-second response latency in multilingual voice pipelines. Best practices for telephony integration, CRM sync, and fallback human handoff.',
      tags: ['Voice AI', 'Telephony', 'Latency Optimization']
    },
    {
      id: 'dubai-tech-capital',
      title: 'Why Dubai is Becoming the Global Capital for Autonomous Enterprise Technology',
      slug: 'dubai-autonomous-tech-hub',
      category: 'Dubai Tech',
      readTime: '4 min read',
      date: 'September 2026',
      author: 'MaxR Research Team',
      authorRole: 'Strategic Insights',
      excerpt: 'An analysis of regulatory agility, business infrastructure, and the influx of global enterprises driving automated operating models in the UAE.',
      tags: ['Dubai Hub', 'UAE Business', 'Digital Economy']
    },
    {
      id: 'modernizing-legacy-monoliths',
      title: 'Modernizing Legacy Monoliths: Microservices and Event-Driven Pipelines',
      slug: 'modernizing-legacy-monoliths',
      category: 'Enterprise Architecture',
      readTime: '7 min read',
      date: 'August 2026',
      author: 'Gopi Duraisamy',
      authorRole: 'Co-Founder & CTO',
      excerpt: 'How growing companies can transition from fragile legacy databases to decoupled event architectures without interrupting daily revenue operations.',
      tags: ['Cloud Systems', 'Microservices', 'Engineering']
    },
    {
      id: 'workflow-automation-roi',
      title: 'ROI of Workflow Automation: Eliminating 40+ Operational Hours Per Team Weekly',
      slug: 'workflow-automation-roi-metrics',
      category: 'AI Automation',
      readTime: '5 min read',
      date: 'August 2026',
      author: 'Shagul Hamithu',
      authorRole: 'Founder & CEO',
      excerpt: 'Case metrics, audit frameworks, and financial models for calculating the payback period of automated customer onboarding and lead qualification.',
      tags: ['ROI', 'Process Audit', 'Operations']
    },
    {
      id: 'uae-data-governance-ai',
      title: 'Data Governance and Compliance in UAE Enterprise AI Deployments',
      slug: 'uae-data-governance-ai-security',
      category: 'Dubai Tech',
      readTime: '6 min read',
      date: 'July 2026',
      author: 'MaxR Security & Governance',
      authorRole: 'Enterprise Standards',
      excerpt: 'Navigating UAE federal data protection laws, localized cloud residency requirements, and SOC2-grade security when deploying enterprise LLMs.',
      tags: ['Data Privacy', 'Compliance', 'Security']
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="blog-page" style={{ padding: '2rem 0 5rem', background: '#F5F8F7' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
              Tech Insights & Perspectives
            </span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, color: '#080607', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Engineering Perspectives for the Modern Enterprise
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#556575', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Practical insights on enterprise AI automation, high-performance web systems, cloud architectures, and scalable digital operations from the MaxR engineering team in Dubai.
          </p>
        </div>

        {/* ── Category Filter Pills ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: activeCategory === cat ? '1px solid #00bba7' : '1px solid #E1E8E5',
                background: activeCategory === cat ? '#00bba7' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : '#556575',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(0, 187, 167, 0.25)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured Article (when viewing All) ── */}
        {activeCategory === 'All' && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E1E8E5',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(8, 6, 7, 0.03)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
              }}
            >
              <div style={{ padding: 'clamp(2.5rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ background: '#ECFDF5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, border: '1px solid #A7F3D0' }}>
                      FEATURED INSIGHT
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#556575', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} /> {articles[0].readTime}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#556575' }}>
                      {articles[0].date}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#080607', lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {articles[0].title}
                  </h2>

                  <p style={{ color: '#556575', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {articles[0].excerpt}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(0,187,167,0.1)', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', border: '1px solid rgba(0,187,167,0.2)' }}>
                      SH
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#080607', fontSize: '0.9rem' }}>{articles[0].author}</div>
                      <div style={{ fontSize: '0.78rem', color: '#556575' }}>{articles[0].authorRole}</div>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenContact}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(0,187,167,0.25)'
                    }}
                  >
                    <span>Read Article & Architecture Notes</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div style={{ background: '#F5F8F7', padding: 'clamp(2.5rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid #E1E8E5' }}>
                <div style={{ marginBottom: '1.25rem', display: 'flex', gap: '8px' }}>
                  <Sparkles size={26} color="#00bba7" />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.35rem', fontWeight: 800, color: '#080607', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  Executive Takeaway
                </h3>
                <p style={{ color: '#556575', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Companies that treat AI as point-tool toys will see marginal gains. Leaders who rebuild their core operational workflows with autonomous agents, verified data connectors, and strict validation guardrails achieve compounding competitive margins.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {articles[0].tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ background: '#FFFFFF', color: '#556575', border: '1px solid #E1E8E5', padding: '6px 14px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Articles Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E1E8E5',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 30px rgba(8, 6, 7, 0.03)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.boxShadow = '0 16px 30px rgba(0, 187, 167, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E1E8E5';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(8, 6, 7, 0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ background: '#ECFDF5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid #A7F3D0' }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#556575', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {article.readTime}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#080607', lineHeight: 1.35, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
                  {article.title}
                </h3>

                <p style={{ color: '#556575', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {article.tags.map((t, idx) => (
                    <span key={idx} style={{ background: '#F5F8F7', color: '#556575', border: '1px solid #E1E8E5', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600 }}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #E1E8E5', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#080607' }}>{article.author}</div>
                    <div style={{ fontSize: '0.75rem', color: '#556575' }}>{article.date}</div>
                  </div>
                  
                  <button
                    onClick={onOpenContact}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00bba7',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>Read More</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Executive Pre-Footer Callout ── */}
        <div style={{ 
          marginTop: '5rem', 
          background: '#FFFFFF', 
          borderRadius: '16px', 
          padding: 'clamp(2.5rem, 5vw, 4rem) 2rem', 
          textAlign: 'center', 
          border: '1px solid #E1E8E5', 
          boxShadow: '0 8px 30px rgba(8,6,7,0.04)' 
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
              Advisory & Strategy
            </span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#080607', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Have a Specific Engineering or AI Challenge?
          </h2>
          <p style={{ color: '#556575', maxWidth: '640px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Our senior technologists are available for strategic consultations. Let's discuss your enterprise requirements and outline a concrete execution roadmap.
          </p>
          <button 
            onClick={onOpenContact} 
            className="btn-primary" 
            style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)', 
              color: '#ffffff', 
              fontWeight: 700, 
              padding: '0.9rem 2.2rem', 
              fontSize: '0.95rem', 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 16px rgba(0,187,167,0.25)',
              cursor: 'pointer', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px' 
            }}
          >
            <span>Request Technical Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
