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
    <div className="blog-page" style={{ padding: '2rem 0 5rem', background: '#f8fafc' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
            TECH INSIGHTS & THOUGHT LEADERSHIP
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Engineering Perspectives for the Modern Enterprise
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
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
                borderRadius: '999px',
                border: activeCategory === cat ? '1px solid #00bba7' : '1px solid #e2e8f0',
                background: activeCategory === cat ? '#00bba7' : '#ffffff',
                color: activeCategory === cat ? '#040811' : '#475569',
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

        {/* ── Featured Article (when viewing All or AI Automation) ── */}
        {activeCategory === 'All' && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                transition: 'border-color 0.2s'
              }}
            >
              <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(0, 187, 167, 0.1)', color: '#00bba7', padding: '4px 12px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                      FEATURED INSIGHT
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} /> {articles[0].readTime}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {articles[0].date}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0a1428', lineHeight: 1.25, marginBottom: '1rem' }}>
                    {articles[0].title}
                  </h2>

                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {articles[0].excerpt}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#0a1428', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem' }}>
                      SH
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a1428', fontSize: '0.9rem' }}>{articles[0].author}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{articles[0].authorRole}</div>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenContact}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#0a1428',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '12px 24px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#00bba7'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#0a1428'}
                  >
                    <span>Read Article & Architecture Notes</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #0a1428 0%, #0f2744 100%)', padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ffffff', borderLeft: '1px solid #f1f5f9' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px' }}>
                  <Sparkles size={28} color="#00bba7" />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Executive Takeaway
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Companies that treat AI as point-tool toys will see marginal gains. Leaders who rebuild their core operational workflows with autonomous agents, verified data connectors, and strict validation guardrails achieve compounding competitive margins.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {articles[0].tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ background: 'rgba(255,255,255,0.08)', color: '#94a3b8', padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600 }}>
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
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 15px rgba(15, 23, 42, 0.03)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.boxShadow = '0 16px 30px rgba(0, 187, 167, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 23, 42, 0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ background: '#f1f5f9', color: '#0a1428', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {article.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.35, marginBottom: '0.85rem' }}>
                  {article.title}
                </h3>

                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {article.tags.map((t, idx) => (
                    <span key={idx} style={{ background: '#f8fafc', color: '#64748b', border: '1px solid #f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600 }}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0a1428' }}>{article.author}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{article.date}</div>
                  </div>
                  
                  <button
                    onClick={onOpenContact}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00bba7',
                      fontWeight: 700,
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

        {/* ── Consultation Banner ── */}
        <div style={{ marginTop: '5rem', background: '#0a1428', borderRadius: '24px', padding: '3.5rem 2.5rem', textAlign: 'center', border: '1px solid rgba(0,187,167,0.3)', color: '#ffffff' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Have a Specific Engineering or AI Challenge?
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '640px', margin: '0 auto 1.75rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Our senior technologists are available for strategic consultations. Let's discuss your enterprise requirements and outline a concrete execution roadmap.
          </p>
          <button 
            onClick={onOpenContact} 
            className="btn-primary" 
            style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.9rem 2.2rem', fontSize: '1rem', borderRadius: '999px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Request Technical Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
