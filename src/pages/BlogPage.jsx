import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Calendar, 
  User, 
  Tag, 
  Sparkles, 
  Search,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { blogPosts } from '../data/blogData.js';

export default function BlogPage({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI Automation', 'Voice Systems', 'Enterprise Architecture', 'Web Engineering', 'Regional Tech'];

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

  return (
    <div className="blog-page" style={{ padding: '2rem 0 5rem', background: '#F5F8F7' }}>
      <div className="container">

        {/* ── Page Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
              Tech Insights & Architecture Notes
            </span>
          </div>

          <h1 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, color: '#080607', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Engineering Perspectives for Modern Businesses
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#556575', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 2rem' }}>
            Practical insights on enterprise AI automation, high-performance web systems, telephony pipelines, and scalable digital operations from the MaxR engineering team.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic, keyword, or technology..."
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: '10px',
                border: '1.5px solid #E1E8E5',
                background: '#FFFFFF',
                fontSize: '0.9rem',
                color: '#080607',
                outline: 'none',
                boxShadow: '0 2px 10px rgba(8,6,7,0.03)'
              }}
            />
          </div>
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

        {/* ── Featured Article Showcase (Shown when viewing All and no search) ── */}
        {activeCategory === 'All' && searchQuery.trim() === '' && featuredArticle && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E1E8E5',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))'
              }}
            >
              <div style={{ padding: 'clamp(2.5rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ background: '#ECFDF5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800, border: '1px solid #A7F3D0' }}>
                      FEATURED INSIGHT
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#556575', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} /> {featuredArticle.readTime}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#556575' }}>
                      {featuredArticle.date}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#080607', lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {featuredArticle.title}
                  </h2>

                  <p style={{ color: '#556575', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(0,187,167,0.1)', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', border: '1px solid rgba(0,187,167,0.2)' }}>
                      {featuredArticle.authorAvatar || 'MR'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#080607', fontSize: '0.9rem' }}>{featuredArticle.author}</div>
                      <div style={{ fontSize: '0.78rem', color: '#556575' }}>{featuredArticle.authorRole}</div>
                    </div>
                  </div>

                  <Link 
                    to={`/blog/${featuredArticle.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontWeight: 750,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(0,187,167,0.25)'
                    }}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Cover Image + Executive Takeaway */}
              <div style={{ background: '#F5F8F7', borderLeft: '1px solid #E1E8E5', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} color="#00bba7" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00bba7' }}>
                      KEY TAKEAWAY
                    </span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {featuredArticle.takeaway}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {featuredArticle.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{ background: '#FFFFFF', color: '#556575', border: '1px solid #E1E8E5', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600 }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Articles Grid: ALL BLOG DETAILS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E1E8E5',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(8, 6, 7, 0.03)',
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
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(8, 6, 7, 0.03)';
              }}
            >
              <div>
                {/* Article Card Image */}
                <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid #A7F3D0' }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.75rem 1.75rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {article.readTime}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      {article.date}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#080607', lineHeight: 1.35, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
                    {article.title}
                  </h3>

                  <p style={{ color: '#556575', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                    {article.tags.map((t, idx) => (
                      <span key={idx} style={{ background: '#F5F8F7', color: '#64748b', border: '1px solid #E1E8E5', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600 }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ padding: '1rem 1.75rem 1.5rem', borderTop: '1px solid #F1F5F4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,187,167,0.12)', color: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.72rem' }}>
                    {article.authorAvatar || 'MR'}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#080607' }}>{article.author}</div>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${article.slug}`}
                  style={{
                    color: '#00bba7',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <span>Read Full Article</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* ── Empty State ── */}
        {filteredArticles.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E1E8E5', marginTop: '2rem' }}>
            <BookOpen size={40} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem' }}>No articles match your search</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Try searching with a different term or clear the filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              style={{
                background: '#00bba7',
                color: '#080607',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '8px',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── Bottom Callout Banner ── */}
        <div style={{ 
          marginTop: '5rem', 
          background: '#080607', 
          color: '#FFFFFF',
          borderRadius: '16px', 
          padding: 'clamp(2.5rem, 5vw, 4rem) 2rem', 
          textAlign: 'center', 
          border: '1px solid #222', 
          boxShadow: '0 8px 30px rgba(8,6,7,0.12)' 
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
              TALK TO OUR ENGINEERS
            </span>
          </div>

          <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Have a Specific Engineering or AI Challenge?
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.78)', maxWidth: '640px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Our technologists are available to review your operational requirements and outline a concrete execution roadmap.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{ 
                background: '#00bba7', 
                color: '#080607', 
                fontWeight: 800, 
                padding: '0.9rem 2.2rem', 
                fontSize: '0.95rem', 
                borderRadius: '8px', 
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0,187,167,0.3)',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}
            >
              <span>Book a Free Call →</span>
            </Link>

            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: '#25D366', 
                color: '#FFFFFF', 
                fontWeight: 800, 
                padding: '0.9rem 2.2rem', 
                fontSize: '0.95rem', 
                borderRadius: '8px', 
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
