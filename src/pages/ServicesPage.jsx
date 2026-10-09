import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot,
  Smartphone,
  Workflow,
  Cpu,
  TrendingUp,
  ShoppingCart,
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Award,
  Layers,
  Terminal,
  ExternalLink,
  PhoneCall,
  Activity,
  Database,
  Globe2,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const stats = [
    { value: "< 450ms", label: "AI Voice Latency", sub: "Ultra-fast bilingual speech pipeline", tag: "Real-Time" },
    { value: "99.9%", label: "Uptime Availability", sub: "Bank-grade enterprise cloud SLA", tag: "Guaranteed" },
    { value: "< 7 Days", label: "Sprint Deployment", sub: "From architecture to production release", tag: "Rapid Velocity" },
    { value: "5× ROI", label: "Target Client Leverage", sub: "Deterministic operational ROI", tag: "Outcome First" }
  ];

  const services = [
    {
      id: "ai-automation",
      category: "ai",
      title: "AI Voice Agents & WhatsApp Automation",
      subtitle: "Autonomous Inbound/Outbound Telephony & Conversational CRM Bots",
      badge: "CORE AUTOMATION",
      badgeColor: "#00bba7",
      metricPill: "⚡ Sub-450ms Voice Latency",
      icon: Bot,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
      description: "Replace repetitive manual follow-ups with 24/7 autonomous voice and WhatsApp assistants. Engineered for the GCC and international markets with natural Arabic and English voice synthesis, sub-450ms response latency, and direct bi-directional CRM booking synchronization.",
      deliverables: [
        "Inbound & outbound voice agents trained on your specific service catalog",
        "Official Meta WhatsApp Business API integration with automated workflows",
        "Direct calendar slot reservation & instant SMS/Email confirmation dispatch",
        "Two-way bi-directional synchronization with HubSpot, Salesforce & Zoho",
        "HIPAA & enterprise privacy compliance with zero data retention option"
      ],
      techStack: ["WebRTC Streaming", "Meta WhatsApp API", "Twilio / SIP", "HubSpot / Zoho", "OpenAI / Anthropic"],
      outcome: "Zero missed inquiries · 70% reduction in appointment no-shows · Live in < 7 days"
    },
    {
      id: "web-mobile-apps",
      category: "apps",
      title: "Web & Mobile Application Engineering",
      subtitle: "Native iOS, Android, Next.js & Full-Stack Cloud Platforms",
      badge: "CROSS-PLATFORM APPS",
      badgeColor: "#3b82f6",
      metricPill: "📱 60 FPS Native Smoothness",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
      description: "From high-conversion consumer mobile applications to complex internal enterprise web portals, we architect digital products built for lightning-fast speeds, offline capabilities, and frictionless user experiences that maximize customer retention.",
      deliverables: [
        "Native & cross-platform iOS and Android mobile apps using Flutter and React Native",
        "Enterprise Next.js and React web applications with Server-Side Rendering (SSR)",
        "Progressive Web Apps (PWAs) with background offline sync and push notifications",
        "Comprehensive Figma UI/UX design systems and conversion-focused wireframing",
        "Scalable RESTful & GraphQL API microservices with sub-5ms query optimization"
      ],
      techStack: ["React / Next.js", "Flutter", "React Native", "Node.js / Express", "PostgreSQL / Redis"],
      outcome: "99/100 Lighthouse performance · Sub-second page loads · 60 FPS native interaction"
    },
    {
      id: "crm-lead-solutions",
      category: "crm",
      title: "CRM & Automated Lead Routing Engines",
      subtitle: "Instant Multi-Channel Intake, AI Qualification & Pipeline Automation",
      badge: "SALES VELOCITY",
      badgeColor: "#8b5cf6",
      metricPill: "🚀 Sub-60s Lead Response",
      icon: Workflow,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      description: "Stop bleeding ad spend to slow manual responses. MaxR builds automated speed-to-lead pipelines that capture inquiries from web forms, WhatsApp, and paid campaigns, qualify intent and budget instantly, and route pre-vetted leads to your top sales executives within 60 seconds.",
      deliverables: [
        "Sub-60-second automated response loops for all web, social, and ad inquiries",
        "AI-powered prospect qualification scoring by intent, budget, and timeline",
        "Automated round-robin distribution to specialized account executives",
        "Automated multi-channel nurturing drip funnels across WhatsApp, Email & SMS",
        "Real-time pipeline analytics and C-suite conversion telemetry dashboards"
      ],
      techStack: ["HubSpot Enterprise", "Salesforce", "Zoho CRM", "n8n / Make", "Webhook Webhooks"],
      outcome: "Average lead response under 45 seconds · +340% increase in booked sales calls"
    },
    {
      id: "cloud-saas-architecture",
      category: "cloud",
      title: "Enterprise Cloud & SaaS Architecture",
      subtitle: "High-Availability Multi-Tenant Systems, Microservices & CI/CD",
      badge: "ENTERPRISE CLOUD",
      badgeColor: "#059669",
      metricPill: "☁️ 99.99% Availability SLA",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      description: "When off-the-shelf software cannot meet your operational scale, we engineer custom SaaS platforms and dedicated cloud infrastructure. We implement secure multi-tenant architectures, database clustering, and automated CI/CD pipelines without costly vendor lock-in.",
      deliverables: [
        "Custom SaaS product architecture engineered from initial MVP to enterprise scale",
        "Docker containerization, Kubernetes orchestration, and serverless compute",
        "Zero-downtime rolling deployment pipelines with automated regression testing",
        "Database clustering, read-replica scaling, and high-throughput Redis caching",
        "Enterprise security hardening, role-based access control (RBAC), and encryption"
      ],
      techStack: ["AWS / Azure / GCP", "Docker / K8s", "PostgreSQL", "Redis Caching", "Terraform / CI/CD"],
      outcome: "99.99% uptime availability · 12ms average API latency · Zero vendor lock-in"
    },
    {
      id: "digital-marketing-seo",
      category: "growth",
      title: "Digital Marketing, SEO & Performance Growth",
      subtitle: "High-Intent Search Authority, Paid Acquisition Funnels & CRO",
      badge: "REVENUE GROWTH",
      badgeColor: "#f59e0b",
      metricPill: "📈 4.8× Average Ad ROAS",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
      description: "We merge software engineering rigor with commercial marketing strategy. MaxR optimizes technical core web vitals for search dominance, builds high-converting landing pages, and runs ROI-focused performance campaigns across Google Search, Meta, and LinkedIn.",
      deliverables: [
        "Technical SEO optimization, schema markup architecture, and search dominance",
        "High-conversion Landing Page optimization (CRO) with A/B split testing",
        "Precision Google Search, Display, and Performance Max campaign management",
        "Targeted Meta & LinkedIn B2B/B2C client acquisition funnels",
        "Multi-touch attribution reporting and executive ROI revenue dashboards"
      ],
      techStack: ["Google Ads / PMax", "Meta Ads Manager", "Google Analytics 4", "Semrush / Ahrefs", "HubSpot Ads"],
      outcome: "#1 organic rankings in competitive UAE niches · 4.8× average verified ROAS"
    },
    {
      id: "headless-ecommerce",
      category: "commerce",
      title: "Headless E-Commerce & Retail Platforms",
      subtitle: "Next-Gen Shopify Plus, Sub-Second Checkout & ERP Inventory Sync",
      badge: "MODERN COMMERCE",
      badgeColor: "#ec4899",
      metricPill: "🛒 280ms Checkout Latency",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      description: "Transform sluggish e-commerce stores into blazing-fast headless digital commerce platforms. We build decoupled storefronts powered by Shopify Plus, Medusa, and custom microservices with automated ERP inventory synchronization across GCC and international fulfillment hubs.",
      deliverables: [
        "Headless e-commerce web storefronts with sub-second page transitions",
        "Native integration with localized GCC payment gateways (Apple Pay, Tabby, Tamara)",
        "Real-time ERP warehouse inventory synchronization and automated dispatching",
        "Checkout friction reduction algorithms designed to cut cart abandonment by 40%",
        "Lightweight AI product recommendation engines that increase average order value"
      ],
      techStack: ["Shopify Plus", "Next.js Commerce", "Stripe / Tabby / Tamara", "Medusa.js", "Custom ERP Sync"],
      outcome: "280ms checkout latency · +48% mobile checkout conversion lift"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Solutions (6)' },
    { id: 'ai', label: 'AI & Voice Agents' },
    { id: 'apps', label: 'App Development' },
    { id: 'crm', label: 'CRM & Lead Engines' },
    { id: 'cloud', label: 'Cloud & SaaS' },
    { id: 'growth', label: 'Marketing & SEO' },
    { id: 'commerce', label: 'Headless E-Commerce' }
  ];

  return (
    <div className="services-page" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* ── 1. HERO SECTION ── */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="about-hero-badge">
            <span className="about-pulse-dot" />
            <span>Enterprise Engineering & Automation Solutions</span>
          </div>

          <h1 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em', 
              lineHeight: 1.12, 
              marginTop: 0, 
              marginBottom: '1.25rem' 
            }}
          >
            End-to-End Technology Architecture.<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Engineered for Real Business Impact.
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.18rem)', color: '#3F5565', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
            From autonomous AI voice agents and custom enterprise platforms to automated lead routing and high-performance cloud systems, MaxR builds digital infrastructure that delivers measurable operational leverage.
          </p>
        </div>

        {/* ── 2. STRATEGIC METRICS STRIP ── */}
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

        {/* ── 3. SERVICE FILTER PILLS ── */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            paddingBottom: '1rem', 
            marginBottom: '3rem',
            scrollbarWidth: 'none',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap'
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 800 : 600,
                  border: isActive ? '1.5px solid #00bba7' : '1px solid #E2E8F0',
                  background: isActive ? '#080607' : '#FFFFFF',
                  color: isActive ? '#54CFB0' : '#475569',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(0, 187, 167, 0.2)' : '0 1px 4px rgba(8,6,7,0.03)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#00bba7';
                    e.currentTarget.style.color = '#008779';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── 4. THE 6 ENTERPRISE SERVICE CARDS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', marginBottom: '4.5rem' }}>
          {filteredServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div 
                key={service.id} 
                id={service.id}
                className="service-card-premium"
              >
                {/* Visual Header Image Banner */}
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '220px', 
                    overflow: 'hidden',
                    background: '#080607'
                  }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-img-zoom"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(180deg, rgba(8,6,7,0.15) 0%, rgba(8,6,7,0.7) 65%, rgba(8,6,7,0.95) 100%)',
                      zIndex: 1
                    }} 
                  />

                  {/* Overlaid Badges and Icon */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      zIndex: 2, 
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span 
                        style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 800, 
                          color: '#FFFFFF', 
                          background: 'rgba(255,255,255,0.18)',
                          backdropFilter: 'blur(8px)',
                          padding: '4px 10px', 
                          borderRadius: '6px',
                          border: '1px solid rgba(255,255,255,0.25)',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {service.badge}
                      </span>

                      <span 
                        style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 800, 
                          color: '#080607', 
                          background: '#54CFB0', 
                          padding: '4px 10px', 
                          borderRadius: '999px',
                          boxShadow: '0 2px 8px rgba(84,207,176,0.4)'
                        }}
                      >
                        {service.metricPill}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div 
                        style={{ 
                          width: '42px', 
                          height: '42px', 
                          borderRadius: '10px', 
                          background: '#080607', 
                          border: '1.5px solid #54CFB0',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                        }}
                      >
                        <IconComp size={22} color="#54CFB0" />
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 750, color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h2 
                      style={{ 
                        fontSize: '1.45rem', 
                        fontWeight: 900, 
                        color: '#080607', 
                        margin: '0 0 0.85rem 0',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.25,
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}
                    >
                      {service.title}
                    </h2>

                    <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65, margin: '0 0 1.5rem 0' }}>
                      {service.description}
                    </p>

                    {/* Key Deliverables Checkmarks */}
                    <div style={{ background: '#FAFBFB', borderRadius: '12px', padding: '1.25rem', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#080607', display: 'block', marginBottom: '0.75rem' }}>
                        Architectural Deliverables:
                      </span>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.45 }}>
                            <CheckCircle2 size={15} color="#00bba7" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Ecosystem Chips */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 750, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.6rem' }}>
                        Supported Tech Stack:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {service.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="service-tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outcome Pill & Action Trigger */}
                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', background: '#ECFDF5', padding: '8px 12px', borderRadius: '8px', border: '1px solid #A7F3D0' }}>
                      <Award size={15} color="#059669" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#065f46' }}>
                        {service.outcome}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <Link 
                        to="/contact"
                        className="btn-primary"
                        style={{ 
                          background: '#080607', 
                          color: '#FFFFFF', 
                          fontWeight: 750, 
                          padding: '0.7rem 1.4rem', 
                          fontSize: '0.85rem',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          textDecoration: 'none',
                          flex: 1,
                          justifyContent: 'center',
                          boxShadow: '0 4px 14px rgba(8, 6, 7, 0.15)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#00bba7';
                          e.currentTarget.style.color = '#080607';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#080607';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                      >
                        <span>Request Service Scope</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a 
                        href="https://wa.me/97145648887"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          background: '#FFFFFF', 
                          border: '1.5px solid #25D366', 
                          color: '#080607', 
                          fontWeight: 700, 
                          padding: '0.7rem 1rem', 
                          fontSize: '0.85rem',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#25D366';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#FFFFFF';
                          e.currentTarget.style.color = '#080607';
                        }}
                        title="Chat on WhatsApp"
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── 5. THE 4-PHASE RAPID DELIVERY SPRINT FRAMEWORK ── */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '20px', 
            border: '1.5px solid #E2E8F0', 
            padding: 'clamp(2.5rem, 4.5vw, 3.5rem)', 
            boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)',
            marginBottom: '4.5rem'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#008779', display: 'block', marginBottom: '0.5rem' }}>
              AGILE DEPLOYMENT LIFECYCLE
            </span>
            <h2 
              style={{ 
                fontSize: 'clamp(1.85rem, 2.8vw, 2.4rem)', 
                fontWeight: 900, 
                color: '#080607', 
                margin: 0,
                letterSpacing: '-0.03em',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              From Scoping to Production in Days.
            </h2>
            <p style={{ color: '#475569', fontSize: '0.975rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
              No bureaucratic delays or multi-month scoping cycles. Our proven agile delivery frameworks get production systems live in four disciplined steps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                step: "01",
                title: "Architectural Audit",
                timeline: "Day 1 – 2",
                desc: "We analyze your tech stack, map manual bottlenecks, identify API integrations, and finalize target deliverables."
              },
              {
                step: "02",
                title: "Sprint Engineering",
                timeline: "Day 3 – 5",
                desc: "Our senior engineers build the automations, write clean modular microservices, and train custom voice/chat models."
              },
              {
                step: "03",
                title: "Testing & Security",
                timeline: "Day 6",
                desc: "Rigorous load testing, sub-500ms latency verification, webhook failure fallbacks, and TLS 1.3 data security hardening."
              },
              {
                step: "04",
                title: "Live Production SLA",
                timeline: "Day 7+",
                desc: "Seamless rollout with 99.9% uptime monitoring, real-time telemetry dashboards, and ongoing optimization support."
              }
            ].map((st, sIdx) => (
              <div 
                key={sIdx}
                style={{ 
                  background: '#F8FAFC', 
                  borderRadius: '14px', 
                  padding: '1.75rem 1.5rem', 
                  border: '1px solid #E2E8F0',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div 
                    style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '50%', 
                      border: '2px solid #54CFB0', 
                      background: '#FFFFFF', 
                      color: '#080607', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '0.95rem',
                      fontWeight: 900,
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                  >
                    {st.step}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#008779', background: 'rgba(0,187,167,0.1)', padding: '3px 8px', borderRadius: '4px' }}>
                    {st.timeline}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#080607', margin: '0 0 0.5rem 0', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {st.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.55, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. ENTERPRISE CLOSING CTA ── */}
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
              BESPOKE ARCHITECTURAL DELIVERY
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
              Have a Custom Technical Requirement? <br />
              <span style={{ color: '#54CFB0' }}>Let's Build It Right.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '2.25rem' }}>
              Speak directly with our senior solutions architects in Dubai and Chennai. We will review your current systems, evaluate ROI opportunities, and deliver an actionable technical roadmap.
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
