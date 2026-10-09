import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { blogPosts } from '../data/blogData.js';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 
    'AI Automation', 
    'Voice Systems', 
    'Enterprise Architecture', 
    'Web Engineering', 
    'Regional Tech'
  ];

  // Filter articles based on active category & search query
  const filteredArticles = blogPosts.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogPosts.find(a => a.featured) || blogPosts[0];
  // Grid articles (exclude the featured one if viewing All and no search, or list all)
  const displayArticles = (activeCategory === 'All' && !searchQuery.trim()) 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id)
    : filteredArticles;

  return (
    <div className="blog-page" style={{ padding: '3.5rem 0 6rem', background: '#FFFFFF', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1240px' }}>

        {/* ═════════════════════════════════════════════════════════════════════
            1. FEATURED ARTICLE SECTION (Google Antigravity Developer Blog Style)
            ═════════════════════════════════════════════ */}
        {activeCategory === 'All' && !searchQuery.trim() && featuredArticle && (
          <div className="blog-featured-grid">
            
            {/* Left Column: Featured Title + Meta + Pill Button */}
            <div>
              <h1 style={{ 
                fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', 
                fontWeight: 800, 
                color: '#080607', 
                letterSpacing: '-0.035em', 
                lineHeight: 1.05, 
                margin: '0 0 1.25rem 0' 
              }}>
                Featured
              </h1>

              <Link 
                to={`/blog/${featuredArticle.slug}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <h2 style={{ 
                  fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
                  fontSize: 'clamp(1.5rem, 2.4vw, 2.2rem)', 
                  fontWeight: 750, 
                  color: '#0F172A', 
                  lineHeight: 1.25, 
                  letterSpacing: '-0.02em', 
                  margin: '0 0 1.25rem 0',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                >
                  {featuredArticle.title}
                </h2>
              </Link>

              {/* Meta row: Date - Read time [Category] */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                flexWrap: 'wrap', 
                marginBottom: '1.75rem', 
                fontSize: '0.85rem', 
                color: '#64748B' 
              }}>
                <span>{featuredArticle.date}</span>
                <span>-</span>
                <span>{featuredArticle.readTime}</span>
                <span style={{ 
                  background: '#F1F5F9', 
                  color: '#475569', 
                  padding: '3px 10px', 
                  borderRadius: '999px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  letterSpacing: '0.01em'
                }}>
                  {featuredArticle.category}
                </span>
              </div>

              {/* Read blog Pill Button */}
              <div>
                <Link 
                  to={`/blog/${featuredArticle.slug}`} 
                  className="blog-pill-btn"
                >
                  Read blog
                </Link>
              </div>
            </div>

            {/* Right Column: 16:9 MaxR Dark Tech Featured Card */}
            <div>
              <Link 
                to={`/blog/${featuredArticle.slug}`}
                style={{ 
                  display: 'block', 
                  textDecoration: 'none', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  position: 'relative', 
                  aspectRatio: '16 / 9', 
                  background: '#080607', 
                  boxShadow: '0 12px 36px rgba(8, 6, 7, 0.12)', 
                  border: '1px solid #1E293B',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 187, 167, 0.16)';
                  e.currentTarget.style.borderColor = 'rgba(0, 187, 167, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(8, 6, 7, 0.12)';
                  e.currentTarget.style.borderColor = '#1E293B';
                }}
              >
                {/* Background image with cinematic dark overlay */}
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.38,
                    filter: 'grayscale(20%)'
                  }} 
                />

                {/* Glowing cyber gradient aura */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 65% 45%, rgba(0, 187, 167, 0.25) 0%, rgba(8, 6, 7, 0.85) 75%)',
                  pointerEvents: 'none'
                }} />

                {/* Center MaxR Branding and Visual */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  textAlign: 'center',
                  zIndex: 2
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <img 
                      src="/assets/maxr-logo.png" 
                      alt="maxr." 
                      style={{ 
                        height: '38px', 
                        width: 'auto',
                        filter: 'brightness(0) invert(1)' 
                      }} 
                    />
                    <span style={{ 
                      fontFamily: "'Space Grotesk', sans-serif", 
                      fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', 
                      fontWeight: 700, 
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em'
                    }}>
                      Research & Architecture
                    </span>
                  </div>

                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 650, 
                    color: '#54CFB0', 
                    letterSpacing: '0.08em', 
                    textTransform: 'uppercase' 
                  }}>
                    Autonomous Enterprise Engineering
                  </span>
                </div>
              </Link>
            </div>

          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            2. HORIZONTAL CATEGORY TABS + RSS FEED / SEARCH BAR
            ═════════════════════════════════════════════ */}
        <div style={{ 
          borderBottom: '1px solid #E2E8F0', 
          marginBottom: '3rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Category Tabs */}
          <div className="blog-tabs-nav">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`blog-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right utility: Minimal search + RSS Feed */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '8px' }}>
            {/* Quick Filter Search */}
            <div style={{ position: 'relative', width: '200px' }}>
              <Search 
                size={14} 
                color="#94A3B8" 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                style={{
                  width: '100%',
                  padding: '5px 10px 5px 30px',
                  borderRadius: '999px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  fontSize: '0.8rem',
                  outline: 'none',
                  color: '#080607',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* RSS Feed Icon Button */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '0.825rem', 
                color: '#64748B', 
                fontWeight: 600, 
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#080607'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              title="RSS Feed"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
              <span>RSS Feed</span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            3. TWO-COLUMN ARTICLES GRID (Clean Text on Left, Square Thumb on Right)
            ═════════════════════════════════════════════ */}
        <div className="blog-articles-grid">
          {displayArticles.map((article) => (
            <div key={article.id} className="blog-item-card">
              
              {/* Left Content Column */}
              <div style={{ flex: 1, minWidth: 0, paddingRight: '0.5rem' }}>
                <Link 
                  to={`/blog/${article.slug}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h3 style={{ 
                    fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
                    fontSize: '1.15rem', 
                    fontWeight: 750, 
                    color: '#0F172A', 
                    lineHeight: 1.35, 
                    margin: '0 0 0.75rem 0', 
                    letterSpacing: '-0.015em',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00bba7'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                  >
                    {article.title}
                  </h3>
                </Link>

                {/* Meta line: Date - Read time [Category] */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  flexWrap: 'wrap', 
                  marginBottom: '1.25rem', 
                  fontSize: '0.8rem', 
                  color: '#64748B' 
                }}>
                  <span>{article.date}</span>
                  <span>-</span>
                  <span>{article.readTime}</span>
                  <span style={{ 
                    background: '#F1F5F9', 
                    color: '#475569', 
                    padding: '2px 8px', 
                    borderRadius: '999px', 
                    fontSize: '0.72rem', 
                    fontWeight: 600 
                  }}>
                    {article.category}
                  </span>
                </div>

                {/* Read blog Pill Button */}
                <div>
                  <Link 
                    to={`/blog/${article.slug}`} 
                    className="blog-pill-btn"
                  >
                    Read blog
                  </Link>
                </div>
              </div>

              {/* Right Square/Squircle Thumbnail */}
              <Link 
                to={`/blog/${article.slug}`}
                className="blog-thumb-wrap"
                style={{ 
                  display: 'block', 
                  flexShrink: 0, 
                  width: '135px', 
                  height: '135px', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid #E2E8F0', 
                  background: '#080607',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  position: 'relative'
                }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.3s ease' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </Link>

            </div>
          ))}
        </div>

        {/* ── Empty State ── */}
        {displayArticles.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '5rem 1rem', 
            background: '#F8FAFC', 
            borderRadius: '16px', 
            border: '1px solid #E2E8F0', 
            marginTop: '2rem' 
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem' }}>
              No articles found in this category
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Try searching with another keyword or select "All".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="blog-pill-btn"
              style={{ background: '#080607', color: '#FFFFFF', borderColor: '#080607' }}
            >
              Reset to All
            </button>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            4. COMPANY CALLOUT BANNER (MaxR Enterprise Tone)
            ═════════════════════════════════════════════ */}
        <div style={{ 
          marginTop: '6rem', 
          background: 'linear-gradient(135deg, #080607 0%, #0d1a18 100%)', 
          color: '#FFFFFF',
          borderRadius: '20px', 
          padding: 'clamp(2.5rem, 5vw, 4rem) 2.5rem', 
          textAlign: 'center', 
          border: '1px solid rgba(84, 207, 176, 0.18)', 
          boxShadow: '0 16px 40px rgba(8, 6, 7, 0.12)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 187, 167, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#54CFB0' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#54CFB0', fontFamily: "'Space Grotesk', sans-serif" }}>
              TALK TO OUR ARCHITECTS
            </span>
          </div>

          <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '0.85rem' }}>
            Have a Specific AI, Web or Automation Roadmap?
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '640px', margin: '0 auto 2.25rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Our engineering team is ready to analyze your technical requirements and deliver high-impact production solutions.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{ 
                background: '#00bba7', 
                color: '#080607', 
                fontWeight: 750, 
                padding: '0.85rem 2.2rem', 
                fontSize: '0.925rem', 
                borderRadius: '999px', 
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0,187,167,0.3)',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span>Book Architecture Call</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/97145648887"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: '#FFFFFF', 
                color: '#080607', 
                fontWeight: 750, 
                padding: '0.85rem 2rem', 
                fontSize: '0.925rem', 
                borderRadius: '999px', 
                textDecoration: 'none',
                border: '1px solid #E2E8F0',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <MessageCircle size={18} color="#25D366" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

