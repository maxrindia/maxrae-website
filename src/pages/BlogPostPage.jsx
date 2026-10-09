import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  MessageCircle,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { blogPosts } from '../data/blogData.js';

export default function BlogPostPage({ onOpenContact }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find post by slug or id
  const post = blogPosts.find(p => p.slug === slug || p.id === slug);

  // If not found, show not found screen
  if (!post) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F8F7', padding: '4rem 1rem' }}>
        <div style={{ background: '#FFFFFF', padding: '3.5rem 2.5rem', borderRadius: '16px', border: '1px solid #E1E8E5', textAlign: 'center', maxWidth: '520px', boxShadow: '0 8px 30px rgba(8,6,7,0.04)' }}>
          <BookOpen size={48} color="#00bba7" style={{ margin: '0 auto 1.5rem' }} />
          <h1 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.8rem', fontWeight: 900, color: '#080607', marginBottom: '0.75rem' }}>
            Article Not Found
          </h1>
          <p style={{ color: '#556575', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            The article you are looking for may have been moved or updated. Explore all our published engineering insights.
          </p>
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#00bba7',
              color: '#080607',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0, 187, 167, 0.3)'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="blog-post-page" style={{ background: '#FFFFFF', color: '#080607' }}>
      
      {/* ── Breadcrumb & Back Bar ── */}
      <div style={{ background: '#F5F8F7', borderBottom: '1px solid #E1E8E5', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Breadcrumb links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
              <ChevronRight size={14} />
              <Link to="/blog" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#00bba7', fontWeight: 700 }}>{post.category}</span>
            </div>

            {/* Back button */}
            <Link 
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#080607',
                fontSize: '0.85rem',
                fontWeight: 750,
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                background: '#FFFFFF',
                border: '1px solid #E1E8E5',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.color = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E1E8E5';
                e.currentTarget.style.color = '#080607';
              }}
            >
              <ArrowLeft size={14} />
              <span>All Articles</span>
            </Link>

          </div>
        </div>
      </div>

      {/* ── Article Header ── */}
      <header style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0 2rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          {/* Metadata Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span style={{ 
              background: '#ECFDF5', 
              color: '#047857', 
              padding: '5px 14px', 
              borderRadius: '999px', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              border: '1px solid #A7F3D0' 
            }}>
              {post.category}
            </span>

            <span style={{ fontSize: '0.825rem', color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} />
              <span>{post.readTime}</span>
            </span>

            <span style={{ fontSize: '0.825rem', color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} />
              <span>{post.date}</span>
            </span>
          </div>

          {/* Article Main Headline */}
          <h1 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(2.1rem, 4vw, 3.25rem)', 
              fontWeight: 900, 
              lineHeight: 1.15, 
              letterSpacing: '-0.035em', 
              color: '#080607', 
              marginBottom: '1.5rem' 
            }}
          >
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p 
            style={{ 
              fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)', 
              lineHeight: 1.65, 
              color: '#475569', 
              marginBottom: '2rem' 
            }}
          >
            {post.excerpt}
          </p>

          {/* Author Bar & Share */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid #E1E8E5' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{ 
                  width: 46, 
                  height: 46, 
                  borderRadius: '50%', 
                  background: 'rgba(0,187,167,0.12)', 
                  color: '#00bba7', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 900, 
                  fontSize: '0.95rem',
                  border: '1.5px solid rgba(0,187,167,0.25)'
                }}
              >
                {post.authorAvatar || 'MR'}
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#080607', fontSize: '0.95rem' }}>{post.author}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{post.authorRole}</div>
              </div>
            </div>

            {/* Share / Copy link button */}
            <button
              onClick={handleCopyLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: copied ? '#ECFDF5' : '#F5F8F7',
                color: copied ? '#047857' : '#080607',
                border: copied ? '1px solid #A7F3D0' : '1px solid #E1E8E5',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.825rem',
                fontWeight: 750,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Share2 size={15} />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

        </div>
      </header>

      {/* ── Hero Image ── */}
      <div className="container" style={{ maxWidth: '980px', marginBottom: '3.5rem' }}>
        <div 
          style={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            boxShadow: '0 12px 35px rgba(8,6,7,0.08)',
            border: '1px solid #E1E8E5',
            maxHeight: '520px'
          }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              maxHeight: '520px', 
              display: 'block' 
            }} 
          />
        </div>
      </div>

      {/* ── Article Content Body ── */}
      <article className="container" style={{ maxWidth: '820px', paddingBottom: '4rem' }}>
        
        {/* Executive Takeaway Callout Card */}
        {post.takeaway && (
          <div 
            style={{ 
              background: '#F5F8F7', 
              borderLeft: '4px solid #00bba7', 
              borderRadius: '0 12px 12px 0', 
              padding: '1.75rem 2rem', 
              marginBottom: '3rem',
              boxShadow: '0 4px 16px rgba(8,6,7,0.02)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
              <Sparkles size={18} color="#00bba7" />
              <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00bba7' }}>
                EXECUTIVE TAKEAWAY
              </span>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              {post.takeaway}
            </p>
          </div>
        )}

        {/* Content Sections */}
        {post.content && post.content.map((sec, idx) => (
          <div key={idx} style={{ marginBottom: '2.75rem' }}>
            <h2 
              style={{ 
                fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
                fontSize: 'clamp(1.4rem, 2.3vw, 1.85rem)', 
                fontWeight: 800, 
                color: '#080607', 
                letterSpacing: '-0.02em', 
                lineHeight: 1.25, 
                marginBottom: '1rem' 
              }}
            >
              {sec.heading}
            </h2>

            {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
              <p 
                key={pIdx} 
                style={{ 
                  fontSize: '1.05rem', 
                  color: '#334155', 
                  lineHeight: 1.8, 
                  marginBottom: '1.25rem' 
                }}
              >
                {p}
              </p>
            ))}

            {sec.bullets && (
              <div 
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E1E8E5', 
                  borderRadius: '12px', 
                  padding: '1.5rem 1.75rem', 
                  marginTop: '1.25rem',
                  boxShadow: '0 4px 14px rgba(8,6,7,0.02)'
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.975rem', color: '#334155', lineHeight: 1.6 }}>
                      <CheckCircle2 size={18} color="#00bba7" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Tags Strip */}
        <div style={{ borderTop: '1px solid #E1E8E5', paddingTop: '2rem', marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Tag size={15} /> Topics:
            </span>
            {post.tags && post.tags.map((t, tIdx) => (
              <span 
                key={tIdx} 
                style={{ 
                  background: '#F5F8F7', 
                  color: '#475569', 
                  border: '1px solid #E1E8E5', 
                  padding: '5px 14px', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem', 
                  fontWeight: 600 
                }}
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div 
          style={{ 
            marginTop: '3rem', 
            background: '#F5F8F7', 
            borderRadius: '16px', 
            border: '1px solid #E1E8E5', 
            padding: '2rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <div 
            style={{ 
              width: 56, 
              height: 56, 
              borderRadius: '50%', 
              background: '#00bba7', 
              color: '#080607', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: 900, 
              fontSize: '1.2rem',
              flexShrink: 0
            }}
          >
            {post.authorAvatar || 'MR'}
          </div>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#080607', marginBottom: '2px' }}>
              Written by {post.author}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '8px' }}>
              {post.authorRole} • MaxR Technologies
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
              Specialized in engineering enterprise AI workflows, autonomous telephony pipelines, and scalable cloud systems.
            </p>
          </div>
        </div>

      </article>

      {/* ── Mid-Page Call to Action Strip ── */}
      <section 
        style={{ 
          background: '#080607', 
          color: '#FFFFFF', 
          padding: 'clamp(3.5rem, 5vw, 4.5rem) 0',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222'
        }}
      >
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7' }}>
              TAKE ACTION
            </span>
          </div>
          
          <h2 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', 
              fontWeight: 900, 
              color: '#FFFFFF', 
              letterSpacing: '-0.03em', 
              marginBottom: '1rem' 
            }}
          >
            Ready to implement this technology in your business?
          </h2>

          <p 
            style={{ 
              color: 'rgba(255, 255, 255, 0.78)', 
              maxWidth: '620px', 
              margin: '0 auto 2.25rem', 
              fontSize: '1rem', 
              lineHeight: 1.6 
            }}
          >
            No commitment. Just a real conversation about what custom software, AI agents, and workflow automations can do for you.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                background: '#00bba7',
                color: '#080607',
                padding: '0.95rem 1.85rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(0, 187, 167, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 187, 167, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 187, 167, 0.35)';
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
                padding: '0.95rem 1.85rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 26px rgba(37, 211, 102, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(37, 211, 102, 0.35)';
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── Related Articles Grid ── */}
      <section style={{ padding: 'clamp(4rem, 6vw, 5.5rem) 0', background: '#F5F8F7' }}>
        <div className="container">
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ width: '16px', height: '2px', background: '#00bba7' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7' }}>
                  MORE PERSPECTIVES
                </span>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#080607', margin: 0 }}>
                Related Articles
              </h2>
            </div>

            <Link 
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#0f766e',
                fontWeight: 750,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <span>Explore all articles</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {relatedPosts.map(rel => (
              <div 
                key={rel.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E1E8E5',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(8,6,7,0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 187, 167, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E1E8E5';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(8,6,7,0.03)';
                }}
              >
                <div>
                  <div style={{ height: '170px', overflow: 'hidden' }}>
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ background: '#ECFDF5', color: '#047857', padding: '3px 10px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 800 }}>
                        {rel.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {rel.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#080607', lineHeight: 1.35, marginBottom: '0.65rem' }}>
                      {rel.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                      {rel.excerpt}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid #F1F5F4' }}>
                  <Link
                    to={`/blog/${rel.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#00bba7',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
