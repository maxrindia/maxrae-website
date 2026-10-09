import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot,
  Globe2,
  Smartphone,
  Workflow,
  Layers,
  Cpu,
  Users,
  TrendingUp,
  BarChart3,
  Zap,
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: "voice-agents",
      category: "ai",
      title: "Voice & AI Agents",
      subtitle: "24/7 Smart Phone Call Handling & Speech AI",
      icon: Bot,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
      description: "Intelligent voice assistants that answer incoming customer calls, make automated outbound follow-ups, and book appointments with sub-450ms natural speech in Arabic and English.",
      highlights: [
        "24/7 AI Phone Receptionist with human-like voice synthesis",
        "Automated inbound call answering & appointment scheduling",
        "Bilingual natural conversations in Arabic dialects & English",
        "Direct connection to your local phone lines (+971 / +91) and CRM"
      ],
      link: "/voice-agents",
      linkText: "Explore Voice Agents →"
    },
    {
      id: "web-development",
      category: "engineering",
      title: "Web Development",
      subtitle: "High-Performance Websites & Web Applications",
      icon: Globe2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      description: "Modern, ultra-fast websites and web applications built to showcase your brand, rank at the top of Google Search, and convert visitors into paying clients.",
      highlights: [
        "Custom business websites and responsive web portals",
        "Fast loading speed with 99/100 Lighthouse performance",
        "100% mobile-friendly across all phones, tablets, and desktops",
        "Easy-to-use content management so you can update text easily"
      ],
      link: "/contact",
      linkText: "Start Web Project →"
    },
    {
      id: "mobile-app-engineering",
      category: "engineering",
      title: "Mobile App Engineering",
      subtitle: "Native iOS & Android Mobile Applications",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      description: "Custom mobile apps designed for 60 FPS native smoothness, high user engagement, and seamless payments across both Apple iOS and Android devices.",
      highlights: [
        "Cross-platform iOS and Android apps (Flutter & React Native)",
        "Secure user logins, payment gateways, and push notifications",
        "Offline caching for fast and reliable user experiences",
        "Full App Store and Google Play publishing and ongoing support"
      ],
      link: "/contact",
      linkText: "Build Mobile App →"
    },
    {
      id: "workflow-automation",
      category: "ai",
      title: "Workflow Automation",
      subtitle: "Automated WhatsApp Bots & Cross-App Integrations",
      icon: Workflow,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      description: "Connect your everyday business tools and eliminate repetitive manual copy-pasting, invoice generation, and customer message follow-ups.",
      highlights: [
        "Official Meta WhatsApp Business API automated messaging",
        "Automated invoice generation and payment receipt dispatch",
        "Sync data automatically between WhatsApp, Google Sheets & CRM",
        "Self-healing workflow triggers using n8n and Make engines"
      ],
      link: "/contact",
      linkText: "Automate Workflows →"
    },
    {
      id: "saas-custom-architecture",
      category: "engineering",
      title: "SaaS Custom Architecture",
      subtitle: "Custom Cloud Software & Multi-Tenant Platforms",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: "Full-stack custom software engineered from scratch for startups and businesses needing specialized internal tools or subscription software products.",
      highlights: [
        "Custom client portals and multi-tenant SaaS architectures",
        "Role-based access control (RBAC) and secure user accounts",
        "Automated recurring subscription billing via Stripe and local gateways",
        "Modular, clean codebases designed to scale without technical debt"
      ],
      link: "/contact",
      linkText: "Architect SaaS Platform →"
    },
    {
      id: "cloud-devops-scaling",
      category: "cloud",
      title: "Cloud & DevOps Scaling",
      subtitle: "99.9% Uptime Cloud Servers & Database Hosting",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      description: "High-availability cloud hosting, automated database backups, and 24/7 infrastructure monitoring to ensure your digital systems never go offline.",
      highlights: [
        "AWS, Azure, and Google Cloud scalable server infrastructure",
        "Automated database backups and disaster recovery protection",
        "Zero-downtime rolling code deployments and CI/CD pipelines",
        "Bank-grade TLS 1.3 encryption and security hardening"
      ],
      link: "/contact",
      linkText: "Scale Cloud Infrastructure →"
    },
    {
      id: "crm-lead-solutions",
      category: "marketing",
      title: "CRM & Lead Solutions",
      subtitle: "Instant Under-60s Inbound Response & Sales Pipelines",
      icon: Users,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      description: "Automated speed-to-lead systems that capture inquiries from web forms, WhatsApp, and paid ads, qualify requirements, and alert your sales team within 60 seconds.",
      highlights: [
        "Sub-60-second automated response to all new web & ad leads",
        "Complete setup and custom pipelines in HubSpot, Zoho & Salesforce",
        "Automatic lead assignment to the right sales representatives",
        "Automated follow-up message sequences on WhatsApp and Email"
      ],
      link: "/contact",
      linkText: "Setup Lead Engine →"
    },
    {
      id: "digital-marketing-seo",
      category: "marketing",
      title: "Digital Marketing & SEO",
      subtitle: "Google Rankings & High-ROI Paid Ad Campaigns",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
      description: "Targeted advertising campaigns and technical SEO designed to rank your business at the top of Google and bring consistent, qualified customer inquiries.",
      highlights: [
        "Google Search, Display, and Performance Max ad management",
        "Targeted Meta (Instagram & Facebook) and LinkedIn campaigns",
        "Local and regional SEO to rank your business on Google Search",
        "High-converting landing pages built specifically to generate leads"
      ],
      link: "/contact",
      linkText: "Grow Inquiries →"
    },
    {
      id: "data-bi-analytics",
      category: "cloud",
      title: "Data & BI Analytics",
      subtitle: "Real-Time Executive Dashboards & KPI Reporting",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: "Turn messy spreadsheets and scattered business numbers into visual real-time executive dashboards so leadership can track revenue and operations clearly.",
      highlights: [
        "Custom executive dashboards tracking sales, revenue & conversion",
        "Automated weekly and monthly report generation sent to your email",
        "Centralized business metrics with zero manual spreadsheet work",
        "Visual charts and KPI tracking for sales teams and directors"
      ],
      link: "/contact",
      linkText: "Build Analytics Dashboard →"
    },
    {
      id: "digital-transformation",
      category: "engineering",
      title: "Digital Transformation",
      subtitle: "Modernizing Legacy Operations & Digital Workflows",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      description: "Replacing outdated manual paperwork, messy spreadsheets, and legacy tools with unified digital systems that cut operational overhead and speed up work.",
      highlights: [
        "Full workflow audit and practical technology roadmap",
        "Replacing manual paper forms with fast cloud-based digital intake",
        "Team onboarding and practical hands-on software training",
        "Measurable reduction in operational hours spent on manual tasks"
      ],
      link: "/contact",
      linkText: "Start Digital Roadmap →"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Services (10)' },
    { key: 'ai', label: 'AI & Automation' },
    { key: 'engineering', label: 'Web & Software Engineering' },
    { key: 'marketing', label: 'Marketing & CRM' },
    { key: 'cloud', label: 'Cloud & Data' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="services-page" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 3.5rem)' }}>
          <h1 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em', 
              lineHeight: 1.15, 
              marginTop: 0, 
              marginBottom: '1rem' 
            }}
          >
            What We Do
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.15rem)', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Practical technology, AI automation, and digital solutions designed to help your business operate smoother, save time, and grow faster.
          </p>
        </div>

        {/* ── CATEGORY FILTER TABS ── */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            paddingBottom: '0.75rem', 
            marginBottom: '3rem',
            scrollbarWidth: 'none',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '8px 18px',
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
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── 10 AUDIENCE-FRIENDLY SERVICE CARDS ── */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {filteredServices.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                id={item.id}
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '16px', 
                  border: '1px solid #E2E8F0', 
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(8, 6, 7, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 187, 167, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(8, 6, 7, 0.03)';
                }}
              >
                {/* Visual Header Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', background: '#080607' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,6,7,0.1) 0%, rgba(8,6,7,0.72) 100%)' }} />

                  {/* Icon & Subtitle on Image */}
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#080607', border: '1.5px solid #54CFB0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={20} color="#54CFB0" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#54CFB0', display: 'block' }}>
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h2 
                      style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: 800, 
                        color: '#080607', 
                        margin: '0 0 0.65rem 0',
                        letterSpacing: '-0.02em',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}
                    >
                      {item.title}
                    </h2>

                    <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, margin: '0 0 1.25rem 0' }}>
                      {item.description}
                    </p>

                    {/* What We Deliver Bullets */}
                    <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.15rem 1.25rem', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#080607', display: 'block', marginBottom: '0.65rem' }}>
                        What We Deliver:
                      </span>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.45 }}>
                            <CheckCircle2 size={15} color="#00bba7" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                    <Link 
                      to={item.link}
                      className="btn-primary"
                      style={{ 
                        background: '#080607', 
                        color: '#FFFFFF', 
                        fontWeight: 700, 
                        padding: '0.65rem 1.25rem', 
                        fontSize: '0.85rem',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                        flex: 1,
                        justifyContent: 'center',
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
                      <span>{item.linkText}</span>
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
                        padding: '0.65rem 1rem', 
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── SIMPLE CLOSING CTA ── */}
        <div 
          style={{ 
            background: 'linear-gradient(145deg, #080607 0%, #0d1a16 100%)', 
            borderRadius: '20px', 
            padding: 'clamp(2.5rem, 5vw, 3.5rem) 2rem', 
            border: '1px solid rgba(84, 207, 176, 0.35)', 
            boxShadow: '0 16px 40px rgba(8, 6, 7, 0.25)', 
            textAlign: 'center',
            color: '#FFFFFF',
            maxWidth: '820px',
            margin: '0 auto'
          }}
        >
          <h2 
            style={{ 
              fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', 
              fontWeight: 800, 
              color: '#FFFFFF', 
              margin: '0 0 0.75rem 0', 
              letterSpacing: '-0.025em',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Not Sure Which Solution Fits Your Business?
          </h2>

          <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, margin: '0 0 1.75rem 0', maxWidth: '580px', marginInline: 'auto' }}>
            Tell us about your day-to-day workflow or growth goals, and we'll show you the simplest, most effective way to solve it.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact"
              className="btn-primary"
              style={{ 
                background: '#54CFB0', 
                color: '#080607', 
                fontWeight: 800, 
                padding: '0.75rem 1.75rem', 
                fontSize: '0.9rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <span>Contact Our Team</span>
              <ArrowRight size={15} />
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
                padding: '0.75rem 1.5rem', 
                fontSize: '0.9rem',
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
